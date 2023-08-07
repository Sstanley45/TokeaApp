import React from 'react'
import Logo from './Logo';
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <section>
        <Logo />
        <p>&#169; 2023. TOKEA!</p>
        <p>All Rights Reserved</p>
      </section>
      <section>
        <h2>Links</h2>
        <ul className='footer-links'> 
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & Policy</a>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>
        </ul>
      </section>
      <section>
        <h3>Connect With Us</h3>
        <div className='socialicons-div'>
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </section>
      <section>
        <h1>Contact Us</h1>
        <p>inside Wonderjoy Ridgeways gardens</p>
        <p>P.O Box 2013-00900 Kiambu</p>
        <p>Telephone : 0712345678</p>
        <p>Email: info@luckyDev.com</p>
      </section>
    </div>
  );
}

export default Footer