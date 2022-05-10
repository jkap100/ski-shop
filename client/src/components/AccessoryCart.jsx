import React from "react";

function AccessoryCart({
  cartAccessoryObj,
  accessoryCart,
  setAccessoryCart,
  setErrors,
}) {
  const handleDeleteAccessory = (id) => {
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
        setAccessoryCart(accessoryCart.filter((a) => a.id !== id));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  return (
    <tbody>
      <tr>
        <td>
          <img src={cartAccessoryObj.image} alt="not found"></img>
        </td>
        <td className="product">{cartAccessoryObj.name}</td>
        <td className="category has-text-centered">
          {cartAccessoryObj.category}
        </td>
        <td className="price has-text-centered">
          ${cartAccessoryObj.price.toLocaleString("en-US")}
        </td>
        <td className="quantity has-text-centered">
          {cartAccessoryObj.cart_count}
        </td>
        <td className="quantity has-text-centered">
          $
          {(
            cartAccessoryObj.cart_count * cartAccessoryObj.price
          ).toLocaleString("en-US")}
        </td>
        <td className="has-text-centered">
          <button
            className="button is-black is-small"
            onClick={() => handleDeleteAccessory(cartAccessoryObj.id)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default AccessoryCart;
