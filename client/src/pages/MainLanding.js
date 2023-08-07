import React from 'react'
import Logo from '../components/Logo';
import landing_img from '../assets/image/landing_img.svg' 
import {Link} from 'react-router-dom'

const MainLanding = () => {
    return (
      <>
        <div className="container">
          <Logo />
          <main className="main-landing-main">
            <div className="main-landing-text">
              <h1>
                Get Ready to <span className="redText"> Experience </span> the
                Ultimate Ticketing Platform!
              </h1>
              <p>
                Welcome to TicketZone - Your Gateway to Memorable Experiences!
                Discover a world of entertainment and adventure at your
                fingertips. TicketZone is your one-stop destination for securing
                the hottest event tickets, whether it's concerts, sporting
                events, theater performances, or exclusive experiences you seek.
                With our user-friendly interface and lightning-fast booking
                system, you can effortlessly browse, choose, and secure your
                tickets in just a few clicks.
              </p>
              <Link to='/register'>
                <button className="register-btn">Register/Login</button>
              </Link>
            </div>
            <div>
              <img className="mainlanding-img" src={landing_img} alt="" />
            </div>
          </main>
        </div>
      </>
    );
}

export default MainLanding;