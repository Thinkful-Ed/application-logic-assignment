describe(`isOdd(n: Number): Boolean`, () => {
  it(`returns false by default`, () => {
    const actual = isOdd();
    expect(actual).to.equal(false);
  })

  it(`returns true when n isn't divisible by 2`, () => {
    expect(isOdd(3)).to.equal(true);
    expect(isOdd(101)).to.equal(true);
    expect(isOdd(17)).to.equal(true);
    expect(isOdd(99)).to.equal(true);
  })

  it(`returns false when n is divisible by 2`, () => {
    expect(isOdd(2)).to.equal(false);
    expect(isOdd(200)).to.equal(false);
    expect(isOdd(16)).to.equal(false);
    expect(isOdd(84)).to.equal(false);
  })
})

describe(`convertCelciusToFahrenheit(celcius: Number): Number`, () => {
  it(`returns 32 when celcius supplied as 0`, () => {
    const actual = convertCelciusToFahrenheit(0);
    expect(actual).to.equal(32);
  })

  it(`returns 50 when celcius supplied as 10`, () => {
    const actual = convertCelciusToFahrenheit(10);
    expect(actual).to.equal(50);
  })

  it(`returns -40 when celcius supplied as -40`, () => {
    const actual = convertCelciusToFahrenheit(-40);
    expect(actual).to.equal(-40);
  })

  it(`returns 68 when celcius supplied as 20`, () => {
    const actual = convertCelciusToFahrenheit(20);
    expect(actual).to.equal(68);
  })
})

describe(`calculateCircleArea(radius: Number): Number`, () => {
  it(`returns 0 when radius supplied as 0`, () => {
    const actual = calculateCircleArea(0);
    expect(actual).to.equal(0);
  })

  it(`returns PI (3.141592...) when radius supplied as 1`, () => {
    const actual = calculateCircleArea(1);
    expect(actual).to.equal(Math.PI);
  })

  it(`returns 28.27... when radius supplied as 3`, () => {
    const actual = calculateCircleArea(3);
    expect(actual).to.equal(28.274333882308138);
  })

  it(`returns 1256.63... when radius supplied as 20`, () => {
    const actual = calculateCircleArea(20);
    expect(actual).to.equal(1256.6370614359173);
  })
})

describe(`divideIntegers(a: Number: b: Number): Number`, () => {
  it(`returns the quotient and remainder for a=1 and b=1`, () => {
    const actual = divideIntegers(1, 1);
    expect(actual).to.equal('1 / 1 is 1 with remainder 0')
  })

  it(`returns the quotient and remainder for a=3 and b=2`, () => {
    const actual = divideIntegers(3, 2);
    expect(actual).to.equal('3 / 2 is 1 with remainder 1')
  })

  it(`returns the quotient and remainder for a=17 and b=3`, () => {
    const actual = divideIntegers(17, 3);
    expect(actual).to.equal('17 / 3 is 5 with remainder 2')
  })
})

describe(`safelyDivideIntegers(a: Number: b: Number): Number`, () => {
  it(`returns the quotient and remainder for a=1 and b=1`, () => {
    const actual = safelyDivideIntegers(1, 1);
    expect(actual).to.equal('1 / 1 is 1 with remainder 0')
  })

  it(`returns the quotient and remainder for a=3 and b=2`, () => {
    const actual = safelyDivideIntegers(3, 2);
    expect(actual).to.equal('3 / 2 is 1 with remainder 1')
  })

  it(`returns the quotient and remainder for a=17 and b=3`, () => {
    const actual = safelyDivideIntegers(17, 3);
    expect(actual).to.equal('17 / 3 is 5 with remainder 2')
  })

  it(`returns an error when b=0`, () => {
    const actual = safelyDivideIntegers(17, 0);
    expect(actual).to.equal('Sorry, cannot divide by zero')
  })
})

