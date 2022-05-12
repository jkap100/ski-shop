import React from "react";
import { useNavigate } from "react-router-dom";

function ApparelCart({
  cartApparelObj,
  apparelCart,
  setApparelCart,
  setErrors,
}) {
  const navigate = useNavigate();

  const handleDeleteApparel = (id) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    if (!localStorage.getItem("currentUserId")) {
      navigate("/login");
    } else {
      // console.log(cartSkiObj);
      fetch(`http://localhost:3000/apparels/${cartApparelObj.apparel_id}`, {
        method: "GET",
        headers: headers,
      }).then((r) => {
        if (r.ok) {
          r.json();
        } else {
          r.json().then((error) => setErrors(error.errors));
          navigate("/login");
        }
      });

      console.log(cartApparelObj.add_back);

      const addBackToInvBody = {
        count: cartApparelObj.add_back,
      };
      console.log(addBackToInvBody);

      fetch(`http://localhost:3000/apparels/${cartApparelObj.apparel_id}`, {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify(addBackToInvBody),
      }).then((r) => {
        if (r.ok) {
          console.log("added back to inventory");
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });

      fetch(`http://localhost:3000/user_apparels/${id}`, {
        method: "DELETE",
        headers: headers,
      }).then((r) => {
        if (r.ok) {
          console.log("removed from cart");
          setApparelCart(apparelCart.filter((a) => a.id !== id));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
  };

  return (
    <tbody>
      <tr>
        <td>
          <img src={cartApparelObj.image} alt="not found"></img>
        </td>
        <td className="product">{cartApparelObj.name}</td>
        <td className="category has-text-centered">
          {cartApparelObj.category}
        </td>
        <td className="price has-text-centered">
          ${cartApparelObj.price.toLocaleString("en-US")}
        </td>
        <td className="quantity has-text-centered">
          {cartApparelObj.cart_count}
        </td>
        <td className="quantity has-text-centered">
          $
          {(cartApparelObj.cart_count * cartApparelObj.price).toLocaleString(
            "en-US"
          )}
        </td>
        <td className="has-text-centered">
          <button
            className="button is-black is-small"
            onClick={() => handleDeleteApparel(cartApparelObj.id)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default ApparelCart;
