import React from "react";
import useCollapse from "react-collapsed";

function NewInventoryOrder({
  skiInventory,
  setSkiInventory,
  apparelInventory,
  setApparelInventory,
  accessoryInventory,
  setAccessoryInventory,
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
  setErrors,
}) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const handleSubmit = () => {
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
    };

    console.log(body);
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
        } else {
          window.location.reload(true);
        }
      });
  };

  return (
    <div className="container">
      <div className="collapsible">
        <div className="box">
          <div className="header " {...getToggleProps()}>
            <strong className="has-text-white">
              {isExpanded ? "Collapse" : "Order Ski"}
            </strong>
          </div>
          <div {...getCollapseProps()}>
            <div className="content">
              <div className="is-centered">
                <form onSubmit={handleSubmit}>
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
                      <input
                        className="input"
                        type="textarea"
                        name="description"
                        placeholder="Description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                      ></input>
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
                      <button className="button is-black">Order</button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewInventoryOrder;
