import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <section>
        <nav
          className="navbar is-black is-spaced topNav is-fixed-top has-shadow"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="../snowflake.png" alt=""></img>
            </a>

            <div
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              alt=""
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link to="/">
                <strong className="navbar-item has-text-white">Home</strong>
              </Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">Skis</div>
                <div className="navbar-dropdown">
                  <Link to="/powder_skis">
                    <div className="navbar-item">Powder</div>
                  </Link>
                  <Link to="/freestyle_skis">
                    <div className="navbar-item">Freestyle</div>
                  </Link>
                  <Link to="/race_skis">
                    <div className="navbar-item">Race</div>
                  </Link>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">Apparel</div>
                <div className="navbar-dropdown">
                  <Link to="/jackets">
                    <div className="navbar-item">Jackets</div>
                  </Link>
                  <Link to="/pants">
                    <div className="navbar-item">Pants</div>
                  </Link>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">Accessories</div>
                <div className="navbar-dropdown">
                  <Link to="/powder_skis">
                    <div className="navbar-item">Gloves</div>
                  </Link>
                  <Link to="/freestyle_skis">
                    <div className="navbar-item">Goggles</div>
                  </Link>
                  <Link to="/freestyle_skis">
                    <div className="navbar-item">Hats</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <div className="button is-outlined navButton">
                  <Link to="./cart">
                    <span className="has-text-black">Cart</span>
                  </Link>
                </div>

                <div className="button is-outlined navButton">
                  <Link to="./signup">
                    <span className="has-text-black">Sign Up</span>
                  </Link>
                </div>

                <Link to="./login">
                  <span className="button is-outlined navButton">Log in</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
