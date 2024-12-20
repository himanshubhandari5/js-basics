/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

const sameFrequency = (num1, num2) => {
  let n1 = Array.from("" + num1)
  let n2 = Array.from("" + num2)
  let isFound = false
  if (n1.length != n2.length) {
    return false
  }
  for (let i = 0; i < n2.length; i++) {
    const index = n2.indexOf(n1[i])
    if (index < 0) {
      return false
    }
    n2.splice(index, 1)
  }
  return true
}

sameFrequency(3589578, 5879385) ? console.log('ok') : console.log('not ok') // true
sameFrequency(1234321, 5678758) ? console.log('not ok') : console.log('ok') // false
sameFrequency(138214, 238114) ? console.log('ok') : console.log('not ok')// true
sameFrequency(182, 281) ? console.log('ok') : console.log('not ok')// true
sameFrequency(34, 14) ? console.log('not ok') : console.log('ok') // false
sameFrequency(22, 222) ? console.log('not ok') : console.log('ok') // false
