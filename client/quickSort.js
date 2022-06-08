function pivotHelper(arr, startIdx, endIdx) {
  const pivot = arr[startIdx];
  let swapIdx = startIdx;

  for (let i = 0; i < endIdx; i++) {
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

export default pivotHelper;

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

/* ---------- TESTS ---------- */

/*

*/
