import "bulma/css/bulma.min.css";
import { Form } from "react-bulma-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const user = {
      username: username,
      password: password,
    };

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.error) {
          console.error(result.error);
        } else {
          console.log("token", result.token);
          // route them to profile page
          localStorage.setItem("token", result.token);
        }
      });

    setUsername("");
    setPassword("");
  };

  return (
    <div className="container my-6">
      <div className="columns is-centered">
        <form onSubmit={handleLogin}>
          <div class="field">
            <label className="label">Username</label>
            <p class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              ></input>
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <label className="label">Password</label>
            <p class="control has-icons-left">
              <input
                class="input"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></input>
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button is-black">Login</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

// <h1>Ski Shop </h1>
//         <form onSubmit={handleLogin}>
//           <input
//             type="text"
//             name="username"
//             placeholder="username"
//             value={username}
//             onChange={(event) => setUsername(event.target.value)}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//           <input type="submit" value="login" />
//         </form>
//         <p>
//           <Link to="/signup">
//             <button>Sign Up</button>
//           </Link>
//         </p>
//       </div>
