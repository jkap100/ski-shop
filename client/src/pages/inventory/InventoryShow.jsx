import React, { useState, useEffect } from "react";
import useCollapse from "react-collapsed";
import { useNavigate } from "react-router-dom";
import InventorySki from "../../components/InventorySki";

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
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

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

  <InventorySki skiInventory={skiInventory} />;

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

  const handleOrderSkiInv = (ski) => {
    // event.preventDefault();
    console.log(ski);

    const body = {
      name: ski.name,
      sku: ski.sku,
      price: ski.price,
      cost: ski.cost,
      size: ski.size,
      category: ski.category,
      sex: ski.sex,
      description: ski.description,
      image: ski.image,
      brand: ski.brand,
    };
    console.log(body);
    fetch("http://localhost:3000/skis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.error) {
          console.error(result.error);
        } else {
          window.location.reload(true);
        }
      });
  };

  const handleOrderApparelInv = (apparel) => {
    console.log(apparel);

    const body = {
      name: apparel.name,
      sku: apparel.sku,
      price: apparel.price,
      cost: apparel.cost,
      size: apparel.size,
      category: apparel.category,
      sex: apparel.sex,
      description: apparel.description,
      image: apparel.image,
      brand: apparel.brand,
    };
    console.log(body);
    fetch("http://localhost:3000/apparels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.error) {
          console.error(result.error);
        } else {
          window.location.reload(true);
        }
      });
  };

  const handleOrderAccessoryInv = (accessory) => {
    console.log(accessory);

    const body = {
      name: accessory.name,
      sku: accessory.sku,
      price: accessory.price,
      cost: accessory.cost,
      size: accessory.size,
      category: accessory.category,
      sex: accessory.sex,
      description: accessory.description,
      image: accessory.image,
      brand: accessory.brand,
    };
    console.log(body);
    fetch("http://localhost:3000/accessories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.error) {
          console.error(result.error);
        } else {
          window.location.reload(true);
        }
      });
  };

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
      <div className="collapsible">
        <div className="column">
          <div className="box">
            <div className="header " {...getToggleProps()}>
              <strong className="has-text-white">
                {isExpanded ? "Collapse" : "Ski Inventory"}
              </strong>
            </div>
            <div {...getCollapseProps()}>
              <table className="table is-fullwidth">
                <thead>
                  <tr>
                    <th className="cart-image has-text-centered">Item</th>
                    <th className="product">Item Name</th>
                    <th className="price has-text-centered">Cost</th>
                    <th className="category has-text-centered">Category</th>
                    <th className="has-text-centered">Order</th>
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
                          className="button is-outlined is-small"
                          onClick={() => handleOrderSkiInv(item)}
                        >
                          <strong>+</strong>
                        </button>
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
        </div>
      </div>

      <div className="collapsible">
        <div className="column">
          <div className="box">
            <div className="header " {...getToggleProps()}>
              <strong className="has-text-white">
                {isExpanded ? "Collapse" : "Apparel Inventory"}
              </strong>
            </div>
            <div {...getCollapseProps()}>
              <table className="table is-fullwidth">
                <thead>
                  <tr>
                    <th className="cart-image has-text-centered">Item</th>
                    <th className="product">Item Name</th>
                    <th className="price has-text-centered">Cost</th>
                    <th className="category has-text-centered">Category</th>
                    <th className="has-text-centered">Order</th>
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
                          className="button is-outlined is-small"
                          onClick={() => handleOrderApparelInv(item)}
                        >
                          <strong>+</strong>
                        </button>
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
        </div>
      </div>
      <div className="collapsible">
        <div className="column">
          <div className="box">
            <div className="header " {...getToggleProps()}>
              <strong className="has-text-white">
                {isExpanded ? "Collapse" : "Apparel Inventory"}
              </strong>
            </div>
            <div {...getCollapseProps()}>
              <table className="table is-fullwidth">
                <thead>
                  <tr>
                    <th className="cart-image has-text-centered">Item</th>
                    <th className="product">Item Name</th>
                    <th className="price has-text-centered">Cost</th>
                    <th className="category has-text-centered">Category</th>
                    <th className="has-text-centered">Order</th>
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
                          className="button is-outlined is-small"
                          onClick={() => handleOrderAccessoryInv(item)}
                        >
                          <strong>+</strong>
                        </button>
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
      </div>
    </div>
  );
}

export default InventoryShow;
