import React, { useState, useEffect } from "react";
import SkiAll from "../../components/SkiAll";
import { useNavigate } from "react-router-dom";

function AllSkisShow({ products, setProducts, setErrors }) {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/skis").then((r) => {
      if (r.ok) {
        r.json().then(setProducts);
      } else {
        r.json().then((error) => setErrors(error.errors));
        navigate("/login");
      }
    });
  }, []);

  const onAddSkiToCart = (ski) => {
    const body = {
      user_id: localStorage.currentUserId,
      ski_id: ski.id,
    };

    fetch("http://localhost:3000/user_skis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((r) => {
      if (r.ok) {
        console.log("added to cart");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  const allSkis = products.map((ski) => (
    <SkiAll key={ski.id} allSkiObj={ski} handleAddToCart={onAddSkiToCart} />
  ));

  return (
    <div className="container">
      <div className="columns is-multiline">{allSkis}</div>
    </div>
  );
}

export default AllSkisShow;
