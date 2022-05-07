import React from "react";

function AccessoryAll({ allAccessoryObj }) {
  return (
    <div className="column is-one-quarter">
      <div className="card mx-2">
        <div className="card-header">
          <span className="card-header-title level is-centered">
            <h3 className="level">{allAccessoryObj.name}</h3>
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
          <h4>Location: {allAccessoryObj.price}</h4>
          <h5>Country: {allAccessoryObj.category}</h5>
          <h6>Vertical feet: {allAccessoryObj.sku}</h6>
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

export default AccessoryAll;
