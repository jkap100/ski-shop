import "../App.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

function App() {
  return (
    <div className="App">
      <h1>Ski Shop</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
