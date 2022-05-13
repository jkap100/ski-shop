import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";

function Signup({
  username,
  setUsername,
  password,
  setPassword,
  email,
  setEmail,
}) {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const user = {
      username: username,
      password: password,
      email: email,
    };

    fetch("http://localhost:3000/users", {
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
          navigate("/login");
          localStorage.setItem("token", result.token);
        }
      });

    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    <motion.div
      className="container my-6"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <div className="columns is-centered">
        <form onSubmit={handleLogin}>
          <div className="field">
            <label className="label">Username</label>
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              ></input>
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></input>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                name="email"
                placeholder="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              ></input>
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-black">Sign Up</button>
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default Signup;
