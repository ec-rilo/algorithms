function mapChars(arr) {
  const arr1 = [];
  const arr2 = [];
  const mid = Math.floor(arr.length / 2);

  for (let i = 0; i < mid; i++) {
    arr1.push(arr[i]);
  }

  for (let i = mid + 1; i < arr.length; i++) {
    arr2.push(arr[i]);
  }

  const results = [];

  for (let i = 0; i < arr1.length; i++) {
    results.push(arr1[i]);
    results.push(arr2[i]);
  }

  return results;
}

export default mapChars;

/* --------- PSEUDO --------- */

/*

have arr1
have arr2
have midpoint of input arr

iterate through input arr while we haven't hit mid
  push element into arr1

iterate through input arr starting AT mid + 1
  push element into arr1

have results string

iterate through arr1
  concat char at current location in arr1 to results string
  concat char at current location in arr2 to results string

return results

*/

/*

Q1: Given a string  "abc1*kyoo", the * splits into two strings that
equal length, return a new string that is mapped in order  "akbyco1o"
, a maps to k, b maps to y

*/

/* --------- IOCE --------- */

/*
  in:
    - (string) - a string of characters with an asterisk in middle.
    left side of asterisk is equal length to right side of asterisk
  out:
    - (string) - mapped string of left side character corresponding to right sides characters.
  cons:
    - none
  edge:
    - empty string
*/

/* --------- Tests --------- */

/*

mapChars("abc1*kyoo") // "akbyco1o"

mapChars("123*456") // "142536"

*/
