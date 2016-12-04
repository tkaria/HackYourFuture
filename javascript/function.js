
/**
 * Declare a function called hello that takes no parameters 
 */
function hello() {
    console.log('I am inside the function');
}

hello();


/** 
 * Declare a function called sayit that takes two parameteres (arguments) 
 */
function sayit(something, anything) {
   console.log(something + ' and ' + anything); 
}

/**
 * Call the sayit function with two parameters 
 */
sayit('This', 43);


/** 
 * Create an object named person with two fields. One field is called first_name and the other 
 * called last_name
 */
var person = { 'first_name': null, 'last_name':  null};

/** 
 * Print the type of person - note that object types are always returned as strings! 
 */
console.log(typeof person);




function equals_else(x) {
    if (x == 10) {
        return 'Equals';
    } else {
        return 'Not equals';
    }
}

function equals(x) {
    if (x == 10) {
        return 'Equals';
    }
    return 'Not equals';
}

console.log(equals(5), ' equals(5) ');
console.log(equals(10), ' equals(10) ');

console.log(equals_else(5), ' equals_else(5) ');
console.log(equals_else(10), ' equals_else(10) ');


