//loop

/* for loop
for (initialization; condition; increment/decrement) {
     // code to be executed
 }
*/
for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0 1 2 3 4
}

/* while loop
while (condition) {
     // code to be executed
 }
*/
let j = 0;
while (j < 5) {
  console.log(j); // Output: 0 1 2 3 4
  j++;
}

/* do while loop
do {
     // code to be executed
} while (condition);
*/
let k = 0;
do {
  console.log(k); // Output: 0 1 2 3 4
  k++;
}while (k < 5);

// Break and Continue
for (let l = 0; l < 5; l++) {
  if (l === 2) {
    continue; // Skip the iteration when l is 2
  }
  console.log(l); // Output: 0 1 3 4
} 
for (let m = 0; m < 5; m++) {
  if (m === 3) {
    break; // Exit the loop when m is 3
  }
  console.log(m); // Output: 0 1 2
}
