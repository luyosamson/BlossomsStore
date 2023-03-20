import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup({onAddUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage("Username or password is blank");
      return;
    }
    const payload = { username, password };
    fetch("http://localhost:6001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        onAddUser(data);
        setUsername("");
        setPassword("");
        setSubmitted(true);
        setErrorMessage("");
      })
      .catch((error) => console.log(error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
      if (value.trim() !== "" && password.trim() !== "") {
        setErrorMessage("");
      }
    } else if (name === "password") {
      setPassword(value);
      if (value.trim() !== "" && username.trim() !== "") {
        setErrorMessage("");
      }
    }
  };

  return (
    <div className="login">
         {submitted && (
          <p className="successMessage">Form submitted successfully!</p>
        )}
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

        <button type="submit">Login</button>

        {errorMessage && <p className="errorMessage">{errorMessage}</p>}

        <h4>
          <Link>Forgot Password?</Link>
        </h4>

        <h4>
          <Link exact to="/signup/register">
            Create Account
          </Link>
        </h4>

     
      </form>
    </div>
  );
}

export default Signup;

