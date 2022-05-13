import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

function ViewOrder({ viewOrder }) {
  const fillOrder = () => {
    console.log("filled");

    const body = {
      status: "filled",
    };

    fetch(`http://localhost:3000/orders/${viewOrder.id}`, {
      method: "PATCH",
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
          alert("Order Filled");
        }
      });
  };

  return (
    <motion.div
      className="container"
      initial={{ width: 0 }}
      animate={{ width: "100%", height: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-4">
          <div className="tile">
            <div className="tile is-parent is-vertical has-text-centered">
              <article className="tile is-child notification is-white">
                <img
                  className="detail-image"
                  src={viewOrder.image}
                  alt="mountain"
                />
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-light">
              <div className="box">
                <strong className="title">Order Information</strong>
              </div>

              <div className="">
                <strong>SKU: </strong>
                {viewOrder.sku}
              </div>
              <div className="">
                <strong>Quantity: </strong>
                {viewOrder.count}
              </div>
              <div className="">
                <strong>Sales Price: </strong>$
                {viewOrder.price * viewOrder.count}
              </div>
              <div className="">
                <strong>Cost: </strong>${viewOrder.cost * viewOrder.count}
              </div>
              <div className="">
                <strong>Quantity: </strong>
                {viewOrder.count}
              </div>
              <div className="">
                <strong>Order Date: </strong>
                {viewOrder.date}
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-black">
            <div className="content mb-6">
              <div className="box has-text-black">
                <p className="title"> {viewOrder.name}</p>
              </div>
              <div className="box">
                <div className="subtitle">
                  <strong>Shipping Information</strong>
                </div>
                <p className="">
                  <strong>Name: </strong>
                  {viewOrder.first_name} {viewOrder.last_name}
                </p>
                <p className="">
                  <strong>Address: </strong>
                  {viewOrder.address}
                </p>
                <p className="">
                  <strong>City: </strong>
                  {viewOrder.city}
                </p>
                <p className="">
                  <strong>State: </strong>
                  {viewOrder.city}
                </p>
                <p className="">
                  <strong>Zip Code: </strong>
                  {viewOrder.zip}
                </p>
                <p className="">
                  <strong>Order Date: </strong>
                  {viewOrder.date}
                </p>
              </div>

              <div className="content mt-6">
                <div className="box has-text-centered">
                  <button className="button is-black" onClick={fillOrder}>
                    Fill Order
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </motion.div>
  );
}

export default ViewOrder;
