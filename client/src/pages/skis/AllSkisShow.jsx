import "bulma/css/bulma.min.css";
import React, { useEffect } from "react";
import SkiAll from "../../components/SkiAll";
import { useNavigate } from "react-router-dom";

function AllSkisShow({
  skis,
  setSkis,
  viewProduct,
  setViewProduct,
  setErrors,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/skis").then((r) => {
      if (r.ok) {
        r.json().then(setSkis);
      } else {
        r.json().then((error) => setErrors(error.errors));
        navigate("/login");
      }
    });
  }, []);

  const onViewSki = (ski) => {
    console.log(ski);
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
    };

    fetch("http://localhost:3000/user_skis", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    }).then((r) => {
      if (r.ok) {
        console.log("added to cart");
        // alert("Added to cart");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  console.log(skis);

  const allSkis = skis.map((ski) => (
    <SkiAll
      key={ski.id}
      allSkiObj={ski}
      handleAddToCart={onAddSkiToCart}
      handleViewSki={onViewSki}
    />
  ));

  return (
    <div className="container">
      <div className="columns is-multiline">{allSkis}</div>
    </div>
  );
}

export default AllSkisShow;
