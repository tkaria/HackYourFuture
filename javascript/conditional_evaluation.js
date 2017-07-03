// let testValue = ''; false
// let testValue = 0; false
// let testValue = null; // false
// let testValue = undefined; // false
// let testValue; // false

function testMyValue(testValue) {
  if (testValue) {
    return('testValue is true');
  } else {
    return('testValue is false');
  }
}

let testValue = undefined;
let testResult = testMyValue(testValue);
console.log(testResult);