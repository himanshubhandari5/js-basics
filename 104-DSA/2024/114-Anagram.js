// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is an anagram of the first
// An anagram is a word, phrase, or name formed by rearranging the letters of another, 
//   such as cinema, formed from iceman

const isValidAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  }
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  const freqStr1 = {}
  const freqStr2 = {}
  Array.from(str1).map(c => freqStr1[c] = freqStr1[c] ? freqStr1[c] + 1 : 1)
  Array.from(str2).map(c => freqStr2[c] = freqStr2[c] ? freqStr2[c] + 1 : 1)
  for (let i in freqStr1) {
    if (freqStr1[i] !== freqStr2[i]) {
      return false
    }
  }
  return true
}

const isValidAnagram2 = (str1, str2) => {
  return str1.toLowerCase().split('').sort().join('') == str2.toLowerCase().split('').sort().join('')
}

isValidAnagram2("iceman", "cinema") ? console.log('ok') : console.log('not ok') //
isValidAnagram2('AbCabc', 'cbacba') ? console.log('ok') : console.log('ok') // true
isValidAnagram2('', '') ? console.log('ok') : console.log('ok') // true
isValidAnagram2('Aaz', 'zza') ? console.log('not ok') : console.log('ok') // false
isValidAnagram2('anagram', 'nagaram') ? console.log('ok') : console.log('ok') // true
isValidAnagram2("Rat", "car") ? console.log('not ok') : console.log('ok') // false
isValidAnagram2('awesome', 'awesom') ? console.log('not ok') : console.log('ok') // false
isValidAnagram2('amanaplanacanalpanama', 'acanalmanplanpamana') ? console.log('not ok') : console.log('ok') // false
isValidAnagram2('qwerty', 'qeywrt') ? console.log('ok') : console.log('ok') // true
isValidAnagram2('texttwisttime', 'timetwisttext') ? console.log('ok') : console.log('ok') // true
isValidAnagram2('Mary', 'Army') ? console.log('ok') : console.log('not ok') // true