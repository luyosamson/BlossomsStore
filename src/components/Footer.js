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
    <h3 className="contact">Contact</h3>
    <h3 className="information">Information</h3>
    <h3 className="extra">Extra</h3>
    <h3 className="account">My Account</h3>
    </div>


  </div>
  );
}

export default Footer;