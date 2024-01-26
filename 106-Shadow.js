const a = 10
let b = 20
var c = 30

function demoShadow() {
  const a = 5
  let b = 15
  var c = 25
  console.log("a: ", a)
  console.log("b: ", b)
  console.log("c: ", c)
}

console.log("a: ", a)
console.log("b: ", b)
console.log("c: ", c)

demoShadow()
