import React from "react";

function ApparelAll({ allApparelObj }) {
  return (
    <div className="column is-one-quarter">
      <div className="card mx-2">
        <div className="card-header">
          <span className="card-header-title level is-centered">
            <h3 className="level">{allApparelObj.name}</h3>
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
          <h4>Location: {allApparelObj.price}</h4>
          <h5>Country: {allApparelObj.category}</h5>
          <h6>Vertical feet: {allApparelObj.sku}</h6>
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

export default ApparelAll;
