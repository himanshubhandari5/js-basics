{
  // Variables declared with var are Global Scoped variables
  var a = 10

  // Variables declared with const & let are Local Scoped variables
  let b = 5
  const c = 2
  console.log(b)
  console.log(c)
}

console.log(a)
// console.log(b) // Not available in Global scope
// console.log(c) // Not available in Global scope
