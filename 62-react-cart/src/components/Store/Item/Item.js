import React, { useState, useEffect } from "react";

const Item = ({ item, addToCart }) => {
  const [value, setValue] = useState(0);
  const [disabled, setDisabled] = useState(false);


const handleChange = (e) => setValue(e.target.value)

const clickToCart = () => {
  addToCart(value, item.id)
  setValue(0)
}

useEffect(() => {
  setDisabled(item.quantity < 1);
}, [item.quantity]);

  return (
    <li className={item.id} key={item.id}>
      <p>{item.name}</p>
      <input type="number" 
        min="0" 
        max={item.quantity} 
        value={value} 
        disabled={disabled} 
        onChange={handleChange} />

        <button onClick={clickToCart} disabled={disabled}>
        Add to cart
      </button>
      {disabled ? <p className="disable">Out of stock</p> : ""}
    </li>
  );
};

export default Item;
