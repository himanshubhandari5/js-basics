/* Himanshu: Couldn't understand it */


// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters 
// - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray 
// of which the sum is greater than or equal to the integer passed to the function
// If there isn't one, return 0 instead.

// Examples:
// Time Complexity - O(n)
// Space Complexity - O(1)

function minSubArrayLen(arr, n) {
  let total = 0
  let i = 0
  let j = 0
  let minLen = Infinity

  while (i < arr.length) {
    // if current window doesn't add up to the given sum then 
    // move the window to right
    console.log(i, j, total)
    if (total < n && j < arr.length) {
      total += arr[j]
      j++
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window 
    else if (total >= n) {
      minLen = Math.min(minLen, j - i)
      total -= arr[i]
      i++
    }
    // current total less than required total but we reach the end, 
    // need this or else we'll be in an infinite loop 
    else {
      break
    }
  }

  return minLen === Infinity ? 0 : minLen
}
// minSubArrayLen([2, 1, 6, 3, 4, 5, 4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
