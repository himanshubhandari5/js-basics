function a() {
  var i = 10
  function b() {
    console.log(i)
  }
  return b
}

var c = a()
// console.log(c())
c()