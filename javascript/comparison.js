
var x = 9;
var xx = '9';
var y = 2;
var yy = '2';

console.log(x == y);    // false
console.log(x == xx);   // true
console.log(xx == x);   // true
console.log(x === y);   // false
console.log(x === xx);  // false


var o1 = { foo: 'bar' };
var o2 = { foo: 'bar' };
var o3 = o2;

console.log(o1 == o2);  // true
console.log(o1 === o2); // true

console.log(o3 == o2);  // true
console.log(o3 === o2); // true


var obj1 = { foo: 5 };
var obj2 = { foo: '5' };
console.log('obj1 == obj2? ', obj1.foo == obj2.foo);
console.log('obj1 === obj2? ', obj1.foo === obj2.foo);


// Compare two objects
function isEquals(obj1, obj2) {
    // compare these two objects to see if all keys and values are the same 
}

// Modify o2 and see changes in o3? 
// Testing arrays for equality?


