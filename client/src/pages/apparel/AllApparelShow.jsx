import React, { useEffect } from "react";
import ApparelAll from "../../components/ApparelAll";

function AllApparelShow({ products, setProducts, setErrors }) {
  useEffect(() => {
    fetch("http://localhost:3000/apparels").then((r) => {
      if (r.ok) {
        r.json().then(setProducts);
      } else {
        r.json().then((error) => setErrors(error.errors));
      }
    });
  }, []);

  const allApparel = products.map((apparel) => (
    <ApparelAll key={apparel.id} allApparelObj={apparel} />
  ));
  return (
    <div className="container">
      <div className="columns is-multiline">{allApparel}</div>
    </div>
  );
}

export default AllApparelShow;
