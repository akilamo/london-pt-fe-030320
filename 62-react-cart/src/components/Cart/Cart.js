import React from "react";
import Item from "./Item/Item";

const Cart = ({ cart, changeCart }) => {
  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {cart.map((item) => (
          <Item key={item.id} item={item} changeCart={changeCart} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
