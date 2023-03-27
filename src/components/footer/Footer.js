import React from "react";
import {Link} from "react-router-dom"
import {AiFillFacebook,AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <form className="footerForm">
        <label className="labell" htmlFor="email-notification">
          Subscribe to our newsletter:
          <input className="email" type="email" name="email" placeholder="Enter your email address"/>
          <button className="submitt" type="submit">Subscribe</button>
        </label>
      </form>
      <hr></hr>
      <div className="footerInfo">
        <div className="contact">
          <h3>Contact</h3>
          <ul>
            <li><a href="tel:1234567890">123-456-7890</a></li>
            <li><a href="mailto:info@example.com">luyosamson021@gmail.com</a></li>
          </ul>
        </div>
        <div className="information">
          <h3>Information</h3>
          <ul>
            <li><Link to="Aboutus">About Us</Link></li>
            <li><a href="https://en.wikipedia.org/wiki/Information_privacy" target="_blank" rel="noreferrer">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
          </ul>
        </div>

          <div className="my-account">
          <h3>My Account</h3>
          <ul>
            <li><Link to="/signup">Login</Link></li>
            <li><Link to="/signup/register">Register</Link></li>
            <li><Link to="cart">My Orders</Link></li>
            <li><Link to="/signup/register">My Profile</Link></li>
          </ul>
        </div>
        <div className="social-media">
          <h3>Follow Us On</h3>
          <div className="socialMedia">
           <a href="https://twitter.com" target="_blank" rel="noreferrer" ><BsTwitter size={30} color="blue"/></a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" ><AiFillFacebook size={30} color="blue"/></a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" ><AiFillInstagram size={30} color="blue"/></a>
            <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" ><FaTiktok size={30} color="blue"/></a>

          </div>
        </div>
      
      </div>
      <p className="copyright">Copyright &copy; 2023 Blossoms Market Place Limited. All rights reserved.</p>
    </div>
  );
}

export default Footer;
