
/**
 * @difficulty easy, ~3 minutes
 *
 * Write a function that takes a single parameter `n` and returns `true` if `n` is an odd number, false otherwise.
 *
 * HINTS:
 * - You can use the modulo operator, `%` to calculate the remainder of the number when divided by another number.
 *
 * @param {number} n number to check if it's odd
 * @returns {boolean} `true` if the number is odd, `false` if the number is even
 */
function isOdd(n) {
  return n % 2 == 1;
}

/**
 * @difficulty intermediate, ~5 minutes
 *
 * Write a function that accepts a number representing a temperature in degrees celcius.
 * Convert the celcius to fahrenheight and return the value.
 *
 * HINTS:
 * - the forumular for fahrenheight is to multiply the celcius by nine fifths and then add 32
 *
 * @param {number} celcius degrees in celcius to convert to fahrenheight
 * @returns {number} the temperature in degrees fahrenheight
 */
function convertCelciusToFahrenheit(celcius) {
  return celcius * (9 / 5) + 32;
}

/**
 * @difficulty intermediate, ~5 minutes
 *
 * Write a function that accepts a number representing the radius of a circle.
 * Calculate the and return the area of the circle.
 *
 * HINTS:
 * - The formular for a circle is PI multiplied by the radius squared
 * - You can use the Math's PI property
 * - You can use the Math's method for calculating a power or the exponent operator to calculate the square of the radius
 *
 * @param {number} radius the radius of the circle
 * @returns {number} the circle area
 */
function calculateCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

/**
 * @difficulty intermediate, ~5 munutes
 *
 * Write a function that accepts 2 numbers, `a` and `b`. Then divide `a` by `b`.
 * Then, return a string in the format:
 *
 * ```js
 * 'a / b is c with remainder r'
 * ```
 *
 * The `c` is the number of times `b` goes into `a` (the quotient) and `r` is the remainder.
 *
 * HINTS:
 * - You can divide numbers using the division operator, `/`
 * - You can remove fractional digits (only the integer part) by using the Math's trunc method
 * - You can calculate the remainder by using the modulo operator
 *
 * @param {number} a the number to be divided
 * @param {number} b the number to divide by
 * @returns {string} in the described format stating the quotient and remainder
 */
function divideIntegers(a, b) {
  const quotient = Math.trunc(a / b);
  const remainder = a % b;
  return `${a} / ${b} is ${quotient} with remainder ${remainder}`;
}

/**
 * @difficulty intermediate, ~2 minutes
 *
 * Reuse the same division from the previous drill, `divideIntegers`.
 * In this function, check to ensure that `b` is not `0` before dividing the numbers to prevent a division by zero.
 *
 * If `b` is `0`, return the string `Sorry, cannot divide by zero`.
 *
 * @param {number} a the number to be divided
 * @param {number} b the number to divide by
 * @returns {string} EITHER:
 * - in the described format stating the quotient and remainder
 * - OR: 'Sorry, cannot divide by zero'
 */
function safelyDivideIntegers(a, b) {
  return (b == 0)
    ? 'Sorry, cannot divide by zero'
    : divideIntegers(a, b);
}

/**
 * @difficulty intermediate, ~5 minutes
 *
 * Wrie a funcion that accepts two parameters, `a` and `b` representing two sides (lengths) of a right angle triangle.
 * Calculate the hypotenuse of the triangle using the formula:
 *
 * ```
 * a^2 + b^2 = hyp^2
 * ```
 *
 * HINTS:
 * - You can use the Math's power method or exponent operator to calculate the squares of `a` and `b`
 * - You can use the Math's square root method to calculate the hypotenuse once you have the sum of the two squares
 *
 * @param {number} a the length of one side of a right angle triangle
 * @param {number} b the length of the other side of a right angle triangle
 * @returns {number} the hypotenuse of the right angle triangle
 */
