import React from "react";

function GogglesAll({ allAccessoryObj, handleAddToCart, handleViewAccessory }) {
  return (
    <div className="column is-one-quarter">
      <div className="card mx-2">
        <div className="card-header">
          <span className="card-header-title level is-centered">
            <h3 className="level">
              <strong>{allAccessoryObj.name}</strong>
            </h3>
          </span>
        </div>

        <div className="card-image has-image-centered">
          <div className="">
            <div className="">
              <figure className="">
                <img
                  className="thumbnail"
                  src={allAccessoryObj.image}
                  alt="mountain"
                />
              </figure>
            </div>
          </div>
        </div>

        <div className="card-content">
          <h5>
            <strong>Price:</strong> $
            {allAccessoryObj.price.toLocaleString("en-US")}
          </h5>
          <h5>
            <strong>Category:</strong> {allAccessoryObj.category}
          </h5>
          <h5>
            <strong>Brand:</strong> {allAccessoryObj.brand}
          </h5>
        </div>

        <div className="card-footer is-centered">
          <footer className="card-footer has-text-centered has-background-white">
            <div>
              <button
                className="mt-2 mb-2 ml-5 button is-black is-responsive"
                onClick={() => handleAddToCart(allAccessoryObj)}
              >
                Add to Cart
              </button>
              <button
                className="mt-2 mb-2 ml-5 button is-black is-responsive"
                onClick={() => handleViewAccessory(allAccessoryObj)}
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

export default GogglesAll;
