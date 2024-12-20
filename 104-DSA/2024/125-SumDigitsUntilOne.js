// sumDigits(12345) == 6 ? console.log('ok') : console.log('not ok')
// sumDigits(49) == 4 ? console.log('ok') : console.log('not ok')
// sumDigits(12345) == 6 ? console.log('ok') : console.log('not ok')

// Not sure what is wrong with below code
const sumDigitsUntilOneBK = (num) => {
  let sum = 0
  Array.from(num + '').map(el => sum += parseInt(el))
  console.log(sum)
  if (sum <= 9) {
    return sum
  }
  sumDigitsUntilOneBK(sum)
}

const sumDigitsUntilOne = (num) => {
  while (num >= 9) {
    let sum = 0
    Array.from(num + '').map(el => sum += parseInt(el))
    num = sum
  }
  return num
}


console.log('Final output: ', sumDigitsUntilOne(4999))