describe(`calculateHypotenuse(a: Number, b: Number): Number`, () => {
  it(`returns 0 when a=0 and b=0`, () => {
    const actual = calculateHypotenuse(0, 0);
    expect(actual).to.equal(0)
  })

  it(`returns the square root of 2 when a=1 and b=1`, () => {
    const actual = calculateHypotenuse(1, 1);
    expect(actual).to.equal(Math.SQRT2)
  })

  it(`returns 5 when a=3 and b=4`, () => {
    const actual = calculateHypotenuse(3, 4);
    expect(actual).to.equal(5)
  })

  it(`returns 181 when a=19 and b=180`, () => {
    const actual = calculateHypotenuse(19, 180);
    expect(actual).to.equal(181)
  })
})

describe(`
  canTriangleFitInCircle(
    tiangleSideA: Number,
    triangleSideB: Number,
    circleRadius: Number
  ):Number`, () => {
  it(`returns true when triangle is 0`, () => {
    const actual = canTriangleFitInCircle(0, 0, 1);
    expect(actual).to.equal(true)
  })

  it(`returns false when circle is 0`, () => {
    const actual = canTriangleFitInCircle(1, 1, 0);
    expect(actual).to.equal(false)
  })

  it(`returns true when triangle is 1,1 and circle is 3`, () => {
    const actual = canTriangleFitInCircle(1, 1, 3);
    expect(actual).to.equal(true)
  })

  it(`returns true when triangle is 3,4 and circle is 5`, () => {
    const actual = canTriangleFitInCircle(3, 4, 5);
    expect(actual).to.equal(true)
  })

  it(`returns false when triangle is 19,180 and circle is 180`, () => {
    const actual = canTriangleFitInCircle(19, 180, 180);
    expect(actual).to.equal(false)
  })
})

describe(`generatePinNumber(): Number`, () => {
  it(`returns a number with 5 digits`, () => {
    expect(generatePinNumber()).to.be.above(10000).and.below(99999)
    expect(generatePinNumber()).to.be.above(10000).and.below(99999)
    expect(generatePinNumber()).to.be.above(10000).and.below(99999)
    expect(generatePinNumber()).to.be.above(10000).and.below(99999)
    expect(generatePinNumber()).to.be.above(10000).and.below(99999)
    expect(generatePinNumber()).to.be.above(10000).and.below(99999)
    expect(generatePinNumber()).to.be.above(10000).and.below(99999)
    expect(generatePinNumber()).to.be.above(10000).and.below(99999)
    expect(generatePinNumber()).to.be.above(10000).and.below(99999)
  })

  it(`returns a number that is even`, () => {
    const actual = generatePinNumber();
    expect(actual).to.satisfy(
      num => num % 2 === 0,
      `${actual} is not even`
    )
  })
})

describe(`calculateCoinChange(numberOfCents: Number): String`, () => {
  it(`returns the string of 0 for each coin given no cents`, () => {
    const actual = calculateCoinChange(0);
    expect(actual).to.include('0 25 cent pieces, ')
    expect(actual).to.include('0 ten cent pieces, ')
    expect(actual).to.include('0 five cent pieces ')
    expect(actual).to.include('and 0 one cent pieces')
  })

  it(`returns the string of 4 25cent pieces for 100 cents`, () => {
    const actual = calculateCoinChange(100);
    expect(actual).to.include('4 25 cent pieces, ')
    expect(actual).to.include('0 ten cent pieces, ')
    expect(actual).to.include('0 five cent pieces ')
    expect(actual).to.include('and 0 one cent pieces')
  })

  it(`returns the string of 3 25s, 2 10s and 4 1s, for 99 cents`, () => {
    const actual = calculateCoinChange(99);
    expect(actual).to.include('3 25 cent pieces, ')
    expect(actual).to.include('2 ten cent pieces, ')
    expect(actual).to.include('0 five cent pieces ')
    expect(actual).to.include('and 4 one cent pieces')
  })

  it(`returns the string of 0 25s, 1 10s and 1 5s, for 15 cents`, () => {
    const actual = calculateCoinChange(15);
    expect(actual).to.include('0 25 cent pieces, ')
    expect(actual).to.include('1 ten cent pieces, ')
    expect(actual).to.include('1 five cent pieces ')
    expect(actual).to.include('and 0 one cent pieces')
  })
})

