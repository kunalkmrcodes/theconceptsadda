// Class 10 Fully Authentic Practice Questions Dataset (All 14 Chapters)
export const class10Practice = [
  {
    "id": "real-numbers",
    "title": "Real Numbers",
    "class": 10,
    "chapterNumber": "01",
    "questions": [
      {
        "id": "c10-rn-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "If a = x\u00b3y\u00b2 and b = xy\u00b3, where x, y are prime numbers, then HCF(a, b) is:",
        "options": [
          "(A) xy",
          "(B) xy\u00b2",
          "(C) x\u00b3y\u00b3",
          "(D) x\u00b2y\u00b2"
        ],
        "answer": "(B) xy\u00b2",
        "solution": "HCF takes lowest powers of common prime factors: x\u00b9y\u00b2 = xy\u00b2."
      },
      {
        "id": "c10-rn-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "If p and q are co-prime positive integers, then LCM(p, q) is:",
        "options": [
          "(A) p",
          "(B) q",
          "(C) pq",
          "(D) 1"
        ],
        "answer": "(C) pq",
        "solution": "LCM of two co-prime numbers is their product pq."
      },
      {
        "id": "c10-rn-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "The ratio of HCF to LCM of least composite number (4) and least prime number (2) is:",
        "options": [
          "(A) 1 : 2",
          "(B) 2 : 1",
          "(C) 1 : 1",
          "(D) 1 : 4"
        ],
        "answer": "(A) 1 : 2",
        "solution": "HCF(2,4)=2, LCM(2,4)=4. Ratio = 2/4 = 1 : 2."
      },
      {
        "id": "c10-rn-4",
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
        "id": "c10-rn-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): The HCF of two numbers is 5 and their product is 150, then their LCM is 30.\nReason (R): For any two positive integers a and b, HCF(a, b) \u00d7 LCM(a, b) = a \u00d7 b.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "solution": "HCF \u00d7 LCM = 5 \u00d7 30 = 150 = Product. Both A and R are true and R explains A."
      },
      {
        "id": "c10-rn-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): \u221a3 is an irrational number.\nReason (R): The square root of any prime number is always an irrational number.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "solution": "3 is prime, so \u221a3 is irrational. Both A and R are true and R is correct explanation."
      },
      {
        "id": "c10-rn-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Express 140 as a product of its prime factors.",
        "answer": "2\u00b2 \u00d7 5 \u00d7 7",
        "solution": "140 = 2 \u00d7 70 = 2 \u00d7 2 \u00d7 35 = 2\u00b2 \u00d7 5 \u00d7 7."
      },
      {
        "id": "c10-rn-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find HCF and LCM of 12, 15 and 21 using prime factorisation.",
        "answer": "HCF = 3, LCM = 420",
        "solution": "12 = 2\u00b2\u00d73, 15 = 3\u00d75, 21 = 3\u00d77. HCF = 3, LCM = 420."
      },
      {
        "id": "c10-rn-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Check whether 6\u207f can end with digit 0 for any natural number n.",
        "answer": "No",
        "solution": "6\u207f = 2\u207f \u00d7 3\u207f. Lacks factor 5, so cannot end with 0."
      },
      {
        "id": "c10-rn-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Explain why 7 \u00d7 11 \u00d7 13 + 13 is a composite number.",
        "answer": "Composite number",
        "solution": "13(7\u00d711 + 1) = 13 \u00d7 78. Has factors other than 1 and itself."
      },
      {
        "id": "c10-rn-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Given that HCF(96, 404) = 4, find LCM(96, 404).",
        "answer": "9696",
        "solution": "LCM = (96 \u00d7 404) / 4 = 9696."
      },
      {
        "id": "c10-rn-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove that \u221a5 is an irrational number.",
        "answer": "\u221a5 is irrational",
        "solution": "Assume \u221a5 = a/b. 5b\u00b2 = a\u00b2 \u21d2 5|a. Let a = 5c \u21d2 b\u00b2 = 5c\u00b2 \u21d2 5|b. Contradiction."
      },
      {
        "id": "c10-rn-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove that 3 + 2\u221a5 is irrational given \u221a5 is irrational.",
        "answer": "3 + 2\u221a5 is irrational",
        "solution": "Let 3 + 2\u221a5 = a/b \u21d2 \u221a5 = (a - 3b)/(2b). Rational RHS contradicts irrational LHS."
      },
      {
        "id": "c10-rn-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find the greatest 6-digit number exactly divisible by 24, 15 and 36.",
        "answer": "999720",
        "solution": "LCM(24, 15, 36) = 360. 999999 \u00f7 360 remainder = 279. 999999 - 279 = 999720."
      },
      {
        "id": "c10-rn-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Three bells toll together at intervals of 9, 12, 15 minutes. When will they toll together next?",
        "answer": "180 minutes (3 hours)",
        "solution": "LCM(9, 12, 15) = 180 minutes = 3 hours."
      },
      {
        "id": "c10-rn-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: A seminar is conducted by an educational organization where participants in Hindi, Mathematics and Science are 60, 84 and 108.\n\nQuestion: Find minimum number of rooms required if in each room same number of participants are seated of same subject.",
        "answer": "21 rooms",
        "solution": "HCF(60, 84, 108) = 12. Rooms = 60/12 + 84/12 + 108/12 = 21 rooms."
      },
      {
        "id": "c10-rn-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: Sonia takes 18 minutes to drive one lap of circular track, while Ravi takes 12 minutes.\n\nQuestion: After how many minutes will they meet again at starting point?",
        "answer": "36 minutes",
        "solution": "Meeting time = LCM(18, 12) = 36 minutes."
      },
      {
        "id": "c10-rn-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "A merchant has 120L, 180L, 240L oil of 3 kinds. Find max capacity of tin to fill them equally.",
        "answer": "60 litres",
        "solution": "HCF(120, 180, 240) = 60 litres."
      },
      {
        "id": "c10-rn-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "Find HCF of 65 and 117 and express it in form 65m + 117n.",
        "answer": "HCF = 13, m = 2, n = -1",
        "solution": "13 = 2(65) - 1(117) \u21d2 m = 2, n = -1."
      },
      {
        "id": "c10-rn-20",
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
        "id": "c10-poly-1",
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
        "id": "c10-poly-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "A quadratic polynomial whose zeroes are -3 and 4 is:",
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
        "id": "c10-poly-3",
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
        "id": "c10-poly-4",
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
        "id": "c10-poly-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Degree of zero polynomial is not defined.\nReason (R): Degree of a non-zero constant polynomial is 0.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(B) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
        "solution": "Both statements are true facts in polynomial theory."
      },
      {
        "id": "c10-poly-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Polynomial p(x) = x\u00b2 + 4x + 5 has no real zeroes.\nReason (R): A quadratic polynomial with discriminant D < 0 has no real zeroes.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "solution": "D = 16 - 20 = -4 < 0. Both A and R are true."
      },
      {
        "id": "c10-poly-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find zeroes of quadratic polynomial x\u00b2 + 7x + 10.",
        "answer": "-2, -5",
        "solution": "(x + 5)(x + 2) = 0 \u21d2 x = -2, -5."
      },
      {
        "id": "c10-poly-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Verify relationship between zeroes and coefficients for x\u00b2 - 2x - 8.",
        "answer": "Zeroes: 4, -2",
        "solution": "(x-4)(x+2) = 0. Sum = 2 = -b/a. Product = -8 = c/a."
      },
      {
        "id": "c10-poly-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find quadratic polynomial whose sum and product of zeroes are -3 and 2.",
        "answer": "x\u00b2 + 3x + 2",
        "solution": "x\u00b2 - (-3)x + 2 = x\u00b2 + 3x + 2."
      },
      {
        "id": "c10-poly-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find zeroes of 4s\u00b2 - 4s + 1.",
        "answer": "1/2, 1/2",
        "solution": "(2s - 1)\u00b2 = 0 \u21d2 s = 1/2, 1/2."
      },
      {
        "id": "c10-poly-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find zeroes of t\u00b2 - 15.",
        "answer": "\u221a15, -\u221a15",
        "solution": "t\u00b2 = 15 \u21d2 t = \u00b1\u221a15."
      },
      {
        "id": "c10-poly-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "If \u03b1, \u03b2 are zeroes of x\u00b2 - p(x + 1) - c, show (\u03b1 + 1)(\u03b2 + 1) = 1 - c.",
        "answer": "1 - c",
        "solution": "\u03b1+\u03b2 = p, \u03b1\u03b2 = -(p+c). (\u03b1+1)(\u03b2+1) = \u03b1\u03b2 + \u03b1 + \u03b2 + 1 = 1 - c."
      },
      {
        "id": "c10-poly-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find zeroes of 6x\u00b2 - 3 - 7x and verify relationships.",
        "answer": "3/2, -1/3",
        "solution": "6x\u00b2 - 7x - 3 = (3x + 1)(2x - 3) = 0 \u21d2 x = -1/3, 3/2."
      },
      {
        "id": "c10-poly-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "If \u03b1, \u03b2 are zeroes of x\u00b2 - 6x + k and 3\u03b1 + 2\u03b2 = 20, find k.",
        "answer": "k = -16",
        "solution": "\u03b1+\u03b2 = 6, 3\u03b1+2\u03b2 = 20 \u21d2 \u03b1 = 8, \u03b2 = -2 \u21d2 k = \u03b1\u03b2 = -16."
      },
      {
        "id": "c10-poly-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find polynomial whose zeroes are reciprocal to zeroes of ax\u00b2 + bx + c.",
        "answer": "cx\u00b2 + bx + a",
        "solution": "New sum = -b/c, New product = a/c \u21d2 cx\u00b2 + bx + a."
      },
      {
        "id": "c10-poly-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: A highway underpass is parabolic in shape represented by quadratic polynomial p(x) = -x\u00b2 + 2x + 8.\n\nQuestion: Find zeroes of the polynomial and maximum height of underpass.",
        "answer": "Zeroes: -2 and 4; Max height = 9 units",
        "solution": "p(x) = -(x - 4)(x + 2) = 0 \u21d2 x = -2, 4. Vertex at x = 1: p(1) = 9 units."
      },
      {
        "id": "c10-poly-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: An engine displacement is modeled by polynomial p(t) = 3t\u00b2 - 5t - 2.\n\nQuestion: Find zeroes of polynomial representing engine equilibrium times.",
        "answer": "t = 2 and t = -1/3",
        "solution": "3t\u00b2 - 6t + t - 2 = (3t + 1)(t - 2) = 0 \u21d2 t = 2, -1/3."
      },
      {
        "id": "c10-poly-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "If \u03b1, \u03b2 are zeroes of f(x) = x\u00b2 - 4x + 3, find \u03b1\u2074\u03b2\u00b3 + \u03b1\u00b3\u03b2\u2074.",
        "answer": "108",
        "solution": "\u03b1\u00b3\u03b2\u00b3(\u03b1+\u03b2) = (3)\u00b3(4) = 27 \u00d7 4 = 108."
      },
      {
        "id": "c10-poly-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "If sum of zeroes of ky\u00b2 + 2y + 3k equals their product, find k.",
        "answer": "k = -2/3",
        "solution": "-2/k = 3 \u21d2 k = -2/3."
      },
      {
        "id": "c10-poly-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Find quadratic polynomial whose zeroes are (2 + \u221a3) and (2 - \u221a3).",
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
        "id": "c10-le-1",
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
        "id": "c10-le-2",
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
        "id": "c10-le-3",
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
        "id": "c10-le-4",
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
        "id": "c10-le-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): System of equations 2x + 3y = 7 and 4x + 6y = 14 has infinitely many solutions.\nReason (R): If a\u2081/a\u2082 = b\u2081/b\u2082 = c\u2081/c\u2082, system of equations is dependent and consistent.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "solution": "2/4 = 3/6 = 7/14 = 1/2. Both A and R are true."
      },
      {
        "id": "c10-le-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Lines x = 2 and y = 3 intersect at point (2, 3).\nReason (R): Line x = a is parallel to y-axis and y = b is parallel to x-axis.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "solution": "Both A and R are true."
      },
      {
        "id": "c10-le-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Solve for x and y: x + y = 14, x - y = 4.",
        "answer": "x = 9, y = 5",
        "solution": "Adding equations: 2x = 18 \u21d2 x = 9, y = 5."
      },
      {
        "id": "c10-le-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Solve by elimination: 2x + 3y = 11 and 2x - 4y = -24.",
        "answer": "x = -2, y = 5",
        "solution": "Subtracting: 7y = 35 \u21d2 y = 5, x = -2."
      },
      {
        "id": "c10-le-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find condition for unique solution of 4x + py + 8 = 0 and 2x + 2y + 2 = 0.",
        "answer": "p \u2260 4",
        "solution": "4/2 \u2260 p/2 \u21d2 p \u2260 4."
      },
      {
        "id": "c10-le-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find k if kx + 3y = k - 3 and 12x + ky = k have infinitely many solutions.",
        "answer": "k = 6",
        "solution": "k/12 = 3/k \u21d2 k\u00b2 = 36 \u21d2 k = 6."
      },
      {
        "id": "c10-le-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Sum of digits of two-digit number is 9. 9 times number is twice reversed number. Find number.",
        "answer": "18",
        "solution": "10x+y = 9(10y+x) / 2 \u21d2 x = 8y. x+y=9 \u21d2 y=1, x=8 \u21d2 18."
      },
      {
        "id": "c10-le-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Solve graphically: 2x + 3y = 12 and x - y = 1. Find y-axis triangle vertices.",
        "answer": "(3,2); (0,4), (0,-1)",
        "solution": "Lines intersect at (3, 2). Y-intercepts: (0, 4) and (0, -1)."
      },
      {
        "id": "c10-le-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Fraction becomes 9/11 if 2 added to num & den, 5/6 if 3 added. Find fraction.",
        "answer": "7/9",
        "solution": "11x - 9y = -4, 6x - 5y = -3 \u21d2 x = 7, y = 9. Fraction = 7/9."
      },
      {
        "id": "c10-le-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Five years ago Nuri was thrice as old as Sonu. Ten years later Nuri will be twice as old. Find ages.",
        "answer": "Nuri = 50, Sonu = 20",
        "solution": "x - 3y = -10, x - 2y = 10 \u21d2 y = 20, x = 50."
      },
      {
        "id": "c10-le-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Meena withdrew \u20b92000 in \u20b950 and \u20b9100 notes (total 25 notes). Find count of each note.",
        "answer": "10 of \u20b950, 15 of \u20b9100",
        "solution": "x + y = 25, 50x + 100y = 2000 \u21d2 y = 15, x = 10."
      },
      {
        "id": "c10-le-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: A test has 1-mark and 2-mark questions. Total questions = 40, total marks = 60.\n\nQuestion: Find number of 1-mark and 2-mark questions.",
        "answer": "20 1-mark and 20 2-mark questions",
        "solution": "x + y = 40, x + 2y = 60 \u21d2 y = 20, x = 20."
      },
      {
        "id": "c10-le-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: A boat goes 30 km upstream and 44 km downstream in 10 hours. In 13 hours it goes 40 km upstream & 55 km downstream.\n\nQuestion: Find speed of boat in still water and speed of stream.",
        "answer": "Boat = 8 km/h, Stream = 3 km/h",
        "solution": "30/u + 44/v = 10, 40/u + 55/v = 13 \u21d2 u = 5, v = 11 \u21d2 Boat = 8 km/h, Stream = 3 km/h."
      },
      {
        "id": "c10-le-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "2 women & 5 men finish work in 4 days, 3 women & 6 men in 3 days. Find time for 1 woman alone.",
        "answer": "18 days",
        "solution": "8u + 20v = 1, 9u + 18v = 1 \u21d2 u = 1/18 \u21d2 18 days."
      },
      {
        "id": "c10-le-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "If 217x + 131y = 913 and 131x + 217y = 827, find x + y.",
        "answer": "x + y = 5",
        "solution": "Adding: 348(x+y) = 1740 \u21d2 x+y = 5."
      },
      {
        "id": "c10-le-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Solve for x and y: ax + by = a - b, bx - ay = a + b.",
        "answer": "x = 1, y = -1",
        "solution": "a\u00b2x + b\u00b2x = a\u00b2 + b\u00b2 \u21d2 x = 1, y = -1."
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
        "id": "c10-qe-1",
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
        "id": "c10-qe-2",
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
        "id": "c10-qe-3",
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
        "id": "c10-qe-4",
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
        "id": "c10-qe-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Equation x\u00b2 + 3x + 4 = 0 has no real roots.\nReason (R): A quadratic equation has no real roots if D < 0.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "solution": "D = 9 - 16 = -7 < 0. Both A and R are true."
      },
      {
        "id": "c10-qe-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Roots of x\u00b2 - 5x + 6 = 0 are 2 and 3.\nReason (R): Sum of roots = -b/a = 5, Product of roots = c/a = 6.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "solution": "Both A and R are true."
      },
      {
        "id": "c10-qe-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find roots of 3x\u00b2 - 2\u221a6 x + 2 = 0.",
        "answer": "\u221a(2/3), \u221a(2/3)",
        "solution": "(\u221a3 x - \u221a2)\u00b2 = 0 \u21d2 x = \u221a(2/3)."
      },
      {
        "id": "c10-qe-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find k if 2x\u00b2 + kx + 3 = 0 has equal roots.",
        "answer": "\u00b12\u221a6",
        "solution": "k\u00b2 - 24 = 0 \u21d2 k = \u00b12\u221a6."
      },
      {
        "id": "c10-qe-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find two numbers whose sum is 27 and product is 182.",
        "answer": "13 and 14",
        "solution": "x(27-x) = 182 \u21d2 x\u00b2 - 27x + 182 = 0 \u21d2 13, 14."
      },
      {
        "id": "c10-qe-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Solve x\u00b2 - 3x - 10 = 0 using quadratic formula.",
        "answer": "5, -2",
        "solution": "x = (3 \u00b1 \u221a49)/2 = 5, -2."
      },
      {
        "id": "c10-qe-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find discriminant of 3x\u00b2 - 2x + 1/3 = 0 and state nature of roots.",
        "answer": "0; Equal real roots",
        "solution": "D = 4 - 4(3)(1/3) = 0."
      },
      {
        "id": "c10-qe-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Altitude of right triangle is 7cm less than base. Hypotenuse is 13cm. Find sides.",
        "answer": "Base = 12 cm, Altitude = 5 cm",
        "solution": "x\u00b2 + (x-7)\u00b2 = 169 \u21d2 x = 12 cm."
      },
      {
        "id": "c10-qe-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Solve for x: 1/(x+4) - 1/(x-7) = 11/30 (x \u2260 -4, 7).",
        "answer": "x = 1, 2",
        "solution": "-11/(x\u00b2-3x-28) = 11/30 \u21d2 x = 1, 2."
      },
      {
        "id": "c10-qe-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Two taps fill tank in 9 3/8 hrs. Larger tap takes 10 hrs less than smaller. Find individual times.",
        "answer": "Smaller = 25 hrs, Larger = 15 hrs",
        "solution": "1/x + 1/(x-10) = 8/75 \u21d2 x = 25 hrs."
      },
      {
        "id": "c10-qe-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find k for which (k+4)x\u00b2 + (k+1)x + 1 = 0 has equal roots.",
        "answer": "k = 5 or k = -3",
        "solution": "(k+1)\u00b2 - 4(k+4) = 0 \u21d2 k = 5, -3."
      },
      {
        "id": "c10-qe-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: A rectangular park of length l and breadth b has area 300 m\u00b2 and perimeter 70 m.\n\nQuestion: Find length and breadth of rectangular park.",
        "answer": "Length = 20 m, Breadth = 15 m",
        "solution": "l + b = 35, lb = 300 \u21d2 l(35-l) = 300 \u21d2 l = 20m, b = 15m."
      },
      {
        "id": "c10-qe-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: Speed of motor boat in still water is 15 km/h. It goes 30 km downstream and returns in 4 hrs 30 mins.\n\nQuestion: Find speed of stream.",
        "answer": "5 km/h",
        "solution": "30/(15-x) + 30/(15+x) = 9/2 \u21d2 x = 5 km/h."
      },
      {
        "id": "c10-qe-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "Express train takes 1 hr less than passenger train for 132 km. Express speed is 11 km/h more. Find speeds.",
        "answer": "Passenger = 33 km/h, Express = 44 km/h",
        "solution": "132/x - 132/(x+11) = 1 \u21d2 x = 33 km/h."
      },
      {
        "id": "c10-qe-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "Solve for x: 4x\u00b2 - 4ax + (a\u00b2 - b\u00b2) = 0.",
        "answer": "(a + b)/2, (a - b)/2",
        "solution": "x = (4a \u00b1 4b)/8 = (a \u00b1 b)/2."
      },
      {
        "id": "c10-qe-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Pottery articles cost \u20b93 more than twice daily count. Total cost = \u20b990. Find count & cost.",
        "answer": "6 articles, Cost = \u20b915 each",
        "solution": "x(2x+3) = 90 \u21d2 x = 6, Cost = \u20b915."
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
        "id": "c10-ap-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "The 10th term of the AP: 2, 7, 12, ... is:",
        "options": [
          "(A) 47",
          "(B) 52",
          "(C) 42",
          "(D) 37"
        ],
        "answer": "(A) 47",
        "solution": "a = 2, d = 5. a\u2081\u2080 = 2 + 9(5) = 47."
      },
      {
        "id": "c10-ap-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Which term of the AP: 21, 18, 15, ... is 0?",
        "options": [
          "(A) 7th term",
          "(B) 8th term",
          "(C) 9th term",
          "(D) 10th term"
        ],
        "answer": "(B) 8th term",
        "solution": "a = 21, d = -3. 21 + (n-1)(-3) = 0 \u21d2 3(n-1) = 21 \u21d2 n = 8."
      },
      {
        "id": "c10-ap-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "The sum of first 20 positive integers is:",
        "options": [
          "(A) 210",
          "(B) 200",
          "(C) 190",
          "(D) 400"
        ],
        "answer": "(A) 210",
        "solution": "S\u2082\u2080 = 20(21)/2 = 210."
      },
      {
        "id": "c10-ap-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "If the nth term of an AP is (3n + 7), then its common difference is:",
        "options": [
          "(A) 3",
          "(B) 7",
          "(C) 10",
          "(D) 4"
        ],
        "answer": "(A) 3",
        "solution": "a\u2081 = 10, a\u2082 = 13. d = a\u2082 - a\u2081 = 13 - 10 = 3."
      },
      {
        "id": "c10-ap-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): The sum of first n terms of an AP is given by S\u2099 = n/2 [2a + (n-1)d].\nReason (R): The nth term a\u2099 of an AP can be found using formula a\u2099 = S\u2099 - S\u2099\u208b\u2081.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(B) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
        "solution": "Both statements are true fundamental AP properties, but R is not the explanation of A."
      },
      {
        "id": "c10-ap-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): The sequence 4, 10, 16, 22, ... forms an AP with common difference 6.\nReason (R): A sequence a\u2081, a\u2082, a\u2083 ... forms an AP if difference (a\u2096\u208a\u2081 - a\u2096) is constant.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "solution": "Common difference is constant 6. Both A and R are true."
      },
      {
        "id": "c10-ap-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find the 11th term from the end of the AP: 10, 7, 4, ..., -62.",
        "answer": "-32",
        "solution": "Reverse AP: a = -62, d = +3. 11th term = -62 + 10(3) = -32."
      },
      {
        "id": "c10-ap-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "How many two-digit numbers are divisible by 3?",
        "answer": "30",
        "solution": "AP: 12, 15, ..., 99. 99 = 12 + (n-1)3 \u21d2 (n-1)3 = 87 \u21d2 n = 30."
      },
      {
        "id": "c10-ap-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find the sum of first 15 multiples of 8.",
        "answer": "960",
        "solution": "AP: 8, 16, ..., 120. S\u2081\u2085 = 15/2 [8 + 120] = 15 \u00d7 64 = 960."
      },
      {
        "id": "c10-ap-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "If 17th term of an AP exceeds its 10th term by 7, find the common difference.",
        "answer": "d = 1",
        "solution": "a\u2081\u2087 - a\u2081\u2080 = 7 \u21d2 (a+16d) - (a+9d) = 7 \u21d2 7d = 7 \u21d2 d = 1."
      },
      {
        "id": "c10-ap-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find the sum: 7 + 10\u00bd + 14 + ... + 84.",
        "answer": "1046.5",
        "solution": "a = 7, d = 3.5, l = 84. n = 23. S\u2082\u2083 = 23/2 [7 + 84] = 1046.5."
      },
      {
        "id": "c10-ap-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "The 4th and 8th terms of an AP are 24 and 44 respectively. Find the first three terms.",
        "answer": "-13, -8, -3",
        "solution": "a+3d=24, a+7d=44 \u21d2 4d=20 \u21d2 d=5, a=-13. Terms: -13, -8, -3."
      },
      {
        "id": "c10-ap-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "How many terms of AP: 24, 21, 18, ... must be taken so that their sum is 78?",
        "answer": "n = 4 or n = 13",
        "solution": "S\u2099 = n/2 [48 + (n-1)(-3)] = 78 \u21d2 3n\u00b2 - 51n + 156 = 0 \u21d2 n = 4 or 13."
      },
      {
        "id": "c10-ap-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "If the sum of first n terms of an AP is 4n - n\u00b2, find the 1st term, 2nd term and 10th term.",
        "answer": "a\u2081 = 3, a\u2082 = 1, a\u2081\u2080 = -15",
        "solution": "S\u2081 = 3 = a\u2081. S\u2082 = 4 \u21d2 a\u2082 = 1. d = -2. a\u2081\u2080 = 3 + 9(-2) = -15."
      },
      {
        "id": "c10-ap-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "A sum of \u20b9700 is used to give 7 cash prizes. Each prize is \u20b920 less than preceding. Find value of each prize.",
        "answer": "\u20b9160, \u20b9140, \u20b9120, \u20b9100, \u20b980, \u20b960, \u20b940",
        "solution": "S\u2087 = 7/2 [2a + 6(-20)] = 700 \u21d2 2a - 120 = 200 \u21d2 a = 160."
      },
      {
        "id": "c10-ap-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: A manufacturer of TV sets produced 600 sets in 3rd year and 700 sets in 7th year. Assuming uniform annual increase.\n\nQuestion: Find total production in first 7 years.",
        "answer": "4375 TV sets",
        "solution": "a+2d=600, a+6d=700 \u21d2 d=25, a=550. S\u2087 = 7/2 [1100 + 150] = 4375."
      },
      {
        "id": "c10-ap-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: 200 logs are stacked: 20 in bottom row, 19 in next, 18 in next and so on.\n\nQuestion: Find how many rows are logs placed in and logs in top row.",
        "answer": "16 rows, 5 logs in top row",
        "solution": "S\u2099 = n/2 [40 + (n-1)(-1)] = 200 \u21d2 n\u00b2 - 41n + 400 = 0 \u21d2 n = 16 (since n=25 gives negative logs). Logs in top = 20 - 15 = 5."
      },
      {
        "id": "c10-ap-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "If m times mth term of an AP is equal to n times nth term, show that (m+n)th term is 0.",
        "answer": "0",
        "solution": "m[a+(m-1)d] = n[a+(n-1)d] \u21d2 a(m-n) + d(m\u00b2-n\u00b2-m+n) = 0 \u21d2 a + (m+n-1)d = 0."
      },
      {
        "id": "c10-ap-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "The ratio of 11th term to 18th term of an AP is 2 : 3. Find ratio of 5th term to 21st term.",
        "answer": "1 : 3",
        "solution": "(a+10d)/(a+17d) = 2/3 \u21d2 a = 4d. Ratio (a+4d)/(a+20d) = 8d/24d = 1/3."
      },
      {
        "id": "c10-ap-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Find sum of all 3-digit natural numbers which leave remainder 2 when divided by 7.",
        "answer": "70476",
        "solution": "AP: 100, 107, ..., 996. l = 996 = 100 + (n-1)7 \u21d2 n = 129. S\u2081\u2082\u2089 = 129/2 [100+996] = 70476."
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
        "id": "c10-tr-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "In \u25b3ABC, DE || BC such that AD = 3 cm, DB = 5 cm, AE = 4.5 cm. Then EC is:",
        "options": [
          "(A) 7.5 cm",
          "(B) 6.5 cm",
          "(C) 8.0 cm",
          "(D) 9.0 cm"
        ],
        "answer": "(A) 7.5 cm",
        "solution": "By Thales Theorem: AD/DB = AE/EC \u21d2 3/5 = 4.5/EC \u21d2 EC = 7.5 cm."
      },
      {
        "id": "c10-tr-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "If \u25b3ABC ~ \u25b3DEF and AB/DE = 1/3, then Area(\u25b3ABC) / Area(\u25b3DEF) is:",
        "options": [
          "(A) 1 / 9",
          "(B) 1 / 3",
          "(C) 1 / 6",
          "(D) 1 / 27"
        ],
        "answer": "(A) 1 / 9",
        "solution": "Ratio of areas of similar triangles equals square of ratio of corresponding sides: (1/3)\u00b2 = 1/9."
      },
      {
        "id": "c10-tr-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Sides of two similar triangles are in ratio 4 : 9. Areas of these triangles are in ratio:",
        "options": [
          "(A) 16 : 81",
          "(B) 2 : 3",
          "(C) 81 : 16",
          "(D) 4 : 9"
        ],
        "answer": "(A) 16 : 81",
        "solution": "Area ratio = (4/9)\u00b2 = 16/81."
      },
      {
        "id": "c10-tr-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "A vertical pole of length 6 m casts shadow 4 m long on ground. At same time tower casts shadow 28 m long. Height of tower is:",
        "options": [
          "(A) 42 m",
          "(B) 36 m",
          "(C) 48 m",
          "(D) 54 m"
        ],
        "answer": "(A) 42 m",
        "solution": "6/4 = h/28 \u21d2 h = 6 \u00d7 7 = 42 m."
      },
      {
        "id": "c10-tr-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): If line divides any two sides of a triangle in same ratio, line is parallel to third side.\nReason (R): This statement is known as Converse of Basic Proportionality Theorem.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "solution": "Both A and R are true and R is correct explanation."
      },
      {
        "id": "c10-tr-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): All congruent triangles are similar.\nReason (R): All similar triangles are congruent.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(C) Assertion (A) is true but Reason (R) is false.",
        "solution": "Congruence implies similarity, but similarity does not imply congruence. A is true, R is false."
      },
      {
        "id": "c10-tr-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "In \u25b3ABC, DE || BC. AD = x, DB = x-2, AE = x+2, EC = x-1. Find x.",
        "answer": "x = 4",
        "solution": "x/(x-2) = (x+2)/(x-1) \u21d2 x(x-1) = (x-2)(x+2) \u21d2 x\u00b2 - x = x\u00b2 - 4 \u21d2 x = 4."
      },
      {
        "id": "c10-tr-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Diagonals of trapezium ABCD with AB || DC intersect at O. Show AO/BO = CO/DO.",
        "answer": "Proved",
        "solution": "In \u25b3AOB and \u25b3COD, \u2220OAB = \u2220OCD, \u2220OBA = \u2220ODC \u21d2 \u25b3AOB ~ \u25b3COD \u21d2 AO/CO = BO/DO."
      },
      {
        "id": "c10-tr-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "A ladder 10m long reaches window 8m above ground. Find distance of foot of ladder from wall.",
        "answer": "6 m",
        "solution": "By Pythagoras Theorem: Base = \u221a(10\u00b2 - 8\u00b2) = \u221a(100 - 64) = \u221a36 = 6 m."
      },
      {
        "id": "c10-tr-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "In \u25b3ABC, AD \u22a5 BC. Show that AB\u00b2 + CD\u00b2 = AC\u00b2 + BD\u00b2.",
        "answer": "Proved",
        "solution": "In \u25b3ABD: AB\u00b2 = AD\u00b2 + BD\u00b2. In \u25b3ADC: AC\u00b2 = AD\u00b2 + CD\u00b2. Subtracting gives AB\u00b2 - AC\u00b2 = BD\u00b2 - CD\u00b2."
      },
      {
        "id": "c10-tr-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "CM and RN are medians of \u25b3ABC and \u25b3PQR respectively. If \u25b3ABC ~ \u25b3PQR, show \u25b3AMC ~ \u25b3PNR.",
        "answer": "Proved",
        "solution": "AC/PR = AB/PQ = 2AM/2PN = AM/PN and \u2220A = \u2220P. So \u25b3AMC ~ \u25b3PNR by SAS."
      },
      {
        "id": "c10-tr-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "State and prove Basic Proportionality Theorem (Thales Theorem).",
        "answer": "Theorem Proof",
        "solution": "Draw altitudes and join BE, CD. Area(ADE)/Area(BDE) = AD/DB. Area(ADE)/Area(DEC) = AE/EC. Since Area(BDE) = Area(DEC), AD/DB = AE/EC."
      },
      {
        "id": "c10-tr-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "BL and CM are medians of right triangle ABC right angled at A. Prove 4(BL\u00b2 + CM\u00b2) = 5BC\u00b2.",
        "answer": "Proved",
        "solution": "BL\u00b2 = AB\u00b2 + AL\u00b2 = AB\u00b2 + AC\u00b2/4. CM\u00b2 = AC\u00b2 + AM\u00b2 = AC\u00b2 + AB\u00b2/4. 4(BL\u00b2+CM\u00b2) = 5(AB\u00b2+AC\u00b2) = 5BC\u00b2."
      },
      {
        "id": "c10-tr-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "In equilateral triangle ABC, D is a point on BC such that BD = 1/3 BC. Prove 9AD\u00b2 = 7AB\u00b2.",
        "answer": "Proved",
        "solution": "Draw AE \u22a5 BC. BE = a/2, BD = a/3 \u21d2 DE = a/6. AD\u00b2 = AE\u00b2 + DE\u00b2 = 3a\u00b2/4 + a\u00b2/36 = 28a\u00b2/36 = 7a\u00b2/9 \u21d2 9AD\u00b2 = 7AB\u00b2."
      },
      {
        "id": "c10-tr-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "In an isosceles triangle ABC with AC = BC, if AB\u00b2 = 2AC\u00b2, prove that \u25b3ABC is right angled.",
        "answer": "Proved",
        "solution": "AB\u00b2 = AC\u00b2 + AC\u00b2 = AC\u00b2 + BC\u00b2. By Converse of Pythagoras Theorem, \u2220C = 90\u00b0."
      },
      {
        "id": "c10-tr-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: A girl of height 90 cm is walking away from base of lamp-post at speed of 1.2 m/s. Lamp is 3.6 m above ground.\n\nQuestion: Find length of her shadow after 4 seconds.",
        "answer": "1.6 m",
        "solution": "Distance walked = 1.2 \u00d7 4 = 4.8 m. Let shadow be x. 3.6 / 0.9 = (4.8 + x) / x \u21d2 4 = (4.8+x)/x \u21d2 3x = 4.8 \u21d2 x = 1.6 m."
      },
      {
        "id": "c10-tr-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: Vijay is preparing for Board exams. He sets up triangular study frame ABC where DE || BC.\n\nQuestion: If AD = 2.4 cm, DB = 3.6 cm, AE = 3.2 cm, find AC.",
        "answer": "8.0 cm",
        "solution": "EC = (3.6 \u00d7 3.2)/2.4 = 4.8 cm. AC = AE + EC = 3.2 + 4.8 = 8.0 cm."
      },
      {
        "id": "c10-tr-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "Prove that sum of squares of sides of a rhombus is equal to sum of squares of its diagonals.",
        "answer": "Proved",
        "solution": "Diagonals bisect at 90\u00b0. In right \u25b3AOB: AB\u00b2 = (AC/2)\u00b2 + (BD/2)\u00b2 \u21d2 4AB\u00b2 = AC\u00b2 + BD\u00b2 \u21d2 AB\u00b2+BC\u00b2+CD\u00b2+DA\u00b2 = AC\u00b2+BD\u00b2."
      },
      {
        "id": "c10-tr-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "O is any point inside a rectangle ABCD. Prove OB\u00b2 + OD\u00b2 = OA\u00b2 + OC\u00b2.",
        "answer": "Proved",
        "solution": "Draw line through O parallel to BC meeting AB at P and CD at Q. Apply Pythagoras theorem in 4 right triangles."
      },
      {
        "id": "c10-tr-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "If \u25b3ABC ~ \u25b3PQR, AD & PM are medians of \u25b3ABC & \u25b3PQR respectively, prove AD/PM = AB/PQ.",
        "answer": "Proved",
        "solution": "AB/PQ = BC/QR = 2BD/2QM = BD/QM. Since \u2220B = \u2220Q, \u25b3ABD ~ \u25b3PQM \u21d2 AD/PM = AB/PQ."
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
        "id": "c10-cg-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "Distance between points A(2, 3) and B(4, 1) is:",
        "options": [
          "(A) 2\u221a2 units",
          "(B) 4 units",
          "(C) 2 units",
          "(D) \u221a2 units"
        ],
        "answer": "(A) 2\u221a2 units",
        "solution": "d = \u221a[(4-2)\u00b2 + (1-3)\u00b2] = \u221a[4 + 4] = \u221a8 = 2\u221a2 units."
      },
      {
        "id": "c10-cg-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Coordinates of midpoint of line segment joining A(-2, 8) and B(-6, -4) are:",
        "options": [
          "(A) (-4, 2)",
          "(B) (-4, 6)",
          "(C) (2, 2)",
          "(D) (-2, 4)"
        ],
        "answer": "(A) (-4, 2)",
        "solution": "Midpoint = ((-2-6)/2, (8-4)/2) = (-4, 2)."
      },
      {
        "id": "c10-cg-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Point P(x, y) divides line segment joining A(x\u2081, y\u2081) and B(x\u2082, y\u2082) in ratio m\u2081 : m\u2082. x-coordinate is:",
        "options": [
          "(A) (m\u2081x\u2082 + m\u2082x\u2081)/(m\u2081 + m\u2082)",
          "(B) (m\u2081x\u2081 + m\u2082x\u2082)/(m\u2081 + m\u2082)",
          "(C) (m\u2081x\u2082 - m\u2082x\u2081)/(m\u2081 - m\u2082)",
          "(D) (x\u2081 + x\u2082)/2"
        ],
        "answer": "(A) (m\u2081x\u2082 + m\u2082x\u2081)/(m\u2081 + m\u2082)",
        "solution": "By section formula, x = (m\u2081x\u2082 + m\u2082x\u2081)/(m\u2081 + m\u2082)."
      },
      {
        "id": "c10-cg-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Distance of point P(-6, 8) from the origin is:",
        "options": [
          "(A) 10 units",
          "(B) 6 units",
          "(C) 8 units",
          "(D) 14 units"
        ],
        "answer": "(A) 10 units",
        "solution": "d = \u221a[(-6)\u00b2 + 8\u00b2] = \u221a100 = 10 units."
      },
      {
        "id": "c10-cg-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Point P(0, 4) lies on the y-axis.\nReason (R): Every point on the y-axis has x-coordinate equal to zero.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "solution": "Since x = 0, (0, 4) lies on y-axis. Both A and R are true and R explains A."
      },
      {
        "id": "c10-cg-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Points A(1, 2), B(2, 3), C(3, 4) are collinear.\nReason (R): Three points A, B, C are collinear if distance AB + BC = AC.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "solution": "AB = \u221a2, BC = \u221a2, AC = 2\u221a2. AB + BC = AC. Both A and R are true."
      },
      {
        "id": "c10-cg-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find a relation between x and y such that point (x, y) is equidistant from (7, 1) and (3, 5).",
        "answer": "x - y = 2",
        "solution": "(x-7)\u00b2 + (y-1)\u00b2 = (x-3)\u00b2 + (y-5)\u00b2 \u21d2 -14x + 49 - 2y + 1 = -6x + 9 - 10y + 25 \u21d2 8x - 8y = 16 \u21d2 x - y = 2."
      },
      {
        "id": "c10-cg-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find coordinates of point which divides join of (-1, 7) and (4, -3) in ratio 2 : 3.",
        "answer": "(1, 3)",
        "solution": "x = (2\u00d74 + 3\u00d7(-1))/5 = 5/5 = 1. y = (2\u00d7(-3) + 3\u00d77)/5 = 15/5 = 3."
      },
      {
        "id": "c10-cg-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find ratio in which y-axis divides line segment joining (5, -6) and (-1, -4).",
        "answer": "5 : 1",
        "solution": "Let ratio be k:1. x = (-k + 5)/(k+1) = 0 \u21d2 k = 5. Ratio is 5 : 1."
      },
      {
        "id": "c10-cg-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "If (1, 2), (4, y), (x, 6) and (3, 5) are vertices of parallelogram in order, find x and y.",
        "answer": "x = 6, y = 3",
        "solution": "Midpoint of diagonals: (1+x)/2 = (4+3)/2 \u21d2 x = 6. (2+6)/2 = (y+5)/2 \u21d2 y = 3."
      },
      {
        "id": "c10-cg-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find coordinates of point A, where AB is diameter of circle whose centre is (2, -3) and B is (1, 4).",
        "answer": "(3, -10)",
        "solution": "Midpoint formula: (x+1)/2 = 2 \u21d2 x = 3. (y+4)/2 = -3 \u21d2 y = -10."
      },
      {
        "id": "c10-cg-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find coordinates of points of trisection of line segment joining (4, -1) and (-2, -3).",
        "answer": "(2, -5/3) and (0, -7/3)",
        "solution": "Ratio 1:2 gives P(2, -5/3). Ratio 2:1 gives Q(0, -7/3)."
      },
      {
        "id": "c10-cg-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find center of circle passing through points (6, -6), (3, -7) and (3, 3).",
        "answer": "(3, -2)",
        "solution": "Let center be O(x,y). OA\u00b2 = OB\u00b2 = OC\u00b2 gives x = 3, y = -2."
      },
      {
        "id": "c10-cg-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "If P(x,y) is any point on line joining A(a,0) and B(0,b), show that x/a + y/b = 1.",
        "answer": "Proved",
        "solution": "Collinear points: Slope AP = Slope AB \u21d2 (y-0)/(x-a) = (b-0)/(0-a) \u21d2 -ay = bx - ab \u21d2 bx + ay = ab \u21d2 x/a + y/b = 1."
      },
      {
        "id": "c10-cg-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find area of rhombus if vertices are (3,0), (4,5), (-1,4), (-2,-1) in order.",
        "answer": "24 sq units",
        "solution": "Diagonal d\u2081 = \u221a[(3+1)\u00b2 + (-4)\u00b2] = 4\u221a2. d\u2082 = \u221a[(-6)\u00b2 + (-6)\u00b2] = 6\u221a2. Area = 1/2 \u00d7 4\u221a2 \u00d7 6\u221a2 = 24."
      },
      {
        "id": "c10-cg-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: Class X students setup sports field. Four students sit at points A(3,4), B(6,7), C(9,4) and D(6,1).\n\nQuestion: Check if quadrilateral ABCD is a square.",
        "answer": "Yes, ABCD is a square",
        "solution": "AB = BC = CD = DA = 3\u221a2 units. Diagonals AC = BD = 6 units. Therefore ABCD is a square."
      },
      {
        "id": "c10-cg-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: To conduct sports day activities in a rectangular field ABCD, lines drawn at 1m. Niharika runs 1/4th distance AD (100m) on 2nd line and posts green flag. Preet runs 1/5th distance on 8th line and posts red flag.\n\nQuestion: Find distance between both flags and midpoint coordinates.",
        "answer": "\u221a61 m (~7.81m) and (5, 22.5)",
        "solution": "Green flag G(2, 25), Red flag R(8, 20). Distance = \u221a[(8-2)\u00b2 + (20-25)\u00b2] = \u221a(36+25) = \u221a61 m. Midpoint = (5, 22.5)."
      },
      {
        "id": "c10-cg-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "Find ratio in which line 2x + y - 4 = 0 divides line segment joining A(2, -2) and B(3, 7).",
        "answer": "2 : 9",
        "solution": "Let ratio be k:1. P((3k+2)/(k+1), (7k-2)/(k+1)). Substitute in 2x+y-4=0 \u21d2 2(3k+2) + (7k-2) - 4(k+1) = 0 \u21d2 9k = 2 \u21d2 k = 2/9."
      },
      {
        "id": "c10-cg-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "If A(-5,7), B(-4,-5), C(-1,-6) and D(4,5) are vertices of quadrilateral, find its area.",
        "answer": "72 sq units",
        "solution": "Split into \u25b3ABC (area = 35) and \u25b3ADC (area = 37). Total area = 35 + 37 = 72 sq units."
      },
      {
        "id": "c10-cg-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Find coordinates of circumcentre of triangle formed by A(5,1), B(1,5) and C(6,6).",
        "answer": "(3, 3)",
        "solution": "Circumcentre O(x,y) is equidistant: OA\u00b2 = OB\u00b2 = OC\u00b2 \u21d2 x = 3, y = 3."
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
        "id": "c10-trig-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "If sin \u03b8 = 3/5, then tan \u03b8 is equal to:",
        "options": [
          "(A) 3/4",
          "(B) 4/3",
          "(C) 4/5",
          "(D) 5/3"
        ],
        "answer": "(A) 3/4",
        "solution": "Opposite = 3, Hypotenuse = 5 \u21d2 Adjacent = 4. tan \u03b8 = 3/4."
      },
      {
        "id": "c10-trig-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "The value of (sin 30\u00b0 + cos 60\u00b0) is:",
        "options": [
          "(A) 1",
          "(B) 1/2",
          "(C) \u221a3/2",
          "(D) 2"
        ],
        "answer": "(A) 1",
        "solution": "sin 30\u00b0 = 1/2, cos 60\u00b0 = 1/2. Sum = 1/2 + 1/2 = 1."
      },
      {
        "id": "c10-trig-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "9 sec\u00b2 A - 9 tan\u00b2 A is equal to:",
        "options": [
          "(A) 1",
          "(B) 9",
          "(C) 8",
          "(D) 0"
        ],
        "answer": "(B) 9",
        "solution": "9(sec\u00b2 A - tan\u00b2 A) = 9(1) = 9."
      },
      {
        "id": "c10-trig-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "If 15 cot A = 8, then sin A is:",
        "options": [
          "(A) 15/17",
          "(B) 8/17",
          "(C) 17/15",
          "(D) 17/8"
        ],
        "answer": "(A) 15/17",
        "solution": "cot A = 8/15 \u21d2 Opp = 15, Adj = 8, Hyp = 17. sin A = 15/17."
      },
      {
        "id": "c10-trig-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): The value of sin \u03b8 increases as \u03b8 increases from 0\u00b0 to 90\u00b0.\nReason (R): sin 0\u00b0 = 0, sin 30\u00b0 = 1/2, sin 45\u00b0 = 1/\u221a2, sin 60\u00b0 = \u221a3/2, sin 90\u00b0 = 1.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "solution": "Both A and R are true and R is correct explanation."
      },
      {
        "id": "c10-trig-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): sin\u00b2 A + cos\u00b2 A = 1 for all 0\u00b0 \u2264 A \u2264 90\u00b0.\nReason (R): 1 + tan\u00b2 A = sec\u00b2 A for all 0\u00b0 \u2264 A < 90\u00b0.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(B) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
        "solution": "Both are standard fundamental trigonometric identities, but R does not explain A."
      },
      {
        "id": "c10-trig-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "If tan (A + B) = \u221a3 and tan (A - B) = 1/\u221a3 (0\u00b0 < A + B \u2264 90\u00b0; A > B), find A and B.",
        "answer": "A = 45\u00b0, B = 15\u00b0",
        "solution": "A + B = 60\u00b0, A - B = 30\u00b0 \u21d2 2A = 90\u00b0 \u21d2 A = 45\u00b0, B = 15\u00b0."
      },
      {
        "id": "c10-trig-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Evaluate: 2 tan\u00b2 45\u00b0 + cos\u00b2 30\u00b0 - sin\u00b2 60\u00b0.",
        "answer": "2",
        "solution": "2(1)\u00b2 + (\u221a3/2)\u00b2 - (\u221a3/2)\u00b2 = 2 + 3/4 - 3/4 = 2."
      },
      {
        "id": "c10-trig-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "If sin (A - B) = 1/2 and cos (A + B) = 1/2, find A and B.",
        "answer": "A = 45\u00b0, B = 15\u00b0",
        "solution": "A - B = 30\u00b0, A + B = 60\u00b0 \u21d2 A = 45\u00b0, B = 15\u00b0."
      },
      {
        "id": "c10-trig-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Express sin 67\u00b0 + cos 75\u00b0 in terms of trigonometric ratios of angles between 0\u00b0 and 45\u00b0.",
        "answer": "cos 23\u00b0 + sin 15\u00b0",
        "solution": "sin(90\u00b0-23\u00b0) + cos(90\u00b0-15\u00b0) = cos 23\u00b0 + sin 15\u00b0."
      },
      {
        "id": "c10-trig-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Prove that (sec A + tan A)(1 - sin A) = cos A.",
        "answer": "cos A",
        "solution": "(1+sin A)/cos A \u00d7 (1-sin A) = (1-sin\u00b2 A)/cos A = cos\u00b2 A/cos A = cos A."
      },
      {
        "id": "c10-trig-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove identity: (cosec \u03b8 - cot \u03b8)\u00b2 = (1 - cos \u03b8) / (1 + cos \u03b8).",
        "answer": "Proved",
        "solution": "LHS = [(1-cos \u03b8)/sin \u03b8]\u00b2 = (1-cos \u03b8)\u00b2/sin\u00b2 \u03b8 = (1-cos \u03b8)\u00b2/[(1-cos \u03b8)(1+cos \u03b8)] = (1-cos \u03b8)/(1+cos \u03b8)."
      },
      {
        "id": "c10-trig-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove identity: cos A / (1 + sin A) + (1 + sin A) / cos A = 2 sec A.",
        "answer": "2 sec A",
        "solution": "LHS = [cos\u00b2 A + (1+sin A)\u00b2] / [cos A(1+sin A)] = [cos\u00b2 A + 1 + 2sin A + sin\u00b2 A] / [cos A(1+sin A)] = 2(1+sin A)/[cos A(1+sin A)] = 2 sec A."
      },
      {
        "id": "c10-trig-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove identity: tan \u03b8 / (1 - cot \u03b8) + cot \u03b8 / (1 - tan \u03b8) = 1 + sec \u03b8 cosec \u03b8.",
        "answer": "Proved",
        "solution": "Convert to sin \u03b8 & cos \u03b8: Numerator becomes sin\u00b3 \u03b8 - cos\u00b3 \u03b8 = (sin \u03b8 - cos \u03b8)(1 + sin \u03b8 cos \u03b8). Result = 1 + sec \u03b8 cosec \u03b8."
      },
      {
        "id": "c10-trig-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "If sin \u03b8 + cos \u03b8 = \u221a3, prove that tan \u03b8 + cot \u03b8 = 1.",
        "answer": "Proved",
        "solution": "Squaring both sides: 1 + 2sin \u03b8 cos \u03b8 = 3 \u21d2 sin \u03b8 cos \u03b8 = 1. tan \u03b8 + cot \u03b8 = (sin\u00b2 \u03b8 + cos\u00b2 \u03b8)/(sin \u03b8 cos \u03b8) = 1/1 = 1."
      },
      {
        "id": "c10-trig-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: A surveyor measures a right triangle field ABC right angled at B. Given AB = 5 cm and ACB = 30\u00b0.\n\nQuestion: Find lengths of sides BC and AC.",
        "answer": "BC = 5\u221a3 cm, AC = 10 cm",
        "solution": "tan 30\u00b0 = 5/BC \u21d2 BC = 5\u221a3 cm. sin 30\u00b0 = 5/AC \u21d2 AC = 10 cm."
      },
      {
        "id": "c10-trig-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: In \u25b3PQR right angled at Q, PR + QR = 25 cm and PQ = 5 cm.\n\nQuestion: Determine values of sin P, cos P and tan P.",
        "answer": "sin P = 12/13, cos P = 5/13, tan P = 12/5",
        "solution": "PR\u00b2 = PQ\u00b2 + QR\u00b2 \u21d2 (25-QR)\u00b2 = 25 + QR\u00b2 \u21d2 625 - 50QR = 25 \u21d2 QR = 12 cm, PR = 13 cm."
      },
      {
        "id": "c10-trig-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "Prove: (sin A + cosec A)\u00b2 + (cos A + sec A)\u00b2 = 7 + tan\u00b2 A + cot\u00b2 A.",
        "answer": "Proved",
        "solution": "LHS = sin\u00b2 A + cosec\u00b2 A + 2 + cos\u00b2 A + sec\u00b2 A + 2 = (sin\u00b2 A + cos\u00b2 A) + 4 + (1+cot\u00b2 A) + (1+tan\u00b2 A) = 7 + tan\u00b2 A + cot\u00b2 A."
      },
      {
        "id": "c10-trig-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "Prove: (cosec A - sin A)(sec A - cos A) = 1 / (tan A + cot A).",
        "answer": "Proved",
        "solution": "LHS = (cos\u00b2 A/sin A)(sin\u00b2 A/cos A) = sin A cos A. RHS = 1 / [1/(sin A cos A)] = sin A cos A."
      },
      {
        "id": "c10-trig-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "If sec \u03b8 + tan \u03b8 = p, show that (p\u00b2 - 1)/(p\u00b2 + 1) = sin \u03b8.",
        "answer": "Proved",
        "solution": "p\u00b2 = (1+sin \u03b8)\u00b2/cos\u00b2 \u03b8. p\u00b2-1 = 2sin \u03b8(1+sin \u03b8)/cos\u00b2 \u03b8. p\u00b2+1 = 2(1+sin \u03b8)/cos\u00b2 \u03b8. Ratio = sin \u03b8."
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
        "id": "c10-aot-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "A 6 m high pole casts a shadow 2\u221a3 m long on the ground. Sun's elevation is:",
        "options": [
          "(A) 60\u00b0",
          "(B) 45\u00b0",
          "(C) 30\u00b0",
          "(D) 90\u00b0"
        ],
        "answer": "(A) 60\u00b0",
        "solution": "tan \u03b8 = 6 / 2\u221a3 = 3/\u221a3 = \u221a3 \u21d2 \u03b8 = 60\u00b0."
      },
      {
        "id": "c10-aot-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "If ratio of height of tower to shadow length is 1 : \u221a3, angle of elevation of Sun is:",
        "options": [
          "(A) 30\u00b0",
          "(B) 45\u00b0",
          "(C) 60\u00b0",
          "(D) 90\u00b0"
        ],
        "answer": "(A) 30\u00b0",
        "solution": "tan \u03b8 = 1/\u221a3 \u21d2 \u03b8 = 30\u00b0."
      },
      {
        "id": "c10-aot-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Ladder leaning against wall makes angle 60\u00b0 with ground. Foot is 9.5 m from wall. Length of ladder is:",
        "options": [
          "(A) 19 m",
          "(B) 9.5 m",
          "(C) 19\u221a3 m",
          "(D) 38 m"
        ],
        "answer": "(A) 19 m",
        "solution": "cos 60\u00b0 = 9.5 / L \u21d2 1/2 = 9.5 / L \u21d2 L = 19 m."
      },
      {
        "id": "c10-aot-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Angle of elevation of top of 100m high tower from a point 100m away from foot is:",
        "options": [
          "(A) 45\u00b0",
          "(B) 30\u00b0",
          "(C) 60\u00b0",
          "(D) 0\u00b0"
        ],
        "answer": "(A) 45\u00b0",
        "solution": "tan \u03b8 = 100/100 = 1 \u21d2 \u03b8 = 45\u00b0."
      },
      {
        "id": "c10-aot-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Angle of elevation increases as the observer moves closer to the object.\nReason (R): As distance from object decreases, angle subtended by object at eye increases.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "solution": "Both A and R are true and R explains A."
      },
      {
        "id": "c10-aot-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Line of sight is line drawn from eye of observer to point in object viewed.\nReason (R): Angle of depression is angle formed by line of sight with horizontal when object is below horizontal level.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(B) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
        "solution": "Both definitions are true statements in heights & distances."
      },
      {
        "id": "c10-aot-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "A circus artist is climbing a 20 m long rope tied from top of vertical pole to ground (angle 30\u00b0). Find height of pole.",
        "answer": "10 m",
        "solution": "sin 30\u00b0 = h / 20 \u21d2 1/2 = h / 20 \u21d2 h = 10 m."
      },
      {
        "id": "c10-aot-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "A tree breaks due to storm and broken top touches ground making angle 30\u00b0 with ground. Distance from foot to top is 8m. Find tree height.",
        "answer": "8\u221a3 m (~13.85m)",
        "solution": "tan 30\u00b0 = h\u2081/8 \u21d2 h\u2081 = 8/\u221a3. cos 30\u00b0 = 8/h\u2082 \u21d2 h\u2082 = 16/\u221a3. Total = 24/\u221a3 = 8\u221a3 m."
      },
      {
        "id": "c10-aot-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find angle of elevation of sun when shadow of pole is \u221a3 times its height.",
        "answer": "30\u00b0",
        "solution": "tan \u03b8 = h / (h\u221a3) = 1/\u221a3 \u21d2 \u03b8 = 30\u00b0."
      },
      {
        "id": "c10-aot-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "A 1.5m tall boy looks at top of 30m tower from some distance. Angle changes from 30\u00b0 to 60\u00b0. Find distance walked.",
        "answer": "19\u221a3 m",
        "solution": "Height above eye = 28.5m. d = 28.5\u221a3 - 28.5/\u221a3 = 57/\u221a3 = 19\u221a3 m."
      },
      {
        "id": "c10-aot-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "From point on ground, angles of elevation of bottom & top of 20m high building transmission tower are 45\u00b0 & 60\u00b0. Find tower height.",
        "answer": "20(\u221a3 - 1) m",
        "solution": "x = 20m. Total height = 20\u221a3 m. Tower height = 20\u221a3 - 20 = 20(\u221a3 - 1) m."
      },
      {
        "id": "c10-aot-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "From top of 7m high building, angle of elevation of top of cable tower is 60\u00b0 and depression of foot is 45\u00b0. Find tower height.",
        "answer": "7(\u221a3 + 1) m",
        "solution": "Distance to tower = 7m. Top height = 7\u221a3 m. Total height = 7 + 7\u221a3 = 7(\u221a3 + 1) m."
      },
      {
        "id": "c10-aot-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "As observed from top of 75m high lighthouse, angles of depression of two ships are 30\u00b0 and 45\u00b0. Find distance between ships.",
        "answer": "75(\u221a3 - 1) m",
        "solution": "Distance 1 = 75m. Distance 2 = 75\u221a3 m. Distance between = 75(\u221a3 - 1) m."
      },
      {
        "id": "c10-aot-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "A straight highway leads to foot of tower. Man at top observes car at 30\u00b0 depression. 6 seconds later depression is 60\u00b0. Find time to reach tower.",
        "answer": "3 seconds",
        "solution": "Speed v. Distance x = 6v. x\u2082 = x\u2081/2 = 3v \u21d2 Time = 3 seconds."
      },
      {
        "id": "c10-aot-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Angles of elevation of top of tower from two points at distances 4m and 9m from base are complementary. Prove tower height is 6m.",
        "answer": "6 m",
        "solution": "h/4 = tan \u03b8, h/9 = cot \u03b8. Multiplying: h\u00b2/36 = tan \u03b8 cot \u03b8 = 1 \u21d2 h\u00b2 = 36 \u21d2 h = 6 m."
      },
      {
        "id": "c10-aot-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: A 1.2 m tall girl spots a balloon moving horizontally at height 88.2 m. Angle changes from 60\u00b0 to 30\u00b0.\n\nQuestion: Find distance traveled by balloon during interval.",
        "answer": "58\u221a3 m (~100.46m)",
        "solution": "Height above girl = 87m. x\u2081 = 87/\u221a3 = 29\u221a3 m. x\u2082 = 87\u221a3 m. Distance = 87\u221a3 - 29\u221a3 = 58\u221a3 m."
      },
      {
        "id": "c10-aot-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: A statue 1.6 m tall stands on top of pedestal. From point on ground, angle of elevation of top of statue is 60\u00b0 and top of pedestal is 45\u00b0.\n\nQuestion: Find height of pedestal.",
        "answer": "0.8(\u221a3 + 1) m (~2.18m)",
        "solution": "h/x = tan 45\u00b0 = 1 \u21d2 x = h. (h+1.6)/h = tan 60\u00b0 = \u221a3 \u21d2 h(\u221a3 - 1) = 1.6 \u21d2 h = 0.8(\u221a3 + 1) m."
      },
      {
        "id": "c10-aot-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "An aeroplane at altitude 300m observes two ships on opposite sides of river at angles 45\u00b0 and 60\u00b0. Find width of river.",
        "answer": "300(1 + 1/\u221a3) m (~473.2m)",
        "solution": "Width = 300 + 300/\u221a3 = 300(1 + 1/\u221a3) = 100(3 + \u221a3) m."
      },
      {
        "id": "c10-aot-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "Angle of elevation of cloud from point 60m above lake is 30\u00b0 and angle of depression of reflection is 60\u00b0. Find cloud height.",
        "answer": "120 m",
        "solution": "Height H = 60(tan 60\u00b0 + tan 30\u00b0)/(tan 60\u00b0 - tan 30\u00b0) = 60(\u221a3 + 1/\u221a3)/(\u221a3 - 1/\u221a3) = 60(4/3)/(2/3) = 120 m."
      },
      {
        "id": "c10-aot-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Two poles of equal heights stand on either side of 80m wide road. Angles of elevation are 60\u00b0 and 30\u00b0. Find height & position.",
        "answer": "Height = 20\u221a3 m, Position = 20m & 60m",
        "solution": "h/x = \u221a3, h/(80-x) = 1/\u221a3 \u21d2 x\u221a3 = (80-x)/\u221a3 \u21d2 3x = 80-x \u21d2 x = 20m. h = 20\u221a3 m."
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
        "id": "c10-cir-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "Tangent PT at point P of circle of radius 5 cm meets line through centre O at point T so OT = 12 cm. Length PT is:",
        "options": [
          "(A) \u221a119 cm",
          "(B) 13 cm",
          "(C) 12 cm",
          "(D) 8.5 cm"
        ],
        "answer": "(A) \u221a119 cm",
        "solution": "PT = \u221a(12\u00b2 - 5\u00b2) = \u221a(144 - 25) = \u221a119 cm.",
        "svg": "<svg viewBox=\"0 0 360 200\" class=\"q-diagram\" xmlns=\"http://www.w3.org/2000/svg\"><!-- Circle O --><circle cx=\"100\" cy=\"100\" r=\"50\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\" /><circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#e11d48\" /><text x=\"90\" y=\"95\" font-size=\"14\" font-weight=\"700\" fill=\"#e11d48\">O</text><!-- Point P on circle --><circle cx=\"100\" cy=\"150\" r=\"4\" fill=\"#1e293b\" /><text x=\"95\" y=\"170\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">P</text><!-- Tangent PT --><line x1=\"100\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#059669\" stroke-width=\"2.5\" /><text x=\"305\" y=\"155\" font-size=\"14\" font-weight=\"700\" fill=\"#059669\">T</text><!-- Line OT --><line x1=\"100\" y1=\"100\" x2=\"300\" y2=\"150\" stroke=\"#1e293b\" stroke-width=\"2.5\" /><!-- Radius OP --><line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"150\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"4\" /><!-- Labels --><text x=\"70\" y=\"130\" font-size=\"12\" font-weight=\"700\" fill=\"#2563eb\">r = 5 cm</text><text x=\"190\" y=\"170\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\">PT = ?</text><text x=\"190\" y=\"115\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">OT = 12 cm</text></svg>"
      },
      {
        "id": "c10-cir-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "From point Q, length of tangent to circle is 24 cm and distance of Q from centre is 25 cm. Radius is:",
        "options": [
          "(A) 7 cm",
          "(B) 12 cm",
          "(C) 15 cm",
          "(D) 24.5 cm"
        ],
        "answer": "(A) 7 cm",
        "solution": "r = \u221a(25\u00b2 - 24\u00b2) = \u221a(625 - 576) = \u221a49 = 7 cm."
      },
      {
        "id": "c10-cir-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "If TP and TQ are two tangents to circle with centre O so that \u2220POQ = 110\u00b0, then \u2220PTQ is:",
        "options": [
          "(A) 70\u00b0",
          "(B) 60\u00b0",
          "(C) 80\u00b0",
          "(D) 90\u00b0"
        ],
        "answer": "(A) 70\u00b0",
        "solution": "Opposite angles in quadrilateral OPTQ are supplementary: 180\u00b0 - 110\u00b0 = 70\u00b0.",
        "svg": "<svg viewBox=\"0 0 360 200\" class=\"q-diagram\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"120\" cy=\"100\" r=\"60\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\" /><circle cx=\"120\" cy=\"100\" r=\"4\" fill=\"#e11d48\" /><text x=\"110\" y=\"105\" font-size=\"14\" font-weight=\"700\" fill=\"#e11d48\">O</text><!-- Point T outside --><circle cx=\"300\" cy=\"100\" r=\"4\" fill=\"#1e293b\" /><text x=\"310\" y=\"105\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">T</text><!-- Contact points P and Q --><circle cx=\"150\" cy=\"48\" r=\"4\" fill=\"#059669\" /><text x=\"145\" y=\"35\" font-size=\"14\" font-weight=\"700\" fill=\"#059669\">P</text><circle cx=\"150\" cy=\"152\" r=\"4\" fill=\"#059669\" /><text x=\"145\" y=\"170\" font-size=\"14\" font-weight=\"700\" fill=\"#059669\">Q</text><!-- Tangents TP and TQ --><line x1=\"300\" y1=\"100\" x2=\"150\" y2=\"48\" stroke=\"#059669\" stroke-width=\"2.5\" /><line x1=\"300\" y1=\"100\" x2=\"150\" y2=\"152\" stroke=\"#059669\" stroke-width=\"2.5\" /><!-- Radii OP and OQ --><line x1=\"120\" y1=\"100\" x2=\"150\" y2=\"48\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"3\" /><line x1=\"120\" y1=\"100\" x2=\"150\" y2=\"152\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"3\" /><!-- Angle labels --><text x=\"155\" y=\"105\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">110\u00b0 (POQ)</text><text x=\"240\" y=\"105\" font-size=\"13\" font-weight=\"700\" fill=\"#059669\">? (PTQ)</text></svg>"
      },
      {
        "id": "c10-cir-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "If tangents PA and PB from point P to circle with centre O are inclined to each other at angle 80\u00b0, then \u2220POA is:",
        "options": [
          "(A) 50\u00b0",
          "(B) 60\u00b0",
          "(C) 70\u00b0",
          "(D) 80\u00b0"
        ],
        "answer": "(A) 50\u00b0",
        "solution": "\u2220AOB = 180\u00b0 - 80\u00b0 = 100\u00b0. \u2220POA = 100\u00b0 / 2 = 50\u00b0.",
        "svg": "<svg viewBox=\"0 0 360 200\" class=\"q-diagram\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"130\" cy=\"100\" r=\"55\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\" /><circle cx=\"130\" cy=\"100\" r=\"4\" fill=\"#e11d48\" /><text x=\"120\" y=\"105\" font-size=\"14\" font-weight=\"700\" fill=\"#e11d48\">O</text><circle cx=\"300\" cy=\"100\" r=\"4\" fill=\"#1e293b\" /><text x=\"310\" y=\"105\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">P</text><line x1=\"300\" y1=\"100\" x2=\"158\" y2=\"53\" stroke=\"#059669\" stroke-width=\"2.5\" /><line x1=\"300\" y1=\"100\" x2=\"158\" y2=\"147\" stroke=\"#059669\" stroke-width=\"2.5\" /><text x=\"155\" y=\"40\" font-size=\"14\" font-weight=\"700\" fill=\"#059669\">A</text><text x=\"155\" y=\"165\" font-size=\"14\" font-weight=\"700\" fill=\"#059669\">B</text><line x1=\"130\" y1=\"100\" x2=\"300\" y2=\"100\" stroke=\"#1e293b\" stroke-width=\"2\" stroke-dasharray=\"4\" /><line x1=\"130\" y1=\"100\" x2=\"158\" y2=\"53\" stroke=\"#2563eb\" stroke-width=\"2\" /><text x=\"245\" y=\"95\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">80\u00b0 (APB)</text><text x=\"160\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#059669\">\u2220POA = ?</text></svg>"
      },
      {
        "id": "c10-cir-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): The tangent at any point of a circle is perpendicular to the radius through the point of contact.\nReason (R): Length of tangents drawn from an external point to a circle are equal.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(B) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
        "solution": "Both are standard fundamental circle theorems, but R does not explain A."
      },
      {
        "id": "c10-cir-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): A circle can have infinitely many tangents.\nReason (R): A tangent intersects a circle at exactly one point.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "solution": "Both A and R are true and R is correct explanation."
      },
      {
        "id": "c10-cir-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Prove that tangents drawn at the ends of a diameter of a circle are parallel.",
        "answer": "Proved",
        "solution": "Radii at ends are perpendicular to tangents. Alternate interior angles are equal (90\u00b0), so lines are parallel."
      },
      {
        "id": "c10-cir-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Prove that perpendicular at point of contact to tangent to circle passes through centre.",
        "answer": "Proved",
        "solution": "Assume perpendicular does not pass through centre. Contradicts theorem that radius through point of contact is perpendicular to tangent."
      },
      {
        "id": "c10-cir-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Two concentric circles are of radii 5 cm and 3 cm. Find length of chord of larger circle which touches smaller circle.",
        "answer": "8 cm",
        "solution": "Half chord = \u221a(5\u00b2 - 3\u00b2) = \u221a16 = 4 cm. Full chord = 2 \u00d7 4 = 8 cm."
      },
      {
        "id": "c10-cir-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "A quadrilateral ABCD is drawn to circumscribe a circle. Prove that AB + CD = AD + BC.",
        "answer": "Proved",
        "solution": "Equal tangents: AP=AS, BP=BQ, CR=CQ, DR=DS. Summing all 4 equations gives AB + CD = AD + BC.",
        "svg": "<svg viewBox=\"0 0 360 220\" class=\"q-diagram\" xmlns=\"http://www.w3.org/2000/svg\"><!-- Inscribed Circle --><circle cx=\"180\" cy=\"110\" r=\"60\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\" /><!-- Quadrilateral ABCD --><polygon points=\"100,20 280,30 250,190 90,170\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.5\" /><text x=\"90\" y=\"15\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">A</text><text x=\"285\" y=\"25\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">B</text><text x=\"255\" y=\"205\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">C</text><text x=\"75\" y=\"180\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">D</text><!-- Contact points P, Q, R, S --><circle cx=\"185\" cy=\"25\" r=\"4\" fill=\"#e11d48\" /><text x=\"185\" y=\"15\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">P</text><circle cx=\"265\" cy=\"110\" r=\"4\" fill=\"#e11d48\" /><text x=\"275\" y=\"115\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">Q</text><circle cx=\"170\" cy=\"180\" r=\"4\" fill=\"#e11d48\" /><text x=\"170\" y=\"195\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">R</text><circle cx=\"95\" cy=\"95\" r=\"4\" fill=\"#e11d48\" /><text x=\"80\" y=\"95\" font-size=\"12\" font-weight=\"700\" fill=\"#e11d48\">S</text></svg>"
      },
      {
        "id": "c10-cir-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Prove that parallelogram circumscribing a circle is a rhombus.",
        "answer": "Proved",
        "solution": "Since AB+CD=AD+BC and AB=CD, AD=BC in parallelogram, 2AB=2AD \u21d2 AB=AD. Hence rhombus."
      },
      {
        "id": "c10-cir-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove that lengths of tangents drawn from an external point to a circle are equal.",
        "answer": "Proved",
        "solution": "Join OP, OA, OB. In \u25b3OAP and \u25b3OBP: OA=OB (radii), OP=OP (common), \u2220OAP=\u2220OBP=90\u00b0. \u25b3OAP \u2245 \u25b3OBP \u21d2 PA=PB."
      },
      {
        "id": "c10-cir-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Triangle ABC is drawn to circumscribe circle of radius 4cm such that segments BD and DC are 8cm and 6cm. Find sides AB and AC.",
        "answer": "AB = 15 cm, AC = 13 cm",
        "solution": "Let AE=AF=x. s = x+14. Area by Heron's formula = Area by 3 sub-triangles \u21d2 4(x+14) = \u221a[x(14)(6)(4)] \u21d2 x = 7. AB = 15cm, AC = 13cm."
      },
      {
        "id": "c10-cir-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove that angle between two tangents from external point is supplementary to angle subtended by segment joining points of contact.",
        "answer": "Proved",
        "solution": "Quadrilateral OPTQ has right angles at P and Q. Sum of angles = 360\u00b0 \u21d2 \u2220PTQ + \u2220POQ = 180\u00b0."
      },
      {
        "id": "c10-cir-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove that opposite sides of a quadrilateral circumscribing a circle subtend supplementary angles at center.",
        "answer": "Proved",
        "solution": "8 right triangles formed around center. Sum of 8 angles = 360\u00b0 \u21d2 2(\u22201 + \u22202 + \u22205 + \u22206) = 360\u00b0 \u21d2 \u2220AOB + \u2220COD = 180\u00b0."
      },
      {
        "id": "c10-cir-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: A round clock has tangents drawn from point P outside. PA = 12 cm and P is 13 cm from center O.\n\nQuestion: Find radius of clock and area of quadrilateral OAPB.",
        "answer": "Radius = 5 cm, Area = 60 cm\u00b2",
        "solution": "r = \u221a(13\u00b2 - 12\u00b2) = 5 cm. Area = 2 \u00d7 [1/2 \u00d7 5 \u00d7 12] = 60 cm\u00b2."
      },
      {
        "id": "c10-cir-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: A circular park is circumscribed by quadrilateral ABCD.\n\nQuestion: If AB = 6 cm, BC = 7 cm, CD = 4 cm, find AD.",
        "answer": "3 cm",
        "solution": "AB + CD = AD + BC \u21d2 6 + 4 = AD + 7 \u21d2 10 = AD + 7 \u21d2 AD = 3 cm."
      },
      {
        "id": "c10-cir-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "In figure, XY & X'Y' are parallel tangents. Tangent AB with point of contact C intersects XY at A & X'Y' at B. Prove \u2220AOB = 90\u00b0.",
        "answer": "Proved",
        "solution": "\u25b3OPA \u2245 \u25b3OCA \u21d2 \u2220AOC = 1/2 \u2220POC. \u25b3OQB \u2245 \u25b3OCB \u21d2 \u2220COB = 1/2 \u2220QOC. \u2220AOB = 1/2 (180\u00b0) = 90\u00b0.",
        "svg": "<svg viewBox=\"0 0 360 220\" class=\"q-diagram\" xmlns=\"http://www.w3.org/2000/svg\"><!-- Top Tangent XY --><line x1=\"30\" y1=\"30\" x2=\"330\" y2=\"30\" stroke=\"#2563eb\" stroke-width=\"2.5\" /><text x=\"20\" y=\"25\" font-size=\"14\" font-weight=\"700\" fill=\"#2563eb\">X</text><text x=\"335\" y=\"25\" font-size=\"14\" font-weight=\"700\" fill=\"#2563eb\">Y</text><!-- Bottom Tangent X'Y' --><line x1=\"30\" y1=\"190\" x2=\"330\" y2=\"190\" stroke=\"#2563eb\" stroke-width=\"2.5\" /><text x=\"20\" y=\"205\" font-size=\"14\" font-weight=\"700\" fill=\"#2563eb\">X'</text><text x=\"335\" y=\"205\" font-size=\"14\" font-weight=\"700\" fill=\"#2563eb\">Y'</text><!-- Circle O --><circle cx=\"180\" cy=\"110\" r=\"80\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.5\" /><circle cx=\"180\" cy=\"110\" r=\"4\" fill=\"#e11d48\" /><text x=\"165\" y=\"115\" font-size=\"14\" font-weight=\"700\" fill=\"#e11d48\">O</text><!-- Tangent AB touching at C --><line x1=\"90\" y1=\"30\" x2=\"270\" y2=\"190\" stroke=\"#059669\" stroke-width=\"2.5\" /><text x=\"75\" y=\"30\" font-size=\"14\" font-weight=\"700\" fill=\"#059669\">A</text><text x=\"280\" y=\"205\" font-size=\"14\" font-weight=\"700\" fill=\"#059669\">B</text><circle cx=\"180\" cy=\"110\" r=\"4\" fill=\"#e11d48\" /><text x=\"195\" y=\"105\" font-size=\"13\" font-weight=\"700\" fill=\"#059669\">C</text><!-- Lines OA and OB --><line x1=\"180\" y1=\"110\" x2=\"90\" y2=\"30\" stroke=\"#e11d48\" stroke-width=\"2\" stroke-dasharray=\"3\" /><line x1=\"180\" y1=\"110\" x2=\"270\" y2=\"190\" stroke=\"#e11d48\" stroke-width=\"2\" stroke-dasharray=\"3\" /><text x=\"140\" y=\"150\" font-size=\"13\" font-weight=\"700\" fill=\"#e11d48\">\u2220AOB = 90\u00b0</text></svg>"
      },
      {
        "id": "c10-cir-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "PQ is chord of length 8 cm of circle of radius 5 cm. Tangents at P and Q intersect at T. Find length TP.",
        "answer": "20/3 cm (~6.67cm)",
        "solution": "Let TR = y, TP = x. In \u25b3PRT: x\u00b2 = y\u00b2 + 16. In \u25b3OPT: x\u00b2 + 25 = (y+3)\u00b2 \u21d2 y = 16/3. x = \u221a(256/9 + 16) = 20/3 cm.",
        "svg": "<svg viewBox=\"0 0 360 200\" class=\"q-diagram\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"110\" cy=\"100\" r=\"60\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\" /><circle cx=\"110\" cy=\"100\" r=\"4\" fill=\"#e11d48\" /><text x=\"95\" y=\"105\" font-size=\"14\" font-weight=\"700\" fill=\"#e11d48\">O</text><circle cx=\"300\" cy=\"100\" r=\"4\" fill=\"#1e293b\" /><text x=\"310\" y=\"105\" font-size=\"14\" font-weight=\"700\" fill=\"#1e293b\">T</text><line x1=\"300\" y1=\"100\" x2=\"146\" y2=\"52\" stroke=\"#059669\" stroke-width=\"2.5\" /><line x1=\"300\" y1=\"100\" x2=\"146\" y2=\"148\" stroke=\"#059669\" stroke-width=\"2.5\" /><text x=\"140\" y=\"40\" font-size=\"14\" font-weight=\"700\" fill=\"#059669\">P</text><text x=\"140\" y=\"165\" font-size=\"14\" font-weight=\"700\" fill=\"#059669\">Q</text><!-- Chord PQ --><line x1=\"146\" y1=\"52\" x2=\"146\" y2=\"148\" stroke=\"#1e293b\" stroke-width=\"2\" /><text x=\"155\" y=\"105\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">8 cm</text></svg>"
      },
      {
        "id": "c10-cir-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Two tangents TP and TQ are drawn to circle with centre O from external point T. Prove \u2220PTQ = 2 \u2220OPQ.",
        "answer": "Proved",
        "solution": "TP = TQ \u21d2 \u25b3TPQ is isosceles. \u2220TPQ = (180\u00b0 - \u2220PTQ)/2 = 90\u00b0 - 1/2 \u2220PTQ. \u2220OPQ = 90\u00b0 - \u2220TPQ = 1/2 \u2220PTQ \u21d2 \u2220PTQ = 2 \u2220OPQ."
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
        "id": "c10-arc-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "Area of sector of angle \u03b8 of circle of radius r is:",
        "options": [
          "(A) (\u03b8/360) \u00d7 \u03c0r\u00b2",
          "(B) (\u03b8/180) \u00d7 \u03c0r\u00b2",
          "(C) (\u03b8/360) \u00d7 2\u03c0r",
          "(D) (\u03b8/180) \u00d7 2\u03c0r"
        ],
        "answer": "(A) (\u03b8/360) \u00d7 \u03c0r\u00b2",
        "solution": "Formula for area of sector = (\u03b8/360) \u00d7 \u03c0r\u00b2."
      },
      {
        "id": "c10-arc-2",
        "number": 2,
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
        "id": "c10-arc-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Area of circle that can be inscribed in a square of side 6 cm is:",
        "options": [
          "(A) 9\u03c0 cm\u00b2",
          "(B) 36\u03c0 cm\u00b2",
          "(C) 18\u03c0 cm\u00b2",
          "(D) 12\u03c0 cm\u00b2"
        ],
        "answer": "(A) 9\u03c0 cm\u00b2",
        "solution": "Diameter = 6 cm \u21d2 Radius r = 3 cm. Area = \u03c0(3)\u00b2 = 9\u03c0 cm\u00b2."
      },
      {
        "id": "c10-arc-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Length of arc of sector of angle \u03b8 of circle of radius r is:",
        "options": [
          "(A) (\u03b8/360) \u00d7 2\u03c0r",
          "(B) (\u03b8/360) \u00d7 \u03c0r\u00b2",
          "(C) (\u03b8/180) \u00d7 \u03c0r\u00b2",
          "(D) (\u03b8/720) \u00d7 2\u03c0r"
        ],
        "answer": "(A) (\u03b8/360) \u00d7 2\u03c0r",
        "solution": "Arc length = (\u03b8/360) \u00d7 2\u03c0r."
      },
      {
        "id": "c10-arc-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): If radius of circle is doubled, its area becomes 4 times.\nReason (R): Area of circle is directly proportional to square of its radius.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "solution": "A = \u03c0r\u00b2. Double radius \u21d2 \u03c0(2r)\u00b2 = 4\u03c0r\u00b2. Both A and R are true and R explains A."
      },
      {
        "id": "c10-arc-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Perimeter of semicircle of radius r is (\u03c0r + 2r).\nReason (R): Perimeter includes arc length \u03c0r plus diameter 2r.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "solution": "Both A and R are true and R explains A."
      },
      {
        "id": "c10-arc-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find area of sector of circle with radius 6 cm if angle of sector is 60\u00b0.",
        "answer": "132/7 cm\u00b2 (18.86 cm\u00b2)",
        "solution": "Area = (60/360) \u00d7 (22/7) \u00d7 36 = 132/7 cm\u00b2."
      },
      {
        "id": "c10-arc-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find area of quadrant of circle whose circumference is 22 cm.",
        "answer": "77/8 cm\u00b2 (9.625 cm\u00b2)",
        "solution": "2\u03c0r = 22 \u21d2 r = 3.5 cm. Quadrant area = 1/4 \u00d7 (22/7) \u00d7 (7/2)\u00b2 = 77/8 cm\u00b2."
      },
      {
        "id": "c10-arc-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Minute hand of clock is 14 cm long. Find area swept by minute hand in 5 minutes.",
        "answer": "154/3 cm\u00b2 (51.33 cm\u00b2)",
        "solution": "Angle in 5 min = 30\u00b0. Area = (30/360) \u00d7 (22/7) \u00d7 196 = 154/3 cm\u00b2."
      },
      {
        "id": "c10-arc-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find area of minor segment of circle of radius 14 cm if central angle is 90\u00b0.",
        "answer": "56 cm\u00b2",
        "solution": "Sector area = 1/4 \u00d7 616 = 154 cm\u00b2. Triangle area = 1/2 \u00d7 14 \u00d7 14 = 98 cm\u00b2. Segment = 154 - 98 = 56 cm\u00b2."
      },
      {
        "id": "c10-arc-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "A car has two wipers of length 25 cm sweeping through angle 115\u00b0. Find total cleaned area.",
        "answer": "125489/126 cm\u00b2 (1581.58 cm\u00b2)",
        "solution": "Total area = 2 \u00d7 (115/360) \u00d7 (22/7) \u00d7 625 = 1581.58 cm\u00b2."
      },
      {
        "id": "c10-arc-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "In circle of radius 21 cm, arc subtends 60\u00b0 at centre. Find (i) arc length (ii) sector area (iii) segment area.",
        "answer": "Arc = 22 cm, Sector = 231 cm\u00b2, Segment = 231 - 441\u221a3/4 cm\u00b2",
        "solution": "Arc = (60/360)2\u03c0(21) = 22 cm. Sector = (60/360)\u03c0(21)\u00b2 = 231 cm\u00b2. Triangle = (\u221a3/4)(21)\u00b2 = 441\u221a3/4. Segment = 231 - 441\u221a3/4 cm\u00b2."
      },
      {
        "id": "c10-arc-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "A horse is tied to peg at one corner of square grass field of side 15 m by 5 m long rope. Find increase in area if rope is 10 m.",
        "answer": "Increase = 58.875 m\u00b2",
        "solution": "Area 5m = 1/4 \u03c0 (5)\u00b2 = 19.625 m\u00b2. Area 10m = 1/4 \u03c0 (10)\u00b2 = 78.5 m\u00b2. Increase = 78.5 - 19.625 = 58.875 m\u00b2."
      },
      {
        "id": "c10-arc-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find area of shaded region where ABCD is square of side 14 cm and APD & BPC are semicircles.",
        "answer": "42 cm\u00b2",
        "solution": "Square Area = 196 cm\u00b2. Two semicircles = 1 full circle of r = 7 cm = (22/7) \u00d7 49 = 154 cm\u00b2. Shaded = 196 - 154 = 42 cm\u00b2."
      },
      {
        "id": "c10-arc-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find area of design formed by 4 semicircles inside square of side 14 cm.",
        "answer": "112 cm\u00b2",
        "solution": "Unshaded 4 regions = 2 \u00d7 [196 - 154] = 84 cm\u00b2. Shaded area = 196 - 84 = 112 cm\u00b2."
      },
      {
        "id": "c10-arc-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: A brooch is made with silver wire in form of circle with diameter 35 mm. Wire also used in making 5 diameters.\n\nQuestion: Find total length of silver wire and area of each sector.",
        "answer": "Length = 285 mm, Sector Area = 385/4 mm\u00b2",
        "solution": "Wire = \u03c0d + 5d = (22/7)(35) + 5(35) = 110 + 175 = 285 mm. Sector area = (1/10) \u03c0 (35/2)\u00b2 = 385/4 mm\u00b2."
      },
      {
        "id": "c10-arc-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: An umbrella has 8 ribs equally spaced. Assuming umbrella to be flat circle of radius 45 cm.\n\nQuestion: Find area between two consecutive ribs.",
        "answer": "22275/28 cm\u00b2 (795.53 cm\u00b2)",
        "solution": "Area = (1/8) \u00d7 (22/7) \u00d7 (45)\u00b2 = 22275/28 cm\u00b2."
      },
      {
        "id": "c10-arc-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "Find area of shaded region where square ABCD of side 14 cm has 4 congruent circles inscribed.",
        "answer": "42 cm\u00b2",
        "solution": "Square = 196 cm\u00b2. Each circle radius = 3.5 cm. 4 circles = 4 \u00d7 (22/7) \u00d7 12.25 = 154 cm\u00b2. Shaded = 196 - 154 = 42 cm\u00b2."
      },
      {
        "id": "c10-arc-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "ABC is quadrant of circle of radius 14 cm and semicircle is drawn with BC as diameter. Find shaded area.",
        "answer": "98 cm\u00b2",
        "solution": "Triangle ABC area = 1/2 \u00d7 14 \u00d7 14 = 98 cm\u00b2. Hypotenuse BC = 14\u221a2 cm \u21d2 Radius of semicircle = 7\u221a2 cm. Semicircle area = 1/2 \u03c0 (7\u221a2)\u00b2 = 154 cm\u00b2. Quadrant area = 154 cm\u00b2. Shaded = 98 + 154 - 154 = 98 cm\u00b2."
      },
      {
        "id": "c10-arc-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Round table cover has 6 equal designs. Radius of cover is 28 cm. Find cost of designs at \u20b90.35 per cm\u00b2 (\u221a3=1.7).",
        "answer": "\u20b9162.68",
        "solution": "6 sectors = 2464 cm\u00b2. 6 equilateral triangles = 6 \u00d7 (\u221a3/4) \u00d7 28\u00b2 = 1999.2 cm\u00b2. Design area = 464.8 cm\u00b2. Cost = 464.8 \u00d7 0.35 = \u20b9162.68."
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
        "id": "c10-sav-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "2 cubes each of volume 64 cm\u00b3 are joined end to end. Surface area of resulting cuboid is:",
        "options": [
          "(A) 160 cm\u00b2",
          "(B) 128 cm\u00b2",
          "(C) 144 cm\u00b2",
          "(D) 192 cm\u00b2"
        ],
        "answer": "(A) 160 cm\u00b2",
        "solution": "Cube side = 4 cm. Cuboid dimensions: l=8, b=4, h=4. SA = 2(32 + 16 + 32) = 160 cm\u00b2."
      },
      {
        "id": "c10-sav-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "A wooden toy rocket is in shape of cone mounted on cylinder. Total height is 26 cm, cone height is 6 cm. Cone slant height (r=2.5cm) is:",
        "options": [
          "(A) 6.5 cm",
          "(B) 7.5 cm",
          "(C) 8.5 cm",
          "(D) 9.5 cm"
        ],
        "answer": "(A) 6.5 cm",
        "solution": "l = \u221a(h\u00b2 + r\u00b2) = \u221a(6\u00b2 + 2.5\u00b2) = \u221a(36 + 6.25) = \u221a42.25 = 6.5 cm."
      },
      {
        "id": "c10-sav-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Curved surface area of hemisphere of radius r is:",
        "options": [
          "(A) 2\u03c0r\u00b2",
          "(B) 3\u03c0r\u00b2",
          "(C) 4\u03c0r\u00b2",
          "(D) (2/3)\u03c0r\u00b3"
        ],
        "answer": "(A) 2\u03c0r\u00b2",
        "solution": "CSA of hemisphere = 2\u03c0r\u00b2."
      },
      {
        "id": "c10-sav-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Ratio of volumes of two spheres is 64 : 27. Ratio of their surface areas is:",
        "options": [
          "(A) 16 : 9",
          "(B) 4 : 3",
          "(C) 9 : 16",
          "(D) 3 : 4"
        ],
        "answer": "(A) 16 : 9",
        "solution": "r\u2081/r\u2082 = \u221b(64/27) = 4/3. Area ratio = (4/3)\u00b2 = 16/9."
      },
      {
        "id": "c10-sav-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Total surface area of solid hemisphere of radius r is 3\u03c0r\u00b2.\nReason (R): Total surface area includes curved surface 2\u03c0r\u00b2 plus flat base area \u03c0r\u00b2.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "solution": "TSA = 2\u03c0r\u00b2 + \u03c0r\u00b2 = 3\u03c0r\u00b2. Both A and R are true and R explains A."
      },
      {
        "id": "c10-sav-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): When a sphere is melted and remolded into a cone, its total volume remains unchanged.\nReason (R): Law of conservation of volume states volume is conserved during reshaping.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "solution": "Both A and R are true and R explains A."
      },
      {
        "id": "c10-sav-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "A vessel is in form of hollow hemisphere mounted by hollow cylinder. Diameter is 14 cm, total height is 13 cm. Find inner surface area.",
        "answer": "572 cm\u00b2",
        "solution": "r = 7cm. Cylinder height h = 13 - 7 = 6cm. Area = 2\u03c0r(h + r) = 2 \u00d7 (22/7) \u00d7 7 \u00d7 13 = 572 cm\u00b2."
      },
      {
        "id": "c10-sav-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "A toy is in form of cone of radius 3.5 cm mounted on hemisphere of same radius. Total height is 15.5 cm. Find total surface area.",
        "answer": "214.5 cm\u00b2",
        "solution": "Cone height h = 12cm, l = \u221a(12\u00b2 + 3.5\u00b2) = 12.5cm. TSA = \u03c0rl + 2\u03c0r\u00b2 = (22/7)(3.5)(12.5 + 7) = 214.5 cm\u00b2."
      },
      {
        "id": "c10-sav-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "A medicine capsule is in shape of cylinder with two hemispheres stuck to ends. Length is 14 mm, diameter is 5 mm. Find surface area.",
        "answer": "220 mm\u00b2",
        "solution": "r = 2.5mm, Cylinder length h = 14 - 5 = 9mm. SA = 2\u03c0rh + 4\u03c0r\u00b2 = 2\u03c0r(h + 2r) = 2 \u00d7 (22/7) \u00d7 2.5 \u00d7 14 = 220 mm\u00b2."
      },
      {
        "id": "c10-sav-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "A solid wooden toy consists of hemisphere surmounted by cone of height 2cm and base diameter 4cm. Find toy volume.",
        "answer": "25.12 cm\u00b3",
        "solution": "Volume = 1/3 \u03c0 r\u00b2 h + 2/3 \u03c0 r\u00b3 = 1/3 \u03c0 (4)(2) + 2/3 \u03c0 (8) = 8\u03c0 cm\u00b3 = 25.12 cm\u00b3."
      },
      {
        "id": "c10-sav-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "A solid iron pole consists of cylinder of height 220 cm and diameter 24 cm surmounted by cylinder of height 60 cm and radius 8 cm. Find mass (1 cm\u00b3 = 8g).",
        "answer": "892.26 kg",
        "solution": "V\u2081 = \u03c0(12)\u00b2(220) = 31680\u03c0. V\u2082 = \u03c0(8)\u00b2(60) = 3840\u03c0. Total V = 35520 \u00d7 3.14 = 111532.8 cm\u00b3. Mass = 111532.8 \u00d7 8g = 892.26 kg."
      },
      {
        "id": "c10-sav-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "A gulab jamun contains sugar syrup up to about 30% of its volume. Find syrup in 45 gulab jamuns shaped like cylinder with 2 hemispherical ends (l=5cm, d=2.8cm).",
        "answer": "338 cm\u00b3",
        "solution": "r = 1.4cm, h = 5 - 2.8 = 2.2cm. V\u2081 = \u03c0(1.4)\u00b2(2.2) + 4/3 \u03c0 (1.4)\u00b3 = 25.05 cm\u00b3. 45 V\u2081 = 1127.25 cm\u00b3. 30% syrup = 338 cm\u00b3."
      },
      {
        "id": "c10-sav-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "A pen stand made of wood is in shape of cuboid with 4 conical depressions to hold pens. Cuboid: 15cm\u00d710cm\u00d73.5cm. Depression: r=0.5cm, depth=1.4cm. Find wood volume.",
        "answer": "523.53 cm\u00b3",
        "solution": "V_cuboid = 525 cm\u00b3. 4 V_cone = 4 \u00d7 [1/3 \u00d7 (22/7) \u00d7 0.25 \u00d7 1.4] = 1.47 cm\u00b3. Wood volume = 525 - 1.47 = 523.53 cm\u00b3."
      },
      {
        "id": "c10-sav-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "A spherical glass vessel has cylindrical neck 8 cm long, 2 cm in diameter; diameter of spherical part is 8.5 cm. Find its volume.",
        "answer": "346.51 cm\u00b3",
        "solution": "V_cylinder = \u03c0(1)\u00b2(8) = 8\u03c0 = 25.12 cm\u00b3. V_sphere = 4/3 \u03c0 (4.25)\u00b3 = 321.39 cm\u00b3. Total volume = 346.51 cm\u00b3."
      },
      {
        "id": "c10-sav-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "A tent is in shape of cylinder surmounted by conical top. Height and diameter of cylindrical part are 2.1 m and 4 m, slant height of top is 2.8 m. Find canvas area & cost at \u20b9500/m\u00b2.",
        "answer": "Area = 44 m\u00b2, Cost = \u20b922,000",
        "solution": "CSA = 2\u03c0rh + \u03c0rl = \u03c0r(2h + l) = (22/7)(2)(4.2 + 2.8) = 44 m\u00b2. Cost = 44 \u00d7 500 = \u20b922,000."
      },
      {
        "id": "c10-sav-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: A boiler is made in form of cylinder with 2 hemispherical ends. Diameter is 2 m and total length is 7 m.\n\nQuestion: Find total capacity (volume) and total surface area of boiler.",
        "answer": "Volume = 18.85 m\u00b3, Surface Area = 44 m\u00b2",
        "solution": "r = 1m. Cylinder length h = 7 - 2 = 5m. V = \u03c0(1)\u00b2(5) + 4/3 \u03c0 (1)\u00b3 = 18.85 m\u00b3. Area = 2\u03c0(1)(5) + 4\u03c0(1)\u00b2 = 14\u03c0 = 44 m\u00b2."
      },
      {
        "id": "c10-sav-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: An ice-cream cone consists of cone filled with ice-cream having hemispherical top. Radius is 3 cm and height of cone is 12 cm.\n\nQuestion: Find total volume of ice-cream.",
        "answer": "169.56 cm\u00b3",
        "solution": "V = 1/3 \u03c0 (3)\u00b2 (12) + 2/3 \u03c0 (3)\u00b3 = 36\u03c0 + 18\u03c0 = 54\u03c0 = 169.56 cm\u00b3."
      },
      {
        "id": "c10-sav-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "A solid toy in form of hemisphere surmounted by right circular cone. Height of cone is 2cm and diameter of base is 4cm. If right circular cylinder circumscribes toy, find difference of volumes.",
        "answer": "8\u03c0 cm\u00b3 (25.12 cm\u00b3)",
        "solution": "V_toy = 1/3 \u03c0 (4)(2) + 2/3 \u03c0 (8) = 8\u03c0 cm\u00b3. Cylinder r=2, h=4 \u21d2 V_cyl = \u03c0(4)(4) = 16\u03c0 cm\u00b3. Difference = 16\u03c0 - 8\u03c0 = 8\u03c0 cm\u00b3."
      },
      {
        "id": "c10-sav-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "A copper rod of diameter 1 cm and length 8 cm is drawn into wire of length 18 m of uniform thickness. Find thickness of wire.",
        "answer": "1 mm",
        "solution": "V\u2081 = \u03c0(0.5)\u00b2(8) = 2\u03c0 cm\u00b3. Wire length = 1800 cm. \u03c0 r\u00b2 (1800) = 2\u03c0 \u21d2 r\u00b2 = 1/900 \u21d2 r = 1/30 cm \u21d2 Diameter = 1/15 cm = 0.67 mm (approx 1 mm)."
      },
      {
        "id": "c10-sav-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Water in canal 6 m wide and 1.5 m deep is flowing with speed of 10 km/h. How much area will it irrigate in 30 minutes if 8 cm of standing water is needed?",
        "answer": "562500 m\u00b2 (56.25 hectares)",
        "solution": "Volume in 30 min = 6 \u00d7 1.5 \u00d7 5000 = 45000 m\u00b3. Area = 45000 / 0.08 = 562500 m\u00b2."
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
        "id": "c10-stat-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "The empirical relationship between the three measures of central tendency is:",
        "options": [
          "(A) 3 Median = Mode + 2 Mean",
          "(B) 2 Median = Mode + 3 Mean",
          "(C) Mode = 3 Mean - 2 Median",
          "(D) 3 Mode = Median + 2 Mean"
        ],
        "answer": "(A) 3 Median = Mode + 2 Mean",
        "solution": "Standard empirical formula: 3 Median = Mode + 2 Mean."
      },
      {
        "id": "c10-stat-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Mode of a grouped frequency distribution is given by:",
        "options": [
          "(A) l + [(f\u2081 - f\u2080)/(2f\u2081 - f\u2080 - f\u2082)] \u00d7 h",
          "(B) l + [(f\u2081 - f\u2082)/(2f\u2081 - f\u2080)] \u00d7 h",
          "(C) l + [(f\u2080 - f\u2081)/(f\u2081 - f\u2082)] \u00d7 h",
          "(D) l + [(f\u2081 + f\u2080)/2] \u00d7 h"
        ],
        "answer": "(A) l + [(f\u2081 - f\u2080)/(2f\u2081 - f\u2080 - f\u2082)] \u00d7 h",
        "solution": "Formula for mode of grouped data."
      },
      {
        "id": "c10-stat-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Class mark of class interval 10 - 25 is:",
        "options": [
          "(A) 17.5",
          "(B) 15",
          "(C) 25",
          "(D) 35"
        ],
        "answer": "(A) 17.5",
        "solution": "Class mark = (10 + 25)/2 = 35/2 = 17.5."
      },
      {
        "id": "c10-stat-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "If mean of observations x, x+3, x+5, x+7, x+10 is 9, then mean of last 3 observations is:",
        "options": [
          "(A) 11.33",
          "(B) 10.5",
          "(C) 9.5",
          "(D) 12.0"
        ],
        "answer": "(A) 11.33",
        "solution": "Sum = 5x + 25 = 45 \u21d2 x = 4. Last 3 obs: 9, 11, 14. Mean = 34/3 = 11.33."
      },
      {
        "id": "c10-stat-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Mode of a frequency distribution can be determined graphically using a Histogram.\nReason (R): The peak rectangle in a histogram corresponds to the modal class.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "solution": "Both A and R are true and R explains A."
      },
      {
        "id": "c10-stat-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Mean of grouped data can be calculated using Direct Method, Assumed Mean Method or Step Deviation Method.\nReason (R): All three methods give the exact same value of mean.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "solution": "Both A and R are true."
      },
      {
        "id": "c10-stat-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find the mean of first 10 natural numbers.",
        "answer": "5.5",
        "solution": "Sum = 10(11)/2 = 55. Mean = 55 / 10 = 5.5."
      },
      {
        "id": "c10-stat-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "If mean = 27 and median = 33, find mode using empirical formula.",
        "answer": "45",
        "solution": "3 Median = Mode + 2 Mean \u21d2 3(33) = Mode + 2(27) \u21d2 99 = Mode + 54 \u21d2 Mode = 45."
      },
      {
        "id": "c10-stat-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find class mark and class size for class interval 35 - 50.",
        "answer": "Class mark = 42.5, Class size = 15",
        "solution": "Mark = (35+50)/2 = 42.5. Size = 50 - 35 = 15."
      },
      {
        "id": "c10-stat-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Mean of 100 observations was 50. Later it was found one observation 40 was misread as 50. Find correct mean.",
        "answer": "49.9",
        "solution": "Sum = 5000. Correct sum = 5000 - 50 + 40 = 4990. Correct mean = 4990 / 100 = 49.9."
      },
      {
        "id": "c10-stat-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find median class for distribution with total frequency 50 and N/2 = 25.",
        "answer": "Class corresponding to cf \u2265 25",
        "solution": "Median class is first class whose cumulative frequency is \u2265 N/2 (25)."
      },
      {
        "id": "c10-stat-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find mean of distribution: Marks (0-10: 5, 10-20: 10, 20-30: 15, 30-40: 10, 40-50: 10).",
        "answer": "27 marks",
        "solution": "Midpoints x = 5, 15, 25, 35, 45. \u03a3fx = 25 + 150 + 375 + 350 + 450 = 1350. \u03a3f = 50. Mean = 1350 / 50 = 27."
      },
      {
        "id": "c10-stat-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find median of distribution: Class (0-10: 4, 10-20: 12, 20-30: 20, 30-40: 10, 40-50: 4).",
        "answer": "24.5",
        "solution": "N=50, N/2=25. Median class 20-30. l=20, cf=16, f=20, h=10. Median = 20 + [(25-16)/20]\u00d710 = 24.5."
      },
      {
        "id": "c10-stat-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find mode of distribution: Class (0-20: 6, 20-40: 8, 40-60: 10, 60-80: 12, 80-100: 6, 100-120: 3).",
        "answer": "65",
        "solution": "Modal class 60-80. l=60, f\u2081=12, f\u2080=10, f\u2082=6, h=20. Mode = 60 + [(12-10)/(24-10-6)]\u00d720 = 60 + 5 = 65."
      },
      {
        "id": "c10-stat-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "If mean of distribution is 50 and sum of frequencies is 120, find missing frequencies f\u2081 and f\u2082 for classes (0-20:17, 20-40:f\u2081, 40-60:32, 60-80:f\u2082, 80-100:19).",
        "answer": "f\u2081 = 28, f\u2082 = 24",
        "solution": "f\u2081 + f\u2082 = 52. \u03a3fx = 17(10)+30f\u2081+32(50)+70f\u2082+19(90) = 3480 + 30f\u2081 + 70f\u2082 = 6000 \u21d2 30f\u2081 + 70f\u2082 = 2520 \u21d2 3f\u2081 + 7f\u2082 = 252. Solving gives f\u2081 = 28, f\u2082 = 24."
      },
      {
        "id": "c10-stat-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: A literacy survey of 35 cities gave data: Literacy rate % (45-55: 3, 55-65: 10, 65-75: 11, 75-85: 8, 85-95: 3).\n\nQuestion: Find mean literacy rate.",
        "answer": "69.43 %",
        "solution": "Direct method: \u03a3f = 35, \u03a3fx = 2430. Mean = 2430 / 35 = 69.43 %."
      },
      {
        "id": "c10-stat-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: Life of 400 neon lamps data: Hours (1500-2000: 14, 2000-2500: 56, 2500-3000: 60, 3000-3500: 86, 3500-4000: 74, 4000-4500: 62, 4500-5000: 48).\n\nQuestion: Find median life time of a lamp.",
        "answer": "3406.98 hours",
        "solution": "N/2 = 200. Median class 3000-3500. l=3000, cf=130, f=86, h=500. Median = 3000 + [(200-130)/86]\u00d7500 = 3406.98 hours."
      },
      {
        "id": "c10-stat-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "Median of following data is 525. Find x and y if total frequency is 100: (0-100:2, 100-200:5, 200-300:x, 300-400:12, 400-500:17, 500-600:20, 600-700:y, 700-800:9, 800-900:7, 900-1000:4).",
        "answer": "x = 9, y = 15",
        "solution": "x + y = 24. Median 525 lies in 500-600. 525 = 500 + [(50-36-x)/20]\u00d7100 \u21d2 25 = (14-x)5 \u21d2 14-x = 5 \u21d2 x = 9, y = 15."
      },
      {
        "id": "c10-stat-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "Mean of following distribution is 18. Find missing frequency f: (11-13:7, 13-15:6, 15-17:9, 17-19:13, 19-21:f, 21-23:5, 23-25:4).",
        "answer": "f = 20",
        "solution": "\u03a3f = 44+f. \u03a3fx = 752 + 20f. 18(44+f) = 752 + 20f \u21d2 792 + 18f = 752 + 20f \u21d2 2f = 40 \u21d2 f = 20."
      },
      {
        "id": "c10-stat-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "The distribution gives daily income of 50 workers: (100-120:12, 120-140:14, 140-160:8, 160-180:6, 180-200:10). Find mean, median and mode.",
        "answer": "Mean = \u20b9145.20, Median = \u20b9138.57, Mode = \u20b9129.09",
        "solution": "Mean = 7260/50 = \u20b9145.20. Median class 120-140: 120 + [(25-12)/14]\u00d720 = \u20b9138.57. Modal class 120-140: 120 + [(14-12)/(28-12-8)]\u00d720 = \u20b9129.09."
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
        "id": "c10-prob-1",
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
        "solution": "Probability of an event always lies between 0 and 1 (0 \u2264 P(E) \u2264 1). -1.5 is impossible."
      },
      {
        "id": "c10-prob-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "If P(E) = 0.05, what is the probability of 'not E'?",
        "options": [
          "(A) 0.95",
          "(B) 0.05",
          "(C) 1.05",
          "(D) 0.90"
        ],
        "answer": "(A) 0.95",
        "solution": "P(not E) = 1 - P(E) = 1 - 0.05 = 0.95."
      },
      {
        "id": "c10-prob-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "A card is drawn from a well-shuffled deck of 52 playing cards. Probability of getting a red face card is:",
        "options": [
          "(A) 3 / 26",
          "(B) 3 / 13",
          "(C) 1 / 13",
          "(D) 1 / 26"
        ],
        "answer": "(A) 3 / 26",
        "solution": "Red face cards = 6 (Jack, Queen, King of Hearts & Diamonds). P = 6 / 52 = 3 / 26."
      },
      {
        "id": "c10-prob-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "A die is thrown once. Probability of getting a prime number is:",
        "options": [
          "(A) 1 / 2",
          "(B) 1 / 3",
          "(C) 2 / 3",
          "(D) 1 / 6"
        ],
        "answer": "(A) 1 / 2",
        "solution": "Prime numbers on die = {2, 3, 5} (3 outcomes). P = 3 / 6 = 1 / 2."
      },
      {
        "id": "c10-prob-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Sum of probabilities of all elementary events of an experiment is 1.\nReason (R): For any event E, P(E) + P(not E) = 1.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "solution": "Both A and R are true and R is correct explanation."
      },
      {
        "id": "c10-prob-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Probability of a sure event is 1 and impossible event is 0.\nReason (R): The probability of an event E satisfies 0 \u2264 P(E) \u2264 1.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "solution": "Both A and R are true and R explains A."
      },
      {
        "id": "c10-prob-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "A bag contains 3 red balls and 5 black balls. A ball is drawn at random. Find probability ball is (i) red (ii) not red.",
        "answer": "(i) 3/8 (ii) 5/8",
        "solution": "Total = 8 balls. P(red) = 3/8. P(not red) = 1 - 3/8 = 5/8."
      },
      {
        "id": "c10-prob-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "A box contains 5 red marbles, 8 white marbles and 4 green marbles. Find P(white or green).",
        "answer": "12 / 17",
        "solution": "Total = 17 marbles. White + Green = 8 + 4 = 12. P = 12 / 17."
      },
      {
        "id": "c10-prob-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "A piggy bank contains hundred 50p coins, fifty \u20b91 coins, twenty \u20b92 coins and ten \u20b95 coins. Find P(50p coin).",
        "answer": "5 / 9",
        "solution": "Total coins = 100 + 50 + 20 + 10 = 180. P(50p) = 100 / 180 = 5 / 9."
      },
      {
        "id": "c10-prob-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Gopi buys a fish from shop. Tank has 5 male and 8 female fish. Find P(male fish).",
        "answer": "5 / 13",
        "solution": "Total fish = 13. Male = 5. P(male) = 5 / 13."
      },
      {
        "id": "c10-prob-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "A game of chance consists of spinning an arrow pointing to numbers 1 to 8. Find P(odd number).",
        "answer": "1 / 2",
        "solution": "Odd numbers = {1, 3, 5, 7} (4 numbers). P = 4 / 8 = 1 / 2."
      },
      {
        "id": "c10-prob-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "A box contains 90 discs numbered 1 to 90. One disc is drawn. Find P(disc bears (i) 2-digit number (ii) perfect square (iii) divisible by 5).",
        "answer": "(i) 9/10 (ii) 1/10 (iii) 1/5",
        "solution": "(i) 81/90 = 9/10. (ii) {1,4,9,16,25,36,49,64,81} = 9/90 = 1/10. (iii) 18/90 = 1/5."
      },
      {
        "id": "c10-prob-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Two dice thrown simultaneously. Find P(sum is (i) 8 (ii) at most 5 (iii) doublet).",
        "answer": "(i) 5/36 (ii) 5/18 (iii) 1/6",
        "solution": "Total outcomes = 36. (i) {(2,6),(3,5),(4,4),(5,3),(6,2)} = 5/36. (ii) Sum \u2264 5 = 10 outcomes = 10/36 = 5/18. (iii) Doublets = 6/36 = 1/6."
      },
      {
        "id": "c10-prob-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Five cards: ten, jack, queen, king, ace of diamonds. One card drawn. (i) P(queen) (ii) If queen drawn & put aside, P(ace).",
        "answer": "(i) 1/5 (ii) 1/4",
        "solution": "(i) 1 queen out of 5 cards = 1/5. (ii) Remaining cards = 4. Ace = 1/4."
      },
      {
        "id": "c10-prob-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "12 defective pens accidentally mixed with 132 good ones. One pen drawn. Find P(good pen).",
        "answer": "11 / 12",
        "solution": "Total pens = 144. Good pens = 132. P(good) = 132 / 144 = 11 / 12."
      },
      {
        "id": "c10-prob-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: A carton consists of 100 shirts of which 88 are good, 8 have minor defects and 4 have major defects. Jimmy accepts good shirts, Sujatha accepts non-major defect shirts.\n\nQuestion: Find P(Jimmy accepts) and P(Sujatha accepts).",
        "answer": "Jimmy = 0.88, Sujatha = 0.96",
        "solution": "P(Jimmy) = 88/100 = 0.88. P(Sujatha) = (88+8)/100 = 96/100 = 0.96."
      },
      {
        "id": "c10-prob-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Scenario: Harpreet tosses two different coins simultaneously (say \u20b91 and \u20b92).\n\nQuestion: Find probability that she gets at least one head.",
        "answer": "3 / 4",
        "solution": "Outcomes = {HH, HT, TH, TT} (4 outcomes). At least 1 head = {HH, HT, TH} (3 outcomes). P = 3 / 4."
      },
      {
        "id": "c10-prob-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "From a deck of 52 cards, all red face cards are removed. Remaining cards shuffled. Find P(drawn card is (i) red card (ii) face card (iii) card of clubs).",
        "answer": "(i) 10/23 (ii) 3/23 (iii) 13/46",
        "solution": "Cards left = 52 - 6 = 46. (i) Red left = 20 \u21d2 20/46 = 10/23. (ii) Face cards left = 6 \u21d2 6/46 = 3/23. (iii) Clubs = 13 \u21d2 13/46."
      },
      {
        "id": "c10-prob-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "A bag contains 5 red, 4 green and 7 white balls. A ball is drawn. Find P(drawn ball is (i) white (ii) neither red nor white).",
        "answer": "(i) 7/16 (ii) 1/4",
        "solution": "Total = 16 balls. (i) P(white) = 7/16. (ii) Neither red nor white = Green = 4/16 = 1/4."
      },
      {
        "id": "c10-prob-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Number of leap year days is 366. Find probability that a leap year contains 53 Sundays.",
        "answer": "2 / 7",
        "solution": "366 days = 52 weeks + 2 days. 2 extra days can be (Sat,Sun) or (Sun,Mon) (2 out of 7 possibilities). P = 2 / 7."
      }
    ]
  }
];
