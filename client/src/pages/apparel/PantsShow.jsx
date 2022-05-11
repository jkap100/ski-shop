import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PantsAll from "../../components/PantsAll";

function PantsShow({
  currentUser,
  apparels,
  setApparels,
  viewProduct,
  setViewProduct,
  apparelCartCount,
  setApparelCartCount,
  setErrors,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/pants").then((r) => {
      if (r.ok) {
        r.json().then(setApparels);
      } else {
        r.json().then((error) => setErrors(error.errors));
        navigate("/login");
      }
    });
  }, []);

  const onViewApparel = (apparel) => {
    fetch(`http://localhost:3000/apparels/${apparel.id}`).then((r) => {
      if (r.ok) {
        r.json().then(setViewProduct);
        navigate("/product_detail");
      } else {
        r.json().then((error) => setErrors(error.errors));
        navigate("/login");
      }
    });
  };

  const onAddApparelToCart = (apparel) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };
    const body = {
      user_id: localStorage.currentUserId,
      apparel_id: apparel.id,
      cart_count: apparelCartCount,
    };
    !localStorage.getItem("currentUserId")
      ? navigate("/login")
      : fetch("http://localhost:3000/user_apparels", {
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
    setApparelCartCount(1);
  };
  const allPants = apparels.map((apparel) => (
    <PantsAll
      key={apparel.id}
      allApparelObj={apparel}
      handleAddToCart={onAddApparelToCart}
      handleViewApparel={onViewApparel}
    />
  ));
  return (
    <div className="container">
      <div className="columns is-multiline">{allPants}</div>
    </div>
  );
}

export default PantsShow;
