// Frequency Counter pattern

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const obj1 = {};
  const obj2 = {};

  for (let num of arr1) {
    obj1[num] = (obj1[num] || 0) + 1;
  }

  for (let num of arr2) {
    obj2[num] = (obj2[num] || 0) + 1;
  }

  for (let key in obj1) {
    if (!(obj2[key ** 2])) {
      return false;
    }

    if (obj1[key] !== obj2[key ** 2]) {
      return false;
    }
  }


  return true;
}

/* -------- PSEUDOCODE -------- */

/*
if array 1 is NOT the same length as array 2
  return false

declare obj1 with an empty object
declare obj2 with an empty object

iterate over arr1
  if the current value does not appear in obj1
    init it with 1
  otherwise
    increment value by 1

iterate over arr2
  if the current value does not appear in obj1
    init it with 1
  otherwise
    increment value by 1

iterate over keys in obj1
  if the squared version of current key does NOT exist in obj2
    return false

  if the value at the current key does NOT equal the value of the squared version in obj2's value
    return false

return true
*/

/* -------- IOCE -------- */

/*
in:
  - (array) - contains integers
  - (array) - contains integers

out:
  - (boolean) - true if every value in first array has corresponding value squared in second array
  - frequency of values MUST be the same

cons:
  - must be o(n) complexity at most

edge:
  - return false if both arrays don't have the same frequency of values.
*/
