// Pure Recursive function
function power(baseNum, exp) {
  if (exp === 0) return 1;

  if (exp === 1) return baseNum;

  return baseNum * power(baseNum, exp - 1);
}

// Helper Recursive function

function helperPower(base, exp) {
  let total = 1;

  const iterate = (baseNum, exponent) => {
    if (exponent === 0) return;

    total *= baseNum;

    iterate(baseNum, exponent - 1);
  };

  iterate(base, exp);

  return total;
}

export { power, helperPower };

/* ---------- PSEUDO ---------- */

/*

---------- PURE RECURSIVE CASE ----------

if the exp is equal to 0
  return 1

if the exp is equal to 1
  return the base number

return baseNum * by the invocation of the current function with args(baseNum,  exponent - 1)

---------- HELPER METHOD RECURSIVE CASE ----------

declare a var called total init with 1

declare a func called iterate
  if the exp is equal to 0
    return

  multiply total by baseNum

  invoke iterate passing in baseNum and exp - 1 as arguments

invoke iterate passing in baseNum and exponent

return total

*/

/* ---------- IOCE ---------- */

/*

in:
  - (integer) - base number
  - (integer) - exponent number
out:

cons:

edge:
  - don't worry about negative numbers
  - if exponent is 0 return the base number

*/
