import React, { useReducer, createContext } from "react";
import reducer from "./reducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  HIDE_ALERT,
  ADVANCE_TOTAL_VALUE,
  GROUP_TOTAL_VALUE,
  TOTAL_COST_VALUE,
  ADVANCE_PRICE_INPUT_VALUE,
  GROUP_PRICE_INPUT_VALUE,
  INCREMENT_ADVANCE_VALUE,
  DECREMENT_ADVANCE_VALUE,
  INCREMENT_GROUP_VALUE,
  DECREMENT_GROUP_VALUE,
  SELECTED_TICKETS,
  HIDE_PAYMENT_PAGE,
  DISPLAY_PROCESSING_FEE,
  HIDE_PROCESSING_FEE,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  EMPTY_VALUES_ALERT,                                                                                    
  ONE_TICKET_ALERT,
  REGISTER_ALERT,
  LOGIN_ALERT,
} from "./action";


const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

export const PriceContext = createContext();

const initialState = {
  advance: 1000,
  group: 4500,
  advanceTotal: 0,
  groupTotal: 0,
  totalCost: 0,
  masterCard: false,
  ProcessingFee: 0,
  advancePriceInput: 0,
  groupPriceInput: 0,
  ticketToPay: [],
  isLoading: false,
  showAlert: false,
  toggleNavigate: false,
  alertType: "",
  alertText: "",
  user: user ? JSON.parse(user) : null,
  token: token,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: HIDE_ALERT }); 
    },3000)
  };
  const emptyValuesAlert = () => {
    dispatch({ type: EMPTY_VALUES_ALERT });
      clearAlert();
   
  };
  const oneTicketAlert = () => {
    dispatch({ type: ONE_TICKET_ALERT });
    clearAlert();
  };
  const registerAlert = () => {
    dispatch({ type: REGISTER_ALERT });
      clearAlert();
  };
 
  const loginAlert = () => {
    dispatch({ type: LOGIN_ALERT });
    setTimeout(() => {
      clearAlert();
    }, 1000);
  };

  const calcAdvanceTotal = () => {
    dispatch({
      type: ADVANCE_TOTAL_VALUE,
      payload: state.advance * state.advancePriceInput,
    });
  };
  const calcGroupTotal = () => {
    dispatch({
      type: GROUP_TOTAL_VALUE,
      payload: state.group * state.groupPriceInput,
    });
  };
  const calcTotalCost = () => {
    dispatch({
      type: TOTAL_COST_VALUE,
      payload: state.advanceTotal + state.groupTotal,
    });
  };
  const getAdvancePriceInputValue = (e) => {
    dispatch({
      type: ADVANCE_PRICE_INPUT_VALUE,
      payload: e.target.value,
    });
  };
  const getGroupPriceInputValue = (e) => {
    dispatch({ type: GROUP_PRICE_INPUT_VALUE, payload: e.target.value });
  };
  const incrementAdvanceInput = () => {
    let increment = parseInt(state.advancePriceInput) + 1;
    dispatch({
      type: INCREMENT_ADVANCE_VALUE,
      payload: increment,
    });
  };
  const decrementAdvanceInput = () => {
    dispatch({
      type: DECREMENT_ADVANCE_VALUE,
      payload:
        state.advancePriceInput > 0 ? parseInt(state.advancePriceInput) - 1 : 0,
    });
  };
  const incrementGroupPrice = () => {
    dispatch({
      type: INCREMENT_GROUP_VALUE,
      payload: parseInt(state.groupPriceInput) + 1,
    });
  };
  const decrementGroupPrice = () => {
    dispatch({
      type: DECREMENT_GROUP_VALUE,
      payload:
        state.groupPriceInput > 0 ? parseInt(state.groupPriceInput) - 1 : 0,
    });
  };
  const handlebtnPay = () => {
    if (state.advancePriceInput) {
      const selectedTicket = {
        name: "advance",
        cost: 1000,
        quantity: state.advancePriceInput,
        subTotal: state.advancePriceInput * 1000,
      };
      dispatch({ type: SELECTED_TICKETS, payload: selectedTicket });
    } else if (state.groupPriceInput) {
      const selectedTicket = {
        name: "Group of 5",
        cost: 4500,
        quantity: state.groupPriceInput,
        subTotal: state.groupPriceInput * 4500,
      };
      dispatch({ type: SELECTED_TICKETS, payload: selectedTicket });
    } else {
      oneTicketAlert();
    }
  };
  const hidePaymentPage = () => {
    dispatch({ type: HIDE_PAYMENT_PAGE });
  };
  const displayProcessingFee = () => {
    let fee = Math.round(0.035 * state.totalCost);
    dispatch({ type: DISPLAY_PROCESSING_FEE, payload: fee });
  };
  const hideProcessingFee = () => {
    let fee = 0;
    dispatch({ type: HIDE_PROCESSING_FEE, payload: fee });
  };

  const addToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };
  const removeFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      const { user, token } = response.data;
      dispatch({ type: REGISTER_USER_SUCCESS, payload: { user, token } });
      addToLocalStorage({ user, token });
      registerAlert();
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const response = await axios.post("/api/v1/auth/login", currentUser);
      const { user, token } = response.data;
      dispatch({ type: LOGIN_USER_SUCCESS, payload: { user, token } });
      addToLocalStorage({ user, token });
      loginAlert();
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
     clearAlert();
  };

  const logOutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeFromLocalStorage();
    navigate("/landing");
  };

  return (
    <PriceContext.Provider
      value={{
        ...state,
        clearAlert,
        calcAdvanceTotal,
        calcGroupTotal,
        calcTotalCost,
        getAdvancePriceInputValue,
        incrementAdvanceInput,
        decrementAdvanceInput,
        getGroupPriceInputValue,
        incrementGroupPrice,
        decrementGroupPrice,
        handlebtnPay,
        hidePaymentPage,
        displayProcessingFee,
        hideProcessingFee,
        registerUser,
        loginUser,
        logOutUser,
        emptyValuesAlert,
        oneTicketAlert,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
};

export { AppProvider, initialState };