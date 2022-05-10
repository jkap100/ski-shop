import React from "react";

function SkiCart({ cartSkiObj, skiCart, setErrors }) {
  const handleDeleteSki = (id) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    const body = {
      ski_id: id,
    };

    fetch(`http://localhost:3000/user_skis/${id}`, {
      method: "DELETE",
      headers: headers,
      body: JSON.stringify(body),
    }).then((r) => {
      if (r.ok) {
        console.log("removed from cart");
        window.location.reload(true);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  return (
    <tbody>
      <tr>
        <td>
          <img src={cartSkiObj.image} alt="not found"></img>
        </td>
        <td className="product">{cartSkiObj.name}</td>
        <td className="category has-text-centered">{cartSkiObj.category}</td>
        <td className="price has-text-centered">
          ${cartSkiObj.price.toLocaleString("en-US")}
        </td>
        <td className="quantity has-text-centered">{cartSkiObj.cart_count}</td>
        <td className="quantity has-text-centered">
          ${(cartSkiObj.cart_count * cartSkiObj.price).toLocaleString("en-US")}
        </td>
        <td className="has-text-centered">
          <button
            className="button is-black is-small"
            onClick={() => handleDeleteSki(cartSkiObj.id)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default SkiCart;
