// Write a JavaScript program to find the maximum number in an array. 

// Solution-1
/* 
const findMax = (arr) => {
  let max = 0
  arr.map(item => max = max > item ? max : item)
  return max
}
*/
// Solution-2
const findMax = (arr) => {
  let max = arr[0]
  for (i = 1; i < arr.length; i++) {
    max = max > arr[i] ? max : arr[i]
  }
  return max
}

const maxValue = findMax([23, 45, 67, 89, 45, 23, 45])
console.log(`maxValue is: `, maxValue)
