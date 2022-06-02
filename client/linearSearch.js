function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }

  return -1;
}

export default linearSearch;

/* ---------- PSEUDO ---------- */

/*

iterate through input array
  if the current element is equal to the input value
    return the index

return -1

*/

/* ---------- IOCE ---------- */

/*
in:
  - (array) - array of values that can be any data type
  - (value) - it can be any data type
out:
  - (integer) - the index at which the value exists in input array
cons:
  - Do NOT use indexOf
edge:
  - if the value does not exist in input array, return -1
*/

/* ---------- TESTS ---------- */

/*

*/
