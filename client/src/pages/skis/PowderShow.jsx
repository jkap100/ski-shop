import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PowderSkiAll from "../../components/PowderSkiAll";

function PowderShow({
  currentUser,
  skis,
  setSkis,
  viewProduct,
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
    const body = {
      user_id: localStorage.currentUserId,
      ski_id: ski.id,
      cart_count: skiCartCount,
    };
    !currentUser
      ? navigate("/login")
      : fetch("http://localhost:3000/user_skis", {
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
    <div className="container">
      <div className="columns is-multiline">{allPowderSkis}</div>
    </div>
  );
}

export default PowderShow;
