function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== val && start <= end) {
    if (val < arr[mid]) end = mid - 1;
    else start = mid + 1;
    mid = Math.floor((start + end) / 2);
  }

  return arr[mid] === val ? mid : -1;
}

export default binarySearch;

/* ---------- PSEUDO ---------- */

/*

declare a var called start init with 0
declare a  var called end init with length of arr - 1
declare a var called mid init with start + end divided by 2 MAKE SURE TO ROUND DOWN

while value at mid does not equal value AND start is not greater then end
  if value is less then value at mid
    init end with mid - 1
  otherwise
    init start with mid + 1

  init mid with start + end divided by 2 MAKE SURE TO ROUND DOWN

if value at mid EQUALS value
  return mid
otherwise
  return -1

*/

/* ---------- IOCE ---------- */

/*
in:
  - arr - (array) - array of integers
  - val - (integer) - a number
out:
  - (integer) - the index at which the value exists in arr
cons:
  - input value can only be a number
edge:
  - if the value does not exist in input array, return -1
*/

/* ---------- TESTS ---------- */

/*

*/
