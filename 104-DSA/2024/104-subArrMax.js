/* 
  Find the max sum out of a sub-array in an Array
*/

const findSubArrMax = (arr) => {
  // - If the addition includes negative numbers also, 
  //    then better to use negative infinity numbers
  // -Bbecause in case, all the array elements are negative
  //    then assigning 0 will not work as expected
  let max = -Infinity
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      sum = sum + arr[j]
      if (sum > max) {
        max = sum
      }
      // console.log(sum, ' : ', max)
    }
  }
  return max
}

findSubArrMax([1, -1, 3, -10, 9, 8,]) == 17 ? console.log('ok') : console.log('Not ok')
findSubArrMax([2, -4, 5, -3, 4, 5]) == 11 ? console.log('ok') : console.log('Not ok')
findSubArrMax([-5, -1, -2, -7, -8]) == -3 ? console.log('ok') : console.log('Not ok')
