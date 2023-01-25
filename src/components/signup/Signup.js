import React,{NavLink} from "react";
import Register from "../register/Register";
import './Signup.css'


function Signup(){

return(
    <div className="login">
   
   <form className="loginForm">
     <h2>Login</h2>
     
    <label htmlFor="username" className="username">Username:</label><input type="text" placeholder="Enter Your Username" name="username"/>
    <label htmlFor="password">Password:</label><input type="password" placeholder="Enter Your Password" name="password" />
    <button>Login</button>
    <h4>Forgot Password?</h4>

    
   </form>
   
  <Register />
   </div>
 

)
}

export default Signup