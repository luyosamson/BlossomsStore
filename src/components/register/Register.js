import React from 'react'
import './Register.css'

function Register() {
  return (
    <div>
        
        <form className='register'>
            <h3>Create Account</h3>
            <label className='fullName'>Enter Full Name</label><input type="text" placeholder='Enter Fullname'/>
            <label>Email</label><input type='email' placeholder='Enter Email'/>
            <label>Username</label><input type='username' placeholder='Enter Username'/>
            <label>Password</label><input type='password' placeholder='Enter password' />
            <label>Confirm password</label><input type='password' placeholder='Confirm password' />
            <button className='reButton'>REGISTER</button>
        </form>


    </div>
  )
}

export default Register