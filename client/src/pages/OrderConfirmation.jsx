import React from "react";
import useCollapse from "react-collapsed";

function OrderConfirmation({ skiCart, apparelCart, accessoryCart, setErrors }) {
  // console.log(skiCart);
  console.log(apparelCart);
  // console.log(accessoryCart);

  const skiOrder = !skiCart
    ? console.log("nothing in ski cart")
    : skiCart.map((ski) => ski);
  // console.log(skiOrder);

  const apparelOrder = !apparelCart
    ? console.log("nothing in ski cart")
    : apparelCart.map((apparel) => apparel);
  // console.log(apparelOrder);

  const accessoryOrder = !accessoryCart
    ? console.log("nothing in ski cart")
    : accessoryCart.map((accessory) => accessory);
  // console.log(accessoryOrder);

  const skiPrice = !skiCart
    ? console.log("nothing in ski cart")
    : skiCart.map((ski) => ski.price);
  const skiCount = !skiCart
    ? console.log("nothing in ski cart")
    : skiCart.map((ski) => ski.cart_count);

  const apparelPrice = !apparelCart
    ? console.log("nothing apparel in ski cart")
    : apparelCart.map((apparel) => apparel.price);

  const apparelCount = !skiCart
    ? console.log("nothing in ski cart")
    : apparelCart.map((apparel) => apparel.cart_count);

  const accessoryPrice = !accessoryCart
    ? console.log("nothing in accessory cart")
    : accessoryCart.map((accessory) => accessory.price);

  const accessoryCount = !skiCart
    ? console.log("nothing in accessory cart")
    : accessoryCart.map((accessory) => accessory.cart_count);

  let totalSkiPrice = 0;
  let totalApparelPrice = 0;
  let totalAccessoryPrice = 0;

  const skiArrLength = !skiCart ? 1 : skiCart.length;
  const apparelArrLength = !apparelCart ? 1 : skiCart.length;
  const accessoryArrLength = !accessoryCart ? 1 : skiCart.length;

  const handleOrder = (e) => {
    e.preventDefault();
    console.log("order");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };
    // for (let i = 0; i < skiOrder.length; i++) {
    //   // console.log(i);

    //   const body = {
    //     sku: skiOrder[i].sku,
    //     name: skiOrder[i].name,
    //     price: skiOrder[i].price,
    //     cost: skiOrder[i].cost,
    //     size: skiOrder[i].size,
    //     category: skiOrder[i].category,
    //     sex: skiOrder[i].sex,
    //     image: skiOrder[i].image,
    //     brand: skiOrder[i].brand,
    //     count: skiOrder[i].cart_count,
    //     user_id: skiOrder[i].user_id,
    //   };
    //   console.log(body);

    //   fetch(`http://localhost:3000/orders`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${localStorage.token}`,
    //     },
    //     body: JSON.stringify(body),
    //   })
    //     .then((response) => response.json())
    //     .then((result) => {
    //       if (result.error) {
    //         console.error(result.error);
    //       } else {
    //       }
    //     });
    // }

    for (let i = 0; i < apparelOrder.length; i++) {
      const body = {
        sku: apparelOrder[i].sku,
        name: apparelOrder[i].name,
        price: apparelOrder[i].price,
        cost: apparelOrder[i].cost,
        size: apparelOrder[i].size,
        category: apparelOrder[i].category,
        sex: apparelOrder[i].sex,
        image: apparelOrder[i].image,
        brand: apparelOrder[i].brand,
        count: apparelOrder[i].cart_count,
        user_id: apparelOrder[i].user_id,
      };

      fetch(`http://localhost:3000/orders`, {
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
          }
        });
    }

    for (let i = 0; i < accessoryOrder.length; i++) {
      // console.log(i);

      const body = {
        sku: accessoryOrder[i].sku,
        name: accessoryOrder[i].name,
        price: accessoryOrder[i].price,
        cost: accessoryOrder[i].cost,
        size: accessoryOrder[i].size,
        category: accessoryOrder[i].category,
        sex: accessoryOrder[i].sex,
        image: accessoryOrder[i].image,
        brand: accessoryOrder[i].brand,
        count: accessoryOrder[i].cart_count,
        user_id: accessoryOrder[i].user_id,
      };
      console.log(body);

      fetch(`http://localhost:3000/orders`, {
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
          }
        });
    }

    fetch(`http://localhost:3000/user_skis`, {
      method: "DELETE",
      headers: headers,
    }).then((r) => {
      if (r.ok) {
        console.log("removed from cart");
        // setSkiCart(skiCart.filter((a) => a.id !== id));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });

    fetch(`http://localhost:3000/user_apparels`, {
      method: "DELETE",
      headers: headers,
    }).then((r) => {
      if (r.ok) {
        console.log("removed from cart");
        // setSkiCart(skiCart.filter((a) => a.id !== id));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });

    fetch(`http://localhost:3000/user_accessories`, {
      method: "DELETE",
      headers: headers,
    }).then((r) => {
      if (r.ok) {
        // alert("Order Received");
        // setSkiCart(skiCart.filter((a) => a.id !== id));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });

    alert("Order Received");
  };

  for (let i = 0; i < skiArrLength; i++) {
    totalSkiPrice += skiPrice[i] * skiCount[i];
  }

  for (let i = 0; i < apparelArrLength; i++) {
    totalApparelPrice += apparelPrice[i] * apparelCount[i];
  }

  for (let i = 0; i < accessoryArrLength; i++) {
    totalAccessoryPrice += accessoryPrice[i] * accessoryCount[i];
  }

  const grandTotal = totalSkiPrice + totalApparelPrice + totalAccessoryPrice;

  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="columns is-mobile">
            <div className="column">
              <div className="box">
                <table className="table is-fullwidth">
                  <thead>
                    <tr>
                      <th className="cart-image has-text-centered">Item</th>
                      <th className="product">Item Name</th>
                      <th className="category has-text-centered">Category</th>
                      <th className="cost has-text-centered">Quantity</th>
                      <th className="price has-text-centered">Price</th>
                      <th className="price has-text-centered">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!skiCart
                      ? console.log("nothing ski in cart")
                      : skiCart.map((item, index) => (
                          <tr key={index}>
                            <td>
                              <img src={item.image} alt="not found"></img>
                            </td>
                            <td className="product">{item.name}</td>
                            <td className="category has-text-centered">
                              {item.category}
                            </td>
                            <td className="category has-text-centered">
                              {item.cart_count}
                            </td>
                            <td className="category has-text-centered">
                              ${parseInt(item.price).toLocaleString("en-US")}
                            </td>
                            <td className="price has-text-centered">
                              $
                              {(item.price * item.cart_count).toLocaleString(
                                "en-US"
                              )}
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
                <div className="box has-background-black">
                  <h3 className="is-4 has-text-white">
                    Subtotal - Ski Inventory Cost : $
                    {totalSkiPrice.toLocaleString("en-US")}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-mobile">
            <div className="column">
              <div className="box">
                <table className="table is-fullwidth">
                  <thead>
                    <tr>
                      <th className="cart-image has-text-centered">Item</th>
                      <th className="product">Item Name</th>
                      <th className="category has-text-centered">Category</th>
                      <th className="cost has-text-centered">Quantity</th>
                      <th className="price has-text-centered">Price</th>
                      <th className="price has-text-centered">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!apparelCart
                      ? console.log("nothing apparel in cart")
                      : apparelCart.map((item, index) => (
                          <tr key={index}>
                            <td>
                              <img src={item.image} alt="not found"></img>
                            </td>
                            <td className="product">{item.name}</td>
                            <td className="category has-text-centered">
                              {item.category}
                            </td>
                            <td className="category has-text-centered">
                              {item.cart_count}
                            </td>
                            <td className="category has-text-centered">
                              ${parseInt(item.price).toLocaleString("en-US")}
                            </td>
                            <td className="price has-text-centered">
                              $
                              {(item.price * item.cart_count).toLocaleString(
                                "en-US"
                              )}
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
                <div className="box has-background-black">
                  <h3 className="is-4 has-text-white">
                    Subtotal - Apparel : $
                    {totalApparelPrice.toLocaleString("en-US")}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-mobile">
            <div className="column">
              <div className="box">
                <table className="table is-fullwidth">
                  <thead>
                    <tr>
                      <th className="cart-image has-text-centered">Item</th>
                      <th className="product">Item Name</th>
                      <th className="category has-text-centered">Category</th>

                      <th className="cost has-text-centered">Quantity</th>
                      <th className="price has-text-centered">Price</th>
                      <th className="price has-text-centered">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!accessoryCart
                      ? console.log("nothing in accessory cart")
                      : accessoryCart.map((item, index) => (
                          <tr key={index}>
                            <td>
                              <img src={item.image} alt="not found"></img>
                            </td>
                            <td className="product">{item.name}</td>
                            <td className="category has-text-centered">
                              {item.Category}
                            </td>
                            <td className="category has-text-centered">
                              {item.cart_count}
                            </td>
                            <td className="category has-text-centered">
                              ${parseInt(item.price).toLocaleString("en-US")}
                            </td>
                            <td className="price has-text-centered">
                              $
                              {(item.price * item.cart_count).toLocaleString(
                                "en-US"
                              )}
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
                <div className="box has-background-black">
                  <h3 className="is-4 has-text-white">
                    Subtotal - Accessories: $
                    {totalAccessoryPrice.toLocaleString("en-US")}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="columns is-mobile">
            <div className="column">
              <div className="box mb-6 ">
                <div className="box has-background-black">
                  <h3 className="title is-4 has-text-white">
                    Grand Total: ${grandTotal.toLocaleString("en-US")}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="box has-text-left">
            <div className="title box has-background-black has-text-white has-text-centered">
              Shipping and Payment Information
            </div>
            <form onSubmit={handleOrder}>
              <div className="is-expanded">
                <label className="label mr-3 ml-3">Name</label>
                <div className="field is-grouped is-grouped-multiline mb-4 mr-3 ml-3">
                  <p className="control ">
                    <input
                      className="input"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      // value={username}
                      // onChange={(event) => setUsername(event.target.value)}
                    ></input>
                  </p>
                  {/* <label className="label">Last Name</label> */}
                  <p className="control ">
                    <input
                      className="input"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      // value={username}
                      // onChange={(event) => setUsername(event.target.value)}
                    ></input>
                  </p>
                </div>

                <div className="field mr-3 ml-3">
                  <label className="label">Address</label>
                  <p className="control ">
                    <input
                      className="input"
                      type="text"
                      name="address"
                      placeholder="Address"
                      // value={username}
                      // onChange={(event) => setUsername(event.target.value)}
                    ></input>
                  </p>
                </div>

                <div className="field is-grouped mr-3 ml-3 is-grouped-multiline mb-4">
                  <p className="control ">
                    <input
                      className="input"
                      type="text"
                      name="city"
                      placeholder="City"
                      // value={username}
                      // onChange={(event) => setUsername(event.target.value)}
                    ></input>
                  </p>
                  {/* <label className="label">Last Name</label> */}
                  <p className="control ">
                    <input
                      className="input"
                      type="text"
                      name="state"
                      placeholder="State"
                      // value={username}
                      // onChange={(event) => setUsername(event.target.value)}
                    ></input>
                  </p>
                  <p className="control ">
                    <input
                      className="input"
                      type="text"
                      name="zip"
                      placeholder="Zip Code"
                      // value={username}
                      // onChange={(event) => setUsername(event.target.value)}
                    ></input>
                  </p>
                </div>

                <div className="field mr-3 ml-3">
                  <label className="label">Payment Information</label>
                  <p className="control ">
                    <input
                      className="input"
                      type="text"
                      name="creditCard"
                      placeholder="Card Number"
                      // value={username}
                      // onChange={(event) => setUsername(event.target.value)}
                    ></input>
                  </p>
                </div>

                <div className="field is-grouped is-grouped-multiline ml-3 mr-3 mb-4">
                  <p className="control ">
                    <input
                      className="input"
                      type="text"
                      name="ccv"
                      placeholder="CCV"
                      // value={username}
                      // onChange={(event) => setUsername(event.target.value)}
                    ></input>
                  </p>
                  {/* <label className="label">Last Name</label> */}
                  <p className="control ">
                    <input
                      className="input"
                      type="text"
                      name="expiration"
                      placeholder="Expiration"
                      // value={username}
                      // onChange={(event) => setUsername(event.target.value)}
                    ></input>
                  </p>
                  <p className="control ">
                    <input
                      className="input"
                      type="text"
                      name="ccZip"
                      placeholder="Zip Code"
                      // value={username}
                      // onChange={(event) => setUsername(event.target.value)}
                    ></input>
                  </p>
                </div>
                <div className="field ml-3 mb-4">
                  <p className="control">
                    <button className="button is-black">Submit Order</button>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
