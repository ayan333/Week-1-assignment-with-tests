/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let start_idx = 0
  let end_idx = str.length - 1
  while(start_idx < end_idx){
    if(str[start_idx].toLowerCase() == str[start_idx].toUpperCase()){
      start_idx++;
      continue
    }
    if(str[end_idx].toLowerCase() == str[end_idx].toUpperCase()){
      end_idx--;
      continue
    }
    if(str[start_idx++].toLowerCase()!=str[end_idx--].toLowerCase()){
      return false
    }
  }
  return true;
}

module.exports = isPalindrome;
