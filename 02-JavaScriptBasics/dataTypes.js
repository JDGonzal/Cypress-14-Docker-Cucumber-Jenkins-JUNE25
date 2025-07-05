"strict mode";
/*
Primitive Data Types:
1. String: Represents text, enclosed in single or double quotes.
2. Number: Represents numeric values, both integers and floating-point numbers.
3. Boolean: Represents a logical entity and can have two values: true or false.
4. Undefined: A variable that has been declared but not assigned a value.
5. Null: Represents the intentional absence of any object value.
6. Symbol: A unique and immutable primitive value, often used as object property keys.
7. BigInt: Represents integers with arbitrary precision, useful for very large numbers.
*/
let num1 = 42; // Number
let str1 = "Hello, World!"; // String
let bool1 = true; // Boolean
let undef1; // Undefined (declared but not assigned)
let null1 = null; // Null (intentional absence of value)
let sym1 = Symbol("unique"); // Symbol (unique identifier)
let bigInt1 = BigInt(123456789012345678901234567890);
// Displaying the values
console.log("Primitive Data Types:");
console.log("Number:", num1);
console.log("String:", str1);
console.log("Boolean:", bool1);
console.log("Undefined:", undef1);
console.log("Null:", null1);
console.log("Symbol:", sym1);
console.log("BigInt:", bigInt1);
/*
Complex Data Types:
1. Object: A collection of key-value pairs, where keys are strings (or Symbols) and values can be of any type.
2. Array: A special type of object that holds an ordered collection of values, which can be of any type.
3. Function: A callable object that can be invoked to perform a specific task or computation.
4. Date: Represents a specific point in time, allowing for date and time manipulation.
5. RegExp: Represents a regular expression, used for pattern matching in strings.
6. Map: A collection of keyed data items, similar to an object, but with keys of any type and maintaining the order of insertion.
7. Set: A collection of unique values, where each value can only occur once, regardless of type.
8. WeakMap: Similar to Map, but allows for garbage collection of keys that are not referenced elsewhere.
9. WeakSet: Similar to Set, but allows for garbage collection of values that are not referenced elsewhere.
*/
let obj1 = { name: "Alice", age: 30 }; // Object
let arr1 = [1, 2, 3, "four", true]; // Array
let func1 = function () {
  return "Hello from a function!";
}; // Function
let date1 = new Date(); // Date
let regExp1 = /abc/; // RegExp
let map1 = new Map(); // Map
map1.set("key1", "value1");
let set1 = new Set(); // Set
set1.add(1);
set1.add(2);
let weakMap1 = new WeakMap(); // WeakMap
let obj2 = {};
weakMap1.set(obj2, "WeakMap value");
let weakSet1 = new WeakSet(); // WeakSet
let obj3 = {};
weakSet1.add(obj3); // Adding an object to WeakSet
// Displaying the values

console.log("\nComplex Data Types:");
console.log("Object:", obj1);
console.log("Array:", arr1);
console.log("Function:", func1());
console.log("Date:", date1);
console.log("RegExp:", regExp1);
console.log("Map:", map1);
console.log("Set:", set1);
console.log("WeakMap:", weakMap1.get(obj2)); // Accessing value from WeakMap
console.log("WeakSet contains obj3:", weakSet1.has(obj3)); // Checking if WeakSet contains obj3
// Note: WeakMap and WeakSet do not have a way to list their contents,
// as they are designed to allow garbage collection of keys/values that are not referenced elsewhere.
// Therefore, we cannot log their contents directly like we do with Map and Set.
