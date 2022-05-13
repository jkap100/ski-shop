import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";

function NewInventoryOrder({
  currentUser,
  // setProductId,
  name,
  setName,
  sku,
  setSku,
  price,
  setPrice,
  cost,
  setCost,
  size,
  setSize,
  category,
  setCategory,
  sex,
  setSex,
  description,
  setDescription,
  image,
  setImage,
  brand,
  setBrand,
  productCount,
  setProductCount,
  setErrors,
}) {
  const navigate = useNavigate();
  const [button, setButton] = useState("");

  const clearForm = () => {
    setName("");
    setSku("");
    setPrice("");
    setCost("");
    setSize("");
    setCategory("");
    setSex("");
    setDescription("");
    setImage("");
    setBrand("");
    setProductCount("");
  };

  const handleOrder = (e) => {
    e.preventDefault();

    const body = {
      name: name,
      sku: sku,
      price: price,
      cost: cost,
      size: size,
      category: category,
      sex: sex,
      description: description,
      image: image,
      brand: brand,
      count: productCount,
    };

    if (!localStorage.getItem("currentUserId")) {
      navigate("/login");
    } else if (button === 1) {
      console.log("button 1 clicked");
      fetch("http://localhost:3000/skis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.error) {
            console.error(result.error);
            alert(result.error);
          } else {
            alert("Order Placed");
          }
        });
    } else if (button === 2) {
      console.log("button 2 clicked");
      fetch("http://localhost:3000/apparels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.error) {
            console.error(result.error);
          } else {
            alert("Order Placed");
          }
        });
    } else if (button === 3) {
      console.log("button 3 clicked");
      fetch("http://localhost:3000/accessories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.error) {
            console.error(result.error);
          } else {
            alert("Order Placed");
          }
        });
    }
  };

  return (
    <motion.div
      className="container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <div className="mt-4">
        <div className="box mt-4">
          <div className="content">
            <div className="is-centered">
              <form onSubmit={handleOrder}>
                <div className="field has-text-white">
                  <p className="">
                    <button
                      className="button is-black is-Outlined"
                      onClick={clearForm}
                    >
                      Clear Form
                    </button>
                  </p>
                </div>
                <div className="field">
                  <label className="label mt-4">Product Name</label>
                  <p className="control">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      placeholder="Product Name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    ></input>
                  </p>
                </div>

                <div className="field">
                  <label className="label">SKU</label>
                  <p className="control">
                    <input
                      className="input"
                      type="text"
                      name="sku"
                      placeholder="SKU"
                      value={sku}
                      onChange={(event) => setSku(event.target.value)}
                    ></input>
                  </p>
                </div>

                <div className="field">
                  <label className="label">Price</label>
                  <p className="control">
                    <input
                      className="input"
                      type="text"
                      name="price"
                      placeholder="Price"
                      value={price}
                      onChange={(event) => setPrice(event.target.value)}
                    ></input>
                  </p>
                </div>

                <div className="field">
                  <label className="label">Cost</label>
                  <p className="control">
                    <input
                      className="input"
                      type="text"
                      name="cost"
                      placeholder="Cost"
                      value={cost}
                      onChange={(event) => setCost(event.target.value)}
                    ></input>
                  </p>
                </div>

                <div className="field">
                  <label className="label">Quantity</label>
                  <p className="control">
                    <input
                      className="input"
                      type="text"
                      name="quantity"
                      placeholder="Quantity"
                      value={productCount}
                      onChange={(event) => setProductCount(event.target.value)}
                    ></input>
                  </p>
                </div>

                <div className="field">
                  <label className="label">Size</label>
                  <p className="control">
                    <input
                      className="input"
                      type="text"
                      name="size"
                      placeholder="Size"
                      value={size}
                      onChange={(event) => setSize(event.target.value)}
                    ></input>
                  </p>
                </div>

                <div className="field">
                  <label className="label">Category</label>
                  <p className="control">
                    <input
                      className="input"
                      type="text"
                      name="category"
                      placeholder="Category"
                      value={category}
                      onChange={(event) => setCategory(event.target.value)}
                    ></input>
                  </p>
                </div>

                <div className="field">
                  <label className="label">Sex</label>
                  <p className="control">
                    <input
                      className="input"
                      type="text"
                      name="sex"
                      placeholder="Sex"
                      value={sex}
                      onChange={(event) => setSex(event.target.value)}
                    ></input>
                  </p>
                </div>

                <div className="field">
                  <label className="label">Description</label>
                  <p className="control">
                    <textarea
                      className="textarea"
                      type="textarea"
                      name="description"
                      placeholder="Description"
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                    ></textarea>
                  </p>
                </div>

                <div className="field">
                  <label className="label">Image</label>
                  <p className="control">
                    <input
                      className="input"
                      type="text"
                      name="image"
                      placeholder="Image URL"
                      value={image}
                      onChange={(event) => setImage(event.target.value)}
                    ></input>
                  </p>
                </div>

                <div className="field">
                  <label className="label">Brand</label>
                  <p className="control">
                    <input
                      className="input"
                      type="text"
                      name="brand"
                      placeholder="Brand"
                      value={brand}
                      onChange={(event) => setBrand(event.target.value)}
                    ></input>
                  </p>
                </div>

                <div className="field">
                  <p className="control">
                    <button
                      className="button is-black"
                      onClick={() => setButton(1)}
                      name="order skis"
                      value="order skis"
                    >
                      Order Skis
                    </button>
                    <button
                      className="button is-black mx-4"
                      onClick={() => setButton(2)}
                      name="order apparel"
                      value="order apparel"
                    >
                      Order Apparel
                    </button>
                    <button
                      className="button is-black"
                      onClick={() => setButton(3)}
                      name="order accessories"
                      value="order accessories"
                    >
                      Order Accessories
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default NewInventoryOrder;
