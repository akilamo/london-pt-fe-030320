// install and  import "readline-sync" npm package before you do exercises

const readlineSync = require('readline-sync');

/**
 * Exercise 1
 *
 * ask user for a name and assign a response to variable {name}
 */

const name = readlineSync.question('Hey there, what\'s your name? ');


//===== DO NOT TOUCH THIS BLOCK =====
console.log(`Hi ${name}!`);
console.log("=====================");
console.log(`Let me do math for you!`);
console.log("=====================");
//===================================


/**
 * Exercise 2
 *
 * offer user to do some math, ask to provide a math symbol and
 * offer a few options: +, -, * or /
 * Save response to {selectedSymbol} variable.
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get correct symbol
 */
readlineSync.setDefaultOptions({limit: ['+', '-', '*', '/']});
const selectedSymbol = readlineSync.question(`Alright ${name}, pick a math symbol among +, -, * or / : `);


/**
 * Exercise 3
 *
 * ask user for the first number and assign response to a variable {number1}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */


 const number1 = readlineSync.questionInt('Now, pick a number: ');

/**
 * Exercise 4
 *
 * ask user for the second number and assign response to a variable {number2}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */

const number2 = readlineSync.questionInt('And another number: ');

/**
 * Exercise 5
 *
 * take numbers that user provided to you and do math based on user
 * selected symbol.
 *
 * show the result to the user
 */

const result = eval(`${number1} ${selectedSymbol} ${number2}`);



console.log("=====================");
console.log(`Here you go, the result is ${result}`);
