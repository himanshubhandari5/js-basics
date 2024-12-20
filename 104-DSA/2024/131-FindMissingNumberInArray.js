/* 
We're given an array of continuous numbers that should increment sequentially
 by 1, which just means that we expect a sequence like:

[1, 2, 3, 4, 5, 6, 7]

However, we notice that there are some missing numbers in the sequence.

[1, 2, 4, 5, 7]
*/

function missingNumbers(numArr) {
  let missing = []
  // There may be multiple numbers missing in the sequence which are missing
  let seq = 1
  for (let i = 0; i < numArr.length - 1; i++) {
    console.log(numArr[i], numArr[i] + 1, numArr[i + 1])
    if (!(numArr[i] + seq == numArr[i + 1])) {
      missing.push(numArr[i] + seq)
      seq++
      --i
    } else {
      seq = 1
    }
  }
  return missing
}
console.log('Mymiss: ', missingNumbers([10, 11, 14, 17]))