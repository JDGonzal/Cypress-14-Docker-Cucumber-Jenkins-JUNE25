"strict mode";
/*
Operators in JavaScript:
1. Arithmetic Operators: Used for mathematical operations.
   - Addition (+)
   - Subtraction (-)
   - Multiplication (*)
   - Division (/)
   - Modulus (%)
    - Exponentiation (**)
2. Assignment Operators: Used to assign values to variables.
   - Assignment (=)
   - Addition assignment (+=)
   - Subtraction assignment (-=)
   - Multiplication assignment (*=)
   - Division assignment (/=)
   - Modulus assignment (%=)
   - Exponentiation assignment (**=)
3. Comparison Operators: Used to compare values.
   - Equal to (==)
   - Not equal to (!=)
   - Strict equal to (===)
   - Strict not equal to (!==)
   - Greater than (>)
   - Less than (<)
   - Greater than or equal to (>=)
   - Less than or equal to (<=)
4. Logical Operators: Used to perform logical operations.
   - Logical AND (&&)
   - Logical OR (||)
   - Logical NOT (!)
5. Bitwise Operators: Used to perform bit-level operations.
   - Bitwise AND (&)
   - Bitwise OR (|)
   - Bitwise XOR (^)
   - Bitwise NOT (~)
   - Left shift (<<)
   - Right shift (>>)
   - Unsigned right shift (>>>)
6. Ternary Operator: A shorthand for if-else statements.
   - Conditional (condition ? expr1 : expr2)
7. Typeof Operator: Used to determine the type of a variable.
   - typeof variable
8. Instanceof Operator: Used to check if an object is an instance of a specific class.
   - object instanceof Class
9. Comma Operator: Used to evaluate multiple expressions and return the last one.
   - (expr1, expr2, ..., exprN)
10. Spread Operator: Used to expand an iterable (like an array) into its elements.
   - [...iterable]
11. Rest Operator: Used to collect multiple elements into an array.
   - function(...args) { ... }
12. Nullish Coalescing Operator: Returns the right-hand operand when the left-hand operand is null or undefined.
   - left ?? right
13. Optional Chaining Operator: Allows reading the value of a property located deep within a chain of connected objects without having to check if each reference in the chain is nullish.
   - object?.property
*/

let a = 10;
let b = 5;

// Arithmetic Operators
let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division
let remainder = a % b; // Modulus
let exponentiation = a ** b; // Exponentiation
console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);
console.log(`Remainder: ${remainder}`);
console.log(`Exponentiation: ${exponentiation}`);

// Assignment Operators
let x = 10;
x += 5; // Addition assignment
console.log(`x after addition assignment: ${x}`);
x -= 3; // Subtraction assignment
console.log(`x after subtraction assignment: ${x}`);
x *= 2; // Multiplication assignment
console.log(`x after multiplication assignment: ${x}`);
x /= 3; // Division assignment
console.log(`x after division assignment: ${x}`);
x %= 5; // Modulus assignment
console.log(`x after modulus assignment: ${x}`);
x **= 2; // Exponentiation assignment
console.log(`x after exponentiation assignment: ${x}`);

// Comparison Operators
let c = 10;
let d = "10";
console.log(`c: ${c}, d: '${d}'`);
let isEqual = c == d; // Equal to
let isNotEqual = c != d; // Not equal to
let isStrictEqual = c === d; // Strict equal to
let isStrictNotEqual = c !== d; // Strict not equal to
let isGreaterThan = c > d; // Greater than
let isLessThan = c < d; // Less than
let isGreaterThanOrEqual = c >= d; // Greater than or equal to
let isLessThanOrEqual = c <= d; // Less than or equal to
console.log(`Is Equal: ${isEqual}`);
console.log(`Is Not Equal: ${isNotEqual}`);
console.log(`Is Strict Equal: ${isStrictEqual}`);
console.log(`Is Strict Not Equal: ${isStrictNotEqual}`);
console.log(`Is Greater Than: ${isGreaterThan}`);
console.log(`Is Less Than: ${isLessThan}`);

// Logical Operators
let e = true;
let f = false;
let andOperation = e && f; // Logical AND
let orOperation = e || f; // Logical OR
let notOperation = !e; // Logical NOT
console.log(`AND Operation: ${andOperation}`);
console.log(`OR Operation: ${orOperation}`);
console.log(`NOT Operation: ${notOperation}`);

// Unary Operators
let g = 5;
let increment = ++g; // Increment
let decrement = --g; // Decrement
console.log(`Increment: ${increment}`);
console.log(`Decrement: ${decrement}`);

//Ternary Operator
let age = 18;
let canVote = age >= 18 ? "Yes" : "No"; // Ternary operator
console.log(`Can vote: ${canVote}`);

// Typeof Operator
let variable = "Hello";
let typeOfVariable = typeof variable; // Typeof operator
console.log(`Type of variable: ${typeOfVariable}`);

// Binary or Bitwise Operators
let h = 5;
let i = 3;
let bitwiseAnd = h & i; // Bitwise AND
let bitwiseOr = h | i; // Bitwise OR
let bitwiseXor = h ^ i; // Bitwise XOR
let bitwiseNot = ~h; // Bitwise NOT
let leftShift = h << 1; // Left shift
let rightShift = h >> 1; // Right shift
let unsignedRightShift = h >>> 1; // Unsigned right shift
console.log(`Bitwise AND: ${bitwiseAnd}`);
console.log(`Bitwise OR: ${bitwiseOr}`);
console.log(`Bitwise XOR: ${bitwiseXor}`);
console.log(`Bitwise NOT: ${bitwiseNot}`);
console.log(`Left Shift: ${leftShift}`);
console.log(`Right Shift: ${rightShift}`);
console.log(`Unsigned Right Shift: ${unsignedRightShift}`);
