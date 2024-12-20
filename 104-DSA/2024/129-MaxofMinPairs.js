/* 
We have an array of length 2 * n (even length) that 
consists of random integers.
[1, 3, 2, 6, 5, 4]
We are asked to create pairs out of these integers, like such:
[[1, 3], [2, 6], [5, 4]]

Here's an example input: [3, 4, 2, 5]. The return value is 6 because the maximum sum of pairs is 6 = min(2, 3) + min(4, 5).

Note that negative numbers may also be included.
*/

function maxOfMinPairs(nums) {
  // sort the array first
  const sortedNums = nums.sort(function (a, b) { return a - b })
  let sum = 0
  for (let i = 0; i < sortedNums.length - 1; i++) {
    console.log(sortedNums[i], sortedNums[i + 1])
    if (sortedNums[i] < sortedNums[i + 1]) {
      sum += sortedNums[i]
      ++i
    } else {
      sum += sortedNums[++i]
    }
  }
  return sum
}