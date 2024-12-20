// -Can you write a function that takes two arrays as inputs and returns
//  to us their intersection? We can call the method intersection.
// Let's return the intersection of the two inputs in the form of an array.
// As a reminder, the definition of an intersection of two sets A and B is 
// the set containing all elements of A that also belong to B 
// (or equivalently, all elements of B that also belong to A).
// Note that all elements in the final result should be unique

function interSection(nums1, nums2) {
  const nums1Obj = {}
  const nums2Obj = {}
  const interArr = []
  for (let number of nums1) {
    nums1Obj[number] = (nums1Obj[number] || 0) + 1
  }
  for (let number of nums2) {
    nums2Obj[number] = (nums2Obj[number] || 0) + 1
  }
  for (let key in nums1Obj) {
    if (nums2Obj[key]) {
      interArr.push(key)
      nums2Obj[key] = nums2Obj[key] - 1
    }
  }
  return interArr
}

const interSection1 = (arr1, arr2) => {
  let arr1Set = new Set(arr1)
  let filteredArr = new Set(arr2.filter(n => arr1Set.has(n)))
  return [...filteredArr]
}

console.log(interSection1([6, 0, 12, 10, 16], [3, 15, 18, 20, 15])) // []
console.log(interSection1([12, 23, 4, 23], [12, 4, 23, 23])) // [12, 4, 23]