import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PowderSkiAll from "../../components/PowderSkiAll";
import { motion } from "framer-motion/dist/framer-motion";

function PowderShow({
  skis,
  setSkis,
  setViewProduct,
  skiCartCount,
  setSkiCartCount,
  setErrors,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/powder_skis").then((r) => {
      if (r.ok) {
        r.json().then(setSkis);
      } else {
        r.json().then((error) => setErrors(error.errors));
        navigate("/login");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onViewSki = (ski) => {
    fetch(`http://localhost:3000/skis/${ski.id}`).then((r) => {
      if (r.ok) {
        r.json().then(setViewProduct);
        navigate("/product_detail");
      } else {
        r.json().then((error) => setErrors(error.errors));
        navigate("/login");
      }
    });
  };

  const onAddSkiToCart = (ski) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    if (!localStorage.getItem("currentUserId")) {
      navigate("/login");
    } else if (ski.count < 1) {
      alert("Out of Stock");
      console.log(ski.count);
    } else {
      const body = {
        user_id: localStorage.currentUserId,
        ski_id: ski.id,
        cart_count: skiCartCount,
      };

      !localStorage.getItem("currentUserId")
        ? navigate("/login")
        : fetch("http://localhost:3000/user_skis", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body),
          }).then((r) => {
            if (r.ok) {
              alert("Added to cart");
              // fetch("http://localhost:3000/powder_skis").then((r) => {
              //   if (r.ok) {
              //     r.json().then(setSkis);
              //   } else {
              //     r.json().then((error) => setErrors(error.errors));
              //     navigate("/login");
              //   }
              // });
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });

      const removeFromInventory = ski.count - 1;
      const removeFromInventoryBody = {
        count: removeFromInventory,
      };

      fetch(`http://localhost:3000/skis/${ski.id}`, {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify(removeFromInventoryBody),
      }).then((r) => {
        if (r.ok) {
          fetch("http://localhost:3000/powder_skis").then((r) => {
            if (r.ok) {
              r.json().then(setSkis);
              // fetch("http://localhost:3000/powder_skis").then((r) => {
              //   if (r.ok) {
              //     r.json().then(setSkis);
              //   } else {
              //     r.json().then((error) => setErrors(error.errors));
              //     navigate("/login");
              //   }
              // });
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

    setSkiCartCount(1);
  };

  const allPowderSkis = skis.map((ski) => (
    <PowderSkiAll
      key={ski.id}
      allSkiObj={ski}
      handleAddToCart={onAddSkiToCart}
      handleViewSki={onViewSki}
    />
  ));

  return (
    <motion.div
      className="container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <div className="columns is-multiline">{allPowderSkis}</div>
    </motion.div>
  );
}

export default PowderShow;
