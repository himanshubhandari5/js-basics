/*
Multiple Pointers - isSubsequence

Write a function called isSubsequence which takes in two strings and
 checks whether the characters in the first string form a subsequence
 of the characters in the second string. 
In other words, the function should check whether the characters in 
the first string appear somewhere in the second string, 
without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
*/

const isSubsequence = (str1, str2) => {
  // Here we know that the length of second string will either be greater 
  // or equal to the first string
  let indexStr1 = 0
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] == str1[indexStr1]) {
      ++indexStr1
      if (indexStr1 == str1.length) {
        return true
      }
    }
  }
  return false
}

isSubsequence('hello', 'hello world') ? console.log('ok') : console.log('not ok') // true
isSubsequence('sing', 'sting') ? console.log('ok') : console.log('not ok') // true
isSubsequence('abc', 'abracadabra') ? console.log('ok') : console.log('not ok') // true
isSubsequence('abc', 'acb') ? console.log('not ok') : console.log('ok') // false (order matters)
