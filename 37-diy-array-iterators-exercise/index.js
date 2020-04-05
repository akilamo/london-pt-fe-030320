/**
 * Exercise #1
 *
 * forEach(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is
 * passed each element and the index.
 *
 */

 const forEach = (array, callback) => {
    array.forEach(element => (callback(element, array.indexOf(element))));

 }


/**
 * Exercise #2
 *
 * map(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * whatever was returned from each
 * time the callback was invoked.
 *
 */

const map = (array,callback) => {
    let newArray = [];
    for (let i=0; i<array.length; i++) {
        let element = array[i];
        let newElement = callback(element, i);
        newArray.push(newElement);
    }
return newArray;
}

/**
 * Exercise #3
 *
 * filter(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * _only_ the elements for which the
 * callback returned a truthy value.
 *
 */  


const filter = (array, callback) => {
    let newArray = [];
    for (let i=0; i < array.length; i++) {
        let element = array[i];
           if (callback(element, i)) {
            newArray.push(element);
        }
    }

 return newArray;
 
}   

/**
 * Exercise #4
 *
 * find(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _first element_
 * for which the callback returns a
 * truthy value.
 *

==============================
FOR LOOP (Using indexOf // With if statement) 

const find = (array, callback) => { 
    for (const element of array) {
        if (callback(element, array.indexOf(element))) {
            return element;
        }     
    }
} 
=================================
*/

const find = (array, callback) => {
    for (let i=0; i< array.length; i++) {
        let element = array[i];
        if (callback(element, i)) {
            return element;
        }
    }

}

/**
 * Exercise #5
 *
 * findIndex(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _index of
 * the first element_ for which the
 * callback returns a truthy value.
 *
 */

/*const findIndex = (array, callback) => array.findIndex(element => (callback(element, array.indexOf(element)))); */


const findIndex = (array, callback) => {
    for (let i=0; i< array.length; i++) {
        let element = array[i];
        if (callback(element, i)) {
            return i;
        }
    }

}


/**
 * Exercise #6
 *
 * every(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if every time the
 * callback was invoked it returned
 * a truthy value.
 *
 */

/* const every = (array, callback) => array.every(element => (callback(element, array.indexOf(element)))); */

 const every = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (!(callback(element, i))) {
            return false
        }
    }
    return true;
}


/**
 * Exercise #7
 *
 * some(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if _any_ time the
 * callback was invoked it returned
 * a truthy value.
 *
 */
/* const some = (array, callback) => array.some(element => (callback(element, array.indexOf(element)))); */


 const some = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (callback(element, i)) {
            return true;
        }
    }
    return false;
}


/**
 * Exercise #8
 *
 * reduce(array, callback, initialValue)
 *
 * Reduce is often used for combining
 * values together.
 *
 * `reduce` should take 3 arguments:
 * `array`, `callback` and `initialValue`.
 *
 * The callback is invoked for every
 * element in the array and is passed
 * **the current cumulative value**,
 * each element and the index. Whatever
 * the callback returns is the new
 * cumulative value. The function
 * should return the final cumulative
 * value.
 *
 */

const reduce = (array, callback, initValue = 0) => {

    let cumulative = initValue;

    for (let i = 0; i<array.length; i++) {
        let element = array[i];
       cumulative = callback(cumulative, element,i);
      
    }
return cumulative;

}