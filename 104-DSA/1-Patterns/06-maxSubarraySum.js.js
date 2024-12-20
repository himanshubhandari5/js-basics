// Write a function called maxSubarraySum which accepts an array of integers and a number called n
// The function should calculate the maximum sum of n consecutive elements in the array

/* Regular Solution */
function maxSubarraySum1(arr, n) {
    if(arr.length>n){
        return null
    }
    let maxSum = null
    for(let i=0;i<arr.length; i++){
        let sum = 0
        for(let j=i;j<i+n && j<arr.length;j++){
            sum = sum + arr[j]
        }
        // console.log(i, sum, maxSum)
        if(sum > maxSum){
            maxSum = sum
        }
    }
    return maxSum
}

/* Sliding Window Pattern */
function maxSubarraySum(arr, n) {
    let sum = 0
    if(arr.length<n){
        return null
    }
    for(let i=0; i<n; i++){
        sum = sum + arr[i]
    }    
    let maxSum = sum
    for(let i=n;i<arr.length;i++){
        sum = sum + arr[i] - arr[i-n]
        maxSum = Math.max(sum, maxSum)
        // console.log(i, sum, maxSum)
    }
    return maxSum
}
// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null
