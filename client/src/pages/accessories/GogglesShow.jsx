import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GogglesAll from "../../components/GogglesAll";
import { motion } from "framer-motion/dist/framer-motion";

function GogglesShow({
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
    fetch("http://localhost:3000/goggles").then((r) => {
      if (r.ok) {
        r.json().then(setAccessories);
      } else {
        r.json().then((error) => setErrors(error.errors));
        navigate("/login");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    if (!localStorage.getItem("currentUserId")) {
      navigate("/login");
    } else if (accessory.count < 1) {
      alert("Out of Stock");
      console.log(accessory.count);
    } else {
      const body = {
        user_id: localStorage.currentUserId,
        accessory_id: accessory.id,
        cart_count: accessoryCartCount,
      };

      !localStorage.getItem("currentUserId")
        ? navigate("/login")
        : fetch("http://localhost:3000/user_accessories", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body),
          }).then((r) => {
            if (r.ok) {
              alert("Added to cart");
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });

      const removeFromInventory = accessory.count - 1;
      const removeFromInventoryBody = {
        count: removeFromInventory,
      };

      fetch(`http://localhost:3000/accessories/${accessory.id}`, {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify(removeFromInventoryBody),
      }).then((r) => {
        if (r.ok) {
          fetch("http://localhost:3000/goggles").then((r) => {
            if (r.ok) {
              r.json().then(setAccessories);
            } else {
              r.json().then((error) => setErrors(error.errors));
              navigate("/login");
            }
          });
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }

    setAccessoryCartCount(1);
  };

  const allGloves = accessories.map((a) => (
    <GogglesAll
      key={a.id}
      allAccessoryObj={a}
      handleAddToCart={onAddAccessoryToCart}
      handleViewAccessory={onViewAccessory}
    />
  ));

  return (
    <motion.div
      className="container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <div className="columns is-multiline">{allGloves}</div>
    </motion.div>
  );
}

export default GogglesShow;
