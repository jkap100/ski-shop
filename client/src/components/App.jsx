import "../App.css";
import React, { useState } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
//AUTH PAGES
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
//INVENTORY PAGES
import InventoryShow from "../pages/inventory/InventoryShow";
import NewInventoryOrder from "../pages/inventory/NewInventoryOrder";
import UpdateInventory from "../pages/inventory/UpdateInventory";

import ProductDetail from "../pages/ProductDetail";
import CartShow from "../pages/CartShow";
import OrderConfirmation from "../pages/OrderConfirmation";
import Orders from "../pages/Orders";
import ViewOrder from "../pages/ViewOrder";

function App() {
  // const navigate = useNavigate();
  const [error, setErrors] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [skis, setSkis] = useState([]);
  const [apparels, setApparels] = useState([]);
  const [accessories, setAccessories] = useState([]);

  const [skiCart, setSkiCart] = useState([]);
  const [skiCartCount, setSkiCartCount] = useState(1);
  const [apparelCart, setApparelCart] = useState([]);
  const [apparelCartCount, setApparelCartCount] = useState(1);
  const [accessoryCart, setAccessoryCart] = useState([]);
  const [accessoryCartCount, setAccessoryCartCount] = useState(1);

  const [skiInventory, setSkiInventory] = useState([]);
  const [apparelInventory, setApparelInventory] = useState([]);
  const [accessoryInventory, setAccessoryInventory] = useState([]);

  const [productId, setProductId] = useState([]);
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
  const [productCount, setProductCount] = useState("");
  const [orders, setOrders] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [ccv, setCCV] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cardZip, setCardZip] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [viewOrder, setViewOrder] = useState("");

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

  const onViewSki = (ski) => {
    // console.log("viewSki");
    fetch(`http://localhost:3000/skis/${ski.id}`).then((r) => {
      if (r.ok) {
        r.json().then(setViewProduct);
        // navigate("/product_detail");
        <Navigate to="/product_detail" />;
      } else {
        r.json().then((error) => setErrors(error.errors));
        // navigate("/login");
        <Navigate to="/login" />;
      }
    });
  };

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
                viewProduct={viewProduct}
                setViewProduct={setViewProduct}
                skiCartCount={skiCartCount}
                setSkiCartCount={setSkiCartCount}
                setErrors={setErrors}
              />
            }
          />

          <Route
            path="/powder_skis"
            element={
              <PowderShow
                skis={filteredSkis}
                setSkis={setSkis}
                viewProduct={viewProduct}
                setViewProduct={setViewProduct}
                skiCartCount={skiCartCount}
                setSkiCartCount={setSkiCartCount}
                onViewSki={onViewSki}
              />
            }
          />
          <Route
            path="/freestyle_skis"
            element={
              <FreestyleShow
                skis={filteredSkis}
                setSkis={setSkis}
                viewProduct={viewProduct}
                setViewProduct={setViewProduct}
                skiCartCount={skiCartCount}
                setSkiCartCount={setSkiCartCount}
                setErrors={setErrors}
              />
            }
          />
          <Route
            path="/race_skis"
            element={
              <RaceShow
                skis={filteredSkis}
                setSkis={setSkis}
                viewProduct={viewProduct}
                setViewProduct={setViewProduct}
                skiCartCount={skiCartCount}
                setSkiCartCount={setSkiCartCount}
                setErrors={setErrors}
              />
            }
          />
          <Route
            path="/apparels"
            element={
              <AllApparelsShow
                apparels={filteredApparel}
                setApparels={setApparels}
                viewProduct={viewProduct}
                setViewProduct={setViewProduct}
                apparelCartCount={apparelCartCount}
                setApparelCartCount={setApparelCartCount}
                setErrors={setErrors}
              />
            }
          />
          <Route
            path="/jackets"
            element={
              <JacketsShow
                apparels={filteredApparel}
                setApparels={setApparels}
                viewProduct={viewProduct}
                setViewProduct={setViewProduct}
                apparelCartCount={apparelCartCount}
                setApparelCartCount={setApparelCartCount}
                setErrors={setErrors}
              />
            }
          />
          <Route
            path="/pants"
            element={
              <PantsShow
                apparels={filteredApparel}
                setApparels={setApparels}
                viewProduct={viewProduct}
                setViewProduct={setViewProduct}
                apparelCartCount={apparelCartCount}
                setApparelCartCount={setApparelCartCount}
                setErrors={setErrors}
              />
            }
          />
          <Route
            path="/accessories"
            element={
              <AllAccessoriesShow
                accessories={filteredAccessories}
                setAccessories={setAccessories}
                viewProduct={viewProduct}
                setViewProduct={setViewProduct}
                accessoryCartCount={accessoryCartCount}
                setAccessoryCartCount={setAccessoryCartCount}
                setErrors={setErrors}
              />
            }
          />
          <Route
            path="/goggles"
            element={
              <GogglesShow
                accessories={filteredAccessories}
                setAccessories={setAccessories}
                viewProduct={viewProduct}
                setViewProduct={setViewProduct}
                accessoryCartCount={accessoryCartCount}
                setAccessoryCartCount={setAccessoryCartCount}
                setErrors={setErrors}
              />
            }
          />
          <Route
            path="/gloves"
            element={
              <GlovesShow
                accessories={filteredAccessories}
                setAccessories={setAccessories}
                viewProduct={viewProduct}
                setViewProduct={setViewProduct}
                accessoryCartCount={accessoryCartCount}
                setAccessoryCartCount={setAccessoryCartCount}
                setErrors={setErrors}
              />
            }
          />
          <Route
            path="/hats"
            element={
              <HatsShow
                accessories={filteredAccessories}
                setAccessories={setAccessories}
                viewProduct={viewProduct}
                setViewProduct={setViewProduct}
                accessoryCartCount={accessoryCartCount}
                setAccessoryCartCount={setAccessoryCartCount}
                setErrors={setErrors}
              />
            }
          />
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
                setProductId={setProductId}
                setName={setName}
                setSku={setSku}
                setPrice={setPrice}
                setCost={setCost}
                setSize={setSize}
                setDescription={setDescription}
                setCategory={setCategory}
                setSex={setSex}
                setImage={setImage}
                setBrand={setBrand}
                setProductCount={setProductCount}
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
                productCount={productCount}
                setProductCount={setProductCount}
                setErrors={setErrors}
              />
            }
          />
          <Route
            path="/update_inventory"
            element={
              <UpdateInventory
                productId={productId}
                setProductId={setProductId}
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
                productCount={productCount}
                setProductCount={setProductCount}
                setErrors={setErrors}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartShow
                skiCart={skiCart}
                setSkiCart={setSkiCart}
                apparelCart={apparelCart}
                setApparelCart={setApparelCart}
                accessoryCart={accessoryCart}
                setAccessoryCart={setAccessoryCart}
                setErrors={setErrors}
              />
            }
          />
          <Route
            path="/product_detail"
            element={
              <ProductDetail
                viewProduct={viewProduct}
                setViewProduct={setViewProduct}
                productCount={productCount}
                setProductCount={setProductCount}
              />
            }
          />
          <Route
            path="/order_confirmation"
            element={
              <OrderConfirmation
                setErrors={setErrors}
                skiCart={skiCart}
                apparelCart={apparelCart}
                accessoryCart={accessoryCart}
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                address={address}
                setAddress={setAddress}
                city={city}
                setCity={setCity}
                state={state}
                setState={setState}
                zip={zip}
                setZip={setZip}
                cardNumber={cardNumber}
                setCardNumber={setCardNumber}
                ccv={ccv}
                setCCV={setCCV}
                expiration={expiration}
                setExpiration={setExpiration}
                cardZip={cardZip}
                setCardZip={setCardZip}
              />
            }
          />
          <Route
            path="/orders"
            element={
              <Orders
                setErrors={setErrors}
                skiCart={skiCart}
                apparelCart={apparelCart}
                accessoryCart={accessoryCart}
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                address={address}
                setAddress={setAddress}
                city={city}
                setCity={setCity}
                state={state}
                setState={setState}
                zip={zip}
                setZip={setZip}
                cardNumber={cardNumber}
                setCardNumber={setCardNumber}
                ccv={ccv}
                setCCV={setCCV}
                expiration={expiration}
                setExpiration={setExpiration}
                cardZip={cardZip}
                setCardZip={setCardZip}
                orders={orders}
                createdAt={createdAt}
                setCreatedAt={setCreatedAt}
                setOrders={setOrders}
                viewOrder={viewOrder}
                setViewOrder={setViewOrder}
              />
            }
          />

          <Route
            path="/view_order"
            element={
              <ViewOrder
                setErrors={setErrors}
                skiCart={skiCart}
                apparelCart={apparelCart}
                accessoryCart={accessoryCart}
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                address={address}
                setAddress={setAddress}
                city={city}
                setCity={setCity}
                state={state}
                setState={setState}
                zip={zip}
                setZip={setZip}
                cardNumber={cardNumber}
                setCardNumber={setCardNumber}
                ccv={ccv}
                setCCV={setCCV}
                expiration={expiration}
                setExpiration={setExpiration}
                cardZip={cardZip}
                setCardZip={setCardZip}
                orders={orders}
                createdAt={createdAt}
                setCreatedAt={setCreatedAt}
                setOrders={setOrders}
                viewOrder={viewOrder}
                setViewOrder={setViewOrder}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
