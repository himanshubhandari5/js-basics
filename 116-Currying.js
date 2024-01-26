function add3Values(a) {
  return function (b, c) {
    console.log(a + b + c)
  }
}

add3Values(10)(20, 30)

const alwaysAdd100 = add3Values(100)
alwaysAdd100(20, 30)

function outer() {
  console.log("outer function is called")

  function inner() {
    console.log("Inner function is called")
  }

  return inner
}

outer()
outer()()
