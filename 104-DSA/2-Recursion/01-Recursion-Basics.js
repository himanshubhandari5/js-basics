function sumOfNum(n) {
    if(n==1) return 1
    return n + sumOFNum(--n)
}
// sumOFNum(4)

function factorial(n) {
    if(n<0) return 0
    if(n==1) return 1
    return n * factorial(--n)
}
// factorial(0) // 1
// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function power(n, p){
    if(p<=1) return n
    return n * power(n, p-1)     
}
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function productOfArray(arr){
    if(arr.length===0) return 1
    return arr[0] * productOfArray(arr.slice(1, arr.length))
}
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function recursiveRange(n) {
    if(n==0) return 0
    return n + recursiveRange(n-1)
}

// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function fib(n) {
    if(n<=2) return 1
    return fib(n-1)+fib(n-2)
}
// fib(8)
// 11235
