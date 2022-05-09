import "bulma/css/bulma.min.css";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login({ username, setUsername, password, setPassword }) {
  const navigate = useNavigate();
  // const [currentUser, setCurrentUser] = useState("");

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
          navigate("/login");
          console.error(result.error);
        } else {
          console.log("token", result.token);

          navigate("/skis");
          localStorage.setItem("token", result.token);
          localStorage.setItem("currentUserId", result.user.id);
          localStorage.setItem("isAdmin", result.user.admin);
          console.log(localStorage);
        }
      });

    setUsername("");
    setPassword("");
  };

  return (
    <div className="container my-6">
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
            <p className="control">
              <button className="button is-black">Login</button>
              <Link to="/signup">
                <button className="button is-outlined mx-4">Sign Up</button>
              </Link>
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
