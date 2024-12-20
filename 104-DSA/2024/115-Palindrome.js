// Validate Palindrome (Easy)
// Given a string str, can you write a method that will return True 
// if is a palindrome and False if it is not? 
// A palindrome is defined as "a word, phrase, or sequence that reads 
// the same backward as forward"
function isPalindrome(str) {
  // making all chars lower case
  // Removing all the spaces
  let updatedStr = str.toLowerCase().split(" ").join("")
  let start = 0
  let end = updatedStr.length - 1
  while (start < end) {
    if (updatedStr[start] !== updatedStr[end]) {
      return false
    }
    ++start
    --end
  }
  return true
}

function isAlphaNumeric(c) { }

console.log(isPalindrome('A Santa Lived As a Devil At NASA'))
