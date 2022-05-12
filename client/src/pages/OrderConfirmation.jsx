import React from "react";
import useCollapse from "react-collapsed";

function OrderConfirmation({ skiCart, apparelCart, accessoryCart, setErrors }) {
  console.log(skiCart);
  console.log(apparelCart);
  console.log(accessoryCart);

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

  const skiArrLength = !skiCart ? 0 : skiCart.length;
  const apparelArrLength = !apparelCart ? 0 : skiCart.length;
  const accessoryArrLength = !accessoryCart ? 0 : skiCart.length;

  const handleOrder = (e) => {
    e.preventDefault();
    console.log("order");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

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
        alert("Order Received");
        // setSkiCart(skiCart.filter((a) => a.id !== id));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
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
                              {item.count}
                            </td>
                            <td className="category has-text-centered">
                              ${parseInt(item.price).toLocaleString("en-US")}
                            </td>
                            <td className="price has-text-centered">
                              $
                              {(item.price * item.count).toLocaleString(
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
                              {item.count}
                            </td>
                            <td className="category has-text-centered">
                              ${parseInt(item.price).toLocaleString("en-US")}
                            </td>
                            <td className="price has-text-centered">
                              $
                              {(item.price * item.count).toLocaleString(
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
                              {item.count}
                            </td>
                            <td className="category has-text-centered">
                              ${parseInt(item.price).toLocaleString("en-US")}
                            </td>
                            <td className="price has-text-centered">
                              $
                              {(item.price * item.count).toLocaleString(
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
