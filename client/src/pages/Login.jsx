import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      {" "}
      <h1>Ski Shop </h1>
      <p>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </p>
    </div>
  );
}

export default Login;
