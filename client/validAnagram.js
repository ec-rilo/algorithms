function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}

/* -------------- PSEUDO -------------- */

/*

if string 1 does NOT have the same amount of characters as string2
  return false

create a object called frequencyCounter1 init with empty obj
create a object called frequencyCounter2 init with empty obj

iterate over each character in string1
  if the current character is not in frequencyCounter1
    init with 1
  otherwise
     increment by 1

iterate over each character in string2
  if the current character is not in frequencyCounter2
    init with 1
  otherwise
     increment by 1

iterate over each key in frequencyCounter1
  if the current key does NOT appear in frequencyCounter2
    return false

  if the value at key in frequencyCounter1 does NOT equal the value at key in frequencyCounter2
    return false

return true

*/


/* -------------- IOCE -------------- */

/*
  in:
    - (string) - a string of characters (only lowercase letters)
    - (string) - a string of characters (only lowercase letters)

  out:
    - (boolean) - true if it is a anagram, false otherwise

  cons:
    - must be o(n) or better

  edge:
    - if both strings don't have the same amount of characters return false
*/

