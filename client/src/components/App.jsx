import "../App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
//SKI PAGES
import AllSkisShow from "../pages/skis/AllSkisShow";
import PowderShow from "../pages/skis/PowderShow";
import FreestyleShow from "../pages/skis/FreestyleShow";
import RaceShow from "../pages/skis/RaceShow";
//APPAREL PAGES
import AllApparelsShow from "../pages/apparel/AllApparelShow";
import JacketsShow from "../pages/apparel/JacketsShow";
import PantsShow from "../pages/apparel/PantsShow";
//ACCESSORIES PAGES
import AllAccessoriesShow from "../pages/accessories/AllAccessoriesShow";
import GogglesShow from "../pages/accessories/GogglesShow";
import GlovesShow from "../pages/accessories/GlovesShow";
import HatsShow from "../pages/accessories/HatsShow";
import Cart from "../pages/Cart";

function App() {
  const [error, setErrors] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Login
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Signup
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                email={email}
                setEmail={setEmail}
              />
            }
          />
          <Route
            path="/skis"
            element={
              <AllSkisShow
                products={products}
                setProducts={setProducts}
                setErrors={setErrors}
              />
            }
          />
          <Route path="/powder_skis" element={<PowderShow />} />
          <Route path="/freestyle_skis" element={<FreestyleShow />} />
          <Route path="/race_skis" element={<RaceShow />} />
          <Route
            path="/apparels"
            element={
              <AllApparelsShow
                products={products}
                setProducts={setProducts}
                setErrors={setErrors}
              />
            }
          />
          <Route path="/jackets" element={<JacketsShow />} />
          <Route path="/pants" element={<PantsShow />} />
          <Route
            path="/accessories"
            element={
              <AllAccessoriesShow
                products={products}
                setProducts={setProducts}
                setErrors={setErrors}
              />
            }
          />
          <Route path="/goggles" element={<GogglesShow />} />
          <Route path="/gloves" element={<GlovesShow />} />
          <Route path="/hats" element={<HatsShow />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
