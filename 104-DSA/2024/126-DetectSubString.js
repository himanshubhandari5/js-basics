function detectSubstring1(str, subStr) {
  if (str.length < subStr.length) {
    return -1
  }
  let count = 0
  let i = 0
  for (; i < str.length - subStr.length; i++) {
    for (let j = 0; j < subStr.length; j++) {
      if (str[i + j] === subStr[j]) {
        ++count
      } else {
        continue
      }
    }
    if (count == subStr.length) {
      break
    } else {
      count = 0
    }
  }
  if (count == subStr.length) return i
  return -1
}

function detectSubstring(str, subStr) {
  let j = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] == subStr[j]) {
      ++j
      if (j == subStr.length) {
        return (i + 1) - j
      }
    } else {
      i -= j
      j = 0
    }
  }
  return -1
}

// console.log(detectSubstring('thepigflewwow', 'flew'))
// console.log(detectSubstring('wherearemyshorts', 'pork'))

console.log(detectSubstring('ggraph', 'graph'))
console.log(detectSubstring('geography', 'graph'))
console.log(detectSubstring('digginn', 'inn'))