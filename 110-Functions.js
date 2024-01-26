function a() {
  console.log("This is function statement or declaration")
}

const b = function () {
  console.log("This is function expression")
}

const c = function d() {
  console.log("This is 'nameasdasdasdd' function expression")
  console.log(d) // Accessible only inside this function
  // d() // we can call it here, but will cause infinite calls
}

a()
b()
c()
// d() // ReferenceError: d is not defined