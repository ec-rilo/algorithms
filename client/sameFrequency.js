function sameFrequency(num1, num2) {
  const str1 = String(num1);
  const str2 = String(num2);

  if (str1.length !== str2.length) {
    return false;
  }

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for (const char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}

/* ------------- PSEUDO ------------- */

/*

declare a var called str1 init with num1 converted to a string
declare a var called str2 init with num2 converted to a string

if str1 length is NOT the same as str2 length
  return false

declare a var called frequencyCounter1 init with empty obj
declare a var called frquencyCounter2 init with empty obj

iterate over characters in str1
  if current character is NOT in frequencyCounter1
    init value with 1
  otherwise
    increment value by 1

iterate over characters in str2
  if current character is NOT in frequencyCounter2
    init value with 1
  otherwise
    increment value by 1

iterate over keys in frequencyCounter1
  if the current key does NOT exist in frquencyCounter2
    return false

  if the value at key in frequencyCounter1 is NOT the same as the value at key in frequencyCounter2
    return false

return true;

*/

/* ------------- IOCE ------------- */

/*

in:
  - (integer) - a number
  - (integer) - a number

out:
  - (bool) - true if both numbers have the same numbers regardless of order, false otherwise

cons:
  - MUST be O(n) time complexity

edge:
  - if both numbers have different lengths return false

*/

/* ------------- Tests ------------- */

/*

sameFrequency(182, 281) // true

sameFrequency(34, 14) // false

*/
