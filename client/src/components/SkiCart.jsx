import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SkiCart({ cartSkiObj, skiCart, setSkiCart, setErrors }) {
  const navigate = useNavigate();
  const [ski, setSki] = useState("");

  const handleDeleteSki = (id) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    if (!localStorage.getItem("currentUserId")) {
      navigate("/login");
    } else {
      // console.log(cartSkiObj);
      fetch(`http://localhost:3000/skis/${cartSkiObj.ski_id}`, {
        method: "GET",
        headers: headers,
      }).then((r) => {
        if (r.ok) {
          r.json().then(setSki);
          console.log(ski);
        } else {
          r.json().then((error) => setErrors(error.errors));
          navigate("/login");
        }
      });

      console.log(cartSkiObj.add_back);

      const addBackToInvBody = {
        count: cartSkiObj.add_back,
      };
      console.log(addBackToInvBody);

      fetch(`http://localhost:3000/skis/${cartSkiObj.ski_id}`, {
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

      fetch(`http://localhost:3000/user_skis/${id}`, {
        method: "DELETE",
        headers: headers,
      }).then((r) => {
        if (r.ok) {
          console.log("removed from cart");
          setSkiCart(skiCart.filter((a) => a.id !== id));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
  };

  // fetch("http://localhost:3000/skis").then((r) => {
  //       if (r.ok) {
  //         r.json().then(setSki);
  //       } else {
  //         r.json().then((error) => setErrors(error.errors));
  //         navigate("/login");
  //       }
  //     });

  // fetch(`http://localhost:3000/skis/${ski.id}`, {
  //   method: "PATCH",
  //   headers: headers,
  //   body: JSON.stringify(addBackToInvBody),
  // }).then((r) => {
  //   if (r.ok) {
  //     fetch("http://localhost:3000/skis").then((r) => {
  //       if (r.ok) {
  //         r.json().then(setSki);
  //       } else {
  //         r.json().then((error) => setErrors(error.errors));
  //         navigate("/login");
  //       }
  //     });

  // r.json().then((err) => setErrors(err.errors));

  // componentDidUpdate(ski){
  console.log(cartSkiObj.cart_count);
  console.log(ski.count);
  // const count = cartSkiObj.cart_count + ski.count;
  // const addBackToInvBody = {
  //   count: count,
  // };
  // }

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
