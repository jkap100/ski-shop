import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SkiCart from "../components/SkiCart";
import ApparelCart from "../components/ApparelCart";
import AccessoryCart from "../components/AccessoryCart";

function CartShow({
  currentUser,
  skiCart,
  setSkiCart,
  apparelCart,
  setApparelCart,
  accessoryCart,
  setAccessoryCart,
  setErrors,
}) {
  const navigate = useNavigate();

  const cartSkiItems = skiCart.map((c) => (
    <SkiCart
      key={c.id}
      cartSkiObj={c}
      skiCart={skiCart}
      setSkiCart={setSkiCart}
    />
  ));

  const cartApparelItems = apparelCart.map((c) => (
    <ApparelCart
      key={c.id}
      cartApparelObj={c}
      apparelCart={apparelCart}
      setApparelCart={setApparelCart}
    />
  ));

  const cartAccessoryItems = accessoryCart.map((c) => (
    <AccessoryCart
      key={c.id}
      cartAccessoryObj={c}
      accessoryCart={accessoryCart}
      setAccessoryCart={setAccessoryCart}
    />
  ));

  const skiPrice = skiCart.map((ski) => ski.price);
  const skiCount = skiCart.map((ski) => ski.cart_count);

  const apparelPrice = apparelCart.map((apparel) => apparel.price);
  const apparelCount = apparelCart.map((apparel) => apparel.cart_count);

  const accessoryPrice = accessoryCart.map((accessory) => accessory.price);
  const accessoryCount = accessoryCart.map((accessory) => accessory.cart_count);

  let totalSkiPrice = 0;
  let totalApparelPrice = 0;
  let totalAccessoryPrice = 0;

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    fetch(
      `http://localhost:3000/user_skis?user_id=${parseInt(
        localStorage.getItem("currentUserId")
      )}`,
      {
        method: "GET",
        headers: headers,
      }
    ).then((r) => {
      if (r.ok) {
        r.json().then(setSkiCart);
      } else {
        r.json().then((error) => setErrors(error.errors));
        navigate("/login");
      }
    });
  }, []);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    fetch(
      `http://localhost:3000/user_apparels?user_id=${parseInt(
        localStorage.getItem("currentUserId")
      )}`,
      {
        method: "GET",
        headers: headers,
      }
    ).then((r) => {
      if (r.ok) {
        r.json().then(setApparelCart);
      } else {
        r.json().then((error) => setErrors(error.errors));
        navigate("/login");
      }
    });
  }, []);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    fetch(
      `http://localhost:3000/user_accessories?user_id=${parseInt(
        localStorage.getItem("currentUserId")
      )}`,
      {
        method: "GET",
        headers: headers,
      }
    ).then((r) => {
      if (r.ok) {
        r.json().then(setAccessoryCart);
      } else {
        r.json().then((error) => setErrors(error.errors));
        navigate("/login");
      }
    });
  }, []);

  for (let i = 0; i < skiPrice.length; i++) {
    totalSkiPrice += skiPrice[i] * skiCount[i];
  }

  for (let i = 0; i < apparelPrice.length; i++) {
    totalApparelPrice += apparelPrice[i] * apparelCount[i];
  }

  for (let i = 0; i < accessoryPrice.length; i++) {
    totalAccessoryPrice += accessoryPrice[i] * accessoryCount[i];
  }

  const grandTotal = totalSkiPrice + totalApparelPrice + totalAccessoryPrice;

  return (
    <div className="container">
      <div className="column">
        <div className="box">
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th className="cart-image has-text-centered">Item</th>
                <th className="product">Item Name</th>
                <th className="category has-text-centered">Category</th>
                <th className="price has-text-centered">Price</th>
                <th className="qty has-text-centered">Quantity</th>
                <th className="Total has-text-centered">Total</th>
                <th className="has-text-centered">Remove</th>
              </tr>
            </thead>
            {cartSkiItems}
          </table>
          <div className="box has-background-black">
            <h3 className="title is-4 has-text-white">
              Subtotal - Skis : ${totalSkiPrice.toLocaleString("en-US")}
            </h3>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="box">
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th className="cart-image has-text-centered">Item</th>
                <th className="product">Item Name</th>
                <th className="category has-text-centered">Category</th>
                <th className="price has-text-centered">Price</th>
                <th className="qty has-text-centered">Quantity</th>
                <th className="Total has-text-centered">Total</th>
                <th className="has-text-centered">Remove</th>
              </tr>
            </thead>
            {cartApparelItems}
          </table>
          <div className="box has-background-black">
            <h3 className="title is-4 has-text-white">
              Subtotal - Apparel : ${totalApparelPrice.toLocaleString("en-US")}
            </h3>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="box">
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th className="cart-image has-text-centered">Item</th>
                <th className="product">Item Name</th>
                <th className="category has-text-centered">Category</th>
                <th className="price has-text-centered">Price</th>
                <th className="qty has-text-centered">Quantity</th>
                <th className="Total has-text-centered">Total</th>
                <th className="has-text-centered">Remove</th>
              </tr>
            </thead>
            {cartAccessoryItems}
          </table>
          <div className="box has-background-black">
            <h3 className="title is-4 has-text-white">
              Subtotal - Accessories : $
              {totalAccessoryPrice.toLocaleString("en-US")}
            </h3>
          </div>
        </div>
      </div>
      <div className="box mb-6 mt-4">
        <div className="box has-background-black">
          <h3 className="title is-4 has-text-white">
            Grand Total: ${grandTotal.toLocaleString("en-US")}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default CartShow;
