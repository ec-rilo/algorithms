function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

export default bubbleSort;

/* ---------- PSEUDO ---------- */

/*

iterate the length of arr starting at end of arr working towards beginning
  iterate the length of arr starting at beginning working towards end
  (iterate only until i - 1)
    if current element is greater then the next element
      swap the values
      declare a var called temp init with current elem
      swap current elem with next elem
      make next elem temp

return arr;

*/

/* ---------- IOCE ---------- */

/*
in:
  - (array) - array of unsorted integers
out:
  - (array) - array of sorted integers
cons:
  - MUST use bubble sort!
edge:
  - only integers are to be sorted.

*/

/* ---------- TESTS ---------- */

/*

bubbleSort([5, 3, 4, 1, 2]) // [1, 2, 3, 4, 5]

*/
