import React, { useEffect } from "react";
import AccessoryAll from "../../components/AccessoryAll";
import { useNavigate } from "react-router-dom";

function AllAccessoriesShow({ products, setProducts, setErrors }) {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/accessories").then((r) => {
      if (r.ok) {
        r.json().then(setProducts);
      } else {
        r.json().then((error) => setErrors(error.errors));
        navigate("/login");
      }
    });
  }, []);

  const allAccessories = products.map((a) => (
    <AccessoryAll key={a.id} allAccessoryObj={a} />
  ));

  return (
    <div className="container">
      <div className="columns is-multiline">{allAccessories}</div>
    </div>
  );
}

export default AllAccessoriesShow;
