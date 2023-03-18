import React from "react";
import {Link} from 'react-router-dom'
import './Signup.css'


function Signup(){

return(
    <div className="login">
   
   <form className="loginForm">
     <h2>Login</h2>
     
    <label htmlFor="username" className="username">Username:</label><input type="text" placeholder="Enter Your Username" name="username"/>
    <label htmlFor="password">Password:</label><input type="password" placeholder="Enter Your Password" name="password" />
    <button>Login</button>
    <h4> <Link >Forgot Password?</Link></h4>
    
    <h4><Link exact to="/signup/register">Create Account</Link></h4>
        

    
   </form>
   
 
   </div>
 

)
}

export default Signup