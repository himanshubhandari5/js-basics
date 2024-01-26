function displayThisValue() {
  console.log(this)
}

function logArgsValue() {
  console.log(this.args)
}

const obj = {
  thisVal: displayThisValue,
  thisArgs: logArgsValue,
  args: 90
}

console.log("--value of this, when called by Object-- ")
obj.thisVal()
console.log("--value of Args, when called by Object-- ")
obj.thisArgs()
// console.log("value of this, when called from global scope:")
// displayThisValue()
console.log("--value of this args, when called from global scope--")
logArgsValue()

console.log("--Explicit Binding logArgsValue with obj--")
logArgsValue.call(obj)
logArgsValue.apply(obj)
logArgsValue.call(this)
logArgsValue.apply(this)

console.log("--Hard Binding logArgsValue with obj--")
const hardBindDemo = logArgsValue.bind(obj)
hardBindDemo()
