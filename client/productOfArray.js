function productOfArray(arr) {
  if (arr.length === 0) return;
  if (arr.length === 1) return arr[0];

  return arr[0] * productOfArray(arr.slice(1));
}

export default productOfArray;

/* ---------- PSEUDO ---------- */

/*

if the integerArr contains nothing
  return

if the integerArr contains 1 element
  return the single element

return firstElem in integerArr and multiply it by the invocation of currFunc with args integerArr elements starting at index 1

*/

/* ---------- IOCE ---------- */

/*
in:
  - (array) - array of integers
out:
  - (integer) - the product of all integers in input array multiplied together.
cons:
  - must USE recursion
edge:
  - if the array is empty return nothing
*/

/* ---------- TESTS ---------- */

/*

productOfArray([1, 2, 3]) // 6
1 * 2 * 3

productOfArray([1, 2, 3, 10]) // 60
1 * 2 * 3 * 10

productOfArray([]) // return nothing

*/
