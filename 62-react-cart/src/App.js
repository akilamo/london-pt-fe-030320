import React, { useState } from "react";
import "./App.css";

import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";

const initialStock = [
  {
    id: 1,
    name: "butter",
    quantity: 20,
  },
  {
    id: 2,
    name: "Apples",
    quantity: 5,
  },
  {
    id: 3,
    name: "Salmon",
    quantity: 13,
  },
  {
    id: 4,
    name: "Soap",
    quantity: 2,
  },
];

const App = () => {
  const [stock, setStock] = useState([...initialStock]);
  const [cart, setCart] = useState([]);
  const stockStatus = [...stock];
  const cartStatus = [...cart];




  return (
      <div className="app">
      <Store stock={stock} addToCart={addToCart} />
      <Cart cart={cart} changeCart={changeCart} />
    </div>
  );
};

export default App;
