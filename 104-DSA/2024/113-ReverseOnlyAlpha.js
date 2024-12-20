// - Reversing Only Alphabetical Characters in a String
// - You are provided with a string that's a blend of alphabetic
//    and non-alphabetic characters.
// - Your mission, should you choose to accept it, is to flip 
//    only the alphabetical chars
function reverseOnlyAlphabetical(str) {
  const arr = Array.from(str)
  let start = 0
  let end = str.length - 1
  let startIndexToSwap = undefined
  let endIndexToSwap = undefined
  while (start <= end) {
    // console.log(start, end, startIndexToSwap, endIndexToSwap)
    if (startIndexToSwap !== undefined && endIndexToSwap != undefined) {
      let tmp = arr[endIndexToSwap]
      arr[endIndexToSwap] = arr[startIndexToSwap]
      arr[startIndexToSwap] = tmp
      startIndexToSwap = undefined
      endIndexToSwap = undefined
      ++start
      --end
    }
    arr[start].match(/[a-zA-Z]/) ? startIndexToSwap = start : ++start
    arr[end].match(/[a-zA-Z]/) ? endIndexToSwap = end : --end
  }
  return arr.join('')
}

reverseOnlyAlphabetical('sea!$hells3') == 'sll!$ehaes3' ? console.log('ok') : console.log('not ok')