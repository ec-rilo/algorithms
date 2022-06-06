function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      const currElem = arr[j];
      const minElem = arr[min];
      if (currElem < minElem) min = j;
    }

    if (i !== min) swap(arr, i, min);
  }

  return arr;
}

export default selectionSort;

/* ---------- PSEUDO ---------- */

/*

iterate through each num in arr
  declare a var called min init with current elem index

  iterate through each num in arr
  (starting at i)
    declare a var called currElem init with element at j
    declare a var called minElem init with elem at min
    if the currElem is smaller then minElem
      have the currElem index be the min

  if the currentElem is not equal to elem at min
    swap

*/

/* ---------- IOCE ---------- */

/*
in:
  - (array) - an array of unsorted integers
out:
  - (array) - array of sorted integers
cons:
  - MUST use selection sort
edge:
  - none
*/

/* ---------- TESTS ---------- */

/*

*/
