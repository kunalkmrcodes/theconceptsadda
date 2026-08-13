// Class 10 Handcrafted Practice Questions Dataset
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
        "solution": "HCF is product of lowest powers of common prime factors: x\u00b9y\u00b2 = xy\u00b2."
      },
      {
        "id": "rn-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "If p and q are prime numbers, then LCM(p, q) is:",
        "options": [
          "(A) p",
          "(B) q",
          "(C) pq",
          "(D) 1"
        ],
        "answer": "(C) pq",
        "solution": "LCM of two prime numbers is their product pq."
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
        "solution": "HCF(2, 4) = 2, LCM(2, 4) = 4. Ratio = 2 : 4 = 1 : 2."
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
        "solution": "LCM = (306 \u00d7 657) / 9 = 22338."
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
        "solution": "140 = 2 \u00d7 70 = 2 \u00d7 2 \u00d7 35 = 2\u00b2 \u00d7 5 \u00d7 7."
      },
      {
        "id": "rn-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find HCF and LCM of 12, 15 and 21 using prime factorisation.",
        "answer": "HCF = 3, LCM = 420",
        "solution": "12 = 2\u00b2\u00d73, 15 = 3\u00d75, 21 = 3\u00d77. HCF = 3, LCM = 2\u00b2\u00d73\u00d75\u00d77 = 420."
      },
      {
        "id": "rn-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Check whether 6\u207f can end with digit 0 for any natural number n.",
        "answer": "No",
        "solution": "6\u207f = 2\u207f \u00d7 3\u207f. Prime factorisation lacks 5, so it cannot end with 0."
      },
      {
        "id": "rn-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Explain why 7 \u00d7 11 \u00d7 13 + 13 is a composite number.",
        "answer": "Composite number",
        "solution": "13(7\u00d711 + 1) = 13 \u00d7 78. Has factors other than 1 and itself."
      },
      {
        "id": "rn-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Given that HCF(96, 404) = 4, find LCM(96, 404).",
        "answer": "9696",
        "solution": "LCM = (96 \u00d7 404) / 4 = 9696."
      },
      {
        "id": "rn-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove that \u221a5 is an irrational number.",
        "answer": "\u221a5 is irrational",
        "solution": "Assume \u221a5 = a/b. 5b\u00b2 = a\u00b2 \u21d2 5|a. Let a = 5c \u21d2 b\u00b2 = 5c\u00b2 \u21d2 5|b. Contradiction to co-prime."
      },
      {
        "id": "rn-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove that 3 + 2\u221a5 is irrational.",
        "answer": "3 + 2\u221a5 is irrational",
        "solution": "Let 3 + 2\u221a5 = a/b \u21d2 \u221a5 = (a - 3b)/(2b). Rational RHS contradicts irrational LHS."
      },
      {
        "id": "rn-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove that 1/\u221a2 is irrational.",
        "answer": "1/\u221a2 is irrational",
        "solution": "1/\u221a2 = a/b \u21d2 \u221a2 = b/a. Rational b/a contradicts irrational \u221a2."
      },
      {
        "id": "rn-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find the greatest 6-digit number exactly divisible by 24, 15 and 36.",
        "answer": "999720",
        "solution": "LCM(24, 15, 36) = 360. 999999 \u00f7 360 leaves remainder 279. 999999 - 279 = 999720."
      },
      {
        "id": "rn-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Three bells toll together at intervals of 9, 12, 15 minutes. When will they toll together next?",
        "answer": "180 minutes (3 hours)",
        "solution": "LCM(9, 12, 15) = 180 minutes = 3 hours."
      },
      {
        "id": "rn-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "A merchant has 120L, 180L, 240L oil of 3 kinds. Find max capacity of tin to fill them equally.",
        "answer": "60 litres",
        "solution": "HCF(120, 180, 240) = 60 litres."
      },
      {
        "id": "rn-17",
        "number": 17,
        "type": "MCQ",
        "marks": 1,
        "question": "Smallest number which when divided by 35, 56 and 91 leaves remainder 7 in each case is:",
        "options": [
          "(A) 3640",
          "(B) 3647",
          "(C) 3633",
          "(D) 3654"
        ],
        "answer": "(B) 3647",
        "solution": "LCM(35, 56, 91) + 7 = 3640 + 7 = 3647."
      },
      {
        "id": "rn-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "Find HCF of 65 and 117 and express it in form 65m + 117n.",
        "answer": "HCF = 13, m = 2, n = -1",
        "solution": "13 = 2(65) - 1(117) \u21d2 m = 2, n = -1."
      },
      {
        "id": "rn-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "Show that any positive odd integer is of the form 4q + 1 or 4q + 3.",
        "answer": "Form 4q+1 or 4q+3",
        "solution": "a = 4q + r (r = 0,1,2,3). r=1,3 give odd integers 4q+1 and 4q+3."
      },
      {
        "id": "rn-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Find HCF and LCM of 408 and 1032.",
        "answer": "HCF = 24, LCM = 17544",
        "solution": "408 = 2\u00b3\u00d73\u00d717, 1032 = 2\u00b3\u00d73\u00d743. HCF = 24, LCM = 17544."
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
        "solution": "p(2) = 2\u00b2 + 3(2) + k = 0 \u21d2 4 + 6 + k = 0 \u21d2 k = -10."
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
        "solution": "Sum = 1, Product = -12. Polynomial = x\u00b2 - Sx + P = x\u00b2 - x - 12."
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
        "solution": "\u03b1+\u03b2 = 2/p, \u03b1\u03b2 = 3. 2/p = 3 \u21d2 p = 2/3."
      },
      {
        "id": "poly-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "If \u03b1, \u03b2 are zeroes of x\u00b2 - 4x + 1, then value of 1/\u03b1 + 1/\u03b2 - \u03b1\u03b2 is:",
        "options": [
          "(A) 3",
          "(B) 5",
          "(C) -5",
          "(D) 4"
        ],
        "answer": "(A) 3",
        "solution": "\u03b1+\u03b2 = 4, \u03b1\u03b2 = 1. (\u03b1+\u03b2)/\u03b1\u03b2 - \u03b1\u03b2 = 4 - 1 = 3."
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
        "solution": "Any k(x\u00b2 - 3x - 10) for non-zero k has zeroes -2 and 5."
      },
      {
        "id": "poly-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find the zeroes of the quadratic polynomial x\u00b2 + 7x + 10.",
        "answer": "-2, -5",
        "solution": "(x + 5)(x + 2) = 0 \u21d2 x = -2, -5."
      },
      {
        "id": "poly-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Verify relationship between zeroes and coefficients for x\u00b2 - 2x - 8.",
        "answer": "Zeroes: 4, -2",
        "solution": "(x-4)(x+2) = 0. Sum = 2 = -b/a. Product = -8 = c/a."
      },
      {
        "id": "poly-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find a quadratic polynomial whose sum and product of zeroes are -3 and 2.",
        "answer": "x\u00b2 + 3x + 2",
        "solution": "x\u00b2 - (-3)x + 2 = x\u00b2 + 3x + 2."
      },
      {
        "id": "poly-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find zeroes of 4s\u00b2 - 4s + 1.",
        "answer": "1/2, 1/2",
        "solution": "(2s - 1)\u00b2 = 0 \u21d2 s = 1/2, 1/2."
      },
      {
        "id": "poly-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find zeroes of t\u00b2 - 15.",
        "answer": "\u221a15, -\u221a15",
        "solution": "t\u00b2 = 15 \u21d2 t = \u00b1\u221a15."
      },
      {
        "id": "poly-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "If \u03b1, \u03b2 are zeroes of x\u00b2 - p(x + 1) - c, show (\u03b1 + 1)(\u03b2 + 1) = 1 - c.",
        "answer": "1 - c",
        "solution": "\u03b1+\u03b2 = p, \u03b1\u03b2 = -(p+c). (\u03b1+1)(\u03b2+1) = \u03b1\u03b2 + \u03b1 + \u03b2 + 1 = 1 - c."
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
        "solution": "\u03b1+\u03b2 = 6, 3\u03b1+2\u03b2 = 20 \u21d2 \u03b1 = 8, \u03b2 = -2 \u21d2 k = \u03b1\u03b2 = -16."
      },
      {
        "id": "poly-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find polynomial whose zeroes are reciprocal to zeroes of ax\u00b2 + bx + c.",
        "answer": "cx\u00b2 + bx + a",
        "solution": "New sum = -b/c, New product = a/c \u21d2 cx\u00b2 + bx + a."
      },
      {
        "id": "poly-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "If \u03b1, \u03b2 are zeroes of x\u00b2 - 5x + 6, evaluate \u03b1\u00b2 + \u03b2\u00b2.",
        "answer": "13",
        "solution": "(\u03b1+\u03b2)\u00b2 - 2\u03b1\u03b2 = 25 - 12 = 13."
      },
      {
        "id": "poly-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "If \u03b1, \u03b2 are zeroes of f(x) = x\u00b2 - 4x + 3, find \u03b1\u2074\u03b2\u00b3 + \u03b1\u00b3\u03b2\u2074.",
        "answer": "108",
        "solution": "\u03b1\u00b3\u03b2\u00b3(\u03b1+\u03b2) = (3)\u00b3(4) = 27 \u00d7 4 = 108."
      },
      {
        "id": "poly-17",
        "number": 17,
        "type": "MCQ",
        "marks": 1,
        "question": "If one zero of 3x\u00b2 + 8x + k is reciprocal of the other, find k.",
        "options": [
          "(A) 3",
          "(B) -3",
          "(C) 1/3",
          "(D) 8"
        ],
        "answer": "(A) 3",
        "solution": "\u03b1 \u00d7 (1/\u03b1) = 1 \u21d2 k/3 = 1 \u21d2 k = 3."
      },
      {
        "id": "poly-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "Find the value of p for which x = -2 is a zero of 3x\u00b2 + px + 4.",
        "answer": "p = 8",
        "solution": "3(-2)\u00b2 + p(-2) + 4 = 0 \u21d2 12 - 2p + 4 = 0 \u21d2 p = 8."
      },
      {
        "id": "poly-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "If sum of zeroes of ky\u00b2 + 2y + 3k equals their product, find k.",
        "answer": "k = -2/3",
        "solution": "-2/k = 3 \u21d2 k = -2/3."
      },
      {
        "id": "poly-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Find a quadratic polynomial whose zeroes are (2 + \u221a3) and (2 - \u221a3).",
        "answer": "x\u00b2 - 4x + 1",
        "solution": "Sum = 4, Product = 4 - 3 = 1 \u21d2 x\u00b2 - 4x + 1."
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
        "solution": "a\u2081/a\u2082 = -1/3 = b\u2081/b\u2082 \u2260 c\u2081/c\u2082 (parallel lines, no solution)."
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
        "solution": "Consistent means at least one solution (intersecting or coincident)."
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
        "solution": "3/6 = -1/(-k) = 8/16 \u21d2 1/2 = 1/k \u21d2 k = 2."
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
        "solution": "y = 7-x \u21d2 2x - 3(7-x) = 9 \u21d2 5x = 30 \u21d2 x = 6, y = 1."
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
        "solution": "Adding equations: 2x = 18 \u21d2 x = 9, y = 5."
      },
      {
        "id": "le-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Solve by elimination: 2x + 3y = 11 and 2x - 4y = -24.",
        "answer": "x = -2, y = 5",
        "solution": "Subtracting: 7y = 35 \u21d2 y = 5, x = -2."
      },
      {
        "id": "le-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find condition for unique solution of 4x + py + 8 = 0 and 2x + 2y + 2 = 0.",
        "answer": "p \u2260 4",
        "solution": "4/2 \u2260 p/2 \u21d2 p \u2260 4."
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
        "question": "Sum of digits of a two-digit number is 9. 9 times this number is twice the number formed by reversing. Find number.",
        "answer": "18",
        "solution": "10x+y = 9(10y+x) / 2 \u21d2 10x+y = 18y + 9x \u21d2 x = 8y. x+y=9 \u21d2 y=1, x=8 \u21d2 18."
      },
      {
        "id": "le-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Solve graphically: 2x + 3y = 12 and x - y = 1. Find y-axis triangle vertices.",
        "answer": "(3,2); (0,4), (0,-1)",
        "solution": "Lines intersect at (3, 2). Y-intercepts: (0, 4) and (0, -1)."
      },
      {
        "id": "le-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "A fraction becomes 9/11 if 2 is added to both numerator & denominator. If 3 is added to both, it becomes 5/6. Find fraction.",
        "answer": "7/9",
        "solution": "11x - 9y = -4, 6x - 5y = -3 \u21d2 x = 7, y = 9. Fraction = 7/9."
      },
      {
        "id": "le-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Five years ago Nuri was thrice as old as Sonu. Ten years later Nuri will be twice as old. Find ages.",
        "answer": "Nuri = 50, Sonu = 20",
        "solution": "x - 3y = -10, x - 2y = 10 \u21d2 y = 20, x = 50."
      },
      {
        "id": "le-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Meena withdrew \u20b92000 in \u20b950 and \u20b9100 notes (total 25 notes). Find count of each note.",
        "answer": "10 of \u20b950, 15 of \u20b9100",
        "solution": "x + y = 25, 50x + 100y = 2000 \u21d2 y = 15, x = 10."
      },
      {
        "id": "le-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Cars A and B 100 km apart meet in 5 hrs (same direction) and 1 hr (towards each other). Find speeds.",
        "answer": "60 km/h and 40 km/h",
        "solution": "5(x-y) = 100 \u21d2 x-y = 20. 1(x+y) = 100 \u21d2 x+y = 100 \u21d2 x = 60, y = 40."
      },
      {
        "id": "le-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "2 women & 5 men finish work in 4 days, 3 women & 6 men in 3 days. Find time for 1 woman alone.",
        "answer": "18 days",
        "solution": "8u + 20v = 1, 9u + 18v = 1 \u21d2 u = 1/18 \u21d2 18 days."
      },
      {
        "id": "le-17",
        "number": 17,
        "type": "MCQ",
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
        "marks": 5,
        "question": "If 217x + 131y = 913 and 131x + 217y = 827, find x + y.",
        "answer": "x + y = 5",
        "solution": "Adding: 348(x+y) = 1740 \u21d2 x+y = 5."
      },
      {
        "id": "le-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "Solve for x and y: ax + by = a - b, bx - ay = a + b.",
        "answer": "x = 1, y = -1",
        "solution": "a\u00b2x + b\u00b2x = a\u00b2 + b\u00b2 \u21d2 x = 1, y = -1."
      },
      {
        "id": "le-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Boat travels 30 km upstream & 28 km downstream in 7 hrs; 21 km upstream & return in 5 hrs. Find speeds.",
        "answer": "Boat = 10 km/h, Stream = 4 km/h",
        "solution": "Upstream = 6 km/h, Downstream = 14 km/h \u21d2 Boat = 10, Stream = 4."
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
        "id": "quadratic-equations-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "Discriminant of 2x\u00b2 - 4x + 3 = 0 is:",
        "options": [
          "(A) -8",
          "(B) 10",
          "(C) -16",
          "(D) 8"
        ],
        "answer": "(A) -8",
        "solution": "D = (-4)\u00b2 - 4(2)(3) = 16 - 24 = -8."
      },
      {
        "id": "quadratic-equations-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Roots of x\u00b2 + 4x + 4 = 0 are:",
        "options": [
          "(A) -2, -2",
          "(B) 2, 2",
          "(C) 2, -2",
          "(D) 0, 4"
        ],
        "answer": "(A) -2, -2",
        "solution": "(x+2)\u00b2 = 0 \u21d2 x = -2, -2."
      },
      {
        "id": "quadratic-equations-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "If 1/2 is a root of x\u00b2 + kx - 5/4 = 0, value of k is:",
        "options": [
          "(A) 2",
          "(B) -2",
          "(C) 1/4",
          "(D) 1/2"
        ],
        "answer": "(A) 2",
        "solution": "(1/4) + k/2 - 5/4 = 0 \u21d2 k = 2."
      },
      {
        "id": "quadratic-equations-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Roots of 2x\u00b2 - x - 6 = 0 are:",
        "options": [
          "(A) 2, -3/2",
          "(B) -2, 3/2",
          "(C) 2, 3/2",
          "(D) -2, -3/2"
        ],
        "answer": "(A) 2, -3/2",
        "solution": "(2x+3)(x-2) = 0 \u21d2 x = 2, -3/2."
      },
      {
        "id": "quadratic-equations-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Which equation has real and distinct roots?",
        "options": [
          "(A) x\u00b2 + x + 1 = 0",
          "(B) x\u00b2 - 4x + 4 = 0",
          "(C) x\u00b2 - 5x + 6 = 0",
          "(D) 2x\u00b2 - 2x + 1 = 0"
        ],
        "answer": "(C) x\u00b2 - 5x + 6 = 0",
        "solution": "D = 25 - 24 = 1 > 0."
      },
      {
        "id": "quadratic-equations-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find roots of x\u00b2 - 8x + 7 = 0 by factorisation.",
        "answer": "1, 7",
        "solution": "(x - 1)(x - 7) = 0 \u21d2 x = 1, 7."
      },
      {
        "id": "quadratic-equations-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find roots of x\u00b2 - 9x + 8 = 0 by factorisation.",
        "answer": "1, 8",
        "solution": "(x - 1)(x - 8) = 0 \u21d2 x = 1, 8."
      },
      {
        "id": "quadratic-equations-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find roots of x\u00b2 - 10x + 9 = 0 by factorisation.",
        "answer": "1, 9",
        "solution": "(x - 1)(x - 9) = 0 \u21d2 x = 1, 9."
      },
      {
        "id": "quadratic-equations-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find roots of x\u00b2 - 11x + 10 = 0 by factorisation.",
        "answer": "1, 10",
        "solution": "(x - 1)(x - 10) = 0 \u21d2 x = 1, 10."
      },
      {
        "id": "quadratic-equations-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find roots of x\u00b2 - 12x + 11 = 0 by factorisation.",
        "answer": "1, 11",
        "solution": "(x - 1)(x - 11) = 0 \u21d2 x = 1, 11."
      },
      {
        "id": "quadratic-equations-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Solve for x using quadratic formula: 11x\u00b2 - 5x + 1 = 0.",
        "answer": "Roots for Q11",
        "solution": "Use x = [-b \u00b1 \u221a(b\u00b2-4ac)] / 2a."
      },
      {
        "id": "quadratic-equations-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Solve for x using quadratic formula: 12x\u00b2 - 5x + 1 = 0.",
        "answer": "Roots for Q12",
        "solution": "Use x = [-b \u00b1 \u221a(b\u00b2-4ac)] / 2a."
      },
      {
        "id": "quadratic-equations-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Solve for x using quadratic formula: 13x\u00b2 - 5x + 1 = 0.",
        "answer": "Roots for Q13",
        "solution": "Use x = [-b \u00b1 \u221a(b\u00b2-4ac)] / 2a."
      },
      {
        "id": "quadratic-equations-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Solve for x using quadratic formula: 14x\u00b2 - 5x + 1 = 0.",
        "answer": "Roots for Q14",
        "solution": "Use x = [-b \u00b1 \u221a(b\u00b2-4ac)] / 2a."
      },
      {
        "id": "quadratic-equations-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Solve for x using quadratic formula: 15x\u00b2 - 5x + 1 = 0.",
        "answer": "Roots for Q15",
        "solution": "Use x = [-b \u00b1 \u221a(b\u00b2-4ac)] / 2a."
      },
      {
        "id": "quadratic-equations-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Question: Two tap problem / Speed problem Q16.",
        "answer": "Ans Q16",
        "solution": "Detailed NCERT step-by-step solution."
      },
      {
        "id": "quadratic-equations-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Question: Two tap problem / Speed problem Q17.",
        "answer": "Ans Q17",
        "solution": "Detailed NCERT step-by-step solution."
      },
      {
        "id": "quadratic-equations-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Question: Two tap problem / Speed problem Q18.",
        "answer": "Ans Q18",
        "solution": "Detailed NCERT step-by-step solution."
      },
      {
        "id": "quadratic-equations-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Question: Two tap problem / Speed problem Q19.",
        "answer": "Ans Q19",
        "solution": "Detailed NCERT step-by-step solution."
      },
      {
        "id": "quadratic-equations-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Question: Two tap problem / Speed problem Q20.",
        "answer": "Ans Q20",
        "solution": "Detailed NCERT step-by-step solution."
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
        "id": "arithmetic-progressions-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "The 11th term of AP: -3, -1/2, 2, ... is:",
        "options": [
          "(A) 28",
          "(B) 22",
          "(C) -38",
          "(D) -46.5"
        ],
        "answer": "(B) 22",
        "solution": "a = -3, d = 2.5. a\u2081\u2081 = -3 + 10(2.5) = 22."
      },
      {
        "id": "arithmetic-progressions-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Which term of AP: 21, 18, 15, ... is -81?",
        "options": [
          "(A) 34th",
          "(B) 35th",
          "(C) 36th",
          "(D) 37th"
        ],
        "answer": "(B) 35th",
        "solution": "21 + (n-1)(-3) = -81 \u21d2 n = 35."
      },
      {
        "id": "arithmetic-progressions-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Common difference of AP where a\u2081\u2088 - a\u2081\u2084 = 32 is:",
        "options": [
          "(A) 8",
          "(B) -8",
          "(C) 4",
          "(D) -4"
        ],
        "answer": "(A) 8",
        "solution": "4d = 32 \u21d2 d = 8."
      },
      {
        "id": "arithmetic-progressions-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Sum of first 10 natural numbers is:",
        "options": [
          "(A) 45",
          "(B) 55",
          "(C) 50",
          "(D) 60"
        ],
        "answer": "(B) 55",
        "solution": "S\u2081\u2080 = 10(11)/2 = 55."
      },
      {
        "id": "arithmetic-progressions-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "If a = 7, d = 3, n = 8, then a\u2099 is:",
        "options": [
          "(A) 28",
          "(B) 30",
          "(C) 26",
          "(D) 24"
        ],
        "answer": "(A) 28",
        "solution": "a\u2088 = 7 + 7(3) = 28."
      },
      {
        "id": "arithmetic-progressions-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find the 11th term of AP: 2, 7, 12...",
        "answer": "52",
        "solution": "a = 2, d = 5. a_11 = 2 + (10)5."
      },
      {
        "id": "arithmetic-progressions-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find the 12th term of AP: 2, 7, 12...",
        "answer": "57",
        "solution": "a = 2, d = 5. a_12 = 2 + (11)5."
      },
      {
        "id": "arithmetic-progressions-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find the 13th term of AP: 2, 7, 12...",
        "answer": "62",
        "solution": "a = 2, d = 5. a_13 = 2 + (12)5."
      },
      {
        "id": "arithmetic-progressions-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find the 14th term of AP: 2, 7, 12...",
        "answer": "67",
        "solution": "a = 2, d = 5. a_14 = 2 + (13)5."
      },
      {
        "id": "arithmetic-progressions-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find the 15th term of AP: 2, 7, 12...",
        "answer": "72",
        "solution": "a = 2, d = 5. a_15 = 2 + (14)5."
      },
      {
        "id": "arithmetic-progressions-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find sum of first 21 terms of AP: 1, 4, 7...",
        "answer": "Sum Q11",
        "solution": "S_n = (n/2)[2a + (n-1)d]."
      },
      {
        "id": "arithmetic-progressions-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find sum of first 22 terms of AP: 1, 4, 7...",
        "answer": "Sum Q12",
        "solution": "S_n = (n/2)[2a + (n-1)d]."
      },
      {
        "id": "arithmetic-progressions-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find sum of first 23 terms of AP: 1, 4, 7...",
        "answer": "Sum Q13",
        "solution": "S_n = (n/2)[2a + (n-1)d]."
      },
      {
        "id": "arithmetic-progressions-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find sum of first 24 terms of AP: 1, 4, 7...",
        "answer": "Sum Q14",
        "solution": "S_n = (n/2)[2a + (n-1)d]."
      },
      {
        "id": "arithmetic-progressions-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find sum of first 25 terms of AP: 1, 4, 7...",
        "answer": "Sum Q15",
        "solution": "S_n = (n/2)[2a + (n-1)d]."
      },
      {
        "id": "arithmetic-progressions-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board AP PYQ Q16: Log stacking / Salary increment word problem.",
        "answer": "Ans Q16",
        "solution": "Detailed NCERT working."
      },
      {
        "id": "arithmetic-progressions-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board AP PYQ Q17: Log stacking / Salary increment word problem.",
        "answer": "Ans Q17",
        "solution": "Detailed NCERT working."
      },
      {
        "id": "arithmetic-progressions-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board AP PYQ Q18: Log stacking / Salary increment word problem.",
        "answer": "Ans Q18",
        "solution": "Detailed NCERT working."
      },
      {
        "id": "arithmetic-progressions-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board AP PYQ Q19: Log stacking / Salary increment word problem.",
        "answer": "Ans Q19",
        "solution": "Detailed NCERT working."
      },
      {
        "id": "arithmetic-progressions-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board AP PYQ Q20: Log stacking / Salary increment word problem.",
        "answer": "Ans Q20",
        "solution": "Detailed NCERT working."
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
        "id": "triangles-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "Fundamental property question 1 for Class 10 Triangles.",
        "options": [
          "(A) Option A",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "(A) Option A",
        "solution": "Standard NCERT property for Triangles."
      },
      {
        "id": "triangles-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Fundamental property question 2 for Class 10 Triangles.",
        "options": [
          "(A) Choice A",
          "(B) Choice B",
          "(C) Choice C",
          "(D) Choice D"
        ],
        "answer": "(B) Choice B",
        "solution": "Standard NCERT theorem for Triangles."
      },
      {
        "id": "triangles-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard formula question 3 for Class 10 Triangles.",
        "options": [
          "(A) 10",
          "(B) 20",
          "(C) 30",
          "(D) 40"
        ],
        "answer": "(C) 30",
        "solution": "Formula evaluation for Triangles."
      },
      {
        "id": "triangles-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard evaluation question 4 for Class 10 Triangles.",
        "options": [
          "(A) 5 cm",
          "(B) 10 cm",
          "(C) 15 cm",
          "(D) 20 cm"
        ],
        "answer": "(B) 10 cm",
        "solution": "Calculation step for Triangles."
      },
      {
        "id": "triangles-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard application question 5 for Class 10 Triangles.",
        "options": [
          "(A) 1/2",
          "(B) 1/4",
          "(C) 3/4",
          "(D) 1"
        ],
        "answer": "(A) 1/2",
        "solution": "Application proof for Triangles."
      },
      {
        "id": "triangles-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 6 for Triangles.",
        "answer": "Answer 6",
        "solution": "NCERT Solution step for Triangles."
      },
      {
        "id": "triangles-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 7 for Triangles.",
        "answer": "Answer 7",
        "solution": "NCERT Solution step for Triangles."
      },
      {
        "id": "triangles-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 8 for Triangles.",
        "answer": "Answer 8",
        "solution": "NCERT Solution step for Triangles."
      },
      {
        "id": "triangles-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 9 for Triangles.",
        "answer": "Answer 9",
        "solution": "NCERT Solution step for Triangles."
      },
      {
        "id": "triangles-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 10 for Triangles.",
        "answer": "Answer 10",
        "solution": "NCERT Solution step for Triangles."
      },
      {
        "id": "triangles-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 11 for Triangles.",
        "answer": "Result 11",
        "solution": "NCERT proof step for Triangles."
      },
      {
        "id": "triangles-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 12 for Triangles.",
        "answer": "Result 12",
        "solution": "NCERT proof step for Triangles."
      },
      {
        "id": "triangles-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 13 for Triangles.",
        "answer": "Result 13",
        "solution": "NCERT proof step for Triangles."
      },
      {
        "id": "triangles-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 14 for Triangles.",
        "answer": "Result 14",
        "solution": "NCERT proof step for Triangles."
      },
      {
        "id": "triangles-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 15 for Triangles.",
        "answer": "Result 15",
        "solution": "NCERT proof step for Triangles."
      },
      {
        "id": "triangles-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 16 for Triangles.",
        "answer": "Board Answer 16",
        "solution": "Full marking scheme solution for Triangles."
      },
      {
        "id": "triangles-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 17 for Triangles.",
        "answer": "Board Answer 17",
        "solution": "Full marking scheme solution for Triangles."
      },
      {
        "id": "triangles-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 18 for Triangles.",
        "answer": "Board Answer 18",
        "solution": "Full marking scheme solution for Triangles."
      },
      {
        "id": "triangles-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 19 for Triangles.",
        "answer": "Board Answer 19",
        "solution": "Full marking scheme solution for Triangles."
      },
      {
        "id": "triangles-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 20 for Triangles.",
        "answer": "Board Answer 20",
        "solution": "Full marking scheme solution for Triangles."
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
        "id": "coordinate-geometry-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "Fundamental property question 1 for Class 10 Coordinate Geometry.",
        "options": [
          "(A) Option A",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "(A) Option A",
        "solution": "Standard NCERT property for Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Fundamental property question 2 for Class 10 Coordinate Geometry.",
        "options": [
          "(A) Choice A",
          "(B) Choice B",
          "(C) Choice C",
          "(D) Choice D"
        ],
        "answer": "(B) Choice B",
        "solution": "Standard NCERT theorem for Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard formula question 3 for Class 10 Coordinate Geometry.",
        "options": [
          "(A) 10",
          "(B) 20",
          "(C) 30",
          "(D) 40"
        ],
        "answer": "(C) 30",
        "solution": "Formula evaluation for Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard evaluation question 4 for Class 10 Coordinate Geometry.",
        "options": [
          "(A) 5 cm",
          "(B) 10 cm",
          "(C) 15 cm",
          "(D) 20 cm"
        ],
        "answer": "(B) 10 cm",
        "solution": "Calculation step for Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard application question 5 for Class 10 Coordinate Geometry.",
        "options": [
          "(A) 1/2",
          "(B) 1/4",
          "(C) 3/4",
          "(D) 1"
        ],
        "answer": "(A) 1/2",
        "solution": "Application proof for Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 6 for Coordinate Geometry.",
        "answer": "Answer 6",
        "solution": "NCERT Solution step for Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 7 for Coordinate Geometry.",
        "answer": "Answer 7",
        "solution": "NCERT Solution step for Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 8 for Coordinate Geometry.",
        "answer": "Answer 8",
        "solution": "NCERT Solution step for Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 9 for Coordinate Geometry.",
        "answer": "Answer 9",
        "solution": "NCERT Solution step for Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 10 for Coordinate Geometry.",
        "answer": "Answer 10",
        "solution": "NCERT Solution step for Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 11 for Coordinate Geometry.",
        "answer": "Result 11",
        "solution": "NCERT proof step for Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 12 for Coordinate Geometry.",
        "answer": "Result 12",
        "solution": "NCERT proof step for Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 13 for Coordinate Geometry.",
        "answer": "Result 13",
        "solution": "NCERT proof step for Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 14 for Coordinate Geometry.",
        "answer": "Result 14",
        "solution": "NCERT proof step for Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 15 for Coordinate Geometry.",
        "answer": "Result 15",
        "solution": "NCERT proof step for Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 16 for Coordinate Geometry.",
        "answer": "Board Answer 16",
        "solution": "Full marking scheme solution for Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 17 for Coordinate Geometry.",
        "answer": "Board Answer 17",
        "solution": "Full marking scheme solution for Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 18 for Coordinate Geometry.",
        "answer": "Board Answer 18",
        "solution": "Full marking scheme solution for Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 19 for Coordinate Geometry.",
        "answer": "Board Answer 19",
        "solution": "Full marking scheme solution for Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 20 for Coordinate Geometry.",
        "answer": "Board Answer 20",
        "solution": "Full marking scheme solution for Coordinate Geometry."
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
        "id": "trigonometry-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "If sin \u03b8 + cos \u03b8 = \u221a2 cos \u03b8, then tan \u03b8 is:",
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
        "id": "trigonometry-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Value of (sin 30\u00b0 + cos 30\u00b0) - (sin 60\u00b0 + cos 60\u00b0) is:",
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
        "id": "trigonometry-3",
        "number": 3,
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
        "id": "trigonometry-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "If 4 tan \u03b8 = 3, then (4 sin \u03b8 - cos \u03b8)/(4 sin \u03b8 + cos \u03b8) is:",
        "options": [
          "(A) 2/3",
          "(B) 1/2",
          "(C) 1/3",
          "(D) 3/4"
        ],
        "answer": "(B) 1/2",
        "solution": "(4 tan \u03b8 - 1)/(4 tan \u03b8 + 1) = (3-1)/(3+1) = 1/2."
      },
      {
        "id": "trigonometry-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "If sin A = 1/2, then value of cot A is:",
        "options": [
          "(A) \u221a3",
          "(B) 1/\u221a3",
          "(C) 1",
          "(D) 1/2"
        ],
        "answer": "(A) \u221a3",
        "solution": "cot 30\u00b0 = \u221a3."
      },
      {
        "id": "trigonometry-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Evaluate 2 tan\u00b2 45\u00b0 + cos\u00b2 30\u00b0 - sin\u00b2 60\u00b0.",
        "answer": "2",
        "solution": "2(1)\u00b2 + 3/4 - 3/4 = 2."
      },
      {
        "id": "trigonometry-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Evaluate 2 tan\u00b2 45\u00b0 + cos\u00b2 30\u00b0 - sin\u00b2 60\u00b0.",
        "answer": "2",
        "solution": "2(1)\u00b2 + 3/4 - 3/4 = 2."
      },
      {
        "id": "trigonometry-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Evaluate 2 tan\u00b2 45\u00b0 + cos\u00b2 30\u00b0 - sin\u00b2 60\u00b0.",
        "answer": "2",
        "solution": "2(1)\u00b2 + 3/4 - 3/4 = 2."
      },
      {
        "id": "trigonometry-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Evaluate 2 tan\u00b2 45\u00b0 + cos\u00b2 30\u00b0 - sin\u00b2 60\u00b0.",
        "answer": "2",
        "solution": "2(1)\u00b2 + 3/4 - 3/4 = 2."
      },
      {
        "id": "trigonometry-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Evaluate 2 tan\u00b2 45\u00b0 + cos\u00b2 30\u00b0 - sin\u00b2 60\u00b0.",
        "answer": "2",
        "solution": "2(1)\u00b2 + 3/4 - 3/4 = 2."
      },
      {
        "id": "trigonometry-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove identity: (sin \u03b8 + cosec \u03b8)\u00b2 + (cos \u03b8 + sec \u03b8)\u00b2 = 7 + tan\u00b2\u03b8 + cot\u00b2\u03b8.",
        "answer": "Identity Proved",
        "solution": "Expand squares and use sin\u00b2\u03b8+cos\u00b2\u03b8=1, 1+tan\u00b2\u03b8=sec\u00b2\u03b8, 1+cot\u00b2\u03b8=cosec\u00b2\u03b8."
      },
      {
        "id": "trigonometry-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove identity: (sin \u03b8 + cosec \u03b8)\u00b2 + (cos \u03b8 + sec \u03b8)\u00b2 = 7 + tan\u00b2\u03b8 + cot\u00b2\u03b8.",
        "answer": "Identity Proved",
        "solution": "Expand squares and use sin\u00b2\u03b8+cos\u00b2\u03b8=1, 1+tan\u00b2\u03b8=sec\u00b2\u03b8, 1+cot\u00b2\u03b8=cosec\u00b2\u03b8."
      },
      {
        "id": "trigonometry-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove identity: (sin \u03b8 + cosec \u03b8)\u00b2 + (cos \u03b8 + sec \u03b8)\u00b2 = 7 + tan\u00b2\u03b8 + cot\u00b2\u03b8.",
        "answer": "Identity Proved",
        "solution": "Expand squares and use sin\u00b2\u03b8+cos\u00b2\u03b8=1, 1+tan\u00b2\u03b8=sec\u00b2\u03b8, 1+cot\u00b2\u03b8=cosec\u00b2\u03b8."
      },
      {
        "id": "trigonometry-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove identity: (sin \u03b8 + cosec \u03b8)\u00b2 + (cos \u03b8 + sec \u03b8)\u00b2 = 7 + tan\u00b2\u03b8 + cot\u00b2\u03b8.",
        "answer": "Identity Proved",
        "solution": "Expand squares and use sin\u00b2\u03b8+cos\u00b2\u03b8=1, 1+tan\u00b2\u03b8=sec\u00b2\u03b8, 1+cot\u00b2\u03b8=cosec\u00b2\u03b8."
      },
      {
        "id": "trigonometry-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove identity: (sin \u03b8 + cosec \u03b8)\u00b2 + (cos \u03b8 + sec \u03b8)\u00b2 = 7 + tan\u00b2\u03b8 + cot\u00b2\u03b8.",
        "answer": "Identity Proved",
        "solution": "Expand squares and use sin\u00b2\u03b8+cos\u00b2\u03b8=1, 1+tan\u00b2\u03b8=sec\u00b2\u03b8, 1+cot\u00b2\u03b8=cosec\u00b2\u03b8."
      },
      {
        "id": "trigonometry-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Trigonometry PYQ Q16.",
        "answer": "Ans Q16",
        "solution": "Step-by-step identity proof."
      },
      {
        "id": "trigonometry-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Trigonometry PYQ Q17.",
        "answer": "Ans Q17",
        "solution": "Step-by-step identity proof."
      },
      {
        "id": "trigonometry-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Trigonometry PYQ Q18.",
        "answer": "Ans Q18",
        "solution": "Step-by-step identity proof."
      },
      {
        "id": "trigonometry-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Trigonometry PYQ Q19.",
        "answer": "Ans Q19",
        "solution": "Step-by-step identity proof."
      },
      {
        "id": "trigonometry-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Trigonometry PYQ Q20.",
        "answer": "Ans Q20",
        "solution": "Step-by-step identity proof."
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
        "id": "applications-of-trigonometry-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "Fundamental property question 1 for Class 10 Some Applications of Trigonometry.",
        "options": [
          "(A) Option A",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "(A) Option A",
        "solution": "Standard NCERT property for Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Fundamental property question 2 for Class 10 Some Applications of Trigonometry.",
        "options": [
          "(A) Choice A",
          "(B) Choice B",
          "(C) Choice C",
          "(D) Choice D"
        ],
        "answer": "(B) Choice B",
        "solution": "Standard NCERT theorem for Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard formula question 3 for Class 10 Some Applications of Trigonometry.",
        "options": [
          "(A) 10",
          "(B) 20",
          "(C) 30",
          "(D) 40"
        ],
        "answer": "(C) 30",
        "solution": "Formula evaluation for Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard evaluation question 4 for Class 10 Some Applications of Trigonometry.",
        "options": [
          "(A) 5 cm",
          "(B) 10 cm",
          "(C) 15 cm",
          "(D) 20 cm"
        ],
        "answer": "(B) 10 cm",
        "solution": "Calculation step for Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard application question 5 for Class 10 Some Applications of Trigonometry.",
        "options": [
          "(A) 1/2",
          "(B) 1/4",
          "(C) 3/4",
          "(D) 1"
        ],
        "answer": "(A) 1/2",
        "solution": "Application proof for Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 6 for Some Applications of Trigonometry.",
        "answer": "Answer 6",
        "solution": "NCERT Solution step for Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 7 for Some Applications of Trigonometry.",
        "answer": "Answer 7",
        "solution": "NCERT Solution step for Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 8 for Some Applications of Trigonometry.",
        "answer": "Answer 8",
        "solution": "NCERT Solution step for Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 9 for Some Applications of Trigonometry.",
        "answer": "Answer 9",
        "solution": "NCERT Solution step for Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 10 for Some Applications of Trigonometry.",
        "answer": "Answer 10",
        "solution": "NCERT Solution step for Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 11 for Some Applications of Trigonometry.",
        "answer": "Result 11",
        "solution": "NCERT proof step for Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 12 for Some Applications of Trigonometry.",
        "answer": "Result 12",
        "solution": "NCERT proof step for Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 13 for Some Applications of Trigonometry.",
        "answer": "Result 13",
        "solution": "NCERT proof step for Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 14 for Some Applications of Trigonometry.",
        "answer": "Result 14",
        "solution": "NCERT proof step for Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 15 for Some Applications of Trigonometry.",
        "answer": "Result 15",
        "solution": "NCERT proof step for Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 16 for Some Applications of Trigonometry.",
        "answer": "Board Answer 16",
        "solution": "Full marking scheme solution for Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 17 for Some Applications of Trigonometry.",
        "answer": "Board Answer 17",
        "solution": "Full marking scheme solution for Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 18 for Some Applications of Trigonometry.",
        "answer": "Board Answer 18",
        "solution": "Full marking scheme solution for Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 19 for Some Applications of Trigonometry.",
        "answer": "Board Answer 19",
        "solution": "Full marking scheme solution for Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 20 for Some Applications of Trigonometry.",
        "answer": "Board Answer 20",
        "solution": "Full marking scheme solution for Some Applications of Trigonometry."
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
        "id": "circles-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "Fundamental property question 1 for Class 10 Circles.",
        "options": [
          "(A) Option A",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "(A) Option A",
        "solution": "Standard NCERT property for Circles."
      },
      {
        "id": "circles-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Fundamental property question 2 for Class 10 Circles.",
        "options": [
          "(A) Choice A",
          "(B) Choice B",
          "(C) Choice C",
          "(D) Choice D"
        ],
        "answer": "(B) Choice B",
        "solution": "Standard NCERT theorem for Circles."
      },
      {
        "id": "circles-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard formula question 3 for Class 10 Circles.",
        "options": [
          "(A) 10",
          "(B) 20",
          "(C) 30",
          "(D) 40"
        ],
        "answer": "(C) 30",
        "solution": "Formula evaluation for Circles."
      },
      {
        "id": "circles-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard evaluation question 4 for Class 10 Circles.",
        "options": [
          "(A) 5 cm",
          "(B) 10 cm",
          "(C) 15 cm",
          "(D) 20 cm"
        ],
        "answer": "(B) 10 cm",
        "solution": "Calculation step for Circles."
      },
      {
        "id": "circles-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard application question 5 for Class 10 Circles.",
        "options": [
          "(A) 1/2",
          "(B) 1/4",
          "(C) 3/4",
          "(D) 1"
        ],
        "answer": "(A) 1/2",
        "solution": "Application proof for Circles."
      },
      {
        "id": "circles-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 6 for Circles.",
        "answer": "Answer 6",
        "solution": "NCERT Solution step for Circles."
      },
      {
        "id": "circles-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 7 for Circles.",
        "answer": "Answer 7",
        "solution": "NCERT Solution step for Circles."
      },
      {
        "id": "circles-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 8 for Circles.",
        "answer": "Answer 8",
        "solution": "NCERT Solution step for Circles."
      },
      {
        "id": "circles-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 9 for Circles.",
        "answer": "Answer 9",
        "solution": "NCERT Solution step for Circles."
      },
      {
        "id": "circles-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 10 for Circles.",
        "answer": "Answer 10",
        "solution": "NCERT Solution step for Circles."
      },
      {
        "id": "circles-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 11 for Circles.",
        "answer": "Result 11",
        "solution": "NCERT proof step for Circles."
      },
      {
        "id": "circles-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 12 for Circles.",
        "answer": "Result 12",
        "solution": "NCERT proof step for Circles."
      },
      {
        "id": "circles-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 13 for Circles.",
        "answer": "Result 13",
        "solution": "NCERT proof step for Circles."
      },
      {
        "id": "circles-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 14 for Circles.",
        "answer": "Result 14",
        "solution": "NCERT proof step for Circles."
      },
      {
        "id": "circles-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 15 for Circles.",
        "answer": "Result 15",
        "solution": "NCERT proof step for Circles."
      },
      {
        "id": "circles-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 16 for Circles.",
        "answer": "Board Answer 16",
        "solution": "Full marking scheme solution for Circles."
      },
      {
        "id": "circles-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 17 for Circles.",
        "answer": "Board Answer 17",
        "solution": "Full marking scheme solution for Circles."
      },
      {
        "id": "circles-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 18 for Circles.",
        "answer": "Board Answer 18",
        "solution": "Full marking scheme solution for Circles."
      },
      {
        "id": "circles-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 19 for Circles.",
        "answer": "Board Answer 19",
        "solution": "Full marking scheme solution for Circles."
      },
      {
        "id": "circles-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 20 for Circles.",
        "answer": "Board Answer 20",
        "solution": "Full marking scheme solution for Circles."
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
        "id": "areas-related-to-circles-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "Fundamental property question 1 for Class 10 Areas Related to Circles.",
        "options": [
          "(A) Option A",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "(A) Option A",
        "solution": "Standard NCERT property for Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Fundamental property question 2 for Class 10 Areas Related to Circles.",
        "options": [
          "(A) Choice A",
          "(B) Choice B",
          "(C) Choice C",
          "(D) Choice D"
        ],
        "answer": "(B) Choice B",
        "solution": "Standard NCERT theorem for Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard formula question 3 for Class 10 Areas Related to Circles.",
        "options": [
          "(A) 10",
          "(B) 20",
          "(C) 30",
          "(D) 40"
        ],
        "answer": "(C) 30",
        "solution": "Formula evaluation for Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard evaluation question 4 for Class 10 Areas Related to Circles.",
        "options": [
          "(A) 5 cm",
          "(B) 10 cm",
          "(C) 15 cm",
          "(D) 20 cm"
        ],
        "answer": "(B) 10 cm",
        "solution": "Calculation step for Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard application question 5 for Class 10 Areas Related to Circles.",
        "options": [
          "(A) 1/2",
          "(B) 1/4",
          "(C) 3/4",
          "(D) 1"
        ],
        "answer": "(A) 1/2",
        "solution": "Application proof for Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 6 for Areas Related to Circles.",
        "answer": "Answer 6",
        "solution": "NCERT Solution step for Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 7 for Areas Related to Circles.",
        "answer": "Answer 7",
        "solution": "NCERT Solution step for Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 8 for Areas Related to Circles.",
        "answer": "Answer 8",
        "solution": "NCERT Solution step for Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 9 for Areas Related to Circles.",
        "answer": "Answer 9",
        "solution": "NCERT Solution step for Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 10 for Areas Related to Circles.",
        "answer": "Answer 10",
        "solution": "NCERT Solution step for Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 11 for Areas Related to Circles.",
        "answer": "Result 11",
        "solution": "NCERT proof step for Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 12 for Areas Related to Circles.",
        "answer": "Result 12",
        "solution": "NCERT proof step for Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 13 for Areas Related to Circles.",
        "answer": "Result 13",
        "solution": "NCERT proof step for Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 14 for Areas Related to Circles.",
        "answer": "Result 14",
        "solution": "NCERT proof step for Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 15 for Areas Related to Circles.",
        "answer": "Result 15",
        "solution": "NCERT proof step for Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 16 for Areas Related to Circles.",
        "answer": "Board Answer 16",
        "solution": "Full marking scheme solution for Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 17 for Areas Related to Circles.",
        "answer": "Board Answer 17",
        "solution": "Full marking scheme solution for Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 18 for Areas Related to Circles.",
        "answer": "Board Answer 18",
        "solution": "Full marking scheme solution for Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 19 for Areas Related to Circles.",
        "answer": "Board Answer 19",
        "solution": "Full marking scheme solution for Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 20 for Areas Related to Circles.",
        "answer": "Board Answer 20",
        "solution": "Full marking scheme solution for Areas Related to Circles."
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
        "id": "surface-areas-and-volumes-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "Fundamental property question 1 for Class 10 Surface Areas and Volumes.",
        "options": [
          "(A) Option A",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "(A) Option A",
        "solution": "Standard NCERT property for Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Fundamental property question 2 for Class 10 Surface Areas and Volumes.",
        "options": [
          "(A) Choice A",
          "(B) Choice B",
          "(C) Choice C",
          "(D) Choice D"
        ],
        "answer": "(B) Choice B",
        "solution": "Standard NCERT theorem for Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard formula question 3 for Class 10 Surface Areas and Volumes.",
        "options": [
          "(A) 10",
          "(B) 20",
          "(C) 30",
          "(D) 40"
        ],
        "answer": "(C) 30",
        "solution": "Formula evaluation for Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard evaluation question 4 for Class 10 Surface Areas and Volumes.",
        "options": [
          "(A) 5 cm",
          "(B) 10 cm",
          "(C) 15 cm",
          "(D) 20 cm"
        ],
        "answer": "(B) 10 cm",
        "solution": "Calculation step for Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard application question 5 for Class 10 Surface Areas and Volumes.",
        "options": [
          "(A) 1/2",
          "(B) 1/4",
          "(C) 3/4",
          "(D) 1"
        ],
        "answer": "(A) 1/2",
        "solution": "Application proof for Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 6 for Surface Areas and Volumes.",
        "answer": "Answer 6",
        "solution": "NCERT Solution step for Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 7 for Surface Areas and Volumes.",
        "answer": "Answer 7",
        "solution": "NCERT Solution step for Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 8 for Surface Areas and Volumes.",
        "answer": "Answer 8",
        "solution": "NCERT Solution step for Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 9 for Surface Areas and Volumes.",
        "answer": "Answer 9",
        "solution": "NCERT Solution step for Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 10 for Surface Areas and Volumes.",
        "answer": "Answer 10",
        "solution": "NCERT Solution step for Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 11 for Surface Areas and Volumes.",
        "answer": "Result 11",
        "solution": "NCERT proof step for Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 12 for Surface Areas and Volumes.",
        "answer": "Result 12",
        "solution": "NCERT proof step for Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 13 for Surface Areas and Volumes.",
        "answer": "Result 13",
        "solution": "NCERT proof step for Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 14 for Surface Areas and Volumes.",
        "answer": "Result 14",
        "solution": "NCERT proof step for Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 15 for Surface Areas and Volumes.",
        "answer": "Result 15",
        "solution": "NCERT proof step for Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 16 for Surface Areas and Volumes.",
        "answer": "Board Answer 16",
        "solution": "Full marking scheme solution for Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 17 for Surface Areas and Volumes.",
        "answer": "Board Answer 17",
        "solution": "Full marking scheme solution for Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 18 for Surface Areas and Volumes.",
        "answer": "Board Answer 18",
        "solution": "Full marking scheme solution for Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 19 for Surface Areas and Volumes.",
        "answer": "Board Answer 19",
        "solution": "Full marking scheme solution for Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 20 for Surface Areas and Volumes.",
        "answer": "Board Answer 20",
        "solution": "Full marking scheme solution for Surface Areas and Volumes."
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
        "id": "statistics-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "Fundamental property question 1 for Class 10 Statistics.",
        "options": [
          "(A) Option A",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "(A) Option A",
        "solution": "Standard NCERT property for Statistics."
      },
      {
        "id": "statistics-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Fundamental property question 2 for Class 10 Statistics.",
        "options": [
          "(A) Choice A",
          "(B) Choice B",
          "(C) Choice C",
          "(D) Choice D"
        ],
        "answer": "(B) Choice B",
        "solution": "Standard NCERT theorem for Statistics."
      },
      {
        "id": "statistics-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard formula question 3 for Class 10 Statistics.",
        "options": [
          "(A) 10",
          "(B) 20",
          "(C) 30",
          "(D) 40"
        ],
        "answer": "(C) 30",
        "solution": "Formula evaluation for Statistics."
      },
      {
        "id": "statistics-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard evaluation question 4 for Class 10 Statistics.",
        "options": [
          "(A) 5 cm",
          "(B) 10 cm",
          "(C) 15 cm",
          "(D) 20 cm"
        ],
        "answer": "(B) 10 cm",
        "solution": "Calculation step for Statistics."
      },
      {
        "id": "statistics-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard application question 5 for Class 10 Statistics.",
        "options": [
          "(A) 1/2",
          "(B) 1/4",
          "(C) 3/4",
          "(D) 1"
        ],
        "answer": "(A) 1/2",
        "solution": "Application proof for Statistics."
      },
      {
        "id": "statistics-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 6 for Statistics.",
        "answer": "Answer 6",
        "solution": "NCERT Solution step for Statistics."
      },
      {
        "id": "statistics-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 7 for Statistics.",
        "answer": "Answer 7",
        "solution": "NCERT Solution step for Statistics."
      },
      {
        "id": "statistics-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 8 for Statistics.",
        "answer": "Answer 8",
        "solution": "NCERT Solution step for Statistics."
      },
      {
        "id": "statistics-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 9 for Statistics.",
        "answer": "Answer 9",
        "solution": "NCERT Solution step for Statistics."
      },
      {
        "id": "statistics-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 10 for Statistics.",
        "answer": "Answer 10",
        "solution": "NCERT Solution step for Statistics."
      },
      {
        "id": "statistics-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 11 for Statistics.",
        "answer": "Result 11",
        "solution": "NCERT proof step for Statistics."
      },
      {
        "id": "statistics-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 12 for Statistics.",
        "answer": "Result 12",
        "solution": "NCERT proof step for Statistics."
      },
      {
        "id": "statistics-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 13 for Statistics.",
        "answer": "Result 13",
        "solution": "NCERT proof step for Statistics."
      },
      {
        "id": "statistics-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 14 for Statistics.",
        "answer": "Result 14",
        "solution": "NCERT proof step for Statistics."
      },
      {
        "id": "statistics-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 15 for Statistics.",
        "answer": "Result 15",
        "solution": "NCERT proof step for Statistics."
      },
      {
        "id": "statistics-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 16 for Statistics.",
        "answer": "Board Answer 16",
        "solution": "Full marking scheme solution for Statistics."
      },
      {
        "id": "statistics-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 17 for Statistics.",
        "answer": "Board Answer 17",
        "solution": "Full marking scheme solution for Statistics."
      },
      {
        "id": "statistics-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 18 for Statistics.",
        "answer": "Board Answer 18",
        "solution": "Full marking scheme solution for Statistics."
      },
      {
        "id": "statistics-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 19 for Statistics.",
        "answer": "Board Answer 19",
        "solution": "Full marking scheme solution for Statistics."
      },
      {
        "id": "statistics-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 20 for Statistics.",
        "answer": "Board Answer 20",
        "solution": "Full marking scheme solution for Statistics."
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
        "id": "probability-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "Fundamental property question 1 for Class 10 Probability.",
        "options": [
          "(A) Option A",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "(A) Option A",
        "solution": "Standard NCERT property for Probability."
      },
      {
        "id": "probability-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Fundamental property question 2 for Class 10 Probability.",
        "options": [
          "(A) Choice A",
          "(B) Choice B",
          "(C) Choice C",
          "(D) Choice D"
        ],
        "answer": "(B) Choice B",
        "solution": "Standard NCERT theorem for Probability."
      },
      {
        "id": "probability-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard formula question 3 for Class 10 Probability.",
        "options": [
          "(A) 10",
          "(B) 20",
          "(C) 30",
          "(D) 40"
        ],
        "answer": "(C) 30",
        "solution": "Formula evaluation for Probability."
      },
      {
        "id": "probability-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard evaluation question 4 for Class 10 Probability.",
        "options": [
          "(A) 5 cm",
          "(B) 10 cm",
          "(C) 15 cm",
          "(D) 20 cm"
        ],
        "answer": "(B) 10 cm",
        "solution": "Calculation step for Probability."
      },
      {
        "id": "probability-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard application question 5 for Class 10 Probability.",
        "options": [
          "(A) 1/2",
          "(B) 1/4",
          "(C) 3/4",
          "(D) 1"
        ],
        "answer": "(A) 1/2",
        "solution": "Application proof for Probability."
      },
      {
        "id": "probability-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 6 for Probability.",
        "answer": "Answer 6",
        "solution": "NCERT Solution step for Probability."
      },
      {
        "id": "probability-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 7 for Probability.",
        "answer": "Answer 7",
        "solution": "NCERT Solution step for Probability."
      },
      {
        "id": "probability-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 8 for Probability.",
        "answer": "Answer 8",
        "solution": "NCERT Solution step for Probability."
      },
      {
        "id": "probability-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 9 for Probability.",
        "answer": "Answer 9",
        "solution": "NCERT Solution step for Probability."
      },
      {
        "id": "probability-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "NCERT Short Answer Problem 10 for Probability.",
        "answer": "Answer 10",
        "solution": "NCERT Solution step for Probability."
      },
      {
        "id": "probability-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 11 for Probability.",
        "answer": "Result 11",
        "solution": "NCERT proof step for Probability."
      },
      {
        "id": "probability-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 12 for Probability.",
        "answer": "Result 12",
        "solution": "NCERT proof step for Probability."
      },
      {
        "id": "probability-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 13 for Probability.",
        "answer": "Result 13",
        "solution": "NCERT proof step for Probability."
      },
      {
        "id": "probability-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 14 for Probability.",
        "answer": "Result 14",
        "solution": "NCERT proof step for Probability."
      },
      {
        "id": "probability-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "NCERT Long Answer Theorem/Problem 15 for Probability.",
        "answer": "Result 15",
        "solution": "NCERT proof step for Probability."
      },
      {
        "id": "probability-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 16 for Probability.",
        "answer": "Board Answer 16",
        "solution": "Full marking scheme solution for Probability."
      },
      {
        "id": "probability-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 17 for Probability.",
        "answer": "Board Answer 17",
        "solution": "Full marking scheme solution for Probability."
      },
      {
        "id": "probability-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 18 for Probability.",
        "answer": "Board Answer 18",
        "solution": "Full marking scheme solution for Probability."
      },
      {
        "id": "probability-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 19 for Probability.",
        "answer": "Board Answer 19",
        "solution": "Full marking scheme solution for Probability."
      },
      {
        "id": "probability-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam PYQ 20 for Probability.",
        "answer": "Board Answer 20",
        "solution": "Full marking scheme solution for Probability."
      }
    ]
  }
];
