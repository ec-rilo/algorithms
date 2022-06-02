function naiveSearch(longStr, val) {
  let counter = 0;

  for (let i = 0; i < longStr.length; i++) {
    if (longStr[i] === val[0]) {
      let numOfMatches = 0;

      for (let j = 0; j < val.length; j++) {
        const currChar = val[j];
        const outerChar = longStr[i + j];

        if (currChar !== outerChar) {
          break;
        } else {
          numOfMatches++;
        }
      }

      if (numOfMatches === val.length) counter++;
      i += numOfMatches - 1;
    }
  }

  return counter;
}

export default naiveSearch;

/* ---------- PSEUDO ---------- */

/*

declare a var called counter init with 0

iterate through longStr over each individual character
  if currChar in outer Loop is equal to first char in `value`

    declare a var called numOfMatches init with 0

    iterate through `value`
      declare a var called currChar init with char from `value` loop
      declare a var called outerChar init with outer loops index + inner loops index
      if currChar does NOT equal outerChar
        break out of loop
      otherwise
        increase numOfMatches by 1

    if numOfMatches equals the length of `value` str
      increase counter by 1

    increase outer loop index counter by num of matches - 1

return counter
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
