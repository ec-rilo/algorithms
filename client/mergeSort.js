import merge from './merge';

// function mergeSort(arr) {
//   const traverseList = (list) => {
//     if (list.length === 1 || list.length === 0) {
//       return list;
//     }

//     const leftHalf = list.slice(0, Math.floor(list.length / 2));
//     const rightHalf = list.slice(Math.floor(list.length / 2));

//     const sortedLeftHalf = traverseList(leftHalf);
//     const sortedRightHalf = traverseList(rightHalf);

//     const sortedArr = merge(sortedLeftHalf, sortedRightHalf);

//     return sortedArr;
//   };

//   traverseList(arr);

//   return arr;
// }

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

export default mergeSort;

/* ---------- PSEUDO ---------- */

/*

declare func traverseList
  if array length is 1 OR 0
    return array

  declare arr1 init with first half of input array
  declare arr2 init with second half of input array

  declare a var called firstHalf with invoke traverseList passing in firstHalf
  declare a var called secondHalf with invoke traverseList passing in secondHalf

  declare a var called sorted invoke merge passing in firstHalf and secondHalf

  return sorted

return traverseList passing in input arr

*/

/* ---------- IOCE ---------- */

/*
in:
  - (array) - unsorted array of integers
out:
  - (array) - sorted array of integers
cons:
  - MUST use MERGE SORT
edge:
  - none
*/

/* ---------- TESTS ---------- */

/*

*/
