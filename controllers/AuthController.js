import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import { BadRequestError, UnAuthenticatedError } from "../Errors/index.js";

const register = async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    throw new BadRequestError("please provide all credentials");
  }
  const userAlreadyExists = await User.findOne({ userName });
  if (userAlreadyExists) {
    throw new BadRequestError("User already exists!");
  }
  const user = await User.create({ userName, password });
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({ user: { userName: user.userName }, token });
};

const login = async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    throw new BadRequestError("please provide all credentials");
  }
  const user = await User.findOne({ userName }).select("+password");
  if (!user) {
    throw new UnAuthenticatedError("invalid credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password); 
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("wrong password");
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token });
};

export { register, login };