function calculateHypotenuse(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

/**
 * @difficulty intemediate, ~3 minutes
 *
 * Write a function that accepts 3 arguments,
 * - the first two arguments represent the lengths of the perpendicular sides of a right angle triangle.
 * - the third argument represents the radius of a circle
 *
 * Calculate whether the triangle described by the first two arguments would fit into the circle described by the third argument.
 *
 * Return `true` if the triangle can fit, and `false` otherwise.
 *
 * HINT:
 * - A right angled triangle can fit in a circle if the length of the hypotenuse of the
 * triangle is less than or equal to the length of the radius of the circle
 * - You can make reuse of the `calculateHypotenuse` function within this function
 *
 * @param {number} tiangleSideA the length of one side of a right angle triangle
 * @param {number} triangleSideB the lenth of the other side of a right angle triangle
 * @param {number} circleRadius the radius of a circle
 * @returns {boolean} true if the triangle can fit in the circle, false otherwise.
 */
function canTriangleFitInCircle(tiangleSideA, triangleSideB, circleRadius) {
  const hypotenuse = calculateHypotenuse(tiangleSideA, triangleSideB);
  return hypotenuse <= circleRadius;
}

/**
 * @difficulty intermediate/hard, ~10 minutes
 *
 * Write a function that can generate a random 5 digit personal identification number (PIN).
 *
 * The function should generate a number between 10000 and 99998 and return it. The PIN number should be an even number
 *
 * HINTS:
 * - You can use the Math's random method to generate a number between 0 and 1
 * - You can multiply this number to generate a number between ~900 and ~89000
 * - You can then add to this number to ensure it has 5 digits
 * - You can use the Math's round, ceil or trunc to be left with a 5 digit integer
 * - You can use the `isOdd` function defined above to check if you need to + 1
 *
 * @returns the pin number
 */
function generatePinNumber() {
  const min = 10000;
  const max = 99999;

  let pin = Math.round(Math.random() * (max - min) + min);

  if (isOdd(pin)) {
    pin = pin + 1;
  }

  return pin;
}

/**
 * @difficulty intemediate, ~5 minutes
 *
 * Write a function that accepts a value `numberOfCents` representing a number of cents between 0 and 100.
 * Calculate the number of quarters, dimes, nickels and cent coins needed to make the change. Return a string representing this information.
 *
 * For example:
 * if `numberOfCents` is 74, return the string:
 * `'2 25 cent pieces, 2 ten cent pieces, 0 five cent pieces and 4 one cent pieces'`
 *
 * HINTS:
 * - You can use the Math's trunc method to calculate the number of quaters
 * - You can use the modulo operator with `25` to calculate the change remaining after the number of quarters.
 * - You can repeat the process of trunc and modulo for dimes and nickels to create each value needed in the final string.
 *
 * @param {number} numberOfCents the total amount of money to calculate coin change for
 */
function calculateCoinChange(numberOfCents) {
  const quarters = Math.trunc(numberOfCents / 25);
  const changeAfterQuarters = numberOfCents % 25;

  const dimes = Math.trunc(changeAfterQuarters / 10);
  const changeAfterDimes = changeAfterQuarters % 10;

  const nickels = Math.trunc(changeAfterDimes / 5);
  const remainingCents = changeAfterDimes % 5;

  return `${quarters} 25 cent pieces, `
    + `${dimes} ten cent pieces, `
    + `${nickels} five cent pieces and `
    + `${remainingCents} one cent pieces`;
}

/**
 * @difficulty easy ~3 minutes
 *
 * Write a function that accepts an object representing a user. The object will contain two properties, `givenName` and `loggedIn`. The `givenName` is a string and `loggedIn` is a boolean.
 * The function should return either a greeting or a prompt to log in.
 * If logged in, the string should be `Hello given name`.
 * If not logged in, the string should be `Welcome, please log in`.
 *
 * For example, the function can be used like so
 *
 * ```js
 * const user1 = { givenName: 'Samwise Gamgee', loggedIn: false };
 * greetLoggedInUser(user1); // `Welcome, please log in`
 *
 * const user2 = { givenName: 'Aragorn', loggedIn: true };
 * greetLoggedInUser(user2); // `Hello, Aragorn!`
 * ```
 *
 * @param {object} user an object containing a properties of `givenName` and `loggedIn`
 * @returns {string} Saying either `'Hello '` and the user's given name, OR, `'Welcome, please log in'`.
 */
function greetLoggedInUser(user) {
  if (user.loggedIn) {
    return `Hello, ${user.givenName}!`;
  } else {
    return `Welcome, please log in`;
  }
}

/**
 * @difficulty intermediate/hard ~5 minutes
 *
 * Write a function that accepts a number in kilowatt hours (KWH).
 * Then, calculates the total electricity bill.
 *
 * The first 400 kwh cost $0.26 per kwh,
 * the next 600 kwh cost $0.32 per kwh,
 * any kwh in excess of this costs $0.37 per kwh.
 *
 * @param {number} kwh amount of electricity used in kilowatt hours (KWH)
 * @returns {number} the total bill
 */
function calculareElectricBill(kwh) {
  const FIRST_400_RATE = 0.26;
  const NEXT_600_RATE = 0.32;
  const RATE_AFTER_600 = 0.37;

  let total = 0;

  if (kwh > 1000) {
    total = (kwh - 1000) * RATE_AFTER_600;
    kwh = 1000;
  }

  if (kwh > 400) {
    total = total + (kwh - 400) * NEXT_600_RATE;
    kwh = 400;
  }

  return total + kwh * FIRST_400_RATE;
}

/**
 * @difficulty intemediate, ~5 mins
 *
 * Write a function accepts a user account object containing properties to describe the user's credit.
 *
 * Calculate if the credit limit has been exceeded.
 * If the credit limit was exceeded return the string `'Credit limit exceeded'`,
 * otherwise return the string `'Credit available'`.
 *
 * To calculate whether the credit limit has exceeded, the credit used musn't exceeded the credit limit. The credit used is the sum of the credit taken before the month and the total charges, minus the extra credits made available during the month.
 *
 * For example:
 *
 * ```js
 * const userOne = {
 *   creditTakenBeginningOfMonth: 0,
 *   totalChargesInMonth: 1,
 *   creditsAvailableInMonth: 2,
 *   creditLimit: 1,
 * }
 * doesUserHaveCredit(userOne) // returns 'Credit available';
 *
 * const userTwo = {
 *   creditTakenBeginningOfMonth: 0,
 *   totalChargesInMonth: 4,
 *   creditsAvailableInMonth: 2,
 *   creditLimit: 1,
 * }
 * doesUserHaveCredit(userTwo) // returns 'Credit limit exceeded';
 *
 * const userThree = {
 *   creditTakenBeginningOfMonth: 3,
 *   totalChargesInMonth: 1,
 *   creditsAvailableInMonth: 2,
 *   creditLimit: 1,
 * }
 * doesUserHaveCredit(userThree) // returns 'Credit limit exceeded';
 * ```
 *
 * @param {object} userAccount an object containing a properties of
 * - `creditTakenBeginningOfMonth`, the starting credit available before the month
 * - `totalChargesInMonth`, the total credits taken from the account in a month
 * - `creditsAvailableInMonth`, the amount of extra credits available in the month
 * - `creditLimit`, the maximum amount of credits allowed taken at the end of the month
 * @returns {string} stating if credit is available in the month or has been exceeded
 */
function doesUserHaveCredit(userAccount) {
  const creditUsed = userAccount.creditTakenBeginningOfMonth
    + userAccount.totalChargesInMonth
    - userAccount.creditsAvailableInMonth;

  if (creditUsed > userAccount.creditLimit) {
    return 'Credit limit exceeded';
  } else {
    return 'Credit available';
  }
}

/**
 * @difficulty hard, ~20 minutes
 *
 * Write a function that accepts a single 5 digit number `num`.
 *
 * First validate `num`, if it's not 5 digits, return the string `'Incorrect input'`.
 *
 * Next, determine if the number is a palindrome or not.
 *
 * A palindrome is a number that is the same read backward as well as forward. Return `true` if the number is a palindrome.
 *
 * For example
 *
 * ```js
 * isPalindromeNumber(12321) // true
 * isPalindromeNumber(12345) // false
 * isPalindromeNumber(01010) // true
 * isPalindromeNumber(11010) // false
 * ```
 *
 * HINTS:
 * - You can use division, modulo operators and `Math.trunc` to calculate the first, last, second and second to last digits.
 * - Once you have the 4 digits, you can compare to check if they are palindromes.
 *
 * @param {number} num a 5 digit number to check if it is a palindrome
 * @returns {Boolean} `true` if the number is a palindrome, `false` otherwise
 */
function isPalindromeNumber(num) {
  if (num > 99999 || num < 10000) {
    return 'Incorrect input';
  }

  const firstDigit = Math.trunc(num / 10000);
  const lastDigit = num % 10;

  if (firstDigit !== lastDigit) {
    return false;
  }

  // remove first digit
  num = num % 10000;
  // remove last digit
  num = Math.trunc(num / 10);
  // num is now 3 digits long

  const secondDigit = Math.trunc(num / 100);
  const secondToLastDigit = num % 10;

  if (secondDigit !== secondToLastDigit) {
    return false;
  }

  // all checks passed, we have a palindrome
  return true;
}
