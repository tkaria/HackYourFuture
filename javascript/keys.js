
var obj2 = {
    sayHello: function() {
        return 'Hello there';
    }
}


console.log('1', obj2['sayHello']);
console.log('2', obj2.sayHello);
console.log('3', obj2.sayHello());

var greeting = obj2.sayHello();
console.log(greeting);
