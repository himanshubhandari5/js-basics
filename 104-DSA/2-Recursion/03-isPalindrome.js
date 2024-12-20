// isPalindrome
// Write a recursive function called isPalindrome 
// which returns true if the string passed to it is a palindrome 
// (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(str) {

  // Toreverse a string
  function reverse(str) {
    if (str.length == 1) return str
    return reverse(str.slice(1)) + str[0]
  }
  // calculate reverse of first half of the string
  let rev = reverse(str.slice(0, Math.floor(str.length / 2)))

  // console.log(rev +" : " +str.slice(rev.length+str.length % 2))
  return rev === str.slice(rev.length + str.length % 2)
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false