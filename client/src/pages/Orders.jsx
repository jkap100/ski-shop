import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Orders({
  skiCart,
  apparelCart,
  accessoryCart,
  setErrors,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  address,
  setAddress,
  city,
  setCity,
  state,
  setState,
  zip,
  setZip,
  cardNumber,
  setCardNumber,
  ccv,
  setCCV,
  expiration,
  setExpiration,
  cardZip,
  setCardZip,
  createdAt,
  setCreatedAt,
  orders,
  setOrders,
  viewOrder,
  setViewOrder,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    fetch("http://localhost:3000/orders", {
      method: "GET",
      headers: headers,
    }).then((r) => {
      if (r.ok) {
        r.json().then(setOrders);
      } else {
        r.json().then((error) => setErrors(error.errors));
        navigate("/login");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filledOrders = () => {
    console.log("filled");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    fetch("http://localhost:3000/filled_orders", {
      method: "GET",
      headers: headers,
    }).then((r) => {
      if (r.ok) {
        r.json().then(setOrders);
      } else {
        r.json().then((error) => setErrors(error.errors));
        navigate("/login");
      }
    });
  };

  const openOrders = () => {
    console.log("open");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    fetch("http://localhost:3000/open_orders", {
      method: "GET",
      headers: headers,
    }).then((r) => {
      if (r.ok) {
        r.json().then(setOrders);
      } else {
        r.json().then((error) => setErrors(error.errors));
        navigate("/login");
      }
    });
  };

  const allOrders = () => {
    // console.log("open");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    fetch("http://localhost:3000/orders", {
      method: "GET",
      headers: headers,
    }).then((r) => {
      if (r.ok) {
        r.json().then(setOrders);
      } else {
        r.json().then((error) => setErrors(error.errors));
        navigate("/login");
      }
    });
  };

  const onViewOrder = (item) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    fetch(`http://localhost:3000/orders/${item.id}`, {
      method: "GET",
      headers: headers,
    }).then((r) => {
      if (r.ok) {
        r.json().then(setViewOrder);
        navigate("/view_order");
      } else {
        r.json().then((error) => setErrors(error.errors));
        navigate("/login");
      }
    });
  };

  return (
    <div className="container">
      <div className="box">
        <div className="box has-text-centered has-background-black">
          <button className="button is-outlined" onClick={allOrders}>
            All Orders
          </button>
          <button className="button is-outlined ml-6" onClick={filledOrders}>
            Filled Orders
          </button>
          <button className="button is-outlined ml-6" onClick={openOrders}>
            Open Orders
          </button>
        </div>
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th className="remove has-text-centered">Date</th>
              <th className="product">Item Name</th>
              <th className="category has-text-centered">SKU</th>
              <th className="cost has-text-centered">Quantity</th>
              <th className="cost has-text-centered">Cost</th>
              <th className="price has-text-centered">Total Cost</th>
              <th className="price has-text-centered">Price</th>
              <th className="price has-text-centered">Total Price</th>
              <th className="edit has-text-centered">Status</th>
              <th className="order has-text-centered">View</th>
            </tr>
          </thead>
          <tbody>
            {!orders
              ? console.log("no orders")
              : orders.map((item, index) => (
                  <tr key={item.id}>
                    <td className="expiration">{item.date}</td>

                    <td className="name ">{item.name}</td>
                    <td className="category has-text-centered">{item.sku}</td>
                    <td className="price has-text-centered">{item.count}</td>
                    <td className="price has-text-centered">
                      ${parseInt(item.cost).toLocaleString("en-US")}
                    </td>
                    <td className="category has-text-centered">
                      $
                      {parseInt(item.cost * item.count).toLocaleString("en-US")}
                    </td>
                    <td className="price has-text-centered">
                      ${parseInt(item.price).toLocaleString("en-US")}
                    </td>
                    <td className="category has-text-centered">
                      $
                      {parseInt(item.price * item.count).toLocaleString(
                        "en-US"
                      )}
                    </td>

                    <td className="edit has-text-centered">
                      {item.status === false ? "Open" : "Filled"}
                    </td>
                    <td className="order has-text-centered">
                      <button
                        className=" button is-black is-small has-text-white"
                        onClick={() => onViewOrder(item)}
                      >
                        {/* <i className="fas fa-plus"></i> */}
                        <i className="fas fa-bullseye"></i>
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
        {/* <div className="box has-background-black"> */}
        {/* <h3 className="title is-4 has-text-white"> */}
        {/* Subtotal - Ski Inventory Cost : $ */}
        {/* {totalSkiCost.toLocaleString("en-US")} */}
        {/* </h3> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Orders;
