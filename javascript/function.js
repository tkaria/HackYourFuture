
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
