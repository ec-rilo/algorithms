function merge(arr1, arr2) {
  const results = [];

  let arr1Pointer = 0;
  let arr2Pointer = 0;

  while (arr1[arr1Pointer] && arr2[arr2Pointer]) {
    const arr1Value = arr1[arr1Pointer];
    const arr2Value = arr2[arr2Pointer];

    if (arr1Value < arr2Value) {
      results.push(arr1Value);
      arr1Pointer += 1;
    } else {
      results.push(arr2Value);
      arr2Pointer += 1;
    }
  }

  while (arr1Pointer < arr1.length) {
    results.push(arr1[arr1Pointer]);
    arr1Pointer += 1;
  }

  while (arr2Pointer < arr2.length) {
    results.push(arr2[arr2Pointer]);
    arr2Pointer += 1;
  }

  return results;
}

export default merge;

/* ---------- PSEUDO ---------- */

/*
create an empty array called `results`

create a var called arr1Pointer init with 0
create a var called arr2Pointer init with 0

while there are still values we have not looked at
  if value in first array at arr1Pointer is SMALLER then value in second array at arr2Pointer
    get value in firstArray at arr1Pointer and add it to results array
    move on to next value in first array
  otherwise if value in arr1 at arr1Pointer is LARGER then value in arr2 at arr2Pointer
    get the value in secondArr at arr2Pointer and add it to results array
    move on to next value in second array

if we exahuasted the values in firstArr
  get the remaining values from the second arr starting at pointer2 and add to results array
otherwise if we exahuasted the values in secondArr
  get the remaining values from the first arr starting at pointer1 and add to results array

return results
*/

/* ---------- IOCE ---------- */

/*
in:
  - (array) - an array of integers
  - (array) - an array of integers
out:
  - (array) - both input arrays sorted into one big array
cons:
  - only uses integers
  - both arrays must be sorted in ascending order
edge:
  - none
*/

/* ---------- TESTS ---------- */

/*

*/
