import React from "react";
import Item from "./Item/Item";

const Store = ({ stock, addToCart }) => {
  return (
    <div>
      <h3>Store</h3>
      <ul>
        {stock.map(item => <Item item={item} addToCart={addToCart} />) } 
      </ul>
    </div>
  );
};

export default Store;
