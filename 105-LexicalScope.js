const a = 10
var j = 100
function checkBlockScope() {
  const b = 20
  var c = 30
  {
    const d = 40
    var g = 70
    console.log("inside checkBlockScope method's Block")
    // console.log("a : ", a) // ReferenceError: Cannot access 'a' before initialization
    j = 75 // It will replace value of global var
    console.log("a : ", a) // Shadow
    console.log("b : ", b)
    console.log("c : ", c)
    console.log("d : ", d)
    // console.log("e : ", e) // because e is not declared yet
    console.log("f : ", f)
    // console.log("h : ", h) // ReferenceError: Cannot access 'h' before initialization
    console.log("i : ", i)
    console.log("j : ", j)
  }

  const h = 80
  var i = 90
  console.log("\ninside checkBlockScope")
  console.log("a : ", a)
  console.log("b : ", b)
  console.log("c : ", c)
  // console.log("d : ", d) // Because d is in another block scope, 'd is not defined'
  // console.log("e : ", e) // because e is not declared yet, 'Cannot access 'e' before initialization'
  console.log("f : ", f) // 
  console.log("g : ", g) // 
  console.log("j : ", j) // 
}

// checkBlockScope() // Variable initialization will be different based on where we are calling this method
const e = 50
var f = 60
checkBlockScope() // Variable initialization will be different based on where we are calling this method
console.log("\nGlobal Scope")
console.log("a : ", a)
// console.log("b : ", b) // Block variable of checkBlockScope()
// console.log("c : ", c) // Block variable of checkBlockScope()
// console.log("d : ", d) // d is in local scope
console.log("e : ", e) // because e is not declared yet, 'Cannot access 'e' before initialization'
console.log("f : ", f)
console.log("j : ", j)

// checkBlockScope() // Variable initialization will be different based on where we are calling this method

console.log("all these variables are in Lexical scope of the function, so not available in global scope: b,c,d,g,h and i")