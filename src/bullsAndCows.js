'use strict';

/**
 * Implement bullsAndCows function:
 *
 * Function takes 2 strings: generatedNumber (generated by computer) and
 * enteredNumber (entered by player) and returns count of bulls and cows
 * according to rules (see readme.md). Each parameter should be exactly 4 digits
 * long.
 *
 * Function returns result as object with properties 'bulls' and 'cows' where
 * 'result.bulls' is a count of bulls and result.cows is a count of cows.
 *
 * If wrong parameter enteredNumber is given function returns undefined.
 *
 * bullsAndCows('1234', '1345') === [1, 2]
 * bullsAndCows('1234', '1234') === [4, 0]
 * bullsAndCows('1234', '') === undefined
 * bullsAndCows('1234', '12') === undefined
 * bullsAndCows('1234', 'asdf') === undefined
 * bullsAndCows('1234', '1234567890') === undefined
 *
 * @param {string} generatedNumber - generated by computer
 * @param {string} enteredNumber - entered by a player
 *
 * @return {object} - like {bulls: 0, cows: 0}
 */
function bullsAndCows(generatedNumber, enteredNumber) {
  let bulls = 0;
  let cows = 0;

  if (!enteredNumber) {
    return undefined;
  }

  if (enteredNumber.length !== 4) {
    return undefined;
  };

  for (let i = 0; i < 4; i++) {
    if (!'1234567890'.includes(enteredNumber[i])
    || enteredNumber.substring(i + 1,).includes(enteredNumber[i])) {
      return undefined;
    };
    
    if (enteredNumber[i] === generatedNumber[i]) {
      bulls += 1;
    } else if (generatedNumber.includes(enteredNumber[i])) {
      cows += 1;
    };
  };

  return {'bulls': bulls, 'cows': cows,};
}

module.exports = bullsAndCows;
