console.log("---Scenario:1---")
function add3Values(a) {
  return function (b, c) {
    console.log(a + b + c)
  }
}

add3Values(10)(20, 30)

const alwaysAdd100 = add3Values(100)
alwaysAdd100(20, 30)

console.log("---Scenario:2 using bind---")
const multiply3Values = function (a, b, c) {
  return function () {
    return (a * b * c)
  }
}
const alwaysMultiply5 = multiply3Values.bind(this, 5)
console.log(alwaysMultiply5(3, 2)())

console.log("---Scenario:3---")
function outer() {
  console.log("outer function is called")
  function inner(...args1) {
    console.log("Inner function is called: ", args1.length)
    function innerMost(...args2) {
      console.log("Inner Most function is called with random nuber of variables: ", args2.length)
    }
    return innerMost
  }
  return inner
}

outer()(2, 3)(4, 5, 6, 7)
outer()(2, 3, 1)(4, 5)
