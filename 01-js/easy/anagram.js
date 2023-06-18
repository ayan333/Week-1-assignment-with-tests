/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  console.log(`****************************`)
  console.log(`${str1}:length ${str1.length}`)
  console.log(`${str2}:length ${str2.length}`)
  if(str1.length!=str2.length){
    console.log("due 1")
    return false;
  }
  const dict = new Map();
  for(let i=0; i<str1.length; i++){
    let c = str1[i].toLowerCase();
    if(dict.has(c)){
      dict.set(c, dict.get(c)+1)
    }
    else{
      dict.set(c, 1)
    }
  }
  for(let i=0; i<str2.length; i++){
    let c = str2[i].toLowerCase();
    if(dict.has(c)){
      if(dict.get(c)==0){
        console.log("due 2")
        return false
      }
      dict.set(c, dict.get(c)-1)
    }
    else{
      console.log(`${c}:due 3`)
      return false
    }
  }
  return true
}

module.exports = isAnagram;
