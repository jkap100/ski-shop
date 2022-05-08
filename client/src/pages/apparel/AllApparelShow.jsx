import React, { useEffect } from "react";
import ApparelAll from "../../components/ApparelAll";
import { useNavigate } from "react-router-dom";

function AllApparelShow({ apparels, setApparels, setErrors }) {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/apparels").then((r) => {
      if (r.ok) {
        r.json().then(setApparels);
      } else {
        r.json().then((error) => setErrors(error.errors));
        navigate("/login");
      }
    });
  }, []);

  const onAddApparelToCart = (apparel) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    const body = {
      user_id: localStorage.currentUserId,
      apparel_id: apparel.id,
    };

    fetch("http://localhost:3000/user_apparels", {
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
  };

  const allApparel = apparels.map((apparel) => (
    <ApparelAll
      key={apparel.id}
      allApparelObj={apparel}
      handleAddToCart={onAddApparelToCart}
    />
  ));
  return (
    <div className="container">
      <div className="columns is-multiline">{allApparel}</div>
    </div>
  );
}

export default AllApparelShow;
