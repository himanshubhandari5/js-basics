/* 
  * Different type of function initializations and there impact of Hoisting
*/

console.log("\n---calls allowed because of Hoisting---\n")
// Allowed because first phase of Execution Cycle initialized the function already
console.log(getFirstMsg())
// Not allowed because first phase of Execution Cycle initialized these as 'undefined'
// console.log(getSecondMsg())   // Not allowed
// console.log(getThirdMsg())  // Not allowed
// console.log(getFourthMsg())  // Not allowed because this is a functional expression and assigned 'undefined'
console.log(getFourthMsg)
// console.log(getFifthMsg())
// console.log(getSixthMsg())

function getFirstMsg() {
  return "Hello from getFirstMsg()"
}

const getSecondMsg = function () {
  return "Hello from getSecondMsg()"
}

const getThirdMsg = () => {
  return "Hello from getThirdMsg()"
}

var getFourthMsg = function () {
  return "Hello from getFourthMsg()"
}

let getFifthMsg = function () {
  return "Hello from getFifthMsg()"
}

const getSixthMsg = function () {
  return "Hello from getSixthMsg()"
}
