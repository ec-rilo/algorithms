function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let pointerOne = 0;
  let pointerTwo = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[pointerTwo] !== arr[pointerOne]) {
      pointerOne++;
      arr[pointerOne] = arr[pointerTwo];
    }

    pointerTwo++;
  }

  return pointerOne + 1;
}

/* --------------- PSEUDO --------------- */

/*

if the length of inputArr IS 0
  return 0

declare a var called pointerOne init with 0
declare a var called pointerTwo init with 0

iterate through inputArr
  if the value at pointerTwo does NOT equal the value at pointerOne
    increment pointerOne
    change the current value at pointer one to be the value at pointerTwo

  increment pointerTwo

return value of pointerOne + 1
*/

/* --------------- IOCE --------------- */

/*

in:
  - (array) - array of sorted integers

out:
  - (integer) - the number of sorted integers

cons:
  - Keep it at linear O(n) time complexity

edge:
  - If there are no unique values, return 0
  - Account for negative numbers

*/
