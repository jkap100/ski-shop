import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar({ searchTerm, setSearchTerm }) {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);

  const logOut = () => {
    localStorage.clear();

    navigate("/login");
    console.log(localStorage);
  };

  const adminNav = (
    <div className="navbar-item has-dropdown is-hoverable">
      <div className="navbar-link">Admin</div>
      <div className="navbar-dropdown has-text-black">
        <Link to="/inventory">
          <div className="navbar-item">Inventory</div>
        </Link>
        <Link to="/inventory_order_form">
          <div className="navbar-item">New Inv Order</div>
        </Link>
        <Link to="/orders">
          <div className="navbar-item">Orders</div>
        </Link>
      </div>
    </div>
  );

  // console.log(`Is User Admin: ${localStorage.getItem("isAdmin")}`);

  return (
    <div>
      <section>
        <nav
          className="navbar is-black is-spaced topNav is-fixed-top has-shadow"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <span className="navbar-item">
              <img src="../snowflake.png" alt=""></img>
            </span>

            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              role="button"
              className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
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

          <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <div className="navbar-start">
              <Link to="/">
                <strong className="navbar-item has-text-white">Home</strong>
              </Link>

              <div
                className={`navbar-item has-dropdown is-hoverable ${
                  isActive ? "is-active" : ""
                }`}
              >
                <div className="navbar-link">Skis</div>
                <div className={`navbar-dropdown`}>
                  <Link to="/powder_skis">
                    <div className="navbar-item">Powder</div>
                  </Link>
                  <Link to="/freestyle_skis">
                    <div className="navbar-item">Freestyle</div>
                  </Link>
                  <Link to="/race_skis">
                    <div className="navbar-item">Race</div>
                  </Link>
                  <Link to="/skis">
                    <div className="navbar-item">All Skis</div>
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
                  <Link to="/apparels">
                    <div className="navbar-item">All Apparel</div>
                  </Link>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">Accessories</div>
                <div className="navbar-dropdown">
                  <Link to="/gloves">
                    <div className="navbar-item">Gloves</div>
                  </Link>
                  <Link to="/goggles">
                    <div className="navbar-item">Goggles</div>
                  </Link>
                  <Link to="/hats">
                    <div className="navbar-item">Hats</div>
                  </Link>
                  <Link to="/accessories">
                    <div className="navbar-item">All Accessories</div>
                  </Link>
                </div>
              </div>

              {localStorage.getItem("isAdmin") === "true" ? (
                adminNav
              ) : (
                <div className="notAdmin">Not Admin</div>
              )}
            </div>
          </div>

          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item has-dropdown is-hoverable mr-2">
                {localStorage.getItem("currentUserId") ? (
                  <Link to="/cart">
                    <div className="has-text-white">Cart</div>
                  </Link>
                ) : (
                  <div className="notAdmin">Not Admin</div>
                )}
              </div>

              <div className="navbar-item has-dropdown is-hoverable mr-2">
                <div className="navbar-link">User</div>

                <div className="navbar-dropdown">
                  <Link to="/login">
                    <div className="navbar-item">Log In</div>
                  </Link>
                  <Link to="/signup">
                    <div className="navbar-item">Sign Up</div>
                  </Link>

                  <li className="navbar-item pointer" onClick={logOut}>
                    Log Out
                  </li>
                </div>
              </div>
              <div id="search-div">
                <input
                  className="has-text-centered"
                  id="search"
                  value={searchTerm}
                  type="text"
                  placeholder="Search Products"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i className=""></i>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