describe(`greetLoggedInUser(user: Object): String`, () => {
  it(`returns 'Welcome, please log in' for empty object`, () => {
    const actual = greetLoggedInUser({})
    expect(actual).to.equal('Welcome, please log in')
  })

  it(`returns 'Welcome, please log in' logged out user`, () => {
    const actual = greetLoggedInUser({ loggedIn: false, givenName: 'Jon' })
    expect(actual).to.equal('Welcome, please log in')
  })

  it(`returns 'Hello, given name!' for logged in user`, () => {
    const actual = greetLoggedInUser({ loggedIn: true, givenName: 'Jon' })
    expect(actual).to.equal('Hello, Jon!')
  })
})

describe(`calculareElectricBill(kwh: Number)`, () => {
  it(`returns 0 when 0 kwh`, () => {
    const actual = calculareElectricBill(0);
    expect(actual).to.equal(0);
  })

  it(`returns 104 when 400 kwh`, () => {
    const actual = calculareElectricBill(400);
    expect(actual).to.equal(104);
  })

  it(`returns 136 when 500 kwh`, () => {
    const actual = calculareElectricBill(500);
    expect(actual).to.equal(136);
  })

  it(`returns 168 when 600 kwh`, () => {
    const actual = calculareElectricBill(600);
    expect(actual).to.equal(168);
  })

  it(`returns 200 when 700 kwh`, () => {
    const actual = calculareElectricBill(700);
    expect(actual).to.equal(200);
  })

  it(`returns 444 when 1400 kwh`, () => {
    const actual = calculareElectricBill(1400);
    expect(actual).to.equal(444);
  })
})

describe(`doesUserHaveCredit(userAccount: Object): String`, () => {
  it(`returns 'Credit available' by default`, () => {
    const actual = doesUserHaveCredit({});
    expect(actual).to.equal('Credit available');
  })

  it(`returns 'Credit limit exceeded' if user's credit starts over limit`, () => {
    const actual = doesUserHaveCredit({
      creditTakenBeginningOfMonth: 2,
      totalChargesInMonth: 0,
      creditsAvailableInMonth: 0,
      creditLimit: 1,
    });
    expect(actual).to.equal('Credit limit exceeded');
  })

  it(`returns 'Credit limit exceeded' if user's credit goes over limit`, () => {
    const actual = doesUserHaveCredit({
      creditTakenBeginningOfMonth: 0,
      totalChargesInMonth: 2,
      creditsAvailableInMonth: 0,
      creditLimit: 1,
    });
    expect(actual).to.equal('Credit limit exceeded');
  })

  it(`returns 'Credit available' if user's credit has more available`, () => {
    const actual = doesUserHaveCredit({
      creditTakenBeginningOfMonth: 0,
      totalChargesInMonth: 2,
      creditsAvailableInMonth: 1,
      creditLimit: 1,
    });
    expect(actual).to.equal('Credit available');
  })

  it(`returns 'Credit limit exceeded' calculation is `, () => {
    const actual = doesUserHaveCredit({
      creditTakenBeginningOfMonth: 1,
      totalChargesInMonth: 2,
      creditsAvailableInMonth: 1,
      creditLimit: 1,
    });
    expect(actual).to.equal('Credit limit exceeded');
  })
})

describe(`isPalindromeNumber(num: Number): Boolean`, () => {
  it(`returns 'Incorrect input' if number has 4 digits`, () => {
    const actual = isPalindromeNumber(9999);
    expect(actual).to.equal('Incorrect input');
  })

  it(`returns 'Incorrect input' if number has 6 digits`, () => {
    const actual = isPalindromeNumber(100000);
    expect(actual).to.equal('Incorrect input');
  })

  it(`returns false if all numbers are different`, () => {
    const actual = isPalindromeNumber(12345);
    expect(actual).to.equal(false);
  })

  it(`returns false if first and last digits don't match`, () => {
    const actual = isPalindromeNumber(90002);
    expect(actual).to.equal(false);
  })

  it(`returns false if second and second to last digits don't match`, () => {
    const actual = isPalindromeNumber(19021);
    expect(actual).to.equal(false);
  })

  it(`returns true if all numbers are the same`, () => {
    const actual = isPalindromeNumber(11111);
    expect(actual).to.equal(true);
  })

  it(`returns true for palindrome`, () => {
    const actual = isPalindromeNumber(12321);
    expect(actual).to.equal(true);
  })
})
