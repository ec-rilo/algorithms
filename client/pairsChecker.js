/*
Q3: Given a string, if it has matching parenthesis or brackets,  return 1  + the number of pairs, if theres a mismatch return 0.

"(coder)[byte)]"  => 0
"(c([od]er)) b(yt[e])" //1 5
"(hello [world])(!)" // 1 3
"((hello [world])"  // 0
*/

function matchingPairs(str) {
  const frequencyCounter = {
    '(': 0,
    ')': 0,
    '[': 0,
    ']': 0,
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] in frequencyCounter) {
      frequencyCounter[str[i]] += 1;
    }
  }

  if (
    frequencyCounter['('] === frequencyCounter[')']
    && frequencyCounter['['] === frequencyCounter[']']
  ) {
    return `1 ${frequencyCounter['('] + frequencyCounter[']']}`;
  }

  return '0';
}

export default matchingPairs;

/* ------ PSEUDO ------ */

/*

declare an object with the following props
(
)
[
]

with values 0

iterate through input string
  if the current character is within object
    increment the value in object by 1

if value of ( AND ) are the same in object and ditto for [ AND ]
  return '1 <sum of value at [ AND ) in object>

return 0
*/

/* ------ IOCE ------ */

/*
  in:
    - (string) - a string with pairs (or no pairs) of parenthesis and exponents
  out:
    - string (1 <number of pairs>) if there is pairs
    - string (0) if there are mismatch of pairs
  cons:
    - none
  edge:
    - none
*/
