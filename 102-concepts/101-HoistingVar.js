/* 
  * Impact of Hoisting
*/
// Allowed because first phase of Execution Cycle initialized the variable with 'undefined'
console.log(a)
var a = 10
console.log(a)

// console.log(b) // ReferenceError: Cannot access 'b' before initialization
const b = 20
console.log(b)

// console.log(c) // ReferenceError: Cannot access 'c' before initialization
let c = 30
console.log(c)
