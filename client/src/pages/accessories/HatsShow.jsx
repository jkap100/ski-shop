import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HatsAll from "../../components/HatsAll";

function HatsShow({
  currentUser,
  accessories,
  setAccessories,
  viewProduct,
  setViewProduct,
  accessoryCartCount,
  setAccessoryCartCount,
  setErrors,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/hats").then((r) => {
      if (r.ok) {
        r.json().then(setAccessories);
      } else {
        r.json().then((error) => setErrors(error.errors));
        navigate("/login");
      }
    });
  }, []);

  const onViewAccessory = (accessory) => {
    fetch(`http://localhost:3000/accessories/${accessory.id}`).then((r) => {
      if (r.ok) {
        r.json().then(setViewProduct);
        navigate("/product_detail");
      } else {
        r.json().then((error) => setErrors(error.errors));
        navigate("/login");
      }
    });
  };

  const onAddAccessoryToCart = (accessory) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    const body = {
      user_id: localStorage.currentUserId,
      accessory_id: accessory.id,
      cart_count: accessoryCartCount,
    };
    !currentUser
      ? navigate("/login")
      : fetch("http://localhost:3000/user_accessories", {
          method: "POST",
          headers: headers,
          body: JSON.stringify(body),
        }).then((r) => {
          if (r.ok) {
            console.log("added to cart");
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
    setAccessoryCartCount(1);
  };

  const allHats = accessories.map((a) => (
    <HatsAll
      key={a.id}
      allAccessoryObj={a}
      handleAddToCart={onAddAccessoryToCart}
      handleViewAccessory={onViewAccessory}
    />
  ));

  return (
    <div className="container">
      <div className="columns is-multiline">{allHats}</div>
    </div>
  );
}

export default HatsShow;
