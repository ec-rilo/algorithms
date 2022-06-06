// function swap(arr, idx1, idx2) {
//   const temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;
// }

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i; j > 0; j--) {
//       if (arr[j] < arr[j - 1]) swap(arr, j, j - 1);
//       else break;
//     }
//   }

//   return arr;
// }

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currElem = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > currElem; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currElem;
  }

  return arr;
}

export default insertionSort;

/* ---------- PSEUDO ---------- */

/*

iterate through arr starting at index 1
  declare a var called currElem init with the current element in loop

  iterate through arr starting previous index, going backwards
  (while index is greater then or equal to 0)
  AND
  (while current element in loop is greater then currElem)
    swap elem at j with elem at j - 1

  assign the element at j with currElem

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
