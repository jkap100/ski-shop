import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductDetail({
  viewProduct,
  setViewProduct,
  setErrors,
  productCount,
  setProductCount,
}) {
  console.log(`viewProduct: ${viewProduct.name}`);
  console.log(productCount);

  const navigate = useNavigate();
  const [qty, setQty] = useState(0);

  const onAddSkiToCart = (e) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    if (!localStorage.getItem("currentUserId")) {
      navigate("/login");
    } else if (qty > viewProduct.count) {
      alert("Out of Stock");
    } else if (viewProduct.sku >= 1000 && viewProduct.sku <= 1999) {
      console.log("ski");

      const body = {
        user_id: localStorage.currentUserId,
        ski_id: viewProduct.id,
        cart_count: qty,
      };

      fetch("http://localhost:3000/user_skis", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }).then((r) => {
        if (r.ok) {
          console.log("added to cart");
          navigate("/cart");
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });

      const removeFromInventory = viewProduct.count - qty;
      const removeFromInventoryBody = {
        count: removeFromInventory,
      };

      fetch(`http://localhost:3000/skis/${viewProduct.id}`, {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify(removeFromInventoryBody),
      }).then((r) => {
        if (r.ok) {
          console.log("added to cart");
          navigate("/cart");
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    } else if (viewProduct.sku >= 2000 && viewProduct.sku <= 2999) {
      console.log("apparel");

      const body = {
        user_id: localStorage.currentUserId,
        apparel_id: viewProduct.id,
        cart_count: qty,
      };

      fetch("http://localhost:3000/user_apparels", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }).then((r) => {
        if (r.ok) {
          console.log("added to cart");
          navigate("/cart");
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });

      const removeFromInventory = viewProduct.count - qty;
      const removeFromInventoryBody = {
        count: removeFromInventory,
      };

      fetch(`http://localhost:3000/apparels/${viewProduct.id}`, {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify(removeFromInventoryBody),
      }).then((r) => {
        if (r.ok) {
          console.log("added to cart");
          navigate("/cart");
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    } else if (viewProduct.sku >= 3000 && viewProduct.sku <= 3999) {
      console.log("accessory");

      const body = {
        user_id: localStorage.currentUserId,
        accessory_id: viewProduct.id,
        cart_count: qty,
      };

      fetch("http://localhost:3000/user_accessories", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }).then((r) => {
        if (r.ok) {
          console.log("added to cart");
          navigate("/cart");
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });

      const removeFromInventory = viewProduct.count - qty;
      const removeFromInventoryBody = {
        count: removeFromInventory,
      };

      fetch(`http://localhost:3000/accessories/${viewProduct.id}`, {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify(removeFromInventoryBody),
      }).then((r) => {
        if (r.ok) {
          console.log("added to cart");
          navigate("/cart");
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    } else {
      console.log("not valid sku");
    }
  };

  return (
    <div className="container">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-white has-text-centered">
                <img
                  className="detail-image"
                  src={viewProduct.image}
                  alt="mountain"
                />
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-light">
              <strong>Description</strong>
              <div className="content">{viewProduct.description}</div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-black has-text-centered">
            <div className="content mb-6">
              <div className="box has-text-black">
                <p className="title"> {viewProduct.name}</p>
              </div>
              <div className="">
                <p className="subtitle">{viewProduct.brand}</p>
                <p className="subtitle">
                  {viewProduct.sex} : {viewProduct.size}
                </p>
                <p className="subtitle">
                  ${parseInt(viewProduct.price).toLocaleString("en-US")}
                </p>
                <p className="subtitle">Left in Stock: {viewProduct.count}</p>
              </div>
              <div className="columns is-centered">
                <div className="content mt-6">
                  <div className="box">
                    <form onSubmit={onAddSkiToCart}>
                      <div className="field">
                        <div className="box has-text-centered">
                          <label className="label">Quantity</label>
                          <p className="control">
                            <div className="select">
                              <select
                                className="input"
                                type="text"
                                name="qty"
                                placeholder="qty"
                                onChange={(event) => setQty(event.target.value)}
                              >
                                <option>-</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                              </select>
                            </div>
                          </p>
                        </div>
                      </div>

                      <div className="field">
                        <div className="box has-text-centered">
                          <p className="control">
                            <button className="button is-black">
                              Add to Cart
                            </button>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
