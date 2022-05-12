import React from "react";
import useCollapse from "react-collapsed";

function OrderConfirmation() {
  const AddressSection = (props) => {
    const config = {
      defaultExpanded: props.defaultExpanded || true,
      collapsedHeight: props.collapsedHeight || 0,
    };
    const { getCollapseProps, getToggleProps, isExpanded } =
      useCollapse(config);
    return (
      <div className="collapsible">
        <div className="header" {...getToggleProps()}>
          <div className="title has-text-white">
            Address and Payment Information
          </div>
          <div className="icon">
            <i
              className={
                "fas fa-chevron-circle-" + (isExpanded ? "up" : "down")
              }
            ></i>
          </div>
        </div>
        <div {...getCollapseProps()}>
          <div className="content">{props.children}</div>
        </div>
      </div>
    );
  };

  const handleOrder = (e) => {
    e.preventDefault();
    console.log("order");
  };

  return (
    <div className="container">
      <div className="columns">
        <div className="column has-background-black">first column</div>

        <div className="column has-text-centered">
          <div className="box has-text-left">
            <div className="title box has-background-black has-text-white has-text-centered">
              Shipping and Payment Information
            </div>
            <form onSubmit={handleOrder}>
              <div className="is-expanded">
                <label className="label mr-3 ml-3">Name</label>
                <div className="field is-grouped is-grouped-multiline mb-4 mr-3 ml-3">
                  <p className="control ">
                    <input
                      className="input"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      // value={username}
                      // onChange={(event) => setUsername(event.target.value)}
                    ></input>
                  </p>
                  {/* <label className="label">Last Name</label> */}
                  <p className="control ">
                    <input
                      className="input"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      // value={username}
                      // onChange={(event) => setUsername(event.target.value)}
                    ></input>
                  </p>
                </div>

                <div className="field mr-3 ml-3">
                  <label className="label">Address</label>
                  <p className="control ">
                    <input
                      className="input"
                      type="text"
                      name="address"
                      placeholder="Address"
                      // value={username}
                      // onChange={(event) => setUsername(event.target.value)}
                    ></input>
                  </p>
                </div>

                <div className="field is-grouped is-grouped-multiline mr-3 ml-3 mb-4">
                  <p className="control ">
                    <input
                      className="input"
                      type="text"
                      name="city"
                      placeholder="City"
                      // value={username}
                      // onChange={(event) => setUsername(event.target.value)}
                    ></input>
                  </p>
                  {/* <label className="label">Last Name</label> */}
                  <p className="control ">
                    <input
                      className="input"
                      type="text"
                      name="state"
                      placeholder="State"
                      // value={username}
                      // onChange={(event) => setUsername(event.target.value)}
                    ></input>
                  </p>
                  <p className="control ">
                    <input
                      className="input"
                      type="text"
                      name="zip"
                      placeholder="Zip Code"
                      // value={username}
                      // onChange={(event) => setUsername(event.target.value)}
                    ></input>
                  </p>
                </div>

                <div className="field mr-3 ml-3">
                  <label className="label">Payment Information</label>
                  <p className="control ">
                    <input
                      className="input"
                      type="text"
                      name="creditCard"
                      placeholder="Card Number"
                      // value={username}
                      // onChange={(event) => setUsername(event.target.value)}
                    ></input>
                  </p>
                </div>

                <div className="field is-grouped is-grouped-multiline ml-3 mr-3 mb-4">
                  <p className="control ">
                    <input
                      className="input"
                      type="text"
                      name="ccv"
                      placeholder="CCV"
                      // value={username}
                      // onChange={(event) => setUsername(event.target.value)}
                    ></input>
                  </p>
                  {/* <label className="label">Last Name</label> */}
                  <p className="control ">
                    <input
                      className="input"
                      type="text"
                      name="expiration"
                      placeholder="Expiration"
                      // value={username}
                      // onChange={(event) => setUsername(event.target.value)}
                    ></input>
                  </p>
                  <p className="control ">
                    <input
                      className="input"
                      type="text"
                      name="ccZip"
                      placeholder="Zip Code"
                      // value={username}
                      // onChange={(event) => setUsername(event.target.value)}
                    ></input>
                  </p>
                </div>
                <div className="field ml-3 mb-4">
                  <p className="control">
                    <button className="button is-black">Submit Order</button>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
