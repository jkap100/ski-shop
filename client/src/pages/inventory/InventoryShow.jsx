import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InventoryOrder from "../../components/InventoryOrder";

function InventoryShow({
  skiInventory,
  setSkiInventory,
  apparelInventory,
  setApparelInventory,
  accessoryInventory,
  setAccessoryInventory,
  setErrors,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    fetch("http://localhost:3000/skis", {
      method: "GET",
      headers: headers,
    }).then((r) => {
      if (r.ok) {
        r.json().then(setSkiInventory);
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

    fetch("http://localhost:3000/apparels", {
      method: "GET",
      headers: headers,
    }).then((r) => {
      if (r.ok) {
        r.json().then(setApparelInventory);
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

    fetch("http://localhost:3000/accessories", {
      method: "GET",
      headers: headers,
    }).then((r) => {
      if (r.ok) {
        r.json().then(setAccessoryInventory);
      } else {
        r.json().then((error) => setErrors(error.errors));
        navigate("/login");
      }
    });
  }, []);

  const handleDeleteSkiInv = (id) => {
    console.log(id);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    fetch(`http://localhost:3000/skis/${id}`, {
      method: "DELETE",
      headers: headers,
    }).then((r) => {
      if (r.ok) {
        console.log("removed from inventory");
        window.location.reload(true);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  const handleDeleteApparelInv = (id) => {
    console.log(id);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    fetch(`http://localhost:3000/apparels/${id}`, {
      method: "DELETE",
      headers: headers,
    }).then((r) => {
      if (r.ok) {
        console.log("removed from inventory");
        window.location.reload(true);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  const handleDeleteAccessoryInv = (id) => {
    console.log(id);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    fetch(`http://localhost:3000/accessories/${id}`, {
      method: "DELETE",
      headers: headers,
    }).then((r) => {
      if (r.ok) {
        console.log("removed from inventory");
        window.location.reload(true);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  const initialValue = 0;

  const invSkis = skiInventory.map((ski) => ski.cost);
  const totalSkiCost = invSkis.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  const invApparel = apparelInventory.map((apparel) => apparel.cost);
  const totalApparelCost = invApparel.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  const invAccessories = accessoryInventory.map((accessory) => accessory.cost);
  const totalAccessoryCost = invAccessories.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  const totalCost = totalSkiCost + totalApparelCost + totalAccessoryCost;

  return (
    <div className="container">
      <InventoryOrder />

      <div className="column">
        <div className="box">
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th className="cart-image has-text-centered">Item</th>
                <th className="product">Item Name</th>
                <th className="price has-text-centered">Cost</th>
                <th className="category has-text-centered">Category</th>
                <th className="has-text-centered">Remove</th>
              </tr>
            </thead>
            <tbody>
              {skiInventory.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.image} alt="not found"></img>
                  </td>
                  <td className="product">{item.name}</td>
                  <td className="price has-text-centered">
                    {item.cost.toLocaleString("en-US")}
                  </td>
                  <td className="category has-text-centered">
                    {item.category}
                  </td>
                  <td className="has-text-centered">
                    <button
                      className="button is-black is-small"
                      onClick={() => handleDeleteSkiInv(item.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="box has-background-black">
            <h3 className="title is-4 has-text-white">
              Subtotal - Ski Inventory Cost : $
              {totalSkiCost.toLocaleString("en-US")}
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
                <th className="price has-text-centered">Cost</th>
                <th className="category has-text-centered">Category</th>
                <th className="has-text-centered">Remove</th>
              </tr>
            </thead>
            <tbody>
              {apparelInventory.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.image} alt="not found"></img>
                  </td>
                  <td className="product">{item.name}</td>
                  <td className="price has-text-centered">
                    {item.cost.toLocaleString("en-US")}
                  </td>
                  <td className="category has-text-centered">
                    {item.category}
                  </td>
                  <td className="has-text-centered">
                    <button
                      className="button is-black is-small"
                      onClick={() => handleDeleteApparelInv(item.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="box has-background-black">
            <h3 className="title is-4 has-text-white">
              Subtotal - Apparel Inventory Cost : $
              {totalApparelCost.toLocaleString("en-US")}
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
                <th className="price has-text-centered">Cost</th>
                <th className="category has-text-centered">Category</th>
                <th className="has-text-centered">Remove</th>
              </tr>
            </thead>
            <tbody>
              {accessoryInventory.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.image} alt="not found"></img>
                  </td>
                  <td className="product">{item.name}</td>
                  <td className="price has-text-centered">
                    {item.cost.toLocaleString("en-US")}
                  </td>
                  <td className="category has-text-centered">
                    {item.category}
                  </td>
                  <td className="has-text-centered">
                    <button
                      className="button is-black is-small"
                      onClick={() => handleDeleteAccessoryInv(item.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="box has-background-black">
            <h3 className="title is-4 has-text-white">
              Subtotal - Accessory Inventory Cost : $
              {totalAccessoryCost.toLocaleString("en-US")}
            </h3>
          </div>
        </div>
      </div>
      <div className="box">
        <h3 className="title is-4 has-text-black">
          Total Cost of Inventory : ${totalCost.toLocaleString("en-US")}
        </h3>
      </div>
    </div>
  );
}

export default InventoryShow;
