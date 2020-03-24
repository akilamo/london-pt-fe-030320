/* ===================================== */
/* For these exercises use "for of" loop */
/* ===================================== */

/**
 * Exercise 1
 *
 * create a function {getIntegersOnly} which takes an array
 * as a param, get all integers from this array and return
 * a new array with these integers. If there is no integers it should return
 * empty array.
 */


function getIntegersOnly(anArray) {

 let newArray =[];

    for (const item of anArray) {
        if(Number.isInteger(item)) {
            newArray.push(item);
        } 
    }
    return newArray;
}


/**
 * Exercise 2
 * create a function {getEvenNumbers}, which takes an array of integers
 * and returns a new array with even numbers only, if there is no even
 * integers it should return an empty array
 */

function getEvenNumbers(anArray2) {

    let newArray2 =[];
   
       for (const item of anArray2) {
           if(item %2 == 0 && item!==0) {
               newArray2.push(item);
           } 
       }
       return newArray2;
   }



/**
 * Exercise 3
 *
 * create a function {getEvenNumbersFromMixedArray},
 * which takes an array of values with different types and returns
 * a new array with even numbers only, if there is no even integers it
 * should return an empty array
 */

function getEvenNumbersFromMixedArray(anArray3) {

    let newArray3 =[];
   
       for (const item of anArray3) {
           if(Number.isInteger(item) && (item %2 == 0) && item!==0) {
               newArray3.push(item);
           } 
       }
       return newArray3;
   }


/**
 * Exercise 4
 * create a function {getOddNumbers}, which takes an array of integers
 * and returns a new array with odd numbers only, if there is no odd
 * integers it should return an empty array
 */
function getOddNumbers(anArray4) {

    let newArray4 =[];
   
       for (const item of anArray4) {
           if(item %2 == 1 && item!==0) {
               newArray4.push(item);
           } 
       }
       return newArray4;
   }

/**
 * Exercise 5
 * create a function {evenOddTransform} which takes
 * array of integers as a param. Take each integer
 * and if it's odd add 1, if it's even subtract 1
 *
 * If your param is [1,2,3,4,5] the result should be
 * [2,1,4,3,6]
 */

function evenOddTransform(anArray5) {

    let newArray5 =[];
   
       for (const item of anArray5) {
           if(item %2 == 1 && item!==0) {
            newArray5.push(item+1);
           } else {
             newArray5.push(item-1);
           }
       }
       return newArray5;
   }