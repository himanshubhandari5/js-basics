// Write a function called sumZero which accepts a sorted array of integers in descending order
// The function should find the first pair where the sum is 0
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

function sumZero(arr) {
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        const sum = arr[start] + arr[end]
        if (sum == 0) {
            return [arr[start], arr[end]]
            break
        } else if (sum > 0) {
            --end
        } else {
            ++start
        }
    }
}

// sumZero([3,2,1,0,-1,-2,-3,-4])
// sumZero([-4,-3,-2,-1,0,1,2,3])
// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
// sumZero([4,3,2,1]) // [-3,3] 
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined
