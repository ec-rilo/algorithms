function pivotHelper(arr, startIdx = 0, endIdx = arr.length - 1) {
  const pivot = arr[startIdx];
  let swapIdx = startIdx;

  for (let i = startIdx + 1; i <= endIdx; i++) {
    const currElem = arr[i];

    if (currElem < pivot) {
      swapIdx += 1;
      const temp = arr[swapIdx];
      arr[swapIdx] = arr[i];
      arr[i] = temp;
    }
  }

  const temp = arr[startIdx];
  arr[startIdx] = arr[swapIdx];
  arr[swapIdx] = temp;

  return swapIdx;
}

/* ---------- PSEUDO ---------- */

/*

declare pivot with elem at startIndex in arr

declare pivotIndex with startIndex

iterate through arr
  declare currElem with the value at i in arr

  if currElem is less then pivot elem
    increment value of pivotIndex
    swap value at pivotIndex in arr with value at i in arr

swap the pivot elem with the elem at pivot index

return pivot index

*/

/* ---------- IOCE ---------- */

/*
in:
  - `arr` - (array) - array of integers
  - `startIndex` - (integer) - starting point of loop
  - `endIndex` - where we want the loop to stop iterating
out:
  - `arr` - (array) - the input array but sorted in a unique way.
cons:
  - none
edge:
  - none
*/

function quickSort(arr, startIdx = 0, endIdx = arr.length) {
  if (startIdx >= endIdx) return arr;

  const pivotIdx = pivotHelper(arr, startIdx, endIdx);

  quickSort(arr, startIdx, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, endIdx);

  return arr;
}

export default quickSort;
/* ---------- PSEUDO ---------- */

/*
  if there is less then 2 elems in arr
    return arr

  have pivotIdx have pivotHelper invoked with args from startIdx to endIdx

  have leftIdx have invoke quickSort with args
  arr, startIdx, pivotIdx

  have rightIdx have invoke quickSort with args
  arr, pivotIdx + 1, endIdx

  return arr

*/

/* ---------- IOCE ---------- */

/*
in:
  - `arr` - (array) - array of unsorted integers
out:
  - `arr` - (array) - an array of sorted integers
cons:
  - none
edge:
  - none
*/

/* ---------- TESTS ---------- */

/*

*/
