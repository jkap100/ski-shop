import React, { useEffect } from "react";
import AccessoryAll from "../../components/AccessoryAll";

function AllAccessoriesShow({ accessories, setAccessories, setErrors }) {
  useEffect(() => {
    fetch("http://localhost:3000/accessories").then((r) => {
      if (r.ok) {
        r.json().then(setAccessories);
      } else {
        r.json().then((error) => setErrors(error.errors));
      }
    });
  }, []);

  const allAccessories = accessories.map((a) => (
    <AccessoryAll key={a.id} allAccessoryObj={a} />
  ));

  return (
    <div className="container">
      <div className="columns is-multiline">{allAccessories}</div>
    </div>
  );
}

export default AllAccessoriesShow;
