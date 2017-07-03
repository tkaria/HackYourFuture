class Animal { 
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

let obj = new Animal();
let speak = obj.speak;
speak(); // undefined

let eat = Animal.eat;
eat(); // undefined