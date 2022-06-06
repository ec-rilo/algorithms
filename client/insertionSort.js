function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) swap(arr, j, j - 1);
      else break;
    }
  }

  return arr;
}

/* ---------- PSEUDO ---------- */

/*

iterate through arr starting at index 1

  iterate through arr starting at curr index, going backwards while index is not 0
    if the current element is SMALLER then the previos element
      swap the two
    otherwise
      break

return the arr

*/

/* ---------- IOCE ---------- */

/*
in:
  - (array)- array of integers
out:
  - (array) - the sorted version of the input array
cons:
  - must use INSERTION SORT
edge:
  - none
*/

/* ---------- TESTS ---------- */

/*

*/
