import React, { useContext } from 'react'
import Logo from './Logo';
import eventlogo from "../assets/image/event.png" 
import { PriceContext } from '../contexts/appContext';
import {FaAngleRight,} from 'react-icons/fa'
import { FiLogOut } from "react-icons/fi"

const Navbar = () => {
  const {logOutUser,user} = useContext(PriceContext)
  return (
    <nav className="navbar">
      <div>
        <Logo />
      </div>
      <div className="event-div">
        <button className="event-btn">
          <img className="event-icon" src={eventlogo} alt="" />
          <p>events</p>
        </button>
      </div>
      <div>
        <button class="login-btn">
          {`Hi ${user? user.userName : 'Friend'} | Log out `} 
          <FiLogOut onClick={()=>logOutUser()} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;