// reverse a string

// Solution using Two-Pointers Method
function reverseString(str) {
  let strArr = Array.from(str)
  let start = 0
  let end = strArr.length - 1
  while (start < end) {
    let tmp = strArr[start]
    strArr[start++] = strArr[end]
    strArr[end--] = tmp
  }
  return strArr.join("")
}

console.log(reverseString("abcdef"))