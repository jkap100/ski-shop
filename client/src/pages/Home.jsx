import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Ski Shop </h1>
      <p>
        <Link to="/login">
          <button>Enter</button>
        </Link>
      </p>
    </div>
  );
}

export default Home;
