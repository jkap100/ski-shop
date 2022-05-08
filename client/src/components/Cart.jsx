import React from "react";

function Cart({ cartObj, setErrors }) {
  //   console.log(cartObj);

  const handleDeleteSki = (id) => {
    console.log(id);
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
        window.location.reload(true);
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
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  const cartAccessories = cartObj.accessories.map(
    (accessory) => accessory.price
  );

  const cartApparels = cartObj.apparels.map((apparel) => apparel.price);

  const cartSkis = cartObj.skis.map((ski) => ski.price);

  const initialValue = 0;
  const totalAccessoryPrice = cartAccessories.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  const totalApparelPrice = cartApparels.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  const totalSkiPrice = cartSkis.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  const grandTotal = totalSkiPrice + totalApparelPrice + totalAccessoryPrice;

  return (
    <div className="container">
      <div className="column">
        <div className="box">
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th className="product">Item Name</th>
                <th className="price">Price</th>
                <th className="category">Category</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartObj.skis.map((item, index) => (
                <tr key={index}>
                  <td className="product">{item.name}</td>
                  <td className="price">{item.price}</td>
                  <td className="category">{item.category}</td>
                  <td>
                    <button
                      className="button is-black is-small"
                      onClick={() => handleDeleteSki(item.id)}
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
              Subtotal - Skis : ${totalSkiPrice}
            </h3>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="box">
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th className="product">Item Name</th>
                <th className="price">Price</th>
                <th className="category">Category</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartObj.apparels.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <button
                      className="button is-black is-small"
                      onClick={() => handleDeleteApparel(item.id)}
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
              Subtotal - Apparel : ${totalApparelPrice}
            </h3>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="box">
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th className="product">Item Name</th>
                <th className="price">Price</th>
                <th className="category">Category</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartObj.accessories.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <button
                      className="button is-black is-small"
                      onClick={() => handleDeleteAccessory(item.id)}
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
              Subtotal - Accessories : ${totalAccessoryPrice}
            </h3>
          </div>
        </div>
      </div>
      <div className="box">
        <h3 className="title is-4 has-text-black">
          Grand Total : ${grandTotal}
        </h3>
      </div>
    </div>
  );
}

export default Cart;
