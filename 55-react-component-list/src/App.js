import React from "react";
import "./App.css";

// eslint-disable-next-line
const APP_TITLE = "Awesome Pet Shop";

/**
 * Exercise: 1
 *
 * 1. Create a list element and render all animals as list items.
 *
 * Exercise 2
 *
 * 1. Display the APP_TITLE in an h1
 * 2. Display today's date in a p
 */

 const date = new Date().toLocaleDateString();
 const App = () => {
   // eslint-disable-next-line
   const animals = ["cat", "dog", "giraffe", "pig", "lion", "rabbit"];
   return (
     <div className="app">
       <h1>{APP_TITLE}</h1>
       <p>{date}</p>
       <ul>
         {animals.map((animal) => (
           <li key={animal}>{animal}</li>
         ))}
       </ul>
    </div>
   );
 };

 export default App;
