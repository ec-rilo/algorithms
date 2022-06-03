function naiveSearch(long, pattern) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (long[j + i] !== pattern[j]) break;
      if (j === pattern.length - 1) count++;
    }
  }

  return count;
}

export default naiveSearch;

/* ---------- PSEUDO ---------- */

/*

declare a var called count init with 0

iterate over long
  iterate over pattern
    if outerChar does NOT equal innerChar
      break
    if inner index equals pattern length - 1
      increment count

return count
*/

/* ---------- IOCE ---------- */

/*
in:
  - `longStr` - (string) - the longer string
  - `value` - (string) - the value we want to see the number of times it appears in `longStr`
out:
  - (integer) - the number of times that `value` appears in `longStr`
cons:
  - none
edge:
  - if there are no occurences of `value` in `longStr` return 0
*/

/* ---------- TESTS ---------- */

/*

naiveSearch('hellohellohello', 'hello') // 2

naiveSearch('hellohellohello', 'bye') // 0

naiveSearch('hellohellohellocathellocathellohellocat', 'cat') // 3

*/
