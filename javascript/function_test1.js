function Person(name) {
    name = name || 'no name';

    this.getName = function() {
        return this.name;
    }
}

var p = new Person('Foo');
console.log(p.getName());
console.log(typeof p)
console.log(p.constructor)
console.log(p instanceof Person)


function Person2(name) {
  this.name = name || null;
  function getName() {
    return name;
  }
}

var p2 = new Person2('bar');
console.log(typeof p2)
console.log(p2.constructor)
console.log(p2 instanceof Person2)
console.log(p2.getName())