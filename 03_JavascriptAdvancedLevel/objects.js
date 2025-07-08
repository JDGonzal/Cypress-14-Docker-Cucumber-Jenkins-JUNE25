// Object Literal
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

console.log(person.name); // 'John'
console.log(person["age"]); // 30
person.greet(); // 'Hello, my name is John'

// Object Constructor
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
Car.prototype.getDetails = function () {
  return `${this.year} ${this.make} ${this.model}`;
};
const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getDetails()); // '2020 Toyota Corolla'

// Adding properties and methods
myCar.color = "red";
myCar.start = function () {
  console.log(`Starting the ${this.color} ${this.make} ${this.model}`);
}
console.log(myCar.color); // 'red'
myCar.start(); // 'Starting the red Toyota Corolla'

// Object Property Access
person.job = "Developer";
console.log(person.job); // 'Developer'
person.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am a ${this.job}`);
}
person.greet(); // 'Hello, my name is John and I am a Developer'  

// Object Destructuring
const { name, age } = person;
console.log(name); // 'John'
console.log(age); // 30
