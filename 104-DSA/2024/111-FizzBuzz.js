// Write a function that returns the string representation of all 
// numbers from 1 to n based on the following rules:
// If it's a multiple of 3, represent it as "fizz".
// If it's a multiple of 5, represent it as "buzz".
// If it's a multiple of both 3 and 5, represent it as "fizzbuzz".
// If it's neither, just return the number itself.
function fizzBuzz(n) {
  let arrStr = [""]
  for (let i = 1; i <= n; i++) {
    if (i % 3 != 0 && i % 5 != 0) {
      arrStr.push(i)
      continue
    }
    if (i % 3 == 0) {
      arrStr.push("fizz")
    }
    if (i % 5 == 0) {
      arrStr.push("buzz")
    }
  }
  return arrStr.join("")
}

fizzBuzz(0) == '' ? console.log('ok') : console.log("not ok")
fizzBuzz(15) == '12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz' ? console.log('ok') : console.log("not ok")
