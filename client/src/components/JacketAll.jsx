import React from "react";

function JacketAll({ allApparelObj, handleAddToCart, handleViewApparel }) {
  return (
    <div className="column is-one-quarter">
      <div className="card mx-2">
        <div className="card-header">
          <span className="card-header-title level is-centered">
            <h3 className="level">
              <strong>{allApparelObj.name}</strong>
            </h3>
          </span>
        </div>

        <div className="card-image has-image-centered">
          <div className="">
            <div className="">
              <figure className="">
                <img
                  className="thumbnail"
                  src={allApparelObj.image}
                  alt="mountain"
                />
              </figure>
            </div>
          </div>
        </div>

        <div className="card-content">
          <h5>
            <strong>Price:</strong> $
            {allApparelObj.price.toLocaleString("en-US")}
          </h5>
          <h5>
            <strong>Category:</strong> {allApparelObj.category}
          </h5>
          <h5>
            <strong>Brand:</strong> {allApparelObj.brand}
          </h5>
        </div>

        <div className="card-footer is-centered">
          <footer className="card-footer has-text-centered has-background-white">
            <div>
              <button
                className="mt-2 mb-2 ml-5 button is-black is-responsive"
                onClick={() => handleAddToCart(allApparelObj)}
              >
                Add to Cart
              </button>
              <button
                class
                className="mt-2 mb-2 ml-5 button is-black is-responsive"
                onClick={() => handleViewApparel(allApparelObj)}
              >
                View Details
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default JacketAll;
