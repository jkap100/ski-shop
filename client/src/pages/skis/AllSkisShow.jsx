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

  const allSkis = products.map((ski) => (
    <SkiAll key={ski.id} allSkiObj={ski} />
  ));

  return (
    <div className="container">
      <div className="columns is-multiline">{allSkis}</div>
    </div>
  );
}

export default AllSkisShow;
