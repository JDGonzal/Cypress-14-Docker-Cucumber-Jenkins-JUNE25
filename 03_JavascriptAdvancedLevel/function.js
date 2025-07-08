// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}
// Function expression
const farewell = function (name) {
  return `Goodbye, ${name}!`;
};
// Arrow function
const welcome = (name) => `Welcome, ${name}!`;
// Higher-order function

// Using the basic functions
console.log(greet("Alice")); // 'Hello, Alice!'
console.log(farewell("Bob")); // 'Goodbye, Bob!'
console.log(welcome("Charlie")); // 'Welcome, Charlie!'

// Higher-order function that takes a function as an argument
// and returns a new function
function processUser(name, callback) {
  return callback(name);
}
// Using the functions with the higher-order function
console.log(processUser("Dave", greet)); // 'Hello, Dave!'
console.log(processUser("Eve", farewell)); // 'Goodbye, Eve!'
console.log(processUser("Frank", welcome)); // 'Welcome, Frank!'

// Function with default parameters
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5)); // 5 (5 * 1)
console.log(multiply(5, 2)); // 10 (5 * 2)

// Function with rest parameters
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // 6 (1 + 2 + 3)
console.log(sum(4, 5, 6, 7)); // 22 (4 + 5 + 6 + 7)

// Function with spread operator
function logNumbers(...numbers) {
  console.log(...numbers);
}
logNumbers(1, 2, 3); // 1 2 3
logNumbers(4, 5, 6, 7); // 4 5 6 7

// Function with destructuring parameters
function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
const user = { name: "Alice", age: 30 };
displayUser(user); // 'Name: Alice, Age: 30'
// Function with object destructuring and default values
function createUser({ name = "Guest", age = 18 } = {}) {
  return { name, age };
}
console.log(createUser()); // { name: 'Guest', age: 18 }
console.log(createUser({ name: "Bob" })); // { name: 'Bob', age: 18 }
console.log(createUser({ name: "Charlie", age: 25 })); // { name: 'Charlie', age: 25 }

// Function with optional chaining
function getUserName(user) {
  return user?.name ?? "Anonymous"; // Returns 'Anonymous' if user is undefined or null
}
const user1 = { name: "Dave" };
const user2 = null;
console.log(getUserName(user1)); // 'Dave'
console.log(getUserName(user2)); // 'Anonymous'

// Function with nullish coalescing
function getUserAge(user) {
  return user?.age ?? 18; // Returns 18 if user is undefined or null
}
const user3 = { age: 25 };
const user4 = null;
console.log(getUserAge(user3)); // 25
console.log(getUserAge(user4)); // 18

// Function with async/await
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
// Example usage of fetchData (uncomment to run in an environment that supports fetch)
fetchData("https://jsonplaceholder.typicode.com/posts")
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching data:", error));

// Function with promises
function getData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url) {
        resolve(`Data from ${url}`);
      } else {
        reject("No URL provided");
      }
    }, 1000);
  });
}
// Example usage of getData
getData("https://api.example.com/data")
  .then(data => console.log(data)) // 'Data from https://api.example.com/data'
  .catch(error => console.error("Error:", error));
  
// Function with error handling
function safeDivide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  } catch (error) {
    console.error("Error:", error.message);
    return null; // Return null in case of an error
  }
}
console.log(safeDivide(10, 2)); // 5
console.log(safeDivide(10, 0)); // Error: Division by zero is not