import React, { useEffect, useState } from "react";

function Ski({ allSkiObj }) {
  return (
    <div className="column is-one-quarter">
      <div className="card mx-2">
        <div className="card-header">
          <span className="card-header-title level is-centered">
            <h3 className="level">
              <strong>{allSkiObj.name}</strong>
            </h3>
          </span>
        </div>

        <div className="card-image has-image-centered">
          <div className="">
            <div className="">
              <figure className="">
                <img
                  className="thumbnail"
                  src={allSkiObj.image}
                  alt="mountain"
                />
              </figure>
            </div>
          </div>
        </div>

        <div className="card-content">
          <h5>
            <strong>Price:</strong> ${allSkiObj.price}
          </h5>
          <h5>
            <strong>Category:</strong> {allSkiObj.category}
          </h5>
          <h5>
            <strong>Brand:</strong> {allSkiObj.brand}
          </h5>
        </div>

        <div className="card-footer is-centered">
          <button className="mt-2 mb-2 ml-5 button is-dark is-responsive">
            Add to Cart
          </button>
          <button className="mt-2 mb-2 ml-5 button is-dark is-responsive">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ski;
