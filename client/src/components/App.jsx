import "../App.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PowderShow from "../pages/skis/PowderShow";
import FreestyleShow from "../pages/skis/FreestyleShow";
import RaceShow from "../pages/skis/RaceShow";
import JacketsShow from "../pages/apparel/JacketsShow";
import PantsShow from "../pages/apparel/PantsShow";
import GogglesShow from "../pages/accessories/GogglesShow";
import GlovesShow from "../pages/accessories/GlovesShow";
import HatsShow from "../pages/accessories/HatsShow";
import Cart from "../pages/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/powder_skis" element={<PowderShow />} />
          <Route path="/freestyle_skis" element={<FreestyleShow />} />
          <Route path="/race_skis" element={<RaceShow />} />
          <Route path="/jackets" element={<JacketsShow />} />
          <Route path="/pants" element={<PantsShow />} />
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
