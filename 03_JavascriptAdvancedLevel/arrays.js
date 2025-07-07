// Arrays

// Array literal
const fruits = ['apple', 'banana', 'orange']; 

// Array constructor
const vegetables = new Array('carrot', 'broccoli', 'spinach');  

console.log(fruits); // ['apple', 'banana', 'orange']
console.log(vegetables[1]); // 'broccoli'

// Length of an array
console.log(fruits.length); // 3

// Add elemento to the end of an array
fruits.push('grape');
console.log(fruits); // ['apple', 'banana', 'orange', 'grape']

// Delete the last element of an array
fruits.pop();
console.log(fruits); // ['apple', 'banana', 'orange']

/* Other Aray Methods
- unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
- shift() - Removes the first element from an array and returns that 
element.
- splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
- slice() - Returns a shallow copy of a portion of an array into a new array object.
- concat() - Merges two or more arrays.
- join() - Joins all elements of an array into a string.
- indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
- lastIndexOf() - Returns the last    index at which a given element can be found in the array, or -1 if it is not present.
- forEach() - Executes a provided function once for each array element. 
- map() - Creates a new array populated with the results of calling a provided function on every element in the calling array.  
- filter() - Creates a new array with all elements that pass the test implemented by the provided function.
- reduce() - Executes a reducer function on each element of the array, resulting in a single output value.  
- find() - Returns the value of the first element in the array that satisfies the provided testing function.
- findIndex() - Returns the index of the first element in the array that satisfies the provided testing function.
- some() - Tests whether at least one element in the array passes the test implemented by the provided function.
- every() - Tests whether all elements in the array pass the test implemented by the provided function.
- sort() - Sorts the elements of an array in place and returns the sorted array.
- reverse() - Reverses the elements of an array in place.
- includes() - Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
- flat() - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
- flatMap() - First maps each element using a mapping function, then flattens the result into a new array.
- fill() - Fills all the elements of an array from a start index to an end index with a static value.
- copyWithin() - Shallow copies part of an array into another array, overwriting the existing elements.
- toString() - Returns a string representing the specified array and its elements.
- toLocaleString() - Returns a string representing the elements of the array.
- from() - Creates a new array instance from an array-like or iterable object.
- isArray() - Determines whether the passed value is an Array.
- of() - Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
*/

// Iterate using loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // 'apple', 'banana', 'orange'
} 

// Iterate using forEach
fruits.forEach((fruit) => {
    console.log(fruit); // 'apple', 'banana', 'orange'
});

// Iterate using for...of
for (const fruit of fruits) {
    console.log(fruit); // 'apple', 'banana', 'orange'
}
