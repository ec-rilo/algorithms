function factorial(num) {
  if (num === 0 || num === 1) return 1;

  return num * factorial(num - 1);
}

export default factorial;

/* ---------- PSEUDO ---------- */

/*

if num is 0 OR 1
  return 1

return num multiplied by invocation of curr function with num - 1 as the argument

*/

/* ---------- IOCE ---------- */

/*
in:
  - (integer) - a number
out:
  - (integer) - the factorial version of the input number.
cons:
   - MUST use pure recursion
edge:
  - there will NOT be negative numbers or floating point numbers
  - factorial 0 always returns 1
*/

/* ---------- TESTS ---------- */

/*

factorial(0) // 1

factorial(1) // 1

factorial(2) // 2
2 * 1

factorial(4) // 24
4 * 3 * 2 * 1

factorial(7) // 5040
7 * 6 * 5 * 4 * 3 * 2 * 1

*/
