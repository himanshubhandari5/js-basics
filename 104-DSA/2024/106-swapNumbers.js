const swapWithout3rdVar = (a, b) => {
  // b = 3 + 2
  b = a + b
  // a = 5 - 3
  a = b - a
  // b = 5 - 2
  b = b - a
  return [a, b].join()
}

swapWithout3rdVar(3, 2) === "2,3" ? console.log('ok') : console.log('not ok')
swapWithout3rdVar(13, 22) === "22,13" ? console.log('ok') : console.log('not ok')
swapWithout3rdVar(31, 21) === "21,31" ? console.log('ok') : console.log('not ok')