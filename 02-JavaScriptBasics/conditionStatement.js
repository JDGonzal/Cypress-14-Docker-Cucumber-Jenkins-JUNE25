// Conditional statements in JavaScript allow you to execute different blocks of code based on certain conditions. The most common conditional statements are `if`, `else if`, and `else`. Here's a brief overview of how they work:

/*
the if statement evaluates a condition and executes a block of code if the condition is true.
the else if statement allows you to check additional conditions if the previous if condition was false.
the else statement executes a block of code if all previous conditions were false.
if(condition) {
    // code to execute if condition is true
} else if(anotherCondition) {
    // code to execute if anotherCondition is true
} else {
    // code to execute if all previous conditions are false
}
*/
let age = 20;
if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior citizen.");
}
