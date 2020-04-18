/**
 * Exercise 1
 *
 * create a function {generateFibonacci} which will take a parameter
 * that represents a length of an array that needs to be generated
 * 
 * The array must be a Fibonacci sequence:
 * 
 * The next number is found by adding up the two numbers before it, 
 * always starting with 0 and 1.
 *
 * Ex: generateFibonacci(5) // return [0, 1, 1, 2, 3];
 */

const generateFibonacci = (arraylength) => {

    let array = [];

  if (arraylength === 1) {
    array.push(0);
  } else if (arraylength === 2) {
    array.push(0, 1);
  } else {
    array.push(0, 1);
    for (let i = 2; i < arraylength; i++) {
      array.push(array[i - 2] + array[i - 1]);
    }
  }
  return array;
};



/**
 * Exercise 2
 *
 * create a function {isPowerOf} which takes 2 arguments:
 * 
 * number – a number
 * primeNumber – a number (a prime number)
 * 
 * return a Boolean if your number is a power of primeNumber
 *
 * Ex: isPowerOf(27, 3) // return true;
 */


 const isPowerOf = (number, primeNumber) => {
   if (primeNumber ** primeNumber === number) {
     return true;
   } else {
     return false;
   }
 };

