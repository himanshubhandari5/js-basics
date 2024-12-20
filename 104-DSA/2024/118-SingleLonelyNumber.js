// In a given array of numbers, one element will show up once
// and the others will each show up twice. 
// Can you find the number that only appears once in O(n) linear time?
// Bonus points if you can do it in O(1) space as well.
function lonelyNumber(numbers) {
  if (numbers.length == 1) {
    return numbers[0]
  }
  let freqCount = {}
  for (let i = 0; i < numbers.length; i++) {
    freqCount[numbers[i]] ? delete freqCount[numbers[i]] : freqCount[numbers[i]] = 1
  }
  return Object.keys(freqCount)[0]
}

console.log(lonelyNumber([4, 4, 6, 1, 3, 1, 3]))