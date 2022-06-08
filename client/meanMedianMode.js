/*
Q2: Given an array with all positive integers, non zero, return 1 if Mode = Mean, 0 otherwise.
Let's say [0,1,1,2,3], mean is 1, mean is 1.4, so return 0

MEAN: add all numbers up and divide by the number of... numbers. This is the average

MEDIAN: THE MIDDLE VALUE IN A SORTED LIST - NOT NEEDED!!!!!!!!!!

MODE: THE MOST REPEATED NUMBER

*/

function meanModeChecker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  const mean = sum / arr.length;

  const numbersFrequency = {};
  numbersFrequency[arr[0]] = 1;
  let mode = arr[0];

  for (let i = 1; i < arr.length; i++) {
    numbersFrequency[arr[i]] += (numbersFrequency[arr[i]] || 0) + 1;

    if (numbersFrequency[arr[i]] > numbersFrequency[arr[mode]]) {
      mode = arr[i];
    }
  }

  if (mode === mean) return 1;

  return 0;
}

export default meanModeChecker;

/* ------- PSEUDO ------- */

/*

  have sum init with 0

  iterate over input array
    add current value in arr to sum

  have mean be sum divided by arr.length

  have numbersFrequency be an object with a value of first number in input arr being 1
  have mode be the first number in input array
  iterate over input array starting at 1
    if value does not exist in numbersFreuqnecy
      make it equal to 1 in numbersFrequency
    otherwise
      increment it by 1

    if value in numbersFrequency is larger then value in numbers frequency at mode
      make mode equal the current number in input arr

  if mode equals mean
    return 1

  return 0
*/

/* ------- IOCE ------- */

/*
  in:
    - (array) - array of numbers
  out:
    - (integer) - 1 IF mode = mean, otherwise 0.
  cons:
    - ALL POSITIVE INTEGERS
    - NO ZEROS
  edge:
    - none
*/

/* ------- TESTS ------- */

/*

meanModeChecker([0, 1, 1, 2, 3]) // 0



*/
