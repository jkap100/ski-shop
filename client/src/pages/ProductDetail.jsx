import React from "react";

function ProductDetail({ viewProduct, setViewProduct }) {
  return (
    <div className="container">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-7">
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
              </div>
              <div className="columns is-centered">
                <div className="content mt-6">
                  <div className="box">
                    <form onSubmit="">
                      <div className="field">
                        <div className="box has-text-centered">
                          <label className="label">Quantity</label>
                          <p className="control">
                            <div className="select">
                              <select
                                className="input"
                                type="text"
                                name="username"
                                placeholder="Username"
                                // value={username}
                                // onChange={(event) => setUsername(event.target.value)}
                              >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
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
