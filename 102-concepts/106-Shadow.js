const a = 10
let b = 20
var c = 30
let d = 40
let e = 50
var f = 60

function demoShadow() {
  const a = 5
  let b = 15
  var c = 25
  var d = 35
  e = 45
  f = 55
  console.log("demoShadow a: ", a)
  console.log("demoShadow b: ", b)
  console.log("demoShadow c: ", c)
  console.log("demoShadow d: ", d)
  console.log("demoShadow e: ", e)
  console.log("demoShadow f: ", f)
}
demoShadow()
console.log("---")
console.log("global a: ", a)
console.log("global b: ", b)
console.log("global c: ", c)
console.log("global d: ", d)
console.log("global e: ", e)
console.log("global f: ", f)
console.log("---")
