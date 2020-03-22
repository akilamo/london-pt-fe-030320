/**
 * Exercise 1
 *
 * create an object "user", which has
 * properties "firstName", "lastName" and "age"
 *
 * PS: use console.log() to see the result
 */
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 20
};

/**
 * Exercise 2
 *
 * create an object "allTypes" with a property of types:
 * string, number, array, object, function, boolean
 *
 * PS: use console.log() to see the result
 */
const allTypes = {
    string: "a string",
    number: 2,
    array: ["an","array"],
    object: {
        nestedProp1: 1,
        nestedProp2: 2,
    },
    function: function random () {
        return Math.random();},
    boolean: true,
}


/**
 * Exercise 3
 *
 * create a function "createMovieObject" which takes
 * name, rating and ticketPrice and returns a movie object
 * with these properties
 *
 * PS: use console.log() to see the result
 */

 function createMovieObject (name, rating, ticketPrice) {
     return movie = {
         name,
         rating,
         ticketPrice
     } ;
 }