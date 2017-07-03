var code = 1;
let someOtherVariable = 'Hello';
const PROGRAM_NAME = 'conditional_test1.js';

let color = 'BLACK'; 
let age = Math.PI;

console.log(age);
console.log(age = '0'); // What will this line print? 
console.log(age == 0); // What will this line print? 
// The result of a logical operator like == === < > <= >= || && is a BOOLEAN (true, false)
console.log(age === 0); // What will this line print? 
// === checks the TYPE and VALUE of the variable 

if (code === 1) {
    console.log("a " + color + ((age = 0 || age > 0) ? " used" : " new") + " car")
};

if (code === 1) {
    console.log("a " + color + ((age <= 1 || age > 1) ? " used" : " new") + " car")
};

function foo(x) {
    if (x === 1) {
        console.log('x is 1\n');
        console.log('I am doing something else');
    }
}