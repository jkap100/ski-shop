import React from "react";
import useCollapse from "react-collapsed";

function Collapsible() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
      <div className="box">
        <div className="header " {...getToggleProps()}>
          <strong className="has-text-white">
            {isExpanded ? "Collapse" : "Order Inventory"}
          </strong>
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
            <div className="is-centered">
              <form>
                <div className="field">
                  <label className="label mt-4">Product Name</label>
                  <p className="control">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      placeholder="Product Name"
                      value=""
                      //   onChange={(event) => setUsername(event.target.value)}
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
                      //   value={password}
                      //   onChange={(event) => setPassword(event.target.value)}
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
                      //   value={password}
                      //   onChange={(event) => setPassword(event.target.value)}
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
                      //   value={password}
                      //   onChange={(event) => setPassword(event.target.value)}
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
                      //   value={password}
                      //   onChange={(event) => setPassword(event.target.value)}
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
                      //   value={password}
                      //   onChange={(event) => setPassword(event.target.value)}
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
                      //   value={password}
                      //   onChange={(event) => setPassword(event.target.value)}
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
                      //   value={password}
                      //   onChange={(event) => setPassword(event.target.value)}
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
                      //   value={password}
                      //   onChange={(event) => setPassword(event.target.value)}
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
                      //   value={password}
                      //   onChange={(event) => setPassword(event.target.value)}
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
  );
}

function InventoryOrder() {
  return (
    <div>
      <Collapsible />
    </div>
  );
}

export default InventoryOrder;
