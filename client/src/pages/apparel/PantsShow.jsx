import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PantsAll from "../../components/PantsAll";

function PantsShow({
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    if (!localStorage.getItem("currentUserId")) {
      navigate("/login");
    } else if (apparel.count < 1) {
      alert("Out of Stock");
      console.log(apparel.count);
    } else {
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
              alert("Added to cart");
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });

      const removeFromInventory = apparel.count - 1;
      const removeFromInventoryBody = {
        count: removeFromInventory,
      };

      fetch(`http://localhost:3000/apparels/${apparel.id}`, {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify(removeFromInventoryBody),
      }).then((r) => {
        if (r.ok) {
          fetch("http://localhost:3000/apparels/pants").then((r) => {
            if (r.ok) {
              r.json().then(setApparels);
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
