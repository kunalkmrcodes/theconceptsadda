// Class 10 Practice Questions Dataset
export const class10Practice = [
  {
    "id": "real-numbers",
    "title": "Real Numbers",
    "class": 10,
    "chapterNumber": "01",
    "questions": [
      {
        "id": "rn-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "If two positive integers a and b are written as a = x\u00b3y\u00b2 and b = xy\u00b3, where x, y are prime numbers, then HCF(a, b) is:",
        "options": [
          "(A) xy",
          "(B) xy\u00b2",
          "(C) x\u00b3y\u00b3",
          "(D) x\u00b2y\u00b2"
        ],
        "answer": "(B) xy\u00b2",
        "solution": "HCF is the product of smallest powers of common prime factors.\nFor x: power 1. For y: power 2. Hence HCF(a, b) = xy\u00b2."
      },
      {
        "id": "rn-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "If two positive integers p and q are expressed as p = ab\u00b2 and q = a\u00b3b, where a, b are prime numbers, then LCM(p, q) is:",
        "options": [
          "(A) ab",
          "(B) a\u00b2b\u00b2",
          "(C) a\u00b3b\u00b2",
          "(D) a\u00b3b\u00b3"
        ],
        "answer": "(C) a\u00b3b\u00b2",
        "solution": "LCM is product of highest powers of prime factors involved.\nFor a: power 3. For b: power 2. Hence LCM(p, q) = a\u00b3b\u00b2."
      },
      {
        "id": "rn-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "The ratio of HCF to LCM of the least composite number (4) and the least prime number (2) is:",
        "options": [
          "(A) 1 : 2",
          "(B) 2 : 1",
          "(C) 1 : 1",
          "(D) 1 : 4"
        ],
        "answer": "(A) 1 : 2",
        "solution": "Least prime = 2, Least composite = 4.\nHCF(2, 4) = 2, LCM(2, 4) = 4. Ratio = 2 : 4 = 1 : 2."
      },
      {
        "id": "rn-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "If HCF(306, 657) = 9, then LCM(306, 657) is:",
        "options": [
          "(A) 22338",
          "(B) 22388",
          "(C) 22833",
          "(D) 30665"
        ],
        "answer": "(A) 22338",
        "solution": "HCF \u00d7 LCM = Product of two numbers\n9 \u00d7 LCM = 306 \u00d7 657 \u21d2 LCM = (306 \u00d7 657) / 9 = 22338."
      },
      {
        "id": "rn-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "The total number of factors of a prime number is:",
        "options": [
          "(A) 1",
          "(B) 2",
          "(C) 0",
          "(D) Infinite"
        ],
        "answer": "(B) 2",
        "solution": "A prime number has exactly 2 factors: 1 and itself."
      },
      {
        "id": "rn-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Express 140 as a product of its prime factors.",
        "answer": "2\u00b2 \u00d7 5 \u00d7 7",
        "solution": "140 \u00f7 2 = 70; 70 \u00f7 2 = 35; 35 \u00f7 5 = 7; 7 \u00f7 7 = 1.\n140 = 2 \u00d7 2 \u00d7 5 \u00d7 7 = 2\u00b2 \u00d7 5 \u00d7 7."
      },
      {
        "id": "rn-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find HCF and LCM of 12, 15 and 21 using prime factorisation.",
        "answer": "HCF = 3, LCM = 420",
        "solution": "12 = 2\u00b2 \u00d7 3, 15 = 3 \u00d7 5, 21 = 3 \u00d7 7.\nHCF = 3\u00b9 = 3.\nLCM = 2\u00b2 \u00d7 3 \u00d7 5 \u00d7 7 = 420."
      },
      {
        "id": "rn-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Check whether 6\u207f can end with digit 0 for any natural number n.",
        "answer": "No, 6\u207f cannot end with digit 0.",
        "solution": "6\u207f = (2 \u00d7 3)\u207f = 2\u207f \u00d7 3\u207f. Prime factorisation does not contain factor 5. Thus 6\u207f cannot end with 0."
      },
      {
        "id": "rn-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Explain why 7 \u00d7 11 \u00d7 13 + 13 is a composite number.",
        "answer": "Composite number (has factors 13 \u00d7 78)",
        "solution": "7 \u00d7 11 \u00d7 13 + 13 = 13 \u00d7 (77 + 1) = 13 \u00d7 78.\nSince it can be factored into numbers other than 1 and itself, it is composite."
      },
      {
        "id": "rn-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Given that HCF(96, 404) = 4, find LCM(96, 404).",
        "answer": "9696",
        "solution": "LCM = (96 \u00d7 404) / 4 = 96 \u00d7 101 = 9696."
      },
      {
        "id": "rn-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove that \u221a5 is an irrational number.",
        "answer": "\u221a5 is irrational",
        "solution": "Assume \u221a5 = a/b (co-prime). 5b\u00b2 = a\u00b2 \u21d2 5 divides a. Let a = 5c \u21d2 5b\u00b2 = 25c\u00b2 \u21d2 b\u00b2 = 5c\u00b2 \u21d2 5 divides b. Contradicts co-prime assumption. Thus \u221a5 is irrational."
      },
      {
        "id": "rn-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove that 3 + 2\u221a5 is irrational given \u221a5 is irrational.",
        "answer": "3 + 2\u221a5 is irrational",
        "solution": "Let 3 + 2\u221a5 = a/b \u21d2 2\u221a5 = (a - 3b)/b \u21d2 \u221a5 = (a - 3b)/(2b). Rational RHS contradicts irrational LHS."
      },
      {
        "id": "rn-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove that 1/\u221a2 is irrational.",
        "answer": "1/\u221a2 is irrational",
        "solution": "Let 1/\u221a2 = a/b \u21d2 \u221a2 = b/a. Rational b/a contradicts irrational \u221a2."
      },
      {
        "id": "rn-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find the greatest 6-digit number exactly divisible by 24, 15 and 36.",
        "answer": "999720",
        "solution": "LCM(24, 15, 36) = 360. Greatest 6-digit number = 999999. Divide 999999 by 360: remainder = 279. 999999 - 279 = 999720."
      },
      {
        "id": "rn-15",
        "number": 15,
        "type": "PYQ",
        "marks": 3,
        "question": "Three bells toll together at intervals of 9, 12, 15 minutes respectively. After what time will they toll together next?",
        "answer": "180 minutes (3 hours)",
        "solution": "Required time = LCM(9, 12, 15) = 2\u00b2 \u00d7 3\u00b2 \u00d7 5 = 180 minutes = 3 hours."
      },
      {
        "id": "rn-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "A merchant has 120 litres of oil of one kind, 180 litres of another and 240 litres of a third. What should be the maximum capacity of each tin to fill them equally?",
        "answer": "60 litres",
        "solution": "Maximum capacity = HCF(120, 180, 240) = 60 litres."
      },
      {
        "id": "rn-17",
        "number": 17,
        "type": "PYQ",
        "marks": 1,
        "question": "Smallest number which when divided by 35, 56 and 91 leaves a remainder of 7 in each case is:",
        "options": [
          "(A) 3640",
          "(B) 3647",
          "(C) 3633",
          "(D) 3654"
        ],
        "answer": "(B) 3647",
        "solution": "Required number = LCM(35, 56, 91) + 7 = 3640 + 7 = 3647."
      },
      {
        "id": "rn-18",
        "number": 18,
        "type": "PYQ",
        "marks": 2,
        "question": "Find the HCF of 65 and 117 and express it in the form 65m + 117n.",
        "answer": "HCF = 13, m = 2, n = -1",
        "solution": "65 = 5\u00d713, 117 = 9\u00d713 \u21d2 HCF = 13.\n13 = 2(65) - 1(117) \u21d2 m = 2, n = -1."
      },
      {
        "id": "rn-19",
        "number": 19,
        "type": "PYQ",
        "marks": 3,
        "question": "Show that any positive odd integer is of the form 4q + 1 or 4q + 3, where q is some integer.",
        "answer": "Form 4q + 1 or 4q + 3",
        "solution": "By Euclid's division algorithm, a = 4q + r (r = 0,1,2,3).\nr = 0, 2 give even numbers. r = 1, 3 give odd numbers 4q + 1 and 4q + 3."
      },
      {
        "id": "rn-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "State the Fundamental Theorem of Arithmetic. Find HCF and LCM of 408 and 1032.",
        "answer": "HCF = 24, LCM = 17544",
        "solution": "Every composite number can be uniquely factored into primes.\n408 = 2\u00b3 \u00d7 3 \u00d7 17, 1032 = 2\u00b3 \u00d7 3 \u00d7 43.\nHCF = 24, LCM = 17544."
      }
    ]
  },
  {
    "id": "polynomials",
    "title": "Polynomials",
    "class": 10,
    "chapterNumber": "02",
    "questions": [
      {
        "id": "poly-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "If one zero of the quadratic polynomial x\u00b2 + 3x + k is 2, then the value of k is:",
        "options": [
          "(A) 10",
          "(B) -10",
          "(C) -7",
          "(D) -2"
        ],
        "answer": "(B) -10",
        "solution": "p(2) = 0 \u21d2 2\u00b2 + 3(2) + k = 0 \u21d2 4 + 6 + k = 0 \u21d2 k = -10."
      },
      {
        "id": "poly-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "A quadratic polynomial, whose zeroes are -3 and 4, is:",
        "options": [
          "(A) x\u00b2 - x + 12",
          "(B) x\u00b2 + x + 12",
          "(C) x\u00b2 - x - 12",
          "(D) x\u00b2 + x - 12"
        ],
        "answer": "(C) x\u00b2 - x - 12",
        "solution": "Sum = -3 + 4 = 1. Product = (-3)(4) = -12.\nPolynomial = x\u00b2 - Sx + P = x\u00b2 - x - 12."
      },
      {
        "id": "poly-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "If \u03b1 and \u03b2 are zeroes of px\u00b2 - 2x + 3p and \u03b1 + \u03b2 = \u03b1\u03b2, then p is:",
        "options": [
          "(A) 2/3",
          "(B) -2/3",
          "(C) 1/3",
          "(D) -1/3"
        ],
        "answer": "(A) 2/3",
        "solution": "\u03b1 + \u03b2 = 2/p, \u03b1\u03b2 = 3p/p = 3.\nGiven 2/p = 3 \u21d2 p = 2/3."
      },
      {
        "id": "poly-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "If \u03b1, \u03b2 are zeroes of x\u00b2 - 4x + 1, then the value of 1/\u03b1 + 1/\u03b2 - \u03b1\u03b2 is:",
        "options": [
          "(A) 3",
          "(B) 5",
          "(C) -5",
          "(D) 4"
        ],
        "answer": "(A) 3",
        "solution": "\u03b1 + \u03b2 = 4, \u03b1\u03b2 = 1.\n(\u03b1 + \u03b2)/\u03b1\u03b2 - \u03b1\u03b2 = 4/1 - 1 = 3."
      },
      {
        "id": "poly-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "The number of polynomials having zeroes as -2 and 5 is:",
        "options": [
          "(A) 1",
          "(B) 2",
          "(C) 3",
          "(D) More than 3"
        ],
        "answer": "(D) More than 3",
        "solution": "Any polynomial k(x\u00b2 - 3x - 10) for non-zero k has zeroes -2 and 5."
      },
      {
        "id": "poly-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find the zeroes of the quadratic polynomial x\u00b2 + 7x + 10.",
        "answer": "-2, -5",
        "solution": "x\u00b2 + 5x + 2x + 10 = (x + 5)(x + 2) = 0 \u21d2 x = -2, -5."
      },
      {
        "id": "poly-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Verify relationship between zeroes and coefficients for x\u00b2 - 2x - 8.",
        "answer": "Zeroes: 4, -2",
        "solution": "(x - 4)(x + 2) = 0 \u21d2 \u03b1 = 4, \u03b2 = -2.\nSum = 4 + (-2) = 2 = -b/a = -(-2)/1 = 2.\nProduct = 4(-2) = -8 = c/a = -8/1 = -8."
      },
      {
        "id": "poly-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find a quadratic polynomial whose sum and product of zeroes are -3 and 2.",
        "answer": "x\u00b2 + 3x + 2",
        "solution": "p(x) = x\u00b2 - (Sum)x + Product = x\u00b2 - (-3)x + 2 = x\u00b2 + 3x + 2."
      },
      {
        "id": "poly-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "If \u03b1, \u03b2 are zeroes of 2x\u00b2 - 5x + 7, find polynomial with zeroes 2\u03b1+3\u03b2 and 3\u03b1+2\u03b2.",
        "answer": "2x\u00b2 - 25x + 82",
        "solution": "\u03b1+\u03b2 = 5/2, \u03b1\u03b2 = 7/2.\nNew sum = 5(\u03b1+\u03b2) = 25/2. New product = 41.\nPolynomial = 2x\u00b2 - 25x + 82."
      },
      {
        "id": "poly-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find the zeroes of 4s\u00b2 - 4s + 1.",
        "answer": "1/2, 1/2",
        "solution": "(2s - 1)\u00b2 = 0 \u21d2 s = 1/2, 1/2."
      },
      {
        "id": "poly-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "If \u03b1, \u03b2 are zeroes of f(x) = x\u00b2 - p(x + 1) - c, show (\u03b1 + 1)(\u03b2 + 1) = 1 - c.",
        "answer": "1 - c",
        "solution": "f(x) = x\u00b2 - px - (p+c).\n\u03b1+\u03b2 = p, \u03b1\u03b2 = -(p+c).\n(\u03b1+1)(\u03b2+1) = \u03b1\u03b2 + (\u03b1+\u03b2) + 1 = -(p+c) + p + 1 = 1 - c."
      },
      {
        "id": "poly-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find zeroes of 6x\u00b2 - 3 - 7x and verify relationships.",
        "answer": "3/2, -1/3",
        "solution": "6x\u00b2 - 7x - 3 = (3x + 1)(2x - 3) = 0 \u21d2 x = -1/3, 3/2."
      },
      {
        "id": "poly-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "If \u03b1, \u03b2 are zeroes of x\u00b2 - 6x + k and 3\u03b1 + 2\u03b2 = 20, find k.",
        "answer": "k = -16",
        "solution": "\u03b1 + \u03b2 = 6, 3\u03b1 + 2\u03b2 = 20 \u21d2 \u03b1 = 8, \u03b2 = -2 \u21d2 k = \u03b1\u03b2 = -16."
      },
      {
        "id": "poly-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find polynomial whose zeroes are reciprocal to zeroes of ax\u00b2 + bx + c.",
        "answer": "cx\u00b2 + bx + a",
        "solution": "New sum = -b/c, New product = a/c \u21d2 Polynomial = cx\u00b2 + bx + a."
      },
      {
        "id": "poly-15",
        "number": 15,
        "type": "PYQ",
        "marks": 3,
        "question": "If \u03b1, \u03b2 are zeroes of x\u00b2 - 5x + 6, evaluate \u03b1\u00b2 + \u03b2\u00b2.",
        "answer": "13",
        "solution": "\u03b1+\u03b2 = 5, \u03b1\u03b2 = 6.\n\u03b1\u00b2 + \u03b2\u00b2 = (\u03b1+\u03b2)\u00b2 - 2\u03b1\u03b2 = 25 - 12 = 13."
      },
      {
        "id": "poly-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "If \u03b1, \u03b2 are zeroes of f(x) = x\u00b2 - 4x + 3, find \u03b1\u2074\u03b2\u00b3 + \u03b1\u00b3\u03b2\u2074.",
        "answer": "108",
        "solution": "\u03b1+\u03b2 = 4, \u03b1\u03b2 = 3.\nExpression = \u03b1\u00b3\u03b2\u00b3(\u03b1+\u03b2) = (3)\u00b3(4) = 27 \u00d7 4 = 108."
      },
      {
        "id": "poly-17",
        "number": 17,
        "type": "PYQ",
        "marks": 1,
        "question": "If one zero of 3x\u00b2 + 8x + k is reciprocal of the other, find k.",
        "options": [
          "(A) 3",
          "(B) -3",
          "(C) 1/3",
          "(D) 8"
        ],
        "answer": "(A) 3",
        "solution": "Product of zeroes \u03b1 \u00d7 (1/\u03b1) = 1 \u21d2 k/3 = 1 \u21d2 k = 3."
      },
      {
        "id": "poly-18",
        "number": 18,
        "type": "PYQ",
        "marks": 2,
        "question": "Find the value of p for which x = -2 is a zero of 3x\u00b2 + px + 4.",
        "answer": "p = 8",
        "solution": "3(-2)\u00b2 + p(-2) + 4 = 0 \u21d2 12 - 2p + 4 = 0 \u21d2 16 = 2p \u21d2 p = 8."
      },
      {
        "id": "poly-19",
        "number": 19,
        "type": "PYQ",
        "marks": 3,
        "question": "If sum of zeroes of ky\u00b2 + 2y + 3k equals their product, find k.",
        "answer": "k = -2/3",
        "solution": "Sum = -2/k, Product = 3 \u21d2 -2/k = 3 \u21d2 k = -2/3."
      },
      {
        "id": "poly-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Find a quadratic polynomial whose zeroes are (2 + \u221a3) and (2 - \u221a3).",
        "answer": "x\u00b2 - 4x + 1",
        "solution": "Sum = (2+\u221a3)+(2-\u221a3) = 4.\nProduct = (2+\u221a3)(2-\u221a3) = 4 - 3 = 1.\nPolynomial = x\u00b2 - 4x + 1."
      }
    ]
  },
  {
    "id": "linear-equations",
    "title": "Pair of Linear Equations in Two Variables",
    "class": 10,
    "chapterNumber": "03",
    "questions": [
      {
        "id": "le-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "The pair of equations x + 2y + 5 = 0 and -3x - 6y + 1 = 0 has:",
        "options": [
          "(A) Unique solution",
          "(B) Exactly two solutions",
          "(C) Infinitely many solutions",
          "(D) No solution"
        ],
        "answer": "(D) No solution",
        "solution": "a\u2081/a\u2082 = -1/3, b\u2081/b\u2082 = -1/3, c\u2081/c\u2082 = 5/1. Since a\u2081/a\u2082 = b\u2081/b\u2082 \u2260 c\u2081/c\u2082, the lines are parallel (no solution)."
      },
      {
        "id": "le-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "If a pair of linear equations is consistent, then the lines will be:",
        "options": [
          "(A) Parallel",
          "(B) Always coincident",
          "(C) Intersecting or coincident",
          "(D) Always intersecting"
        ],
        "answer": "(C) Intersecting or coincident",
        "solution": "Consistent means at least one solution exists (intersecting or coincident)."
      },
      {
        "id": "le-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Value of k for which 3x - y + 8 = 0 and 6x - ky + 16 = 0 represent coincident lines is:",
        "options": [
          "(A) 1/2",
          "(B) -1/2",
          "(C) 2",
          "(D) -2"
        ],
        "answer": "(C) 2",
        "solution": "For coincident lines: 3/6 = (-1)/(-k) = 8/16 \u21d2 1/2 = 1/k \u21d2 k = 2."
      },
      {
        "id": "le-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "The solution of equations x + y = 7 and 2x - 3y = 9 is:",
        "options": [
          "(A) x = 6, y = 1",
          "(B) x = 5, y = 2",
          "(C) x = 3, y = 4",
          "(D) x = 1, y = 6"
        ],
        "answer": "(A) x = 6, y = 1",
        "solution": "y = 7 - x \u21d2 2x - 3(7-x) = 9 \u21d2 5x = 30 \u21d2 x = 6, y = 1."
      },
      {
        "id": "le-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Aruna has 50 coins of \u20b91 and \u20b92 totaling \u20b975. Number of \u20b91 and \u20b92 coins are:",
        "options": [
          "(A) 35 and 15",
          "(B) 25 and 25",
          "(C) 15 and 35",
          "(D) 40 and 10"
        ],
        "answer": "(B) 25 and 25",
        "solution": "x + y = 50, x + 2y = 75 \u21d2 y = 25, x = 25."
      },
      {
        "id": "le-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Solve for x and y: x + y = 14, x - y = 4.",
        "answer": "x = 9, y = 5",
        "solution": "x = y + 4 \u21d2 (y+4)+y = 14 \u21d2 2y = 10 \u21d2 y = 5, x = 9."
      },
      {
        "id": "le-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Solve by elimination: 2x + 3y = 11 and 2x - 4y = -24.",
        "answer": "x = -2, y = 5",
        "solution": "Subtracting equations: 7y = 35 \u21d2 y = 5, 2x = 11 - 15 = -4 \u21d2 x = -2."
      },
      {
        "id": "le-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Condition for unique solution of 4x + py + 8 = 0 and 2x + 2y + 2 = 0.",
        "answer": "p \u2260 4",
        "solution": "4/2 \u2260 p/2 \u21d2 2 \u2260 p/2 \u21d2 p \u2260 4."
      },
      {
        "id": "le-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find k if kx + 3y = k - 3 and 12x + ky = k have infinitely many solutions.",
        "answer": "k = 6",
        "solution": "k/12 = 3/k \u21d2 k\u00b2 = 36 \u21d2 k = 6."
      },
      {
        "id": "le-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Sum of a two-digit number and its reverse is 66. Digits differ by 2. Find the number.",
        "answer": "42 or 24",
        "solution": "11(x+y) = 66 \u21d2 x+y = 6. x-y = 2 \u21d2 x = 4, y = 2 (Number = 42 or 24)."
      },
      {
        "id": "le-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Solve graphically: 2x + 3y = 12 and x - y = 1. Find y-axis triangle vertices.",
        "answer": "Intersection (3, 2); Vertices: (0, 4), (0, -1), (3, 2)",
        "solution": "Lines intersect at (3, 2). Y-intercepts are (0, 4) and (0, -1)."
      },
      {
        "id": "le-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "A fraction becomes 9/11 if 2 is added to numerator & denominator, 5/6 if 3 is added. Find fraction.",
        "answer": "7/9",
        "solution": "11x - 9y = -4 and 6x - 5y = -3 \u21d2 x = 7, y = 9. Fraction = 7/9."
      },
      {
        "id": "le-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "5 years ago Nuri was 3 times as old as Sonu. 10 years later Nuri will be twice as old as Sonu. Find ages.",
        "answer": "Nuri = 50 years, Sonu = 20 years",
        "solution": "x - 3y = -10, x - 2y = 10 \u21d2 y = 20, x = 50."
      },
      {
        "id": "le-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Meena withdrew \u20b92000 in \u20b950 and \u20b9100 notes (total 25 notes). Find note counts.",
        "answer": "10 notes of \u20b950, 15 notes of \u20b9100",
        "solution": "x + y = 25, 50x + 100y = 2000 \u21d2 y = 15, x = 10."
      },
      {
        "id": "le-15",
        "number": 15,
        "type": "PYQ",
        "marks": 3,
        "question": "Cars A and B 100 km apart meet in 5 hrs (same direction) and 1 hr (towards each other). Find speeds.",
        "answer": "60 km/h and 40 km/h",
        "solution": "5(x-y) = 100 \u21d2 x-y = 20. 1(x+y) = 100 \u21d2 x+y = 100. x = 60, y = 40."
      },
      {
        "id": "le-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "2 women & 5 men finish work in 4 days, 3 women & 6 men in 3 days. Time for 1 woman alone.",
        "answer": "18 days",
        "solution": "8u + 20v = 1, 9u + 18v = 1 \u21d2 u = 1/18 \u21d2 Woman alone = 18 days."
      },
      {
        "id": "le-17",
        "number": 17,
        "type": "PYQ",
        "marks": 1,
        "question": "Find k if 2x + 3y = 7 and (k+1)x + (2k-1)y = 4k+1 have infinite solutions.",
        "options": [
          "(A) 3",
          "(B) 5",
          "(C) 7",
          "(D) 9"
        ],
        "answer": "(B) 5",
        "solution": "2/(k+1) = 3/(2k-1) \u21d2 4k - 2 = 3k + 3 \u21d2 k = 5."
      },
      {
        "id": "le-18",
        "number": 18,
        "type": "PYQ",
        "marks": 2,
        "question": "If 217x + 131y = 913 and 131x + 217y = 827, find x + y.",
        "answer": "x + y = 5",
        "solution": "Adding equations: 348(x+y) = 1740 \u21d2 x+y = 5."
      },
      {
        "id": "le-19",
        "number": 19,
        "type": "PYQ",
        "marks": 3,
        "question": "Solve for x and y: ax + by = a - b, bx - ay = a + b.",
        "answer": "x = 1, y = -1",
        "solution": "a\u00b2x + b\u00b2x = a\u00b2 + b\u00b2 \u21d2 x = 1, y = -1."
      },
      {
        "id": "le-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Boat travels 30 km upstream & 28 km downstream in 7 hrs; 21 km upstream & return in 5 hrs. Find boat & stream speed.",
        "answer": "Boat = 10 km/h, Stream = 4 km/h",
        "solution": "Upstream speed = 6 km/h, Downstream = 14 km/h \u21d2 Boat = 10, Stream = 4."
      }
    ]
  },
  {
    "id": "quadratic-equations",
    "title": "Quadratic Equations",
    "class": 10,
    "chapterNumber": "04",
    "questions": [
      {
        "id": "qe-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "Which of the following is a quadratic equation?",
        "options": [
          "(A) x\u00b2 + 2x + 1 = (4 - x)\u00b2 + 3",
          "(B) -2x\u00b2 = (5 - x)(2 - 2/5 x)",
          "(C) (k + 1)x\u00b2 + 3/2 x = 7 (where k = -1)",
          "(D) x\u00b3 - x\u00b2 = (x - 1)\u00b3"
        ],
        "answer": "(D) x\u00b3 - x\u00b2 = (x - 1)\u00b3",
        "solution": "Expanding (D): x\u00b3 - x\u00b2 = x\u00b3 - 3x\u00b2 + 3x - 1 \u21d2 2x\u00b2 - 3x + 1 = 0 (degree 2)."
      },
      {
        "id": "qe-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "The discriminant of the quadratic equation 2x\u00b2 - 4x + 3 = 0 is:",
        "options": [
          "(A) -8",
          "(B) 10",
          "(C) -16",
          "(D) 8"
        ],
        "answer": "(A) -8",
        "solution": "D = b\u00b2 - 4ac = (-4)\u00b2 - 4(2)(3) = 16 - 24 = -8."
      },
      {
        "id": "qe-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "If the equation x\u00b2 + 4x + k = 0 has real and equal roots, then k is:",
        "options": [
          "(A) 4",
          "(B) -4",
          "(C) 8",
          "(D) 2"
        ],
        "answer": "(A) 4",
        "solution": "Equal roots \u21d2 D = 0 \u21d2 4\u00b2 - 4(1)(k) = 0 \u21d2 16 - 4k = 0 \u21d2 k = 4."
      },
      {
        "id": "qe-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "The roots of the equation 2x\u00b2 - x - 6 = 0 are:",
        "options": [
          "(A) 2, -3/2",
          "(B) -2, 3/2",
          "(C) 2, 3/2",
          "(D) -2, -3/2"
        ],
        "answer": "(A) 2, -3/2",
        "solution": "2x\u00b2 - 4x + 3x - 6 = 0 \u21d2 (2x + 3)(x - 2) = 0 \u21d2 x = 2, -3/2."
      },
      {
        "id": "qe-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "If 1/2 is a root of the equation x\u00b2 + kx - 5/4 = 0, then the value of k is:",
        "options": [
          "(A) 2",
          "(B) -2",
          "(C) 1/4",
          "(D) 1/2"
        ],
        "answer": "(A) 2",
        "solution": "(1/2)\u00b2 + k(1/2) - 5/4 = 0 \u21d2 1/4 + k/2 - 5/4 = 0 \u21d2 k/2 = 1 \u21d2 k = 2."
      },
      {
        "id": "qe-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find roots of 3x\u00b2 - 2\u221a6 x + 2 = 0 by factorisation.",
        "answer": "\u221a(2/3), \u221a(2/3)",
        "solution": "(\u221a3 x - \u221a2)\u00b2 = 0 \u21d2 x = \u221a(2/3), \u221a(2/3)."
      },
      {
        "id": "qe-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Determine nature of roots of 2x\u00b2 - 3x + 5 = 0.",
        "answer": "No real roots",
        "solution": "D = (-3)\u00b2 - 4(2)(5) = 9 - 40 = -31 < 0 (no real roots)."
      },
      {
        "id": "qe-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find k for which 2x\u00b2 + kx + 3 = 0 has equal roots.",
        "answer": "k = \u00b12\u221a6",
        "solution": "k\u00b2 - 4(2)(3) = 0 \u21d2 k\u00b2 = 24 \u21d2 k = \u00b12\u221a6."
      },
      {
        "id": "qe-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find two numbers whose sum is 27 and product is 182.",
        "answer": "13 and 14",
        "solution": "x(27-x) = 182 \u21d2 x\u00b2 - 27x + 182 = 0 \u21d2 (x-13)(x-14) = 0 \u21d2 13 and 14."
      },
      {
        "id": "qe-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find roots of x\u00b2 - 3x - 10 = 0 using quadratic formula.",
        "answer": "5, -2",
        "solution": "x = [3 \u00b1 \u221a(9 + 40)] / 2 = (3 \u00b1 7)/2 \u21d2 x = 5, -2."
      },
      {
        "id": "qe-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Altitude of a right triangle is 7 cm less than its base. Hypotenuse is 13 cm. Find sides.",
        "answer": "Base = 12 cm, Altitude = 5 cm",
        "solution": "x\u00b2 + (x-7)\u00b2 = 169 \u21d2 2x\u00b2 - 14x - 120 = 0 \u21d2 x\u00b2 - 7x - 60 = 0 \u21d2 x = 12 cm, Altitude = 5 cm."
      },
      {
        "id": "qe-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Solve for x: 1/(x+4) - 1/(x-7) = 11/30 (x \u2260 -4, 7).",
        "answer": "x = 1, 2",
        "solution": "-11/(x\u00b2 - 3x - 28) = 11/30 \u21d2 x\u00b2 - 3x + 2 = 0 \u21d2 (x-1)(x-2) = 0 \u21d2 x = 1, 2."
      },
      {
        "id": "qe-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Two taps fill tank in 9 and 3/8 hrs. Larger tap takes 10 hrs less than smaller. Find individual times.",
        "answer": "Smaller = 25 hrs, Larger = 15 hrs",
        "solution": "1/x + 1/(x-10) = 8/75 \u21d2 4x\u00b2 - 115x + 375 = 0 \u21d2 x = 25 hrs, x-10 = 15 hrs."
      },
      {
        "id": "qe-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find k for which (k+4)x\u00b2 + (k+1)x + 1 = 0 has equal roots.",
        "answer": "k = 5 or k = -3",
        "solution": "(k+1)\u00b2 - 4(k+4) = 0 \u21d2 k\u00b2 - 2k - 15 = 0 \u21d2 (k-5)(k+3) = 0 \u21d2 k = 5, -3."
      },
      {
        "id": "qe-15",
        "number": 15,
        "type": "PYQ",
        "marks": 3,
        "question": "Sum of areas of two squares is 468 m\u00b2. Difference of perimeters is 24 m. Find sides.",
        "answer": "18 m and 12 m",
        "solution": "x - y = 6, x\u00b2 + y\u00b2 = 468 \u21d2 (y+6)\u00b2 + y\u00b2 = 468 \u21d2 y\u00b2 + 6y - 216 = 0 \u21d2 y = 12 m, x = 18 m."
      },
      {
        "id": "qe-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "Express train takes 1 hr less than passenger train for 132 km. Express speed is 11 km/h more. Find speeds.",
        "answer": "Passenger = 33 km/h, Express = 44 km/h",
        "solution": "132/x - 132/(x+11) = 1 \u21d2 x\u00b2 + 11x - 1452 = 0 \u21d2 x = 33 km/h."
      },
      {
        "id": "qe-17",
        "number": 17,
        "type": "PYQ",
        "marks": 1,
        "question": "If x = 3 is one root of x\u00b2 - 2kx - 6 = 0, find k.",
        "options": [
          "(A) 1/2",
          "(B) 1/3",
          "(C) 2",
          "(D) 3"
        ],
        "answer": "(A) 1/2",
        "solution": "3\u00b2 - 2k(3) - 6 = 0 \u21d2 9 - 6k - 6 = 0 \u21d2 3 = 6k \u21d2 k = 1/2."
      },
      {
        "id": "qe-18",
        "number": 18,
        "type": "PYQ",
        "marks": 2,
        "question": "Solve for x: \u221a3 x\u00b2 + 10x + 7\u221a3 = 0.",
        "answer": "-\u221a3, -7/\u221a3",
        "solution": "\u221a3 x(x + \u221a3) + 7(x + \u221a3) = 0 \u21d2 x = -\u221a3, -7/\u221a3."
      },
      {
        "id": "qe-19",
        "number": 19,
        "type": "PYQ",
        "marks": 3,
        "question": "Solve for x: 4x\u00b2 - 4ax + (a\u00b2 - b\u00b2) = 0.",
        "answer": "(a + b)/2, (a - b)/2",
        "solution": "x = [4a \u00b1 \u221a(16a\u00b2 - 16(a\u00b2-b\u00b2))] / 8 = (4a \u00b1 4b)/8 = (a \u00b1 b)/2."
      },
      {
        "id": "qe-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Pottery articles cost \u20b93 more than twice the daily count. Total cost is \u20b990. Find article count & cost.",
        "answer": "6 articles, Cost = \u20b915 each",
        "solution": "x(2x + 3) = 90 \u21d2 2x\u00b2 + 3x - 90 = 0 \u21d2 (x-6)(2x+15) = 0 \u21d2 x = 6, Cost = \u20b915."
      }
    ]
  },
  {
    "id": "arithmetic-progressions",
    "title": "Arithmetic Progressions",
    "class": 10,
    "chapterNumber": "05",
    "questions": [
      {
        "id": "ap-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "The 11th term of the AP: -3, -1/2, 2, ... is:",
        "options": [
          "(A) 28",
          "(B) 22",
          "(C) -38",
          "(D) -46.5"
        ],
        "answer": "(B) 22",
        "solution": "a = -3, d = 5/2. a\u2081\u2081 = -3 + 10(5/2) = -3 + 25 = 22."
      },
      {
        "id": "ap-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Which term of the AP: 21, 18, 15, ... is -81?",
        "options": [
          "(A) 34th",
          "(B) 35th",
          "(C) 36th",
          "(D) 37th"
        ],
        "answer": "(B) 35th",
        "solution": "21 + (n-1)(-3) = -81 \u21d2 -3(n-1) = -102 \u21d2 n-1 = 34 \u21d2 n = 35."
      },
      {
        "id": "ap-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "If 3rd and 9th terms of an AP are 4 and -8 respectively, which term of this AP is 0?",
        "options": [
          "(A) 5th",
          "(B) 6th",
          "(C) 7th",
          "(D) 8th"
        ],
        "answer": "(A) 5th",
        "solution": "a+2d = 4, a+8d = -8 \u21d2 d = -2, a = 8. 8 + (n-1)(-2) = 0 \u21d2 n = 5."
      },
      {
        "id": "ap-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Sum of first 14 terms of an AP is 1050 and first term is 10. Its 20th term is:",
        "options": [
          "(A) 200",
          "(B) 190",
          "(C) 210",
          "(D) 220"
        ],
        "answer": "(A) 200",
        "solution": "7(20 + 13d) = 1050 \u21d2 20 + 13d = 150 \u21d2 d = 10. a\u2082\u2080 = 10 + 19(10) = 200."
      },
      {
        "id": "ap-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "The common difference of an AP in which a\u2081\u2088 - a\u2081\u2084 = 32 is:",
        "options": [
          "(A) 8",
          "(B) -8",
          "(C) 4",
          "(D) -4"
        ],
        "answer": "(A) 8",
        "solution": "a\u2081\u2088 - a\u2081\u2084 = 4d = 32 \u21d2 d = 8."
      },
      {
        "id": "ap-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find 30th term of AP: 10, 7, 4, ...",
        "answer": "-77",
        "solution": "a = 10, d = -3. a\u2083\u2080 = 10 + 29(-3) = 10 - 87 = -77."
      },
      {
        "id": "ap-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "How many two-digit numbers are divisible by 3?",
        "answer": "30",
        "solution": "AP: 12, 15, ..., 99. 12 + (n-1)3 = 99 \u21d2 3(n-1) = 87 \u21d2 n = 30."
      },
      {
        "id": "ap-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find sum of first 20 terms of AP: 1, 4, 7, 10, ...",
        "answer": "590",
        "solution": "S\u2082\u2080 = 10[2(1) + 19(3)] = 10[2 + 57] = 590."
      },
      {
        "id": "ap-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find 10th term from end of AP: 4, 9, 14, ..., 254.",
        "answer": "209",
        "solution": "l = 254, d = 5. mth from end = l - (m-1)d = 254 - 9(5) = 209."
      },
      {
        "id": "ap-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "If S\u2099 = 3n\u00b2 + 5n, find the nth term.",
        "answer": "6n + 2",
        "solution": "a\u2099 = S\u2099 - S\u2099\u208b\u2081 = (3n\u00b2 + 5n) - (3(n-1)\u00b2 + 5(n-1)) = 6n + 2."
      },
      {
        "id": "ap-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Sum of 4th and 8th terms is 24, sum of 6th and 10th terms is 44. Find first three terms.",
        "answer": "-13, -8, -3",
        "solution": "a + 5d = 12, a + 7d = 22 \u21d2 d = 5, a = -13. First three: -13, -8, -3."
      },
      {
        "id": "ap-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find sum of all three-digit natural numbers divisible by 7.",
        "answer": "70336",
        "solution": "AP: 105, 112, ..., 994 (n = 128). S\u2081\u2082\u2088 = 64(105 + 994) = 70336."
      },
      {
        "id": "ap-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "If m times mth term equals n times nth term, show (m+n)th term is 0.",
        "answer": "a\u2098\u208a\u2099 = 0",
        "solution": "m[a + (m-1)d] = n[a + (n-1)d] \u21d2 a(m-n) + (m-n)(m+n-1)d = 0 \u21d2 a + (m+n-1)d = 0."
      },
      {
        "id": "ap-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "TV manufacturer produced 600 sets in 3rd year and 700 sets in 7th year. Find 1st year & 7-yr total.",
        "answer": "1st yr = 550, Total 7 yrs = 4375",
        "solution": "a + 2d = 600, a + 6d = 700 \u21d2 d = 25, a = 550. S\u2087 = (7/2)(1100 + 150) = 4375."
      },
      {
        "id": "ap-15",
        "number": 15,
        "type": "PYQ",
        "marks": 3,
        "question": "Subba Rao started at \u20b95000 with \u20b9200 annual increment. In which year did salary reach \u20b97000?",
        "answer": "11th year (2005)",
        "solution": "5000 + (n-1)200 = 7000 \u21d2 200(n-1) = 2000 \u21d2 n = 11."
      },
      {
        "id": "ap-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "Ladder rungs decrease from 45 cm at bottom to 25 cm at top across 2.5 m (25 cm apart). Find total rung length.",
        "answer": "385 cm",
        "solution": "Number of rungs = 11. S\u2081\u2081 = (11/2)(45 + 25) = 385 cm."
      },
      {
        "id": "ap-17",
        "number": 17,
        "type": "PYQ",
        "marks": 1,
        "question": "Common difference of AP where a\u2082\u2081 - a\u2087 = 84 is:",
        "options": [
          "(A) 6",
          "(B) 7",
          "(C) 12",
          "(D) 14"
        ],
        "answer": "(A) 6",
        "solution": "14d = 84 \u21d2 d = 6."
      },
      {
        "id": "ap-18",
        "number": 18,
        "type": "PYQ",
        "marks": 2,
        "question": "Find the sum of first 100 positive integers.",
        "answer": "5050",
        "solution": "S\u2081\u2080\u2080 = (100 \u00d7 101) / 2 = 5050."
      },
      {
        "id": "ap-19",
        "number": 19,
        "type": "PYQ",
        "marks": 3,
        "question": "Ratio of 11th term to 18th term is 2 : 3. Find ratio of 5th term to 21st term.",
        "answer": "1 : 3",
        "solution": "(a+10d)/(a+17d) = 2/3 \u21d2 a = 4d. a\u2085/a\u2082\u2081 = (4d+4d)/(4d+20d) = 8/24 = 1/3."
      },
      {
        "id": "ap-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "200 logs stacked as 20 in bottom row, 19 in next, 18 in next. How many rows and logs in top row?",
        "answer": "16 rows, 5 logs in top row",
        "solution": "(n/2)[40 - (n-1)] = 200 \u21d2 n\u00b2 - 41n + 400 = 0 \u21d2 n = 16. Top row = 20 - 15 = 5."
      }
    ]
  },
  {
    "id": "triangles",
    "title": "Triangles",
    "class": 10,
    "chapterNumber": "06",
    "questions": [
      {
        "id": "tri-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "In \u25b3ABC, DE || BC such that AD = 3 cm, DB = 5 cm and AE = 6 cm. Length of EC is:",
        "options": [
          "(A) 10 cm",
          "(B) 9 cm",
          "(C) 8 cm",
          "(D) 12 cm"
        ],
        "answer": "(A) 10 cm",
        "solution": "By BPT: AD/DB = AE/EC \u21d2 3/5 = 6/EC \u21d2 EC = (5 \u00d7 6) / 3 = 10 cm."
      },
      {
        "id": "tri-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "If \u25b3ABC ~ \u25b3PQR with AB/PQ = 1/3, then Area(\u25b3ABC) / Area(\u25b3PQR) is:",
        "options": [
          "(A) 1/3",
          "(B) 1/9",
          "(C) 1/6",
          "(D) 2/3"
        ],
        "answer": "(B) 1/9",
        "solution": "Ratio of areas of similar triangles = square of ratio of corresponding sides = (1/3)\u00b2 = 1/9."
      },
      {
        "id": "tri-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Sides of two similar triangles are in ratio 4 : 9. Areas of these triangles are in ratio:",
        "options": [
          "(A) 2 : 3",
          "(B) 4 : 9",
          "(C) 81 : 16",
          "(D) 16 : 81"
        ],
        "answer": "(D) 16 : 81",
        "solution": "Area ratio = (4/9)\u00b2 = 16/81."
      },
      {
        "id": "tri-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "If \u25b3ABC ~ \u25b3EDF and \u25b3ABC is not similar to \u25b3DEF, which of the following is true?",
        "options": [
          "(A) BC \u00b7 EF = AC \u00b7 FD",
          "(B) AB \u00b7 EF = AC \u00b7 DE",
          "(C) BC \u00b7 DE = AB \u00b7 JS",
          "(D) BC \u00b7 DE = AB \u00b7 FD"
        ],
        "answer": "(D) BC \u00b7 DE = AB \u00b7 FD",
        "solution": "Since \u25b3ABC ~ \u25b3EDF, AB/ED = BC/DF \u21d2 AB \u00b7 DF = BC \u00b7 DE."
      },
      {
        "id": "tri-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "If in two triangles ABC and PQR, AB/QR = BC/PR = CA/PQ, then:",
        "options": [
          "(A) \u25b3PQR ~ \u25b3CAB",
          "(B) \u25b3PQR ~ \u25b3ABC",
          "(C) \u25b3CBA ~ \u25b3PQR",
          "(D) \u25b3BCA ~ \u25b3PQR"
        ],
        "answer": "(A) \u25b3PQR ~ \u25b3CAB",
        "solution": "Matching corresponding vertices: P\u2192C, Q\u2192A, R\u2192B \u21d2 \u25b3PQR ~ \u25b3CAB."
      },
      {
        "id": "tri-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "State Basic Proportionality Theorem (Thales Theorem).",
        "answer": "BPT Statement",
        "solution": "If a line is drawn parallel to one side of a triangle intersecting other two sides, it divides the two sides in the same ratio."
      },
      {
        "id": "tri-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "In \u25b3ABC, DE || BC, AD = x, DB = x - 2, AE = x + 2, EC = x - 1. Find x.",
        "answer": "x = 4",
        "solution": "AD/DB = AE/EC \u21d2 x/(x-2) = (x+2)/(x-1) \u21d2 x\u00b2 - x = x\u00b2 - 4 \u21d2 x = 4."
      },
      {
        "id": "tri-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "A vertical pole of length 6 m casts shadow 4 m long. At same time a tower casts shadow 28 m long. Find tower height.",
        "answer": "42 m",
        "solution": "By AA similarity: 6/4 = h/28 \u21d2 h = (6 \u00d7 28)/4 = 42 m."
      },
      {
        "id": "tri-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Diagonals of trapezium ABCD (AB || CD) intersect at O. Show AO/BO = CO/DO.",
        "answer": "AO/BO = CO/DO",
        "solution": "\u25b3AOB ~ \u25b3COD by AA similarity (alternate interior angles) \u21d2 AO/CO = BO/DO \u21d2 AO/BO = CO/DO."
      },
      {
        "id": "tri-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "If \u25b3ABC ~ \u25b3DEF and area(\u25b3ABC) = 64 cm\u00b2, area(\u25b3DEF) = 121 cm\u00b2, EF = 15.4 cm, find BC.",
        "answer": "11.2 cm",
        "solution": "BC/EF = \u221a(64/121) = 8/11 \u21d2 BC = 15.4 \u00d7 (8/11) = 11.2 cm."
      },
      {
        "id": "tri-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove that if a line divides any two sides of a triangle in the same ratio, then the line is parallel to third side.",
        "answer": "Converse of BPT Proved",
        "solution": "Let DE divide AB & AC such that AD/DB = AE/EC. Assume DE is not || BC. Draw DE' || BC. Then AD/DB = AE'/E'C \u21d2 E and E' coincide. DE || BC."
      },
      {
        "id": "tri-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "In \u25b3ABC, AD \u22a5 BC. Prove that AB\u00b2 + CD\u00b2 = AC\u00b2 + BD\u00b2.",
        "answer": "AB\u00b2 + CD\u00b2 = AC\u00b2 + BD\u00b2",
        "solution": "In right \u25b3ABD: AB\u00b2 = AD\u00b2 + BD\u00b2. In right \u25b3ADC: AC\u00b2 = AD\u00b2 + CD\u00b2. Subtracting: AB\u00b2 - AC\u00b2 = BD\u00b2 - CD\u00b2 \u21d2 AB\u00b2 + CD\u00b2 = AC\u00b2 + BD\u00b2."
      },
      {
        "id": "tri-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove that sum of squares of sides of a rhombus is equal to sum of squares of its diagonals.",
        "answer": "AB\u00b2 + BC\u00b2 + CD\u00b2 + DA\u00b2 = AC\u00b2 + BD\u00b2",
        "solution": "Diagonals of rhombus bisect at 90\u00b0. In \u25b3AOB: AB\u00b2 = (AC/2)\u00b2 + (BD/2)\u00b2 = (AC\u00b2 + BD\u00b2)/4 \u21d2 4AB\u00b2 = AC\u00b2 + BD\u00b2."
      },
      {
        "id": "tri-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "D, E, F are midpoints of sides AB, BC, CA of \u25b3ABC. Find ratio of areas of \u25b3DEF and \u25b3ABC.",
        "answer": "1 : 4",
        "solution": "By midpoint theorem \u25b3DEF ~ \u25b3CAB with side ratio 1/2. Area ratio = (1/2)\u00b2 = 1/4."
      },
      {
        "id": "tri-15",
        "number": 15,
        "type": "PYQ",
        "marks": 3,
        "question": "In \u25b3ABC, \u222090\u00b0 at C. P and Q are points on AC and BC. Prove AQ\u00b2 + BP\u00b2 = AB\u00b2 + PQ\u00b2.",
        "answer": "AQ\u00b2 + BP\u00b2 = AB\u00b2 + PQ\u00b2",
        "solution": "AQ\u00b2 = AC\u00b2 + CQ\u00b2, BP\u00b2 = BC\u00b2 + CP\u00b2. AQ\u00b2 + BP\u00b2 = (AC\u00b2 + BC\u00b2) + (CQ\u00b2 + CP\u00b2) = AB\u00b2 + PQ\u00b2."
      },
      {
        "id": "tri-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "State and prove Basic Proportionality Theorem (Thales Theorem).",
        "answer": "BPT Proof",
        "solution": "Given \u25b3ABC with DE || BC. Area(\u25b3ADE)/Area(\u25b3BDE) = AD/DB. Area(\u25b3ADE)/Area(\u25b3DEC) = AE/EC. Since Area(\u25b3BDE) = Area(\u25b3DEC), AD/DB = AE/EC."
      },
      {
        "id": "tri-17",
        "number": 17,
        "type": "PYQ",
        "marks": 1,
        "question": "If \u25b3ABC ~ \u25b3QPR, Area(\u25b3ABC)/Area(\u25b3PQR) = 9/4, AB = 18 cm, BC = 15 cm, find PR.",
        "options": [
          "(A) 10 cm",
          "(B) 12 cm",
          "(C) 8 cm",
          "(D) 15 cm"
        ],
        "answer": "(A) 10 cm",
        "solution": "Ratio of sides = \u221a(9/4) = 3/2. BC/PR = 3/2 \u21d2 15/PR = 3/2 \u21d2 PR = 10 cm."
      },
      {
        "id": "tri-18",
        "number": 18,
        "type": "PYQ",
        "marks": 2,
        "question": "In \u25b3ABC, DE || BC, AD = 2.4 cm, AE = 3.2 cm, EC = 4.8 cm. Find DB.",
        "answer": "3.6 cm",
        "solution": "AD/DB = AE/EC \u21d2 2.4/DB = 3.2/4.8 = 2/3 \u21d2 DB = 2.4 \u00d7 (3/2) = 3.6 cm."
      },
      {
        "id": "tri-19",
        "number": 19,
        "type": "PYQ",
        "marks": 3,
        "question": "In an isosceles \u25b3ABC with AC = BC, if AB\u00b2 = 2AC\u00b2, prove \u25b3ABC is right angled.",
        "answer": "Right-angled at C",
        "solution": "AB\u00b2 = AC\u00b2 + AC\u00b2 = AC\u00b2 + BC\u00b2. By converse of Pythagoras theorem, \u2220C = 90\u00b0."
      },
      {
        "id": "tri-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "In an equilateral triangle ABC, D is a point on BC such that BD = 1/3 BC. Prove 9AD\u00b2 = 7AB\u00b2.",
        "answer": "9AD\u00b2 = 7AB\u00b2",
        "solution": "Draw AE \u22a5 BC. BE = BC/2. DE = BE - BD = BC/2 - BC/3 = BC/6. In \u25b3ADE: AD\u00b2 = AE\u00b2 + DE\u00b2 = (AB\u00b2 - BE\u00b2) + DE\u00b2 \u21d2 9AD\u00b2 = 7AB\u00b2."
      }
    ]
  },
  {
    "id": "coordinate-geometry",
    "title": "Coordinate Geometry",
    "class": 10,
    "chapterNumber": "07",
    "questions": [
      {
        "id": "cg-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "The distance of point P(2, 3) from the x-axis is:",
        "options": [
          "(A) 2 units",
          "(B) 3 units",
          "(C) 1 unit",
          "(D) 5 units"
        ],
        "answer": "(B) 3 units",
        "solution": "Distance of a point (x, y) from x-axis is |y| = |3| = 3 units."
      },
      {
        "id": "cg-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "The distance between points A(0, 6) and B(0, -2) is:",
        "options": [
          "(A) 6 units",
          "(B) 8 units",
          "(C) 4 units",
          "(D) 2 units"
        ],
        "answer": "(B) 8 units",
        "solution": "Distance = |y\u2082 - y\u2081| = |-2 - 6| = |-8| = 8 units."
      },
      {
        "id": "cg-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "The midpoint of line segment joining A(-2, 8) and B(-6, -4) is:",
        "options": [
          "(A) (-4, 2)",
          "(B) (4, -2)",
          "(C) (4, 2)",
          "(D) (-4, -2)"
        ],
        "answer": "(A) (-4, 2)",
        "solution": "Midpoint = ((-2 - 6)/2, (8 - 4)/2) = (-8/2, 4/2) = (-4, 2)."
      },
      {
        "id": "cg-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Point P(x, y) is equidistant from A(5, 1) and B(-1, 5). Relation between x and y is:",
        "options": [
          "(A) 3x = 2y",
          "(B) x = y",
          "(C) 2x = 3y",
          "(D) 3x = y"
        ],
        "answer": "(A) 3x = 2y",
        "solution": "PA\u00b2 = PB\u00b2 \u21d2 (x-5)\u00b2 + (y-1)\u00b2 = (x+1)\u00b2 + (y-5)\u00b2 \u21d2 -10x - 2y + 26 = 2x - 10y + 26 \u21d2 12x = 8y \u21d2 3x = 2y."
      },
      {
        "id": "cg-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Ratio in which y-axis divides line segment joining A(5, -6) and B(-1, -4) is:",
        "options": [
          "(A) 1 : 5",
          "(B) 5 : 1",
          "(C) 2 : 3",
          "(D) 3 : 2"
        ],
        "answer": "(B) 5 : 1",
        "solution": "Let ratio be k : 1. x-coordinate on y-axis is 0 \u21d2 (k(-1) + 1(5))/(k+1) = 0 \u21d2 -k + 5 = 0 \u21d2 k = 5. Ratio 5 : 1."
      },
      {
        "id": "cg-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find distance between points A(2, 3) and B(4, 1).",
        "answer": "2\u221a2 units",
        "solution": "Distance = \u221a[(4-2)\u00b2 + (1-3)\u00b2] = \u221a[2\u00b2 + (-2)\u00b2] = \u221a[4 + 4] = \u221a8 = 2\u221a2 units."
      },
      {
        "id": "cg-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find a point on x-axis equidistant from (2, -5) and (-2, 9).",
        "answer": "(-7, 0)",
        "solution": "Let P(x, 0). (x-2)\u00b2 + 25 = (x+2)\u00b2 + 81 \u21d2 -4x + 29 = 4x + 85 \u21d2 8x = -56 \u21d2 x = -7. Point (-7, 0)."
      },
      {
        "id": "cg-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find coordinates of point dividing line joining (4, -3) and (8, 5) in ratio 3 : 1 internally.",
        "answer": "(7, 3)",
        "solution": "P = ((3(8)+1(4))/4, (3(5)+1(-3))/4) = (28/4, 12/4) = (7, 3)."
      },
      {
        "id": "cg-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find value of k for which points A(2, 3), B(4, k), C(6, -3) are collinear.",
        "answer": "k = 0",
        "solution": "Slope AB = Slope BC \u21d2 (k-3)/(4-2) = (-3-k)/(6-4) \u21d2 (k-3)/2 = (-3-k)/2 \u21d2 k-3 = -3-k \u21d2 2k = 0 \u21d2 k = 0."
      },
      {
        "id": "cg-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find coordinates of centroid of \u25b3ABC with vertices A(1, -3), B(-3, 0), C(5, 6).",
        "answer": "(1, 1)",
        "solution": "Centroid = ((1-3+5)/3, (-3+0+6)/3) = (3/3, 3/3) = (1, 1)."
      },
      {
        "id": "cg-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find points of trisection of line segment joining A(2, -2) and B(-7, 4).",
        "answer": "P(-1, 0) and Q(-4, 2)",
        "solution": "P divides AB in 1:2 \u21d2 P = ((-7+4)/3, (4-4)/3) = (-1, 0).\nQ divides AB in 2:1 \u21d2 Q = ((-14+2)/3, (8-2)/3) = (-4, 2)."
      },
      {
        "id": "cg-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Show that points A(1, 7), B(4, 2), C(-1, -1) and D(-4, 4) are vertices of a square.",
        "answer": "Vertices of a square",
        "solution": "AB = BC = CD = DA = \u221a34 units. Diagonals AC = BD = \u221a58 units. All sides equal and diagonals equal \u21d2 Square."
      },
      {
        "id": "cg-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "If A(-5, 7), B(-4, -5), C(-1, -6) and D(4, 5) are vertices of quadrilateral ABCD, find its area.",
        "answer": "72 sq units",
        "solution": "Area(ABCD) = Area(\u25b3ABC) + Area(\u25b3ADC) = 35 + 37 = 72 sq units."
      },
      {
        "id": "cg-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find relation between x and y such that (x, y) is equidistant from (3, 6) and (-3, 4).",
        "answer": "3x + y = 5",
        "solution": "(x-3)\u00b2 + (y-6)\u00b2 = (x+3)\u00b2 + (y-4)\u00b2 \u21d2 -6x - 12y + 45 = 6x - 8y + 25 \u21d2 12x + 4y = 20 \u21d2 3x + y = 5."
      },
      {
        "id": "cg-15",
        "number": 15,
        "type": "PYQ",
        "marks": 3,
        "question": "Find ratio in which line 2x + y - 4 = 0 divides segment joining A(2, -2) and B(3, 7).",
        "answer": "2 : 9",
        "solution": "P = ((3k+2)/(k+1), (7k-2)/(k+1)). Substitute in 2x+y-4=0: 2(3k+2) + (7k-2) - 4(k+1) = 0 \u21d2 9k - 2 = 0 \u21d2 k = 2/9. Ratio 2 : 9."
      },
      {
        "id": "cg-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "If A(6, 1), B(8, 2), C(9, 4) and D(p, 3) are vertices of parallelogram in order, find p.",
        "answer": "p = 7",
        "solution": "Midpoint of AC = Midpoint of BD \u21d2 ((6+9)/2, (1+4)/2) = ((8+p)/2, (2+3)/2) \u21d2 15/2 = (8+p)/2 \u21d2 p = 7."
      },
      {
        "id": "cg-17",
        "number": 17,
        "type": "PYQ",
        "marks": 1,
        "question": "Perimeter of triangle with vertices (0, 4), (0, 0) and (3, 0) is:",
        "options": [
          "(A) 5 units",
          "(B) 12 units",
          "(C) 11 units",
          "(D) 7 + \u221a5 units"
        ],
        "answer": "(B) 12 units",
        "solution": "Sides are 4 units, 3 units and \u221a[3\u00b2+4\u00b2] = 5 units. Perimeter = 4 + 3 + 5 = 12 units."
      },
      {
        "id": "cg-18",
        "number": 18,
        "type": "PYQ",
        "marks": 2,
        "question": "Find area of triangle with vertices (2, 3), (-1, 0), (2, -4).",
        "answer": "10.5 sq units",
        "solution": "Area = 1/2 | 2(0 - (-4)) + (-1)(-4 - 3) + 2(3 - 0) | = 1/2 | 8 + 7 + 6 | = 21/2 = 10.5 sq units."
      },
      {
        "id": "cg-19",
        "number": 19,
        "type": "PYQ",
        "marks": 3,
        "question": "If P(9a - 2, -b) divides line segment joining A(3a + 1, -3) and B(8a, 5) in ratio 3 : 1, find a and b.",
        "answer": "a = 1, b = -3",
        "solution": "9a - 2 = (24a + 3a + 1)/4 \u21d2 36a - 8 = 27a + 1 \u21d2 9a = 9 \u21d2 a = 1. -b = (15 - 3)/4 = 3 \u21d2 b = -3."
      },
      {
        "id": "cg-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "If A(-2, 1), B(a, 0), C(4, b) and D(1, 2) are vertices of parallelogram ABCD, find a and b.",
        "answer": "a = 1, b = 1",
        "solution": "Midpoint of AC = Midpoint of BD \u21d2 ((-2+4)/2, (1+b)/2) = ((a+1)/2, (0+2)/2) \u21d2 1 = (a+1)/2 \u21d2 a = 1; (1+b)/2 = 1 \u21d2 b = 1."
      }
    ]
  },
  {
    "id": "trigonometry",
    "title": "Introduction to Trigonometry",
    "class": 10,
    "chapterNumber": "08",
    "questions": [
      {
        "id": "trig-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "If \u25b3ABC is right angled at C, then the value of cos(A + B) is:",
        "options": [
          "(A) 0",
          "(B) 1",
          "(C) 1/2",
          "(D) \u221a3/2"
        ],
        "answer": "(A) 0",
        "solution": "A + B + C = 180\u00b0 \u21d2 A + B = 90\u00b0. cos(90\u00b0) = 0."
      },
      {
        "id": "trig-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "If sin \u03b8 + cos \u03b8 = \u221a2 cos \u03b8, then tan \u03b8 is equal to:",
        "options": [
          "(A) \u221a2 - 1",
          "(B) \u221a2 + 1",
          "(C) 1/\u221a2",
          "(D) \u221a2"
        ],
        "answer": "(A) \u221a2 - 1",
        "solution": "Divide by cos \u03b8: tan \u03b8 + 1 = \u221a2 \u21d2 tan \u03b8 = \u221a2 - 1."
      },
      {
        "id": "trig-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "The value of (sin 30\u00b0 + cos 30\u00b0) - (sin 60\u00b0 + cos 60\u00b0) is:",
        "options": [
          "(A) -1",
          "(B) 0",
          "(C) 1",
          "(D) 2"
        ],
        "answer": "(B) 0",
        "solution": "(1/2 + \u221a3/2) - (\u221a3/2 + 1/2) = 0."
      },
      {
        "id": "trig-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Value of 9 sec\u00b2A - 9 tan\u00b2A is:",
        "options": [
          "(A) 1",
          "(B) 9",
          "(C) 8",
          "(D) 0"
        ],
        "answer": "(B) 9",
        "solution": "9(sec\u00b2A - tan\u00b2A) = 9(1) = 9."
      },
      {
        "id": "trig-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "If 4 tan \u03b8 = 3, then (4 sin \u03b8 - cos \u03b8) / (4 sin \u03b8 + cos \u03b8) is equal to:",
        "options": [
          "(A) 2/3",
          "(B) 1/2",
          "(C) 1/3",
          "(D) 3/4"
        ],
        "answer": "(B) 1/2",
        "solution": "Divide by cos \u03b8: (4 tan \u03b8 - 1)/(4 tan \u03b8 + 1) = (3 - 1)/(3 + 1) = 2/4 = 1/2."
      },
      {
        "id": "trig-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "In \u25b3ABC right-angled at B, AB = 24 cm, BC = 7 cm. Find sin A and cos A.",
        "answer": "sin A = 7/25, cos A = 24/25",
        "solution": "AC = \u221a(24\u00b2 + 7\u00b2) = \u221a625 = 25 cm. sin A = BC/AC = 7/25, cos A = AB/AC = 24/25."
      },
      {
        "id": "trig-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Evaluate: 2 tan\u00b2 45\u00b0 + cos\u00b2 30\u00b0 - sin\u00b2 60\u00b0.",
        "answer": "2",
        "solution": "2(1)\u00b2 + (\u221a3/2)\u00b2 - (\u221a3/2)\u00b2 = 2 + 3/4 - 3/4 = 2."
      },
      {
        "id": "trig-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "If sin(A - B) = 1/2 and cos(A + B) = 1/2 (0\u00b0 < A+B \u2264 90\u00b0, A > B), find A and B.",
        "answer": "A = 45\u00b0, B = 15\u00b0",
        "solution": "A - B = 30\u00b0, A + B = 60\u00b0 \u21d2 2A = 90\u00b0 \u21d2 A = 45\u00b0, B = 15\u00b0."
      },
      {
        "id": "trig-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Express cot 85\u00b0 + cos 75\u00b0 in terms of trigonometric ratios of angles between 0\u00b0 and 45\u00b0.",
        "answer": "tan 5\u00b0 + sin 15\u00b0",
        "solution": "cot 85\u00b0 = tan(90\u00b0-85\u00b0) = tan 5\u00b0. cos 75\u00b0 = sin(90\u00b0-75\u00b0) = sin 15\u00b0."
      },
      {
        "id": "trig-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Prove that (1 + tan\u00b2\u03b8)(1 - sin \u03b8)(1 + sin \u03b8) = 1.",
        "answer": "1",
        "solution": "sec\u00b2\u03b8 (1 - sin\u00b2\u03b8) = sec\u00b2\u03b8 \u00b7 cos\u00b2\u03b8 = 1."
      },
      {
        "id": "trig-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove identity: (cosec \u03b8 - cot \u03b8)\u00b2 = (1 - cos \u03b8) / (1 + cos \u03b8).",
        "answer": "Identity Proved",
        "solution": "(1/sin \u03b8 - cos \u03b8/sin \u03b8)\u00b2 = (1-cos \u03b8)\u00b2/sin\u00b2\u03b8 = (1-cos \u03b8)\u00b2/((1-cos \u03b8)(1+cos \u03b8)) = (1-cos \u03b8)/(1+cos \u03b8)."
      },
      {
        "id": "trig-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove identity: cos A / (1 + sin A) + (1 + sin A) / cos A = 2 sec A.",
        "answer": "2 sec A",
        "solution": "[cos\u00b2A + (1+sin A)\u00b2] / [(1+sin A)cos A] = [cos\u00b2A + 1 + 2sin A + sin\u00b2A] / [(1+sin A)cos A] = 2(1+sin A)/[(1+sin A)cos A] = 2/cos A = 2 sec A."
      },
      {
        "id": "trig-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove: sin \u03b8 / (1 - cot \u03b8) + cos \u03b8 / (1 - tan \u03b8) = sin \u03b8 + cos \u03b8.",
        "answer": "sin \u03b8 + cos \u03b8",
        "solution": "Convert cot & tan to sin & cos: sin\u00b2\u03b8/(sin \u03b8 - cos \u03b8) + cos\u00b2\u03b8/(cos \u03b8 - sin \u03b8) = (sin\u00b2\u03b8 - cos\u00b2\u03b8)/(sin \u03b8 - cos \u03b8) = sin \u03b8 + cos \u03b8."
      },
      {
        "id": "trig-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "If tan A = n tan B and sin A = m sin B, prove that cos\u00b2A = (m\u00b2 - 1) / (n\u00b2 - 1).",
        "answer": "cos\u00b2A = (m\u00b2 - 1) / (n\u00b2 - 1)",
        "solution": "cosec\u00b2B - cot\u00b2B = 1 \u21d2 m\u00b2/sin\u00b2A - n\u00b2/tan\u00b2A = 1 \u21d2 m\u00b2/sin\u00b2A - n\u00b2cos\u00b2A/sin\u00b2A = 1 \u21d2 m\u00b2 - n\u00b2cos\u00b2A = sin\u00b2A = 1 - cos\u00b2A \u21d2 cos\u00b2A(n\u00b2 - 1) = m\u00b2 - 1."
      },
      {
        "id": "trig-15",
        "number": 15,
        "type": "PYQ",
        "marks": 3,
        "question": "Prove: (sin A + cosec A)\u00b2 + (cos A + sec A)\u00b2 = 7 + tan\u00b2A + cot\u00b2A.",
        "answer": "7 + tan\u00b2A + cot\u00b2A",
        "solution": "LHS = sin\u00b2A + cosec\u00b2A + 2 + cos\u00b2A + sec\u00b2A + 2 = (sin\u00b2A + cos\u00b2A) + 4 + (1 + cot\u00b2A) + (1 + tan\u00b2A) = 7 + tan\u00b2A + cot\u00b2A."
      },
      {
        "id": "trig-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "Prove: (tan \u03b8 + sec \u03b8 - 1) / (tan \u03b8 - sec \u03b8 + 1) = (1 + sin \u03b8) / cos \u03b8.",
        "answer": "(1 + sin \u03b8) / cos \u03b8",
        "solution": "Replace 1 by (sec\u00b2\u03b8 - tan\u00b2\u03b8): [tan \u03b8 + sec \u03b8 - (sec\u00b2\u03b8 - tan\u00b2\u03b8)] / [tan \u03b8 - sec \u03b8 + 1] = sec \u03b8 + tan \u03b8 = (1 + sin \u03b8)/cos \u03b8."
      },
      {
        "id": "trig-17",
        "number": 17,
        "type": "PYQ",
        "marks": 1,
        "question": "If sin \u03b8 = a/b, then cos \u03b8 is equal to:",
        "options": [
          "(A) b/a",
          "(B) \u221a(b\u00b2 - a\u00b2)/b",
          "(C) \u221a(b\u00b2 - a\u00b2)/a",
          "(D) a/\u221a(b\u00b2 - a\u00b2)"
        ],
        "answer": "(B) \u221a(b\u00b2 - a\u00b2)/b",
        "solution": "cos \u03b8 = \u221a(1 - sin\u00b2\u03b8) = \u221a(1 - a\u00b2/b\u00b2) = \u221a(b\u00b2 - a\u00b2)/b."
      },
      {
        "id": "trig-18",
        "number": 18,
        "type": "PYQ",
        "marks": 2,
        "question": "If sec 4A = cosec (A - 20\u00b0) where 4A is acute, find A.",
        "answer": "A = 22\u00b0",
        "solution": "cosec(90\u00b0 - 4A) = cosec(A - 20\u00b0) \u21d2 90\u00b0 - 4A = A - 20\u00b0 \u21d2 5A = 110\u00b0 \u21d2 A = 22\u00b0."
      },
      {
        "id": "trig-19",
        "number": 19,
        "type": "PYQ",
        "marks": 3,
        "question": "If x = r sin A cos C, y = r sin A sin C, z = r cos A, prove x\u00b2 + y\u00b2 + z\u00b2 = r\u00b2.",
        "answer": "x\u00b2 + y\u00b2 + z\u00b2 = r\u00b2",
        "solution": "x\u00b2 + y\u00b2 = r\u00b2 sin\u00b2A (cos\u00b2C + sin\u00b2C) = r\u00b2 sin\u00b2A. x\u00b2 + y\u00b2 + z\u00b2 = r\u00b2 sin\u00b2A + r\u00b2 cos\u00b2A = r\u00b2."
      },
      {
        "id": "trig-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Prove: (1 + cot A + tan A)(sin A - cos A) / (sec\u00b3A - cosec\u00b3A) = sin\u00b2A cos\u00b2A.",
        "answer": "sin\u00b2A cos\u00b2A",
        "solution": "Convert sec\u00b3A - cosec\u00b3A = (1/cos\u00b3A - 1/sin\u00b3A) and simplify numerators to get sin\u00b2A cos\u00b2A."
      }
    ]
  },
  {
    "id": "applications-of-trigonometry",
    "title": "Some Applications of Trigonometry",
    "class": 10,
    "chapterNumber": "09",
    "questions": [
      {
        "id": "app-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "A tower 100 m high casts a shadow 100\u221a3 m long. Angle of elevation of the sun is:",
        "options": [
          "(A) 30\u00b0",
          "(B) 45\u00b0",
          "(C) 60\u00b0",
          "(D) 90\u00b0"
        ],
        "answer": "(A) 30\u00b0",
        "solution": "tan \u03b8 = Height/Shadow = 100/(100\u221a3) = 1/\u221a3 \u21d2 \u03b8 = 30\u00b0."
      },
      {
        "id": "app-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "If a pole 6 m high casts a shadow 2\u221a3 m long on the ground, angle of elevation of the sun is:",
        "options": [
          "(A) 60\u00b0",
          "(B) 45\u00b0",
          "(C) 30\u00b0",
          "(D) 90\u00b0"
        ],
        "answer": "(A) 60\u00b0",
        "solution": "tan \u03b8 = 6/(2\u221a3) = 3/\u221a3 = \u221a3 \u21d2 \u03b8 = 60\u00b0."
      },
      {
        "id": "app-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "A ladder leans against a wall making an angle of 60\u00b0 with the ground. If foot of ladder is 2.5 m from wall, length of ladder is:",
        "options": [
          "(A) 5 m",
          "(B) 4 m",
          "(C) 5\u221a3 m",
          "(D) 2.5\u221a3 m"
        ],
        "answer": "(A) 5 m",
        "solution": "cos 60\u00b0 = Base/Hypotenuse \u21d2 1/2 = 2.5/L \u21d2 L = 5 m."
      },
      {
        "id": "app-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Ratio of height of a rod to its shadow is 1 : 1. Angle of elevation of sun is:",
        "options": [
          "(A) 30\u00b0",
          "(B) 45\u00b0",
          "(C) 60\u00b0",
          "(D) 90\u00b0"
        ],
        "answer": "(B) 45\u00b0",
        "solution": "tan \u03b8 = 1/1 = 1 \u21d2 \u03b8 = 45\u00b0."
      },
      {
        "id": "app-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Angle of elevation of top of a tower from a point 30 m away from its foot is 30\u00b0. Height of tower is:",
        "options": [
          "(A) 10\u221a3 m",
          "(B) 20\u221a3 m",
          "(C) 30\u221a3 m",
          "(D) 10 m"
        ],
        "answer": "(A) 10\u221a3 m",
        "solution": "tan 30\u00b0 = h/30 \u21d2 1/\u221a3 = h/30 \u21d2 h = 30/\u221a3 = 10\u221a3 m."
      },
      {
        "id": "app-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "A kite is flying at a height of 60 m above the ground. String inclined at 60\u00b0 to ground. Find string length.",
        "answer": "40\u221a3 m",
        "solution": "sin 60\u00b0 = 60/L \u21d2 \u221a3/2 = 60/L \u21d2 L = 120/\u221a3 = 40\u221a3 m."
      },
      {
        "id": "app-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "A tree breaks due to storm and broken top touches ground making 30\u00b0 angle. Distance from foot to top is 8 m. Find tree height.",
        "answer": "8\u221a3 m",
        "solution": "Height = BC + AB. tan 30\u00b0 = BC/8 \u21d2 BC = 8/\u221a3. cos 30\u00b0 = 8/AB \u21d2 AB = 16/\u221a3. Total = 24/\u221a3 = 8\u221a3 m."
      },
      {
        "id": "app-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Artist climbs 20 m long rope tied from top of vertical pole to ground at 30\u00b0 angle. Find pole height.",
        "answer": "10 m",
        "solution": "sin 30\u00b0 = h/20 \u21d2 1/2 = h/20 \u21d2 h = 10 m."
      },
      {
        "id": "app-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Angle of elevation of top of tower from two points at distances 4m and 9m from base are complementary. Find tower height.",
        "answer": "6 m",
        "solution": "tan \u03b8 = h/4, tan(90\u00b0-\u03b8) = cot \u03b8 = h/9. tan \u03b8 \u00b7 cot \u03b8 = (h/4)(h/9) = 1 \u21d2 h\u00b2 = 36 \u21d2 h = 6 m."
      },
      {
        "id": "app-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "A 1.5 m tall observer is 28.5 m away from a chimney 30 m high. Find angle of elevation of top.",
        "answer": "45\u00b0",
        "solution": "Height above eye level = 30 - 1.5 = 28.5 m. tan \u03b8 = 28.5/28.5 = 1 \u21d2 \u03b8 = 45\u00b0."
      },
      {
        "id": "app-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "From top of a 7m high building, angle of elevation of top of cable tower is 60\u00b0 and angle of depression of foot is 45\u00b0. Find tower height.",
        "answer": "7(\u221a3 + 1) m",
        "solution": "Building = 7 m. tan 45\u00b0 = 7/x \u21d2 x = 7 m. tan 60\u00b0 = h/7 \u21d2 h = 7\u221a3 m. Total height = 7 + 7\u221a3 = 7(\u221a3 + 1) m."
      },
      {
        "id": "app-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "As observed from top of 75m high lighthouse, angles of depression of two ships are 30\u00b0 and 45\u00b0. If one ship is behind other, find distance between ships.",
        "answer": "75(\u221a3 - 1) m",
        "solution": "tan 45\u00b0 = 75/x \u21d2 x = 75 m. tan 30\u00b0 = 75/(y+75) \u21d2 y+75 = 75\u221a3 \u21d2 y = 75(\u221a3 - 1) m."
      },
      {
        "id": "app-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Angle of elevation of cloud from a point 60m above lake is 30\u00b0 and angle of depression of reflection in lake is 60\u00b0. Find height of cloud.",
        "answer": "120 m",
        "solution": "Let cloud height = H. tan 30\u00b0 = (H-60)/x, tan 60\u00b0 = (H+60)/x. (H-60)\u221a3 = (H+60)/\u221a3 \u21d2 3(H-60) = H+60 \u21d2 2H = 240 \u21d2 H = 120 m."
      },
      {
        "id": "app-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "A straight highway leads to foot of tower. A man at top observes car at 30\u00b0 depression. 6 seconds later angle becomes 60\u00b0. Find time to reach tower.",
        "answer": "3 seconds",
        "solution": "Speed = v. Distance = 6v. x/tan 60\u00b0 = (x+6v)/tan 30\u00b0 \u21d2 h/\u221a3 = h\u221a3 - 6v \u21d2 2h/3 = 6v \u21d2 h = 9v. Time = 3 sec."
      },
      {
        "id": "app-15",
        "number": 15,
        "type": "PYQ",
        "marks": 3,
        "question": "Two poles of equal heights stand on either side of 80m wide road. Angles of elevation are 60\u00b0 and 30\u00b0. Find pole height.",
        "answer": "20\u221a3 m",
        "solution": "tan 60\u00b0 = h/x \u21d2 h = x\u221a3. tan 30\u00b0 = h/(80-x) \u21d2 h = (80-x)/\u221a3. x\u221a3 = (80-x)/\u221a3 \u21d2 3x = 80-x \u21d2 x = 20 m. h = 20\u221a3 m."
      },
      {
        "id": "app-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "A 1.2 m tall girl spots balloon moving horizontally at height 88.2 m. Angle of elevation changes from 60\u00b0 to 30\u00b0. Find distance traveled by balloon.",
        "answer": "58\u221a3 m",
        "solution": "Height above girl = 88.2 - 1.2 = 87 m. x\u2081 = 87/tan 60\u00b0 = 87/\u221a3 = 29\u221a3 m. x\u2082 = 87/tan 30\u00b0 = 87\u221a3 m. Distance = 87\u221a3 - 29\u221a3 = 58\u221a3 m."
      },
      {
        "id": "app-17",
        "number": 17,
        "type": "PYQ",
        "marks": 1,
        "question": "Shadow of a tower is equal to its height. Sun's altitude is:",
        "options": [
          "(A) 30\u00b0",
          "(B) 45\u00b0",
          "(C) 60\u00b0",
          "(D) 90\u00b0"
        ],
        "answer": "(B) 45\u00b0",
        "solution": "tan \u03b8 = h/h = 1 \u21d2 \u03b8 = 45\u00b0."
      },
      {
        "id": "app-18",
        "number": 18,
        "type": "PYQ",
        "marks": 2,
        "question": "An observer 1.7 m tall is 20\u221a3 m away from a tower. Angle of elevation of top is 30\u00b0. Find tower height.",
        "answer": "21.7 m",
        "solution": "h' = 20\u221a3 \u00b7 tan 30\u00b0 = 20\u221a3 / \u221a3 = 20 m. Total height = 20 + 1.7 = 21.7 m."
      },
      {
        "id": "app-19",
        "number": 19,
        "type": "PYQ",
        "marks": 3,
        "question": "Angle of elevation of top of vertical tower from two points on ground at distances a and b (a > b) from base are 30\u00b0 and 60\u00b0. Prove height is \u221a(ab).",
        "answer": "Height = \u221a(ab)",
        "solution": "tan 30\u00b0 = h/a \u21d2 h = a/\u221a3. tan 60\u00b0 = h/b \u21d2 h = b\u221a3. Multiply: h\u00b2 = ab \u21d2 h = \u221a(ab)."
      },
      {
        "id": "app-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "From top of a 60m high building, angles of depression of top and bottom of a tower are 30\u00b0 and 60\u00b0. Find height of tower.",
        "answer": "40 m",
        "solution": "Building = 60 m. x = 60/tan 60\u00b0 = 60/\u221a3 = 20\u221a3 m. Top of tower depression = 30\u00b0 \u21d2 60 - h = x tan 30\u00b0 = 20\u221a3 (1/\u221a3) = 20 m \u21d2 h = 60 - 20 = 40 m."
      }
    ]
  },
  {
    "id": "circles",
    "title": "Circles",
    "class": 10,
    "chapterNumber": "10",
    "questions": [
      {
        "id": "circ-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "How many tangents can a circle have?",
        "options": [
          "(A) 1",
          "(B) 2",
          "(C) Infinitely many",
          "(D) None"
        ],
        "answer": "(C) Infinitely many",
        "solution": "A circle has infinitely many points on its perimeter, and a tangent can be drawn at each point."
      },
      {
        "id": "circ-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "A tangent PQ at a point P of a circle of radius 5 cm meets a line through centre O at point Q so that OQ = 12 cm. Length PQ is:",
        "options": [
          "(A) 12 cm",
          "(B) 13 cm",
          "(C) 8.5 cm",
          "(D) \u221a119 cm"
        ],
        "answer": "(D) \u221a119 cm",
        "solution": "\u2220OPQ = 90\u00b0. By Pythagoras theorem: PQ = \u221a(OQ\u00b2 - OP\u00b2) = \u221a(12\u00b2 - 5\u00b2) = \u221a(144 - 25) = \u221a119 cm."
      },
      {
        "id": "circ-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "From a point Q, length of tangent to a circle is 24 cm and distance of Q from centre is 25 cm. Radius of circle is:",
        "options": [
          "(A) 7 cm",
          "(B) 12 cm",
          "(C) 15 cm",
          "(D) 24.5 cm"
        ],
        "answer": "(A) 7 cm",
        "solution": "Radius r = \u221a(25\u00b2 - 24\u00b2) = \u221a(625 - 576) = \u221a49 = 7 cm."
      },
      {
        "id": "circ-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "If TP and TQ are two tangents to a circle with centre O so that \u2220POQ = 110\u00b0, then \u2220PTQ is equal to:",
        "options": [
          "(A) 60\u00b0",
          "(B) 70\u00b0",
          "(C) 80\u00b0",
          "(D) 90\u00b0"
        ],
        "answer": "(B) 70\u00b0",
        "solution": "\u2220POQ + \u2220PTQ = 180\u00b0 (quadrilateral OPTQ opposite angles) \u21d2 110\u00b0 + \u2220PTQ = 180\u00b0 \u21d2 \u2220PTQ = 70\u00b0."
      },
      {
        "id": "circ-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "If tangents PA and PB from a point P to a circle with centre O are inclined to each other at angle of 80\u00b0, then \u2220POA is equal to:",
        "options": [
          "(A) 50\u00b0",
          "(B) 60\u00b0",
          "(C) 70\u00b0",
          "(D) 80\u00b0"
        ],
        "answer": "(A) 50\u00b0",
        "solution": "\u2220APB = 80\u00b0 \u21d2 \u2220AOB = 180\u00b0 - 80\u00b0 = 100\u00b0. OP bisects \u2220AOB \u21d2 \u2220POA = 100\u00b0/2 = 50\u00b0."
      },
      {
        "id": "circ-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Prove that tangents drawn at the ends of a diameter of a circle are parallel.",
        "answer": "Tangents are parallel",
        "solution": "Radius \u22a5 Tangent \u21d2 \u2220OAB = 90\u00b0 and \u2220OCD = 90\u00b0. Alternate interior angles are equal \u21d2 Tangents are parallel."
      },
      {
        "id": "circ-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Prove that the perpendicular at the point of contact to the tangent to a circle passes through the centre.",
        "answer": "Passes through centre",
        "solution": "Angle between radius and tangent is 90\u00b0. Thus perpendicular line at point of contact must be along the radius, passing through centre."
      },
      {
        "id": "circ-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "A quadrilateral ABCD is drawn to circumscribe a circle. Prove that AB + CD = AD + BC.",
        "answer": "AB + CD = AD + BC",
        "solution": "Tangents from external points are equal: AP=AS, BP=BQ, CR=CQ, DR=DS. Adding all four equations gives AB + CD = AD + BC."
      },
      {
        "id": "circ-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Two concentric circles are of radii 5 cm and 3 cm. Find length of chord of larger circle which touches smaller circle.",
        "answer": "8 cm",
        "solution": "Perpendicular from centre to chord bisects chord. Half chord = \u221a(5\u00b2 - 3\u00b2) = \u221a16 = 4 cm. Full chord = 2 \u00d7 4 = 8 cm."
      },
      {
        "id": "circ-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Prove that the angle between two tangents from external point is supplementary to angle subtended by segment joining contact points at centre.",
        "answer": "Angles are supplementary",
        "solution": "\u2220OAP = 90\u00b0, \u2220OBP = 90\u00b0. Sum of angles of quad OAPB = 360\u00b0 \u21d2 \u2220APB + \u2220AOB = 180\u00b0 (Supplementary)."
      },
      {
        "id": "circ-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove that lengths of tangents drawn from an external point to a circle are equal.",
        "answer": "Theorem Proved (PA = PB)",
        "solution": "In \u25b3OPA and \u25b3OPB: \u2220OAP = \u2220OBP = 90\u00b0, OP = OP (common), OA = OB (radii). \u25b3OPA \u2245 \u25b3OPB by RHS \u21d2 PA = PB."
      },
      {
        "id": "circ-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "In figure, XY and X'Y' are parallel tangents to circle with centre O and another tangent AB with point of contact C. Prove \u2220AOB = 90\u00b0.",
        "answer": "\u2220AOB = 90\u00b0",
        "solution": "\u25b3OPA \u2245 \u25b3OCA \u21d2 \u2220POA = \u2220COA. \u25b3OQB \u2245 \u25b3OCB \u21d2 \u2220QOB = \u2220COB. \u2220POC + \u2220QOC = 180\u00b0 \u21d2 2\u2220COA + 2\u2220COB = 180\u00b0 \u21d2 \u2220AOB = 90\u00b0."
      },
      {
        "id": "circ-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove that opposite sides of a quadrilateral circumscribing a circle subtend supplementary angles at centre of circle.",
        "answer": "Supplementary angles subtended",
        "solution": "Divide quadrilateral into 8 congruent right triangles around centre. Sum of all 8 angles = 360\u00b0. Grouping opposite sides shows their sum = 180\u00b0."
      },
      {
        "id": "circ-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Triangle ABC is drawn to circumscribe a circle of radius 4 cm such that segments BD and DC are 8 cm and 6 cm. Find sides AB and AC.",
        "answer": "AB = 15 cm, AC = 13 cm",
        "solution": "Let AF=AE=x. Semi-perimeter s = x + 14. Area = \u221a[s(s-a)(s-b)(s-c)] = \u221a[(x+14)(x)(6)(8)]. Also Area = r \u00b7 s = 4(x+14). Equating: x = 7 cm. AB = 7+8 = 15 cm, AC = 7+6 = 13 cm."
      },
      {
        "id": "circ-15",
        "number": 15,
        "type": "PYQ",
        "marks": 3,
        "question": "If a parallelogram circumscribes a circle, prove that it is a rhombus.",
        "answer": "Rhombus Proved",
        "solution": "In circumscribed quadrilateral AB + CD = AD + BC. Since ABCD is a parallelogram, AB = CD and AD = BC \u21d2 2AB = 2AD \u21d2 AB = AD. Hence rhombus."
      },
      {
        "id": "circ-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "In right \u25b3ABC (\u2220B = 90\u00b0), a circle is inscribed with radius r. If AB = 6 cm and BC = 8 cm, find r.",
        "answer": "r = 2 cm",
        "solution": "AC = \u221a(6\u00b2 + 8\u00b2) = 10 cm. Area = 1/2 \u00d7 6 \u00d7 8 = 24 cm\u00b2. Also Area = r(a+b+c)/2 = r(6+8+10)/2 = 12r \u21d2 12r = 24 \u21d2 r = 2 cm."
      },
      {
        "id": "circ-17",
        "number": 17,
        "type": "PYQ",
        "marks": 1,
        "question": "Number of tangents that can be drawn from an external point to a circle is:",
        "options": [
          "(A) 1",
          "(B) 2",
          "(C) 3",
          "(D) Infinite"
        ],
        "answer": "(B) 2",
        "solution": "Exactly 2 tangents can be drawn from an external point to a circle."
      },
      {
        "id": "circ-18",
        "number": 18,
        "type": "PYQ",
        "marks": 2,
        "question": "If PQ is a tangent to circle with centre O at P and \u2220OPQ = 90\u00b0, if OP = 6 cm and PQ = 8 cm, find OQ.",
        "answer": "10 cm",
        "solution": "OQ = \u221a(6\u00b2 + 8\u00b2) = \u221a100 = 10 cm."
      },
      {
        "id": "circ-19",
        "number": 19,
        "type": "PYQ",
        "marks": 3,
        "question": "Two tangents TP and TQ are drawn to a circle with centre O from external point T. Prove \u2220PTQ = 2 \u2220OPQ.",
        "answer": "\u2220PTQ = 2 \u2220OPQ",
        "solution": "TP = TQ \u21d2 \u25b3TPQ is isosceles \u21d2 \u2220TPQ = 90\u00b0 - 1/2 \u2220PTQ. Also \u2220OPQ = 90\u00b0 - \u2220TPQ = 1/2 \u2220PTQ \u21d2 \u2220PTQ = 2 \u2220OPQ."
      },
      {
        "id": "circ-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Prove that tangent at any point of a circle is perpendicular to radius through point of contact.",
        "answer": "Theorem Proved",
        "solution": "Take any point Q on tangent other than P. Q lies outside circle \u21d2 OQ > OP. Thus OP is shortest distance from O to tangent \u21d2 OP \u22a5 tangent."
      }
    ]
  },
  {
    "id": "areas-related-to-circles",
    "title": "Areas Related to Circles",
    "class": 10,
    "chapterNumber": "11",
    "questions": [
      {
        "id": "arc-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "If perimeter and area of a circle are numerically equal, then radius of circle is:",
        "options": [
          "(A) 2 units",
          "(B) \u03c0 units",
          "(C) 4 units",
          "(D) 7 units"
        ],
        "answer": "(A) 2 units",
        "solution": "2\u03c0r = \u03c0r\u00b2 \u21d2 r = 2 units."
      },
      {
        "id": "arc-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Area of a sector of a circle of radius 6 cm with sector angle 60\u00b0 is:",
        "options": [
          "(A) 132/7 cm\u00b2",
          "(B) 144/7 cm\u00b2",
          "(C) 154/7 cm\u00b2",
          "(D) 176/7 cm\u00b2"
        ],
        "answer": "(A) 132/7 cm\u00b2",
        "solution": "Area = (60/360) \u00d7 (22/7) \u00d7 6\u00b2 = (1/6) \u00d7 (22/7) \u00d7 36 = 132/7 cm\u00b2."
      },
      {
        "id": "arc-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Length of an arc of a sector of angle \u03b8 of a circle with radius r is:",
        "options": [
          "(A) (\u03b8/180) \u00d7 2\u03c0r",
          "(B) (\u03b8/360) \u00d7 2\u03c0r",
          "(C) (\u03b8/180) \u00d7 \u03c0r\u00b2",
          "(D) (\u03b8/360) \u00d7 \u03c0r\u00b2"
        ],
        "answer": "(B) (\u03b8/360) \u00d7 2\u03c0r",
        "solution": "Standard arc length formula = (\u03b8/360) \u00d7 2\u03c0r."
      },
      {
        "id": "arc-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Area of a quadrant of a circle whose circumference is 22 cm is:",
        "options": [
          "(A) 77/8 cm\u00b2",
          "(B) 77/4 cm\u00b2",
          "(C) 77/2 cm\u00b2",
          "(D) 77 cm\u00b2"
        ],
        "answer": "(A) 77/8 cm\u00b2",
        "solution": "2\u03c0r = 22 \u21d2 r = 7/2 cm. Area of quadrant = 1/4 \u03c0r\u00b2 = (1/4)(22/7)(7/2)\u00b2 = 77/8 cm\u00b2."
      },
      {
        "id": "arc-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Area of largest triangle that can be inscribed in a semi-circle of radius r is:",
        "options": [
          "(A) r\u00b2",
          "(B) 1/2 r\u00b2",
          "(C) 2r\u00b2",
          "(D) \u221a2 r\u00b2"
        ],
        "answer": "(A) r\u00b2",
        "solution": "Base = 2r, Max height = r. Area = 1/2 \u00d7 2r \u00d7 r = r\u00b2."
      },
      {
        "id": "arc-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Minute hand of a clock is 14 cm long. Find area swept by minute hand in 5 minutes.",
        "answer": "154/3 cm\u00b2 (51.33 cm\u00b2)",
        "solution": "Angle in 5 min = (360/60) \u00d7 5 = 30\u00b0. Area = (30/360) \u00d7 (22/7) \u00d7 14\u00b2 = (1/12) \u00d7 616 = 154/3 cm\u00b2."
      },
      {
        "id": "arc-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find area of sector of circle with radius 4 cm and angle 30\u00b0.",
        "answer": "4.19 cm\u00b2",
        "solution": "Area = (30/360) \u00d7 3.14 \u00d7 4\u00b2 = (1/12) \u00d7 3.14 \u00d7 16 = 4.19 cm\u00b2."
      },
      {
        "id": "arc-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "A horse is tied to a peg at one corner of a square grass field of side 15 m by 5 m long rope. Find area of grass horse can graze.",
        "answer": "19.625 m\u00b2",
        "solution": "Graze area = quadrant of radius 5 m = 1/4 \u00d7 3.14 \u00d7 5\u00b2 = 19.625 m\u00b2."
      },
      {
        "id": "arc-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find area of shaded region in square of side 14 cm if two semi-circles are drawn inside on opposite sides.",
        "answer": "42 cm\u00b2",
        "solution": "Area of square = 14\u00b2 = 196 cm\u00b2. Area of 2 semi-circles = \u03c0r\u00b2 = (22/7) \u00d7 7\u00b2 = 154 cm\u00b2. Shaded area = 196 - 154 = 42 cm\u00b2."
      },
      {
        "id": "arc-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "A brooch is made with silver wire in form of circle with diameter 35 mm. Wire is also used in making 5 diameters. Find total length of silver wire.",
        "answer": "285 mm",
        "solution": "Circumference = \u03c0d = (22/7) \u00d7 35 = 110 mm. Length of 5 diameters = 5 \u00d7 35 = 175 mm. Total = 110 + 175 = 285 mm."
      },
      {
        "id": "arc-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find area of major sector of circle with radius 4 cm and angle 30\u00b0 (use \u03c0 = 3.14).",
        "answer": "46.05 cm\u00b2",
        "solution": "Major angle = 360\u00b0 - 30\u00b0 = 330\u00b0. Area = (330/360) \u00d7 3.14 \u00d7 4\u00b2 = (11/12) \u00d7 50.24 = 46.05 cm\u00b2."
      },
      {
        "id": "arc-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "A chord of circle of radius 15 cm subtends an angle of 60\u00b0 at centre. Find area of corresponding minor segment.",
        "answer": "20.4375 cm\u00b2",
        "solution": "Sector area = (60/360) \u00d7 3.14 \u00d7 15\u00b2 = 117.75 cm\u00b2. Equilateral \u25b3 area = (\u221a3/4) \u00d7 15\u00b2 = 97.3125 cm\u00b2. Segment area = 117.75 - 97.3125 = 20.4375 cm\u00b2."
      },
      {
        "id": "arc-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find area of shaded region where ABCD is a square of side 14 cm and APD and BPC are semicircles.",
        "answer": "42 cm\u00b2",
        "solution": "Area = 14\u00b2 - 2(1/2 \u03c0 \u00d7 7\u00b2) = 196 - (22/7 \u00d7 49) = 196 - 154 = 42 cm\u00b2."
      },
      {
        "id": "arc-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "A car has two wipers which do not overlap. Each wiper has a blade of length 25 cm sweeping through an angle of 115\u00b0. Find total area cleaned at each sweep.",
        "answer": "1254.96 cm\u00b2",
        "solution": "Total area = 2 \u00d7 (115/360) \u00d7 (22/7) \u00d7 25\u00b2 = 2 \u00d7 0.3194 \u00d7 3.14 \u00d7 625 = 1254.96 cm\u00b2."
      },
      {
        "id": "arc-15",
        "number": 15,
        "type": "PYQ",
        "marks": 3,
        "question": "In a circle of radius 21 cm, an arc subtends an angle of 60\u00b0 at centre. Find length of arc and area of sector.",
        "answer": "Arc length = 22 cm, Sector area = 231 cm\u00b2",
        "solution": "Arc length = (60/360) \u00d7 2 \u00d7 (22/7) \u00d7 21 = 22 cm. Sector area = (60/360) \u00d7 (22/7) \u00d7 21\u00b2 = 231 cm\u00b2."
      },
      {
        "id": "arc-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "Find area of segment AYB shown in figure, if radius of circle is 21 cm and \u2220AOB = 120\u00b0 (Use \u03c0 = 22/7, \u221a3 = 1.732).",
        "answer": "271.04 cm\u00b2",
        "solution": "Sector area = (120/360) \u00d7 (22/7) \u00d7 21\u00b2 = 462 cm\u00b2. \u25b3AOB area = 1/2 \u00d7 21\u00b2 \u00d7 sin 120\u00b0 = (441/2) \u00d7 (\u221a3/2) = 190.95 cm\u00b2. Segment area = 462 - 190.95 = 271.05 cm\u00b2."
      },
      {
        "id": "arc-17",
        "number": 17,
        "type": "PYQ",
        "marks": 1,
        "question": "If radius of a circle is doubled, its area becomes:",
        "options": [
          "(A) 2 times",
          "(B) 4 times",
          "(C) 8 times",
          "(D) 16 times"
        ],
        "answer": "(B) 4 times",
        "solution": "A' = \u03c0(2r)\u00b2 = 4\u03c0r\u00b2 = 4A."
      },
      {
        "id": "arc-18",
        "number": 18,
        "type": "PYQ",
        "marks": 2,
        "question": "Find area of a quadrant of a circle whose radius is 14 cm.",
        "answer": "154 cm\u00b2",
        "solution": "Area = 1/4 \u00d7 (22/7) \u00d7 14\u00b2 = 154 cm\u00b2."
      },
      {
        "id": "arc-19",
        "number": 19,
        "type": "PYQ",
        "marks": 3,
        "question": "Umbrella has 8 ribs which are equally spaced. Assuming umbrella to be a flat circle of radius 45 cm, find area between 2 consecutive ribs.",
        "answer": "22275/28 cm\u00b2 (795.53 cm\u00b2)",
        "solution": "Angle = 360\u00b0/8 = 45\u00b0. Area = (45/360) \u00d7 (22/7) \u00d7 45\u00b2 = (1/8) \u00d7 (22/7) \u00d7 2025 = 22275/28 cm\u00b2."
      },
      {
        "id": "arc-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Find area of design formed by 4 identical quadrants inside a square of side 8 cm.",
        "answer": "36.57 cm\u00b2",
        "solution": "Area of square = 64. Area of 4 quadrants forming circle of r=4 is \u03c0(4\u00b2) = 16\u03c0 = 50.24. Design area = 2(Circle area) - Square area = 2(50.24) - 64 = 36.48 cm\u00b2."
      }
    ]
  },
  {
    "id": "surface-areas-and-volumes",
    "title": "Surface Areas and Volumes",
    "class": 10,
    "chapterNumber": "12",
    "questions": [
      {
        "id": "sav-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "2 cubes each of volume 64 cm\u00b3 are joined end to end. Surface area of resulting cuboid is:",
        "options": [
          "(A) 160 cm\u00b2",
          "(B) 128 cm\u00b2",
          "(C) 144 cm\u00b2",
          "(D) 112 cm\u00b2"
        ],
        "answer": "(A) 160 cm\u00b2",
        "solution": "Cube side a = \u221b64 = 4 cm. Cuboid dimensions: l = 8, b = 4, h = 4. Surface Area = 2(8\u00d74 + 4\u00d74 + 8\u00d74) = 2(32+16+32) = 160 cm\u00b2."
      },
      {
        "id": "sav-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "A solid toy is in form of a hemisphere surmounted by a right circular cone. Radius = 3 cm, Cone height = 4 cm. Total surface area is:",
        "options": [
          "(A) 33\u03c0 cm\u00b2",
          "(B) 30\u03c0 cm\u00b2",
          "(C) 27\u03c0 cm\u00b2",
          "(D) 36\u03c0 cm\u00b2"
        ],
        "answer": "(A) 33\u03c0 cm\u00b2",
        "solution": "Slant height l = \u221a(3\u00b2 + 4\u00b2) = 5 cm. Total Surface Area = Cone CSA + Hemisphere CSA = \u03c0rl + 2\u03c0r\u00b2 = \u03c0(3)(5) + 2\u03c0(3\u00b2) = 15\u03c0 + 18\u03c0 = 33\u03c0 cm\u00b2."
      },
      {
        "id": "sav-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Ratio of volumes of two spheres is 64 : 27. Ratio of their surface areas is:",
        "options": [
          "(A) 4 : 3",
          "(B) 16 : 9",
          "(C) 9 : 16",
          "(D) 3 : 4"
        ],
        "answer": "(B) 16 : 9",
        "solution": "(r\u2081/r\u2082)\u00b3 = 64/27 \u21d2 r\u2081/r\u2082 = 4/3. Area ratio = (r\u2081/r\u2082)\u00b2 = (4/3)\u00b2 = 16/9."
      },
      {
        "id": "sav-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Volume of largest right circular cone that can be cut out of a cube of edge 7 cm is:",
        "options": [
          "(A) 89.8 cm\u00b3",
          "(B) 90.2 cm\u00b3",
          "(C) 80.5 cm\u00b3",
          "(D) 100 cm\u00b3"
        ],
        "answer": "(A) 89.8 cm\u00b3",
        "solution": "Cone radius r = 3.5 cm, height h = 7 cm. Volume = 1/3 \u03c0 r\u00b2 h = (1/3)(22/7)(3.5)\u00b2(7) = 89.83 cm\u00b3."
      },
      {
        "id": "sav-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "A metallic sphere of radius 4.2 cm is melted and recast into shape of a cylinder of radius 6 cm. Height of cylinder is:",
        "options": [
          "(A) 2.74 cm",
          "(B) 1.74 cm",
          "(C) 3.74 cm",
          "(D) 2.44 cm"
        ],
        "answer": "(A) 2.74 cm",
        "solution": "4/3 \u03c0 (4.2)\u00b3 = \u03c0 (6)\u00b2 h \u21d2 (4/3)(74.088) = 36 h \u21d2 98.784 = 36h \u21d2 h = 2.74 cm."
      },
      {
        "id": "sav-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "A vessel is in form of a hollow hemisphere surmounted by a hollow cylinder. Diameter = 14 cm, total height = 13 cm. Find inner surface area.",
        "answer": "572 cm\u00b2",
        "solution": "r = 7 cm, Cylinder height = 13 - 7 = 6 cm. Inner SA = 2\u03c0rh + 2\u03c0r\u00b2 = 2\u03c0r(h+r) = 2(22/7)(7)(6+7) = 44 \u00d7 13 = 572 cm\u00b2."
      },
      {
        "id": "sav-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "A solid is in shape of a cone standing on a hemisphere with both radii equal to 1 cm and height of cone equal to radius. Find volume in terms of \u03c0.",
        "answer": "\u03c0 cm\u00b3",
        "solution": "Total Volume = Hemisphere Vol + Cone Vol = 2/3 \u03c0(1)\u00b3 + 1/3 \u03c0(1)\u00b2(1) = 3/3 \u03c0 = \u03c0 cm\u00b3."
      },
      {
        "id": "sav-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find volume of a sphere whose surface area is 154 cm\u00b2.",
        "answer": "179.67 cm\u00b3",
        "solution": "4\u03c0r\u00b2 = 154 \u21d2 4(22/7)r\u00b2 = 154 \u21d2 r\u00b2 = 12.25 \u21d2 r = 3.5 cm. Volume = 4/3(22/7)(3.5)\u00b3 = 179.67 cm\u00b3."
      },
      {
        "id": "sav-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "A cone of height 24 cm and radius of base 6 cm is made of modelling clay. A child reshapes it in form of a sphere. Find radius of sphere.",
        "answer": "6 cm",
        "solution": "1/3 \u03c0 (6)\u00b2 (24) = 4/3 \u03c0 R\u00b3 \u21d2 36 \u00d7 24 = 4 R\u00b3 \u21d2 R\u00b3 = 216 \u21d2 R = 6 cm."
      },
      {
        "id": "sav-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "How many silver coins, 1.75 cm in diameter and of thickness 2 mm, must be melted to form a cuboid of dimensions 5.5 cm \u00d7 10 cm \u00d7 3.5 cm?",
        "answer": "400 coins",
        "solution": "Coin Vol = \u03c0(0.875)\u00b2(0.2) = 0.48125 cm\u00b3. Cuboid Vol = 5.5\u00d710\u00d73.5 = 192.5 cm\u00b3. Number of coins = 192.5 / 0.48125 = 400."
      },
      {
        "id": "sav-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "A medicine capsule is in shape of a cylinder with two hemispheres stuck to each of its ends. Length = 14 mm, diameter = 5 mm. Find surface area.",
        "answer": "220 mm\u00b2",
        "solution": "r = 2.5 mm, Cylinder length = 14 - 5 = 9 mm. Surface Area = 2\u03c0rh + 4\u03c0r\u00b2 = 2\u03c0r(h + 2r) = 2(22/7)(2.5)(9 + 5) = (110/7)(14) = 220 mm\u00b2."
      },
      {
        "id": "sav-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "A tent is in shape of a cylinder surmounted by a conical top. Cylinder height = 2.1 m, diameter = 4 m, slant height of cone = 2.8 m. Find canvas area.",
        "answer": "44 m\u00b2",
        "solution": "r = 2 m. Canvas Area = Cylinder CSA + Cone CSA = 2\u03c0rh + \u03c0rl = \u03c0r(2h + l) = (22/7)(2)(2(2.1) + 2.8) = (44/7)(4.2 + 2.8) = (44/7)(7) = 44 m\u00b2."
      },
      {
        "id": "sav-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "A gulab jamun contains sugar syrup up to 30% of its volume. Find syrup in 45 gulab jamuns, each shaped like a cylinder with 2 hemispherical ends (length 5 cm, diameter 2.8 cm).",
        "answer": "338 cm\u00b3",
        "solution": "r = 1.4 cm, Cylinder length = 5 - 2.8 = 2.2 cm. Vol of 1 = \u03c0r\u00b2h + 4/3 \u03c0r\u00b3 = 25.05 cm\u00b3. Vol of 45 = 1127.25 cm\u00b3. Syrup = 30% of 1127.25 = 338.18 cm\u00b3."
      },
      {
        "id": "sav-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "A wooden article was made by scooping out a hemisphere from each end of a solid cylinder. Height = 10 cm, base radius = 3.5 cm. Find total surface area.",
        "answer": "374 cm\u00b2",
        "solution": "TSA = Cylinder CSA + 2(Hemisphere CSA) = 2\u03c0rh + 4\u03c0r\u00b2 = 2\u03c0r(h + 2r) = 2(22/7)(3.5)(10 + 7) = 22 \u00d7 17 = 374 cm\u00b2."
      },
      {
        "id": "sav-15",
        "number": 15,
        "type": "PYQ",
        "marks": 3,
        "question": "A solid iron pole consists of a cylinder of height 220 cm and base diameter 24 cm, surmounted by another cylinder of height 60 cm and radius 8 cm. Find mass of pole (1 cm\u00b3 iron = 8g).",
        "answer": "892.26 kg",
        "solution": "Vol\u2081 = \u03c0(12)\u00b2(220) = 31680\u03c0. Vol\u2082 = \u03c0(8)\u00b2(60) = 3840\u03c0. Total Vol = 35520\u03c0 = 111532.8 cm\u00b3. Mass = 111532.8 \u00d7 8g = 892262.4 g = 892.26 kg."
      },
      {
        "id": "sav-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "A copper wire 3 mm in diameter is wound about a cylinder of length 12 cm and diameter 10 cm so as to cover curved surface. Find wire length and mass (density = 8.88 g/cm\u00b3).",
        "answer": "Length = 400\u03c0 cm (12.57 m), Mass = 788 g",
        "solution": "Rounds = 12 cm / 0.3 cm = 40 rounds. Length of 1 round = \u03c0d = 10\u03c0 cm. Total length = 40 \u00d7 10\u03c0 = 400\u03c0 cm = 1256.6 cm. Wire Vol = \u03c0(0.15)\u00b2(1256.6) = 88.8 cm\u00b3. Mass = 88.8 \u00d7 8.88 = 788.5 g."
      },
      {
        "id": "sav-17",
        "number": 17,
        "type": "PYQ",
        "marks": 1,
        "question": "Volume of two spheres are in ratio 64 : 27. Ratio of their radii is:",
        "options": [
          "(A) 3 : 4",
          "(B) 4 : 3",
          "(C) 16 : 9",
          "(D) 2 : 3"
        ],
        "answer": "(B) 4 : 3",
        "solution": "r\u2081/r\u2082 = \u221b(64/27) = 4/3."
      },
      {
        "id": "sav-18",
        "number": 18,
        "type": "PYQ",
        "marks": 2,
        "question": "Find curved surface area of a cone of base radius 7 cm and height 24 cm.",
        "answer": "550 cm\u00b2",
        "solution": "l = \u221a(7\u00b2 + 24\u00b2) = 25 cm. CSA = \u03c0rl = (22/7)(7)(25) = 550 cm\u00b2."
      },
      {
        "id": "sav-19",
        "number": 19,
        "type": "PYQ",
        "marks": 3,
        "question": "Water in a canal 6 m wide and 1.5 m deep is flowing at speed of 10 km/h. How much area will it irrigate in 30 minutes if 8 cm standing water is needed?",
        "answer": "562500 m\u00b2 (56.25 hectares)",
        "solution": "In 30 min speed = 5000 m. Volume of water = 6 \u00d7 1.5 \u00d7 5000 = 45000 m\u00b3. Irrigated Area = 45000 / 0.08 = 562500 m\u00b2."
      },
      {
        "id": "sav-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "A container open at top made of metal sheet is in form of frustum of cone of height 16 cm with lower and upper radii 8 cm and 20 cm. Find cost of milk filling container at \u20b920 per litre.",
        "answer": "\u20b9209",
        "solution": "Volume = 1/3 \u03c0 h (r\u2081\u00b2 + r\u2082\u00b2 + r\u2081r\u2082) = (1/3)(3.14)(16)(400 + 64 + 160) = (16/3)(3.14)(624) = 10449.92 cm\u00b3 = 10.45 litres. Cost = 10.45 \u00d7 \u20b920 = \u20b9209."
      }
    ]
  },
  {
    "id": "statistics",
    "title": "Statistics",
    "class": 10,
    "chapterNumber": "13",
    "questions": [
      {
        "id": "stat-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "Empirical relationship between three measures of central tendency is:",
        "options": [
          "(A) 2 Median = Mode + 3 Mean",
          "(B) Mode = 3 Median - 2 Mean",
          "(C) 3 Mode = 2 Median + Mean",
          "(D) Mean = Mode + Median"
        ],
        "answer": "(B) Mode = 3 Median - 2 Mean",
        "solution": "Standard empirical relation: Mode = 3 Median - 2 Mean."
      },
      {
        "id": "stat-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "If mean of observations x, x+3, x+5, x+7, x+10 is 9, then mean of last three observations is:",
        "options": [
          "(A) 10 1/3",
          "(B) 11 1/3",
          "(C) 11",
          "(D) 9"
        ],
        "answer": "(B) 11 1/3",
        "solution": "(5x + 25)/5 = 9 \u21d2 x + 5 = 9 \u21d2 x = 4. Last three are 9, 11, 14. Mean = (9+11+14)/3 = 34/3 = 11 1/3."
      },
      {
        "id": "stat-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "For grouped data, mode is given by:",
        "options": [
          "(A) l + [(f\u2081 - f\u2080)/(2f\u2081 - f\u2080 - f\u2082)] \u00d7 h",
          "(B) l + [(f\u2081 - f\u2082)/(2f\u2081 - f\u2080)] \u00d7 h",
          "(C) l + [(f\u2080 - f\u2081)/(2f\u2081 - f\u2082)] \u00d7 h",
          "(D) l + [(f\u2081 - f\u2080)/(f\u2081 - f\u2082)] \u00d7 h"
        ],
        "answer": "(A) l + [(f\u2081 - f\u2080)/(2f\u2081 - f\u2080 - f\u2082)] \u00d7 h",
        "solution": "Standard formula for Mode of grouped frequency distribution."
      },
      {
        "id": "stat-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "If mode of a data is 18 and mean is 24, then median is:",
        "options": [
          "(A) 20",
          "(B) 22",
          "(C) 21",
          "(D) 23"
        ],
        "answer": "(B) 22",
        "solution": "Mode = 3 Median - 2 Mean \u21d2 18 = 3 Median - 2(24) \u21d2 18 + 48 = 3 Median \u21d2 3 Median = 66 \u21d2 Median = 22."
      },
      {
        "id": "stat-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Class mark of class interval 10-25 is:",
        "options": [
          "(A) 15",
          "(B) 17.5",
          "(C) 17",
          "(D) 20"
        ],
        "answer": "(B) 17.5",
        "solution": "Class mark = (Lower limit + Upper limit) / 2 = (10 + 25) / 2 = 17.5."
      },
      {
        "id": "stat-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find mean of first 10 natural numbers.",
        "answer": "5.5",
        "solution": "Sum = 10(11)/2 = 55. Mean = 55 / 10 = 5.5."
      },
      {
        "id": "stat-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "If mean of frequency distribution is 8.1 and \u2211f\u1d62x\u1d62 = 132 + 5k, \u2211f\u1d62 = 20, find k.",
        "answer": "k = 6",
        "solution": "Mean = \u2211f\u1d62x\u1d62 / \u2211f\u1d62 \u21d2 8.1 = (132 + 5k)/20 \u21d2 162 = 132 + 5k \u21d2 5k = 30 \u21d2 k = 6."
      },
      {
        "id": "stat-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find mode of numbers: 2, 6, 4, 5, 0, 2, 1, 3, 2, 3.",
        "answer": "2",
        "solution": "Number 2 occurs most frequently (3 times). Hence Mode = 2."
      },
      {
        "id": "stat-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Convert less than type distribution to class intervals: Less than 20: 5, Less than 40: 12, Less than 60: 25.",
        "answer": "0-20: 5, 20-40: 7, 40-60: 13",
        "solution": "Frequencies: f\u2081 = 5, f\u2082 = 12 - 5 = 7, f\u2083 = 25 - 12 = 13."
      },
      {
        "id": "stat-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find median class for distribution with cumulative frequencies: 10-20 (4), 20-30 (12), 30-40 (20), 40-50 (28). Total N = 28.",
        "answer": "20-30",
        "solution": "N/2 = 14. Cumulative frequency just greater than 14 is 20 (corresponding to class 30-40) ... wait, cf=12 < 14, cf=20 > 14 \u21d2 Median class is 30-40."
      },
      {
        "id": "stat-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find mean of following distribution using Direct Method: Class 0-10 (f=3), 10-20 (f=5), 20-30 (f=9), 30-40 (f=3).",
        "answer": "21",
        "solution": "x\u1d62 = 5, 15, 25, 35. f\u1d62x\u1d62 = 15, 75, 225, 105. \u2211f\u1d62x\u1d62 = 420, \u2211f\u1d62 = 20. Mean = 420/20 = 21."
      },
      {
        "id": "stat-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find mode of following distribution: Class 0-10 (f=7), 10-20 (f=14), 20-30 (f=13), 30-40 (f=12), 40-50 (f=4).",
        "answer": "15.71",
        "solution": "Modal class = 10-20. l = 10, f\u2081 = 14, f\u2080 = 7, f\u2082 = 13, h = 10.\nMode = 10 + [(14-7)/(28 - 7 - 13)] \u00d7 10 = 10 + (7/8)\u00d710 = 10 + 5.71 = 15.71."
      },
      {
        "id": "stat-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find median of distribution: Class 0-10 (f=5), 10-20 (f=8), 20-30 (f=20), 30-40 (f=15), 40-50 (f=7). Total N = 55.",
        "answer": "27",
        "solution": "N/2 = 27.5. Median class 20-30. l = 20, cf = 13, f = 20, h = 10.\nMedian = 20 + [(27.5 - 13)/20] \u00d7 10 = 20 + 14.5/2 = 27.25."
      },
      {
        "id": "stat-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Mean of 100 observations is 50. If one observation 50 was misread as 150, find correct mean.",
        "answer": "49",
        "solution": "Incorrect sum = 50 \u00d7 100 = 5000. Correct sum = 5000 - 150 + 50 = 4900. Correct mean = 4900/100 = 49."
      },
      {
        "id": "stat-15",
        "number": 15,
        "type": "PYQ",
        "marks": 3,
        "question": "If median of distribution is 28.5 and total frequency is 60, find missing frequencies x and y for classes 10-20 (f=x) and 40-50 (f=y) when 0-10 (f=5), 20-30 (f=20), 30-40 (f=15), 50-60 (f=5).",
        "answer": "x = 8, y = 7",
        "solution": "x + y + 45 = 60 \u21d2 x + y = 15. Median 28.5 is in 20-30. 28.5 = 20 + [(30 - (5+x))/20] \u00d7 10 \u21d2 8.5 = (25-x)/2 \u21d2 17 = 25-x \u21d2 x = 8. Then y = 7."
      },
      {
        "id": "stat-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "Find mean of distribution using Assumed Mean Method: Class 10-25 (f=2), 25-40 (f=3), 40-55 (f=7), 55-70 (f=6), 70-85 (f=6), 85-100 (f=6). Total N = 30.",
        "answer": "62",
        "solution": "Assume a = 62.5. d\u1d62 = x\u1d62 - 62.5. \u2211f\u1d62d\u1d62 = -15. Mean = 62.5 + (-15/30) = 62.5 - 0.5 = 62."
      },
      {
        "id": "stat-17",
        "number": 17,
        "type": "PYQ",
        "marks": 1,
        "question": "The modal class for a frequency distribution is the class having:",
        "options": [
          "(A) Lowest frequency",
          "(B) Highest frequency",
          "(C) Middle frequency",
          "(D) First frequency"
        ],
        "answer": "(B) Highest frequency",
        "solution": "Modal class is the class interval with the maximum frequency."
      },
      {
        "id": "stat-18",
        "number": 18,
        "type": "PYQ",
        "marks": 2,
        "question": "If Median = 15 and Mean = 12, find Mode.",
        "answer": "21",
        "solution": "Mode = 3 Median - 2 Mean = 3(15) - 2(12) = 45 - 24 = 21."
      },
      {
        "id": "stat-19",
        "number": 19,
        "type": "PYQ",
        "marks": 3,
        "question": "Calculate mode for data: Marks 0-10 (f=4), 10-20 (f=10), 20-30 (f=16), 30-40 (f=12), 40-50 (f=8).",
        "answer": "24",
        "solution": "Modal class = 20-30. l = 20, f\u2081 = 16, f\u2080 = 10, f\u2082 = 12, h = 10.\nMode = 20 + [(16-10)/(32 - 10 - 12)] \u00d7 10 = 20 + (6/10)\u00d710 = 26."
      },
      {
        "id": "stat-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Find missing frequencies f\u2081 and f\u2082 if mean of distribution is 1.46 and total frequency is 200. Values x=0 (f=46), x=1 (f=f\u2081), x=2 (f=f\u2082), x=3 (f=25), x=4 (f=10), x=5 (f=5).",
        "answer": "f\u2081 = 76, f\u2082 = 38",
        "solution": "f\u2081 + f\u2082 = 200 - 86 = 114. \u2211fx = f\u2081 + 2f\u2082 + 140 = 200 \u00d7 1.46 = 292 \u21d2 f\u2081 + 2f\u2082 = 152. Solving gives f\u2081 = 76, f\u2082 = 38."
      }
    ]
  },
  {
    "id": "probability",
    "title": "Probability",
    "class": 10,
    "chapterNumber": "14",
    "questions": [
      {
        "id": "prob-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "Which of the following cannot be the probability of an event?",
        "options": [
          "(A) 2/3",
          "(B) -1.5",
          "(C) 15%",
          "(D) 0.7"
        ],
        "answer": "(B) -1.5",
        "solution": "Probability of an event always satisfies 0 \u2264 P(E) \u2264 1. It can never be negative."
      },
      {
        "id": "prob-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "If P(E) = 0.05, then the probability of 'not E' is:",
        "options": [
          "(A) 0.95",
          "(B) 0.05",
          "(C) 1.05",
          "(D) 0.095"
        ],
        "answer": "(A) 0.95",
        "solution": "P(not E) = 1 - P(E) = 1 - 0.05 = 0.95."
      },
      {
        "id": "prob-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "A die is thrown once. Probability of getting a prime number is:",
        "options": [
          "(A) 1/3",
          "(B) 1/2",
          "(C) 2/3",
          "(D) 1/6"
        ],
        "answer": "(B) 1/2",
        "solution": "Prime outcomes on die = {2, 3, 5} (3 out of 6). P = 3/6 = 1/2."
      },
      {
        "id": "prob-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "A card is drawn from a well-shuffled deck of 52 cards. Probability of getting a face card is:",
        "options": [
          "(A) 3/13",
          "(B) 1/13",
          "(C) 4/13",
          "(D) 9/52"
        ],
        "answer": "(A) 3/13",
        "solution": "Total face cards (K, Q, J in 4 suits) = 12. P = 12/52 = 3/13."
      },
      {
        "id": "prob-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Two coins are tossed simultaneously. Probability of getting at least one head is:",
        "options": [
          "(A) 1/4",
          "(B) 1/2",
          "(C) 3/4",
          "(D) 1"
        ],
        "answer": "(C) 3/4",
        "solution": "Outcomes = {HH, HT, TH, TT}. At least one head = {HH, HT, TH} (3 out of 4). P = 3/4."
      },
      {
        "id": "prob-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "A bag contains 3 red balls and 5 black balls. A ball is drawn at random. Find probability that ball is red.",
        "answer": "3/8",
        "solution": "Total balls = 3 + 5 = 8. Red balls = 3. P(Red) = 3/8."
      },
      {
        "id": "prob-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "A box contains 90 discs numbered 1 to 90. If one disc is drawn at random, find probability that it bears a 2-digit number.",
        "answer": "81/90 = 9/10",
        "solution": "Two-digit numbers from 1 to 90 are 10 to 90 (81 numbers). P = 81/90 = 9/10."
      },
      {
        "id": "prob-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Gopi buys a fish from a shop. Shopkeeper takes out one fish from a tank containing 5 male and 8 female fish. Find P(Male fish).",
        "answer": "5/13",
        "solution": "Total fish = 5 + 8 = 13. Male fish = 5. P(Male) = 5/13."
      },
      {
        "id": "prob-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "A game of chance consists of spinning an arrow which comes to rest pointing at numbers 1 to 8. Find P(pointing at an odd number).",
        "answer": "1/2",
        "solution": "Odd numbers = {1, 3, 5, 7} (4 numbers). Total = 8. P = 4/8 = 1/2."
      },
      {
        "id": "prob-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "One card is drawn from a well-shuffled deck of 52 cards. Find probability of getting a king of red colour.",
        "answer": "2/52 = 1/26",
        "solution": "Red kings = King of Hearts and King of Diamonds (2 cards). P = 2/52 = 1/26."
      },
      {
        "id": "prob-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Two dice are thrown at the same time. Find probability of getting a sum of 8 and a doublet.",
        "answer": "Sum of 8: 5/36, Doublet: 1/6",
        "solution": "Total outcomes = 36.\nSum of 8: {(2,6), (3,5), (4,4), (5,3), (6,2)} \u21d2 P = 5/36.\nDoublet: {(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)} \u21d2 P = 6/36 = 1/6."
      },
      {
        "id": "prob-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "A jar contains 24 marbles, some are green and others are blue. If P(Green) = 2/3, find number of blue marbles in jar.",
        "answer": "8 blue marbles",
        "solution": "P(Green) = Green/24 = 2/3 \u21d2 Green = 16. Blue = 24 - 16 = 8 marbles."
      },
      {
        "id": "prob-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "A piggy bank contains hundred 50p coins, fifty \u20b91 coins, twenty \u20b92 coins and ten \u20b95 coins. Find P(will be a 50p coin) and P(will not be \u20b95 coin).",
        "answer": "P(50p) = 5/9, P(not \u20b95) = 17/18",
        "solution": "Total coins = 100 + 50 + 20 + 10 = 180.\nP(50p) = 100/180 = 5/9.\nP(not \u20b95) = (180 - 10)/180 = 170/180 = 17/18."
      },
      {
        "id": "prob-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "12 defective pens are accidentally mixed with 132 good ones. One pen is taken out at random. Find P(Pen is good).",
        "answer": "11/12",
        "solution": "Total pens = 12 + 132 = 144. Good pens = 132. P(Good) = 132/144 = 11/12."
      },
      {
        "id": "prob-15",
        "number": 15,
        "type": "PYQ",
        "marks": 3,
        "question": "Cards numbered 11 to 60 are kept in a box. A card is drawn at random. Find probability that number on card is a perfect square and divisible by 5.",
        "answer": "Square: 4/50 = 2/25, Divisible by 5: 10/50 = 1/5",
        "solution": "Total cards = 50 (from 11 to 60).\nPerfect squares: {16, 25, 36, 49} (4 cards) \u21d2 P = 4/50 = 2/25.\nDivisible by 5: {15, 20, 25, 30, 35, 40, 45, 50, 55, 60} (10 cards) \u21d2 P = 10/50 = 1/5."
      },
      {
        "id": "prob-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "A box contains 20 balls bearing numbers 1 to 20. A ball is drawn at random. Find probability that number is: (i) prime (ii) divisible by 3 (iii) a multiple of 2 or 3.",
        "answer": "(i) 2/5, (ii) 3/10, (iii) 13/20",
        "solution": "Total = 20.\n(i) Primes = {2,3,5,7,11,13,17,19} (8) \u21d2 P = 8/20 = 2/5.\n(ii) Div by 3 = {3,6,9,12,15,18} (6) \u21d2 P = 6/20 = 3/10.\n(iii) Multiple of 2 or 3 = {2,3,4,6,8,9,10,12,14,15,16,18,20} (13) \u21d2 P = 13/20."
      },
      {
        "id": "prob-17",
        "number": 17,
        "type": "PYQ",
        "marks": 1,
        "question": "Probability of an event that is certain to happen is:",
        "options": [
          "(A) 0",
          "(B) 1",
          "(C) 1/2",
          "(D) Infinite"
        ],
        "answer": "(B) 1",
        "solution": "A certain event has a probability of 1."
      },
      {
        "id": "prob-18",
        "number": 18,
        "type": "PYQ",
        "marks": 2,
        "question": "What is probability of getting 53 Mondays in a leap year?",
        "answer": "2/7",
        "solution": "Leap year = 366 days = 52 weeks + 2 extra days. Extra days can be (Sun,Mon), (Mon,Tue), (Tue,Wed), (Wed,Thu), (Thu,Fri), (Fri,Sat), (Sat,Sun) [7 outcomes]. Monday occurs in 2 outcomes \u21d2 P = 2/7."
      },
      {
        "id": "prob-19",
        "number": 19,
        "type": "PYQ",
        "marks": 3,
        "question": "All red face cards are removed from a pack of 52 cards. A card is drawn at random. Find P(getting a red card) and P(getting a king).",
        "answer": "P(Red card) = 20/46 = 10/23, P(King) = 2/46 = 1/23",
        "solution": "Removed cards = 6 red face cards (K, Q, J of Hearts & Diamonds). Remaining cards = 52 - 6 = 46.\nRed cards left = 26 - 6 = 20 \u21d2 P(Red) = 20/46 = 10/23.\nKings left = 4 - 2 = 2 \u21d2 P(King) = 2/46 = 1/23."
      },
      {
        "id": "prob-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "A game consists of tossing a 1 rupee coin 3 times and noting outcome each time. Hanif wins if all tosses give same result (3H or 3T) and loses otherwise. Calculate probability that Hanif loses.",
        "answer": "3/4",
        "solution": "Outcomes = {HHH, HHT, HTH, HTT, THH, THT, TTH, TTT} (8 outcomes).\nWinning outcomes = {HHH, TTT} (2 outcomes).\nLosing outcomes = 8 - 2 = 6 outcomes.\nP(Loses) = 6/8 = 3/4."
      }
    ]
  }
];
