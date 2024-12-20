/* Assume we're given an unsorted array of numbers such as this:

[ 2, 5, 1, 4, 9, 6, 3, 7 ]

We are told that when this array is sorted, there is a series of 
n consecutive numbers. You are given a lower bound and an upper 
bound for this sequence.

There is one consecutive number missing, and we need to find it.

As an example, look at the below example. We're told that the 
lower bound is 1 and the upper bound is 9. The number that's 
missing in the unsorted series bounded by these two number is 8. 
Here's the challenge-- can you find the missing number in O(n) time?
*/

function missingInUnsorted(arr, lowerBound, upperBound) {
  for (let i = lowerBound; i <= upperBound; i++) {
    if (!arr.includes(arr[i])) {
      return i
    }
  }
  return arr
}

missingInUnsorted([2, 5, 1, 4, 9, 6, 3, 7], 1, 9) // 8