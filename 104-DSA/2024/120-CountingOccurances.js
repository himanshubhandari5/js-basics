function countOccurances(num) {
  const countOcc = new Map()
  num.map(n => {
    countOcc.set(n, countOcc.get(n) || 1 + 1)
  })
  return countOcc
}

console.log(countOccurances([1, 2, 3, 4, 1, 2, 3, 4]))