import React from "react";

function Cart({ cartObj }) {
  //   console.log(cartObj);

  const cartAccessories = cartObj.accessories.map(
    (accessory) => accessory.price
  );

  const initialValue = 0;
  const totalAccessoryPrice = cartAccessories.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  console.log(totalAccessoryPrice);

  return (
    <div className="container">
      <div className="column">
        <h3 className="title is-4">Accessories</h3>
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartObj.accessories.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <button className="button is-black is-small">X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 className="total">
          <strong>Subtotal Accessories : ${totalAccessoryPrice}</strong>
        </h3>
      </div>
      <div className="column">
        <h3 className="title is-4">Accessories</h3>
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartObj.accessories.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <button className="button is-black is-small">X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 className="total">Total : /></h3>
      </div>
    </div>
  );
}

export default Cart;
