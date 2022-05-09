import "../App.css";
import React, { useState } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
//AUTH PAGES
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../Signup";
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

import CartShow from "../pages/CartShow";

import InventoryShow from "../pages/inventory/InventoryShow";
import NewInventoryOrder from "../pages/inventory/NewInventoryOrder";

import ProductDetail from "../pages/ProductDetail";

function App() {
  const [error, setErrors] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [skis, setSkis] = useState([]);
  const [apparels, setApparels] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const [cart, setCart] = useState([]);

  const [skiInventory, setSkiInventory] = useState([]);
  const [apparelInventory, setApparelInventory] = useState([]);
  const [accessoryInventory, setAccessoryInventory] = useState([]);

  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [cost, setCost] = useState("");
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");
  const [sex, setSex] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");

  const [viewProduct, setViewProduct] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const filteredSkis = skis.filter((ski) => {
    return (
      ski.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ski.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ski.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const filteredApparel = apparels.filter((apparel) => {
    return (
      apparel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apparel.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apparel.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const filteredAccessories = accessories.filter((accessory) => {
    return (
      accessory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      accessory.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      accessory.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

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
                skis={filteredSkis}
                setSkis={setSkis}
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
                apparels={filteredApparel}
                setApparels={setApparels}
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
                accessories={filteredAccessories}
                setAccessories={setAccessories}
                setErrors={setErrors}
              />
            }
          />
          <Route path="/goggles" element={<GogglesShow />} />
          <Route path="/gloves" element={<GlovesShow />} />
          <Route path="/hats" element={<HatsShow />} />
          <Route
            path="/inventory"
            element={
              <InventoryShow
                skiInventory={skiInventory}
                setSkiInventory={setSkiInventory}
                apparelInventory={apparelInventory}
                setApparelInventory={setApparelInventory}
                accessoryInventory={accessoryInventory}
                setAccessoryInventory={setAccessoryInventory}
                setErrors={setErrors}
              />
            }
          />
          <Route
            path="/inventory_order_form"
            element={
              <NewInventoryOrder
                name={name}
                setName={setName}
                sku={sku}
                setSku={setSku}
                price={price}
                setPrice={setPrice}
                cost={cost}
                setCost={setCost}
                size={size}
                setSize={setSize}
                category={category}
                setCategory={setCategory}
                sex={sex}
                setSex={setSex}
                description={description}
                setDescription={setDescription}
                image={image}
                setImage={setImage}
                brand={brand}
                setBrand={setBrand}
                setErrors={setErrors}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartShow
                skis={skis}
                setSkis={setSkis}
                apparels={apparels}
                setApparels={setApparels}
                accessories={accessories}
                setAccessories={setAccessories}
                setErrors={setErrors}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/product_detail"
            element={
              <ProductDetail
                viewProduct={viewProduct}
                setViewProduct={setViewProduct}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
