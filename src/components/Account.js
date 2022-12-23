import React from "react";


function Account(){

return(
    <div className="loginform">
    <h4>Log In</h4>
   <form>

    <label htmlFor="username">Username:</label><input type="text" placeholder="Enter Your Username" name="username"/>
    <label htmlFor="password">Password:</label><input type="password" placeholder="Enter Your Password" name="password" />
    <h4>Forgot Password?</h4>
    
   </form>
   </div>
)
}

export default Account