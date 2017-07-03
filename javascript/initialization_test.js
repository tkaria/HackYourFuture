// let testValue = ''; false
// let testValue = 0; false
// let testValue = null; // false
// let testValue = undefined; // false
// let testValue; // false
let testValue = ''; 
let someVar = testValue || 'Default';

console.log(someVar);