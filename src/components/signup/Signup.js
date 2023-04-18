import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

import "./Signup.css";

function Signup({ onAddUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage("Username or Password is blank");
      return;
    }
    const payload = { username, password };
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setErrorMessage(data.error);
        } else {
          // onAddUser(data);
          setUsername("");
          setPassword("");
          setErrorMessage("");
        
          navigate('/')
        }
      })
      .catch((error) => console.log(error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
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


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import "./Signup.css";

// function Signup({ onAddUser }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const navigate = useNavigate();

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     if (username.trim() === "" || password.trim() === "") {
//       setErrorMessage("Username or password is blank");
//       return;
//     }
//     const payload = { username, password };
//     fetch("/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.error) {
//           setErrorMessage(data.error);
//         } else {
//           onAddUser(data);
//           setUsername("");
//           setPassword("");
//           setErrorMessage("");
//           setSubmitted(true);
//           navigate('/')
//           setSuccessMessage("Form submitted successfully!");
//         }
//       })
//       .catch((error) => console.log(error));
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     if (name === "username") {
//       setUsername(value);
//     } else if (name === "password") {
//       setPassword(value);
//     }
//   };

//   useEffect(() => {
//     if (submitted) {
//       setSuccessMessage("");
//     }
//   }, [submitted]);

//   return (
//     <div className="login">
//       <form className="loginForm" onSubmit={handleFormSubmit}>
//         {successMessage && (
//           <p className="successMessage">{successMessage}</p>
//         )}
//         <h2>Login</h2>

//         <label htmlFor="username" className="username">
//           Username:
//         </label>
//         <input
//           type="text"
//           placeholder="Enter Your Username"
//           name="username"
//           value={username}
//           onChange={handleInputChange}
//         />

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           placeholder="Enter Your Password"
//           name="password"
//           value={password}
//           onChange={handleInputChange}
//         />

//         <button type="submit">Login</button>

//         {errorMessage && <p className="errorMessage">{errorMessage}</p>}

//         <h4>
//           <Link>Forgot Password?</Link>
//         </h4>

//         <h4>
//           <Link exact to="/signup/register">
//             Create Account
//           </Link>
//         </h4>
//       </form>
//     </div>
//   );
// }

// export default Signup;




// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import "./Signup.css";

// function Signup({ onAddUser }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//    const [submitted, setSubmitted] = useState(false);

//   const navigate = useNavigate();

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     if (username.trim() === "" || password.trim() === "") {
//       setErrorMessage("Username or password is blank");
//       return;
//     }
//     const payload = { username, password };
//     fetch("/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.error) {
//           setErrorMessage(data.error);
//         } else {
//           onAddUser(data);
//           setUsername("");
//           setPassword("");
//           setErrorMessage("");
//           setSuccessMessage("Form submitted successfully!");
//           navigate('/');
//         }
//       })
//       .catch((error) => console.log(error));
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     if (name === "username") {
//       setUsername(value);
//     } else if (name === "password") {
//       setPassword(value);
//     }
//   };

//   // useEffect(() => {
//   //   if (successMessage !== "") {
//   //     setUsername("");
//   //     setPassword("");
//   //   }
//   // }, [successMessage]);


//   useEffect(() => {
//   if (submitted) {
//     setSuccessMessage("");
//     setSubmitted(false); // add this line to reset submitted state
//   }
// }, [submitted]);


//   return (
//     <div className="login">
//       <form className="loginForm" onSubmit={handleFormSubmit}>
//         {successMessage && (
//           <p className="successMessage">{successMessage}</p>
//         )}
//         <h2>Login</h2>

//         <label htmlFor="username" className="username">
//           Username:
//         </label>
//         <input
//           type="text"
//           placeholder="Enter Your Username"
//           name="username"
//           value={username}
//           onChange={handleInputChange}
//         />

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           placeholder="Enter Your Password"
//           name="password"
//           value={password}
//           onChange={handleInputChange}
//         />

//         <button type="submit">Login</button>

//         {errorMessage && <p className="errorMessage">{errorMessage}</p>}

//         <h4>
//           <Link>Forgot Password?</Link>
//         </h4>

//         <h4>
//           <Link exact to="/signup/register">
//             Create Account
//           </Link>
//         </h4>
//       </form>
//     </div>
//   );
// }

// export default Signup;
