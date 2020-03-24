/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 * */
 
function logProperties(object1) {
    for (const prop in object1) {
        console.log(`${prop}`);
    }
} 

/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */

function getAllValues(object2) {
    
    for (const prop in object2) {
        return Object.values(object2);
    }
}

/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */

function getAllValuesAsString(object3){
    let objectValues = [];
    for (const prop in object3) {
    objectValues = Object.values(object3);
    }

    return objectValues.join(' ');
}

/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * 'PROPERTY: VALUE'
 */
function propertyValueString(obj4) {
        for (const prop in obj4) {
        console.log((`${prop}: ${(obj4[prop])}`)); 
        }
    
}

