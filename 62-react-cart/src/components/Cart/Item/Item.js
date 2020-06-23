import React, { useState, useEffect } from "react";

const Item = ({ changeCart, item }) => {
  const [quantity, setQuantity] = useState(0);


  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);


  const deleteItem = () => {
    changeCart(item.id, item, quantity);
  };

  const changeQuantity = (event) => {
    setQuantity(event.target.value)
  }

  const updateQuantity = () => {
    changeCart(item, quantity);

  }

  return (
    <li>
      <p>{item.name}</p>
      <input
        type="number"
        min="0"
        max={item.quantity}
        value={quantity}
        onChange={changeQuantity}
      />
      <button onClick={updateQuantity}>
        Update
      </button>
      <button onClick={deleteItem}>Delete</button>
    </li>
  );
};

export default Item;
