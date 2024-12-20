// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has
//   it's corresponding value squared in the second array.
// The frequency of values must be the same.

// create function with name same which accepts 2 arrays

const same = (arr1, arr2) => {
  if (arr1.length > arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    const index = arr2.indexOf(arr1[i] ** 2)
    if (index != -1) {
      // If the element is found in arr2, remove that
      arr2.splice(index, 1)
    } else {
      return false
    }
  }
  return true
}

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for (let key in frequencyCounter1) {
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}


same([1, 2, 3, 4], [1, 4, 9, 16]) ? console.log('ok') : console.log('not ok')
same([2, 4, 1, 7], [1, 49, 4, 16]) ? console.log('ok') : console.log('not ok')
same([2, 4, 6], [16, 36, 4, 45]) ? console.log('ok') : console.log('not ok')
same([], []) ? console.log('ok') : console.log('not ok')
same([1, 2, 3, 4], [1, 4, 9, 16, 6]) ? console.log('ok') : console.log('not ok')
same([1, 2, 3, 4, 5, 6], [1, 4, 9, 16]) ? console.log('not ok') : console.log('ok')