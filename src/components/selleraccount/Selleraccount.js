
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../register/Register.css';

function Selleraccount() {
  const [name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [storeName, setStoreName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === '' || email.trim() === '' || username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setErrorMessage('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    const userData = { name, email,storeName,username, password };
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setFullName('');
      setEmail('');
      setStoreName('');
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setErrorMessage('');
      navigate('/')
    })
    .catch((error) => {
      console.error('Error:', error);
      setErrorMessage('Something went wrong. Please try again later.');
    });
  };

  return (
    <div className='register-container'>
      <form className='register' onSubmit={handleSubmit}>
        <h3>Create Account As A Seller</h3>
        <label className='fullName'>Enter Full Name</label>
        <input type='text' placeholder='Enter Fullname' value={name} onChange={(event) => setFullName(event.target.value)} />
        <label>Email</label>
        <input type='email' placeholder='Enter Email' value={email} onChange={(event) => setEmail(event.target.value)} />
        <label>Username</label>
        <input type='text' placeholder='Enter Username' value={username} onChange={(event) => setUsername(event.target.value)} />
        <label>Store Name</label>
        <input type='text' placeholder='Enter Store Name' value={storeName} onChange={(event) => setStoreName(event.target.value)} />
        <label>Password</label>
        <input type='password' placeholder='Enter password' value={password} onChange={(event) => setPassword(event.target.value)} />
        <label>Confirm password</label>
        <input type='password' placeholder='Confirm password' value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        {errorMessage && <div className='error'>{errorMessage}</div>}
        <button className='reButton'>REGISTER</button>
      </form>
    </div>
  );
}

export default Selleraccount;