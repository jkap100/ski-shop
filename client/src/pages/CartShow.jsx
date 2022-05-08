import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CartShow({
  skis,
  setSkis,
  apparels,
  setApparels,
  accessories,
  setAccessories,
  cart,
  setCart,
  setErrors,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    fetch("http://localhost:3000/users", {
      method: "GET",
      headers: headers,
    }).then((r) => {
      if (r.ok) {
        r.json().then(setCart);
      } else {
        r.json().then((error) => setErrors(error.errors));
        // navigate("/login");
      }
    });
  }, []);

  return <div>Cart</div>;
}

export default CartShow;
