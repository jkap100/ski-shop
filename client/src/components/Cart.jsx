import React from "react";

function Cart({ cart, cartObj, setCart, setErrors }) {
  const handleDeleteSki = (id) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    fetch(`http://localhost:3000/user_skis/${id}`, {
      method: "DELETE",
      headers: headers,
    }).then((r) => {
      if (r.ok) {
        console.log("removed from cart");
        console.log(id);
        // console.log(cart.skis.id);
        window.location.reload(true);
        // cartObj = cartObj.skis.filter((r) => r.id !== id);
        // console.log(cartObj);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  const handleDeleteApparel = (id) => {
    console.log(id);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    fetch(`http://localhost:3000/user_apparels/${id}`, {
      method: "DELETE",
      headers: headers,
    }).then((r) => {
      if (r.ok) {
        console.log("removed from cart");
        window.location.reload(true);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  const handleDeleteAccessory = (id) => {
    console.log(id);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    fetch(`http://localhost:3000/user_accessories/${id}`, {
      method: "DELETE",
      headers: headers,
    }).then((r) => {
      if (r.ok) {
        console.log("removed from cart");
        window.location.reload(true);
        // setSkiInventory(skiInventory.filter((r) => r.id !== id));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  const cartAccessoriesPrice = cartObj.accessories.map(
    (accessory) => accessory.price
  );
  const cartAccessoriesCount = cartObj.accessories.map(
    (accessory) => accessory.count
  );

  const cartApparelsPrice = cartObj.apparels.map((apparel) => apparel.price);
  const cartApparelsCount = cartObj.apparels.map((apparel) => apparel.count);

  const cartSkiPrices = cartObj.skis.map((ski) => ski.price);
  const cartSkiCount = cartObj.skis.map((ski) => ski.count);
  // console.log(`Prices: ${cartSkiPrices}`);
  // console.log(`count ${cartSkiCount}`);

  let totalSkiPrice = 0;

  for (let i = 0; i < cartSkiPrices.length; i++) {
    totalSkiPrice += cartSkiCount[i] * cartSkiPrices[i];
  }

  let totalApparelPrice = 0;

  for (let i = 0; i < cartApparelsPrice.length; i++) {
    totalSkiPrice += cartApparelsCount[i] * cartApparelsPrice[i];
  }

  let totalAccessoryPrice = 0;

  for (let i = 0; i < cartAccessoriesCount.length; i++) {
    totalAccessoryPrice += cartAccessoriesCount[i] * cartAccessoriesPrice[i];
  }

  // console.log(totalSkiPrice);

  // const initialValue = 0;
  // const totalAccessoryPrice = cartAccessories.reduce(
  //   (previousValue, currentValue) => previousValue + currentValue,
  //   initialValue
  // );
  // const totalApparelPrice = cartApparels.reduce(
  //   (previousValue, currentValue) => previousValue + currentValue,
  //   initialValue
  // );
  // const totalSkiPrice = cartSkiPrices.reduce(
  //   (previousValue, currentValue) => previousValue + currentValue,
  //   initialValue
  // );

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
            <tbody>
              {cartObj.skis.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.image} alt="not found"></img>
                  </td>
                  <td className="product">{item.name}</td>
                  <td className="category has-text-centered">
                    {item.category}
                  </td>
                  <td className="price has-text-centered">
                    ${item.price.toLocaleString("en-US")}
                  </td>
                  <td className="quantity has-text-centered">
                    {item.count.toLocaleString("en-US")}
                  </td>
                  <td className="quantity has-text-centered">
                    ${(item.count * item.price).toLocaleString("en-US")}
                  </td>
                  <td className="has-text-centered">
                    <button
                      className="button is-black is-small"
                      onClick={() => handleDeleteSki(item.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
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
            <tbody>
              {cartObj.apparels.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.image} alt="not found"></img>
                  </td>
                  <td className="product">{item.name}</td>
                  <td className="category has-text-centered">
                    {item.category}
                  </td>
                  <td className="price has-text-centered">
                    ${item.price.toLocaleString("en-US")}
                  </td>
                  <td className="quantity has-text-centered">
                    {item.count.toLocaleString("en-US")}
                  </td>
                  <td className="quantity has-text-centered">
                    ${(item.count * item.price).toLocaleString("en-US")}
                  </td>
                  <td className="has-text-centered">
                    <button
                      className="button is-black is-small"
                      onClick={() => handleDeleteApparel(item.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
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
            <tbody>
              {cartObj.accessories.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.image} alt="not found"></img>
                  </td>
                  <td className="product">{item.name}</td>
                  <td className="category has-text-centered">
                    {item.category}
                  </td>
                  <td className="price has-text-centered">
                    ${item.price.toLocaleString("en-US")}
                  </td>
                  <td className="quantity has-text-centered">
                    {item.count.toLocaleString("en-US")}
                  </td>
                  <td className="quantity has-text-centered">
                    ${(item.count * item.price).toLocaleString("en-US")}
                  </td>
                  <td className="has-text-centered">
                    <button
                      className="button is-black is-small"
                      onClick={() => handleDeleteAccessory(item.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="box has-background-black">
            <h3 className="title is-4 has-text-white">
              Subtotal - Accessories : $
              {totalAccessoryPrice.toLocaleString("en-US")}
            </h3>
          </div>
        </div>
      </div>
      <div className="box">
        <h3 className="title is-4 has-text-black">
          Grand Total : ${grandTotal.toLocaleString("en-US")}
        </h3>
      </div>
    </div>
  );
}

export default Cart;
