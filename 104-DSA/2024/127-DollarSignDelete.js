function isDollarDeleteEqual(arr) {
  return getFinalStr(arr[0]) === getFinalStr(arr[1])
}

function getFinalStr(str) {
  let strArr = Array.from(str)
  let arr = []
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] === "$" ? arr.pop() : arr.push(strArr[i])
  }
  return arr.join("")
}

console.log(getFinalStr('ab$$'), " : ", getFinalStr('c$d$'))
console.log(getFinalStr('b$$p'), " : ", getFinalStr('$b$p'))
console.log(getFinalStr('f$ec'), " : ", getFinalStr('ec'))
