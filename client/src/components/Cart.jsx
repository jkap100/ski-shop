import React from "react";
import CartAccessories from "./CartAccessories";

function Cart({ cartObj }) {
  console.log(cartObj);
  const cartItems = cartObj.accessories.map((c) => (
    <CartAccessories key={c.id} cartAccessories={c} />
  ));

  return (
    <div>
      <div>Accessories</div>
      {cartItems}
    </div>
  );
}

export default Cart;
