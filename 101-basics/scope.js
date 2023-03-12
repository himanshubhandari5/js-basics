let a = 10
var b = 20
let c = 30

{
  let a = 20
  let b = 30
  /* This will throw error */
  // var c = 30 
  let c = 40
  console.log("a: " + a + " b: " + b + " c: " + c)
}

console.log("a: " + a + " b: " + b + " c: " + c)
