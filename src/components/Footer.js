import React from "react";

function Footer() {
  return (
  <div className="footer">

    <form className="footerForm">
    <label className="labell" htmlFor="email-notification">Subscribe to our newslater:
   <input className="email"   type="email" name="email" placeholder="Enter your email address"/>
    
    <button className="submitt"   type="submit">Submit</button></label>
    </form>
    <hr></hr>
    <div className="footerInfo">
    <h3>Contact</h3>
    <h3>Information</h3>
    <h3>Extra</h3>
    <h3>My Account</h3>
    </div>


  </div>
  );
}

export default Footer;