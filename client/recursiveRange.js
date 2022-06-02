function recursiveRange(num) {
  if (num === 0) return num;

  return num + recursiveRange(num - 1);
}

export default recursiveRange;

/* ---------- PSEUDO ---------- */

/*

if num is 0
  return num

return num + the invocation of current function with args num - 1

*/

/* ---------- IOCE ---------- */

/*
in:

out:

cons:

edge:
*/

/* ---------- TESTS ---------- */

/*

recursiveRange(6) // 21
6 + 5 + 4 + 3 + 2 + 1 + 0

recursiveRange(10) // 55
10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0

*/
