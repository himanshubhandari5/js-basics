/* 
  - Two strings are given: str1 = chocolate & str2 = latechoco
  - str2 is derived from str1 by shifting some of the characters
    clockwise
  - We need to find, how many characters are shifted
*/

const countShift = (str1, str2) => {
  let str2Index = 0
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] == str2[str2Index]) ++str2Index
  }
  if (str2Index == 0) return 0
  return str2.length - str2Index
}

countShift('chocolate', 'latechoco') == 5 ? console.log('ok') : console.log('not ok')
countShift('admission', 'missionad') == 2 ? console.log('ok') : console.log('not ok')
countShift('abcdefgh', 'efghabcd') == 4 ? console.log('ok') : console.log('not ok')
countShift('s', 's') == 0 ? console.log('ok') : console.log('not ok')
countShift('idea', 'idea') == 0 ? console.log('ok') : console.log('not ok')
countShift('xyz', 'abc') == 0 ? console.log('ok') : console.log('not ok')
countShift('adf', 'dfa') == 1 ? console.log('ok') : console.log('not ok')