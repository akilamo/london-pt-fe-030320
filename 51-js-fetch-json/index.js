const button = document.querySelector("button");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// // ================================

// URL: https://cat-fact.herokuapp.com/facts

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve` in this directory

/**
 * Exercise 1
 *
 * create a function {fetchData} which takes
 * a URL as an argument and sends a GET request.
 * When you get a response, return an array of facts.
 */


/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. click on a button "Get random facts"
 * 2. view 3 random facts in ".result" element
 */


 const fetchData = async (url) => {
   const response = await fetch(url)
     .then((response) => response.json())

     return response.all;
 };

// console.log(fetchData('https://cat-fact.herokuapp.com/facts'))


 const shuffleAndSlice = (array) => {
   for (let i = array.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [array[i], array[j]] = [array[j], array[i]];
   }

   return array.slice(0,3);
 };



const displayFact = (cat) => {
  const catFact = document.createElement("li");
  catFact.innerHTML = `<p class="fact">${cat.text}</p>
   <p class="author">${cat.user.name.first} ${cat.user.name.last}</p> `;

  result.appendChild(catFact);
};


button.addEventListener("click", async () => {
  result.innerHTML = "";
  let catData = await fetchData(
    "https://cat-fact.herokuapp.com/facts"
  ).then((cats) => shuffleAndSlice(cats));
  // console.log(catData)

  for (const data in catData) {
    displayFact(catData[data]);
  }
});