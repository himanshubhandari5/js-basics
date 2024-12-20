// A majority is defined as "the greater part, or more than half, of the total
// number of elements in a set." It is a subset of a set consisting of more 
// than half of the set's elements."

function majorityElement(nums) {
  const freqCnt = {}
  let max = -Infinity
  let val
  for (let i = 0; i < nums.length; i++) {
    freqCnt[nums[i]] = freqCnt[nums[i]] ? freqCnt[nums[i]] + 1 : 1
  }
  for (let key in freqCnt) {
    if (max < freqCnt[key]) {
      max = freqCnt[key]
      val = key
    }
  }
  return val
}

majorityElement([1, 1, 1, 4, 2, 4, 4, 3, 1, 1, 1]) // 1
majorityElement([1, 4, 2, 4, 4, 3, 4]) // 4