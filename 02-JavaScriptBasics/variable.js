var myName = "John Doe";
let myAge = 30;
const myCountry = "USA";

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Country:", myCountry);

// Changing the value of myName
myName = "Jane Doe"; // This is allowed because myName is declared with var
myAge = 31; // This is allowed because myAge is declared with let
// myCountry = "Canada"; // This would cause an error because myCountry is declared with const
console.log("Updated Name:", myName);
console.log("Updated Age:", myAge);
// console.log("Updated Country:", myCountry); // Uncommenting this line would cause an error// Note: myCountry cannot be changed because it is declared with const
