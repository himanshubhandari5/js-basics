// Given an integer num, write a method to determine if it is a power of 3.
function powerOfThree(num) {
  // return num % 3 == 0 ? true : false
  let currentQuotent = num
  while (currentQuotent > 2) {
    currentQuotent /= 3
  }
  return currentQuotent == 1
}

powerOfThree(729) ? console.log('ok') : console.log('not ok')
powerOfThree(9) ? console.log('ok') : console.log('not ok')
powerOfThree(27) ? console.log('ok') : console.log('not ok')
powerOfThree(7) ? console.log('not ok') : console.log('ok')