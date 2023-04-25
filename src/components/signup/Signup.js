import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Signup.css";

function Signup({ onAddUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSeller, setIsSeller] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage("Username or Password is blank");
      return;
    }

    let endpoint = "/login";
    if (isSeller) {
      endpoint = "/loginseller";
    }

    const payload = { username, password };
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setErrorMessage(data.error);
        } else {
          console.log('Success:', data);
          setUsername("");
          setPassword("");
          setIsSeller(false);
          setErrorMessage("");
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("Something went wrong. Please try again later.");
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleCheckboxChange = () => {
    setIsSeller(!isSeller);
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleFormSubmit}>
        <h2>Login</h2>

        <label htmlFor="username" className="username">
          Username:
        </label>
        <input
          type="text"
          placeholder="Enter Your Username"
          name="username"
          value={username}
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />

        <div className="checkbox-container">
          <label className="checkbox-label" htmlFor="seller">
            Login as a seller:
          </label>
          <input
            className="checkbox-input"
            type="checkbox"
            name="seller"
            id="seller"
            checked={isSeller}
            onChange={handleCheckboxChange}
          />
        </div>

        <button type="submit">Login</button>

        

        <h4>
          <Link>Forgot Password?</Link>
        </h4>

        <h4>
          Create Account?
          <p>
            <Link exact to="/signup/register">
              As A Buyer
            </Link>
          </p>
          <Link exact to="/signup/selleraccount">
            As A Seller
          </Link>
        </h4>
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default Signup;

