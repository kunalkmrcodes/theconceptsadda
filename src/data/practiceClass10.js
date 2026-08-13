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
        "solution": "HCF is product of lowest powers of common prime factors.\nFor x: power 1. For y: power 2. Hence HCF = xy\u00b2."
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
        "solution": "LCM of co-prime prime numbers is their product pq."
      },
      {
        "id": "rn-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Ratio of HCF to LCM of least composite number (4) and least prime number (2) is:",
        "options": [
          "(A) 1 : 2",
          "(B) 2 : 1",
          "(C) 1 : 1",
          "(D) 1 : 4"
        ],
        "answer": "(A) 1 : 2",
        "solution": "HCF(2,4) = 2, LCM(2,4) = 4. Ratio = 2/4 = 1 : 2."
      },
      {
        "id": "rn-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "If HCF(306, 657) = 9, find LCM(306, 657).",
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
        "solution": "A prime number has 2 factors: 1 and itself."
      },
      {
        "id": "rn-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Express 140 as product of prime factors.",
        "answer": "2\u00b2 \u00d7 5 \u00d7 7",
        "solution": "140 = 2 \u00d7 70 = 2 \u00d7 2 \u00d7 35 = 2\u00b2 \u00d7 5 \u00d7 7."
      },
      {
        "id": "rn-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find HCF and LCM of 12, 15 and 21.",
        "answer": "HCF = 3, LCM = 420",
        "solution": "12 = 2\u00b2\u00d73, 15 = 3\u00d75, 21 = 3\u00d77. HCF = 3, LCM = 420."
      },
      {
        "id": "rn-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Check if 6\u207f can end with digit 0 for any natural number n.",
        "answer": "No",
        "solution": "6\u207f = (2\u00d73)\u207f. Does not contain prime factor 5. Cannot end with 0."
      },
      {
        "id": "rn-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Explain why 7 \u00d7 11 \u00d7 13 + 13 is composite.",
        "answer": "Composite number",
        "solution": "13(7\u00d711 + 1) = 13 \u00d7 78. Has factors other than 1 and itself."
      },
      {
        "id": "rn-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "If HCF(96, 404) = 4, find LCM(96, 404).",
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
        "solution": "Assume \u221a5 = a/b (co-prime). 5b\u00b2 = a\u00b2 \u21d2 5 divides a. Let a = 5c \u21d2 5b\u00b2 = 25c\u00b2 \u21d2 b\u00b2 = 5c\u00b2 \u21d2 5 divides b. Contradiction."
      },
      {
        "id": "rn-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove that 3 + 2\u221a5 is irrational.",
        "answer": "3 + 2\u221a5 is irrational",
        "solution": "3 + 2\u221a5 = a/b \u21d2 \u221a5 = (a - 3b)/(2b). Rational RHS contradicts irrational LHS."
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
        "question": "Find greatest 6-digit number divisible by 24, 15, 36.",
        "answer": "999720",
        "solution": "LCM(24,15,36) = 360. 999999 \u00f7 360 remainder = 279. 999999 - 279 = 999720."
      },
      {
        "id": "rn-15",
        "number": 15,
        "type": "PYQ",
        "marks": 3,
        "question": "Three bells toll together at intervals 9, 12, 15 min. When next together?",
        "answer": "180 minutes (3 hours)",
        "solution": "LCM(9, 12, 15) = 180 minutes = 3 hours."
      },
      {
        "id": "rn-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "Merchant has 120L, 180L, 240L oil. Find max tin capacity.",
        "answer": "60 litres",
        "solution": "HCF(120, 180, 240) = 60 litres."
      },
      {
        "id": "rn-17",
        "number": 17,
        "type": "PYQ",
        "marks": 1,
        "question": "Smallest number divisible by 35, 56, 91 with remainder 7?",
        "answer": "3647",
        "solution": "LCM(35, 56, 91) + 7 = 3640 + 7 = 3647."
      },
      {
        "id": "rn-18",
        "number": 18,
        "type": "PYQ",
        "marks": 2,
        "question": "Find HCF(65, 117) as 65m + 117n.",
        "answer": "HCF = 13, m = 2, n = -1",
        "solution": "13 = 2(65) - 1(117) \u21d2 m = 2, n = -1."
      },
      {
        "id": "rn-19",
        "number": 19,
        "type": "PYQ",
        "marks": 3,
        "question": "Show positive odd integer is of form 4q + 1 or 4q + 3.",
        "answer": "4q + 1 or 4q + 3",
        "solution": "a = 4q + r (r = 0,1,2,3). r=1,3 give odd integers 4q+1, 4q+3."
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
        "id": "polynomials-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Polynomials Q1: Find zeroes/coefficients of quadratic polynomial p(x) = x\u00b2 - 3x + 2.",
        "options": [
          "(A) Zeroes = 1, 2",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Zeroes = 1, 2",
        "solution": "x\u00b2 - (2 + 1)x + (2) = (x - 1)(x - 2) = 0 \u21d2 x = 1, 2."
      },
      {
        "id": "polynomials-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Polynomials Q2: Find zeroes/coefficients of quadratic polynomial p(x) = x\u00b2 - 4x + 3.",
        "options": [
          "(A) Zeroes = 1, 3",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Zeroes = 1, 3",
        "solution": "x\u00b2 - (3 + 1)x + (3) = (x - 1)(x - 3) = 0 \u21d2 x = 1, 3."
      },
      {
        "id": "polynomials-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Polynomials Q3: Find zeroes/coefficients of quadratic polynomial p(x) = x\u00b2 - 5x + 4.",
        "options": [
          "(A) Zeroes = 1, 4",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Zeroes = 1, 4",
        "solution": "x\u00b2 - (4 + 1)x + (4) = (x - 1)(x - 4) = 0 \u21d2 x = 1, 4."
      },
      {
        "id": "polynomials-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Polynomials Q4: Find zeroes/coefficients of quadratic polynomial p(x) = x\u00b2 - 6x + 5.",
        "options": [
          "(A) Zeroes = 1, 5",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Zeroes = 1, 5",
        "solution": "x\u00b2 - (5 + 1)x + (5) = (x - 1)(x - 5) = 0 \u21d2 x = 1, 5."
      },
      {
        "id": "polynomials-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Polynomials Q5: Find zeroes/coefficients of quadratic polynomial p(x) = x\u00b2 - 7x + 6.",
        "options": [
          "(A) Zeroes = 1, 6",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Zeroes = 1, 6",
        "solution": "x\u00b2 - (6 + 1)x + (6) = (x - 1)(x - 6) = 0 \u21d2 x = 1, 6."
      },
      {
        "id": "polynomials-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Polynomials Q6: Find zeroes/coefficients of quadratic polynomial p(x) = x\u00b2 - 8x + 7.",
        "options": null,
        "answer": "Zeroes = 1, 7",
        "solution": "x\u00b2 - (7 + 1)x + (7) = (x - 1)(x - 7) = 0 \u21d2 x = 1, 7."
      },
      {
        "id": "polynomials-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Polynomials Q7: Find zeroes/coefficients of quadratic polynomial p(x) = x\u00b2 - 9x + 8.",
        "options": null,
        "answer": "Zeroes = 1, 8",
        "solution": "x\u00b2 - (8 + 1)x + (8) = (x - 1)(x - 8) = 0 \u21d2 x = 1, 8."
      },
      {
        "id": "polynomials-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Polynomials Q8: Find zeroes/coefficients of quadratic polynomial p(x) = x\u00b2 - 10x + 9.",
        "options": null,
        "answer": "Zeroes = 1, 9",
        "solution": "x\u00b2 - (9 + 1)x + (9) = (x - 1)(x - 9) = 0 \u21d2 x = 1, 9."
      },
      {
        "id": "polynomials-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Polynomials Q9: Find zeroes/coefficients of quadratic polynomial p(x) = x\u00b2 - 11x + 10.",
        "options": null,
        "answer": "Zeroes = 1, 10",
        "solution": "x\u00b2 - (10 + 1)x + (10) = (x - 1)(x - 10) = 0 \u21d2 x = 1, 10."
      },
      {
        "id": "polynomials-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Polynomials Q10: Find zeroes/coefficients of quadratic polynomial p(x) = x\u00b2 - 12x + 11.",
        "options": null,
        "answer": "Zeroes = 1, 11",
        "solution": "x\u00b2 - (11 + 1)x + (11) = (x - 1)(x - 11) = 0 \u21d2 x = 1, 11."
      },
      {
        "id": "polynomials-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Polynomials Q11: Find zeroes/coefficients of quadratic polynomial p(x) = x\u00b2 - 13x + 12.",
        "options": null,
        "answer": "Zeroes = 1, 12",
        "solution": "x\u00b2 - (12 + 1)x + (12) = (x - 1)(x - 12) = 0 \u21d2 x = 1, 12."
      },
      {
        "id": "polynomials-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Polynomials Q12: Find zeroes/coefficients of quadratic polynomial p(x) = x\u00b2 - 14x + 13.",
        "options": null,
        "answer": "Zeroes = 1, 13",
        "solution": "x\u00b2 - (13 + 1)x + (13) = (x - 1)(x - 13) = 0 \u21d2 x = 1, 13."
      },
      {
        "id": "polynomials-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Polynomials Q13: Find zeroes/coefficients of quadratic polynomial p(x) = x\u00b2 - 15x + 14.",
        "options": null,
        "answer": "Zeroes = 1, 14",
        "solution": "x\u00b2 - (14 + 1)x + (14) = (x - 1)(x - 14) = 0 \u21d2 x = 1, 14."
      },
      {
        "id": "polynomials-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Polynomials Q14: Find zeroes/coefficients of quadratic polynomial p(x) = x\u00b2 - 16x + 15.",
        "options": null,
        "answer": "Zeroes = 1, 15",
        "solution": "x\u00b2 - (15 + 1)x + (15) = (x - 1)(x - 15) = 0 \u21d2 x = 1, 15."
      },
      {
        "id": "polynomials-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Polynomials Q15: Find zeroes/coefficients of quadratic polynomial p(x) = x\u00b2 - 17x + 16.",
        "options": null,
        "answer": "Zeroes = 1, 16",
        "solution": "x\u00b2 - (16 + 1)x + (16) = (x - 1)(x - 16) = 0 \u21d2 x = 1, 16."
      },
      {
        "id": "polynomials-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Polynomials Q16: Find zeroes/coefficients of quadratic polynomial p(x) = x\u00b2 - 18x + 17.",
        "options": null,
        "answer": "Zeroes = 1, 17",
        "solution": "x\u00b2 - (17 + 1)x + (17) = (x - 1)(x - 17) = 0 \u21d2 x = 1, 17."
      },
      {
        "id": "polynomials-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Polynomials Q17: Find zeroes/coefficients of quadratic polynomial p(x) = x\u00b2 - 19x + 18.",
        "options": null,
        "answer": "Zeroes = 1, 18",
        "solution": "x\u00b2 - (18 + 1)x + (18) = (x - 1)(x - 18) = 0 \u21d2 x = 1, 18."
      },
      {
        "id": "polynomials-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Polynomials Q18: Find zeroes/coefficients of quadratic polynomial p(x) = x\u00b2 - 20x + 19.",
        "options": null,
        "answer": "Zeroes = 1, 19",
        "solution": "x\u00b2 - (19 + 1)x + (19) = (x - 1)(x - 19) = 0 \u21d2 x = 1, 19."
      },
      {
        "id": "polynomials-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Polynomials Q19: Find zeroes/coefficients of quadratic polynomial p(x) = x\u00b2 - 21x + 20.",
        "options": null,
        "answer": "Zeroes = 1, 20",
        "solution": "x\u00b2 - (20 + 1)x + (20) = (x - 1)(x - 20) = 0 \u21d2 x = 1, 20."
      },
      {
        "id": "polynomials-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Polynomials Q20: Find zeroes/coefficients of quadratic polynomial p(x) = x\u00b2 - 22x + 21.",
        "options": null,
        "answer": "Zeroes = 1, 21",
        "solution": "x\u00b2 - (21 + 1)x + (21) = (x - 1)(x - 21) = 0 \u21d2 x = 1, 21."
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
        "id": "linear-equations-1",
        "number": 1,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Pair of Linear Equations in Two Variables Q1: Solve the NCERT problem for Pair of Linear Equations in Two Variables involving standard formulas.",
        "options": [
          "(A) Result Q1",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Result Q1",
        "solution": "Apply standard Pair of Linear Equations in Two Variables formula step-by-step to compute final answer."
      },
      {
        "id": "linear-equations-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Pair of Linear Equations in Two Variables Q2: Solve the NCERT problem for Pair of Linear Equations in Two Variables involving standard formulas.",
        "options": [
          "(A) Result Q2",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Result Q2",
        "solution": "Apply standard Pair of Linear Equations in Two Variables formula step-by-step to compute final answer."
      },
      {
        "id": "linear-equations-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Pair of Linear Equations in Two Variables Q3: Solve the NCERT problem for Pair of Linear Equations in Two Variables involving standard formulas.",
        "options": [
          "(A) Result Q3",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Result Q3",
        "solution": "Apply standard Pair of Linear Equations in Two Variables formula step-by-step to compute final answer."
      },
      {
        "id": "linear-equations-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Pair of Linear Equations in Two Variables Q4: Solve the NCERT problem for Pair of Linear Equations in Two Variables involving standard formulas.",
        "options": [
          "(A) Result Q4",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Result Q4",
        "solution": "Apply standard Pair of Linear Equations in Two Variables formula step-by-step to compute final answer."
      },
      {
        "id": "linear-equations-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Pair of Linear Equations in Two Variables Q5: Solve the NCERT problem for Pair of Linear Equations in Two Variables involving standard formulas.",
        "options": [
          "(A) Result Q5",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Result Q5",
        "solution": "Apply standard Pair of Linear Equations in Two Variables formula step-by-step to compute final answer."
      },
      {
        "id": "linear-equations-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Pair of Linear Equations in Two Variables Q6: Solve the NCERT problem for Pair of Linear Equations in Two Variables involving standard formulas.",
        "options": null,
        "answer": "Result Q6",
        "solution": "Apply standard Pair of Linear Equations in Two Variables formula step-by-step to compute final answer."
      },
      {
        "id": "linear-equations-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Pair of Linear Equations in Two Variables Q7: Solve the NCERT problem for Pair of Linear Equations in Two Variables involving standard formulas.",
        "options": null,
        "answer": "Result Q7",
        "solution": "Apply standard Pair of Linear Equations in Two Variables formula step-by-step to compute final answer."
      },
      {
        "id": "linear-equations-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Pair of Linear Equations in Two Variables Q8: Solve the NCERT problem for Pair of Linear Equations in Two Variables involving standard formulas.",
        "options": null,
        "answer": "Result Q8",
        "solution": "Apply standard Pair of Linear Equations in Two Variables formula step-by-step to compute final answer."
      },
      {
        "id": "linear-equations-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Pair of Linear Equations in Two Variables Q9: Solve the NCERT problem for Pair of Linear Equations in Two Variables involving standard formulas.",
        "options": null,
        "answer": "Result Q9",
        "solution": "Apply standard Pair of Linear Equations in Two Variables formula step-by-step to compute final answer."
      },
      {
        "id": "linear-equations-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Pair of Linear Equations in Two Variables Q10: Solve the NCERT problem for Pair of Linear Equations in Two Variables involving standard formulas.",
        "options": null,
        "answer": "Result Q10",
        "solution": "Apply standard Pair of Linear Equations in Two Variables formula step-by-step to compute final answer."
      },
      {
        "id": "linear-equations-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Pair of Linear Equations in Two Variables Q11: Solve the NCERT problem for Pair of Linear Equations in Two Variables involving standard formulas.",
        "options": null,
        "answer": "Result Q11",
        "solution": "Apply standard Pair of Linear Equations in Two Variables formula step-by-step to compute final answer."
      },
      {
        "id": "linear-equations-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Pair of Linear Equations in Two Variables Q12: Solve the NCERT problem for Pair of Linear Equations in Two Variables involving standard formulas.",
        "options": null,
        "answer": "Result Q12",
        "solution": "Apply standard Pair of Linear Equations in Two Variables formula step-by-step to compute final answer."
      },
      {
        "id": "linear-equations-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Pair of Linear Equations in Two Variables Q13: Solve the NCERT problem for Pair of Linear Equations in Two Variables involving standard formulas.",
        "options": null,
        "answer": "Result Q13",
        "solution": "Apply standard Pair of Linear Equations in Two Variables formula step-by-step to compute final answer."
      },
      {
        "id": "linear-equations-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Pair of Linear Equations in Two Variables Q14: Solve the NCERT problem for Pair of Linear Equations in Two Variables involving standard formulas.",
        "options": null,
        "answer": "Result Q14",
        "solution": "Apply standard Pair of Linear Equations in Two Variables formula step-by-step to compute final answer."
      },
      {
        "id": "linear-equations-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Pair of Linear Equations in Two Variables Q15: Solve the NCERT problem for Pair of Linear Equations in Two Variables involving standard formulas.",
        "options": null,
        "answer": "Result Q15",
        "solution": "Apply standard Pair of Linear Equations in Two Variables formula step-by-step to compute final answer."
      },
      {
        "id": "linear-equations-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Pair of Linear Equations in Two Variables Q16: Solve the NCERT problem for Pair of Linear Equations in Two Variables involving standard formulas.",
        "options": null,
        "answer": "Result Q16",
        "solution": "Apply standard Pair of Linear Equations in Two Variables formula step-by-step to compute final answer."
      },
      {
        "id": "linear-equations-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Pair of Linear Equations in Two Variables Q17: Solve the NCERT problem for Pair of Linear Equations in Two Variables involving standard formulas.",
        "options": null,
        "answer": "Result Q17",
        "solution": "Apply standard Pair of Linear Equations in Two Variables formula step-by-step to compute final answer."
      },
      {
        "id": "linear-equations-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Pair of Linear Equations in Two Variables Q18: Solve the NCERT problem for Pair of Linear Equations in Two Variables involving standard formulas.",
        "options": null,
        "answer": "Result Q18",
        "solution": "Apply standard Pair of Linear Equations in Two Variables formula step-by-step to compute final answer."
      },
      {
        "id": "linear-equations-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Pair of Linear Equations in Two Variables Q19: Solve the NCERT problem for Pair of Linear Equations in Two Variables involving standard formulas.",
        "options": null,
        "answer": "Result Q19",
        "solution": "Apply standard Pair of Linear Equations in Two Variables formula step-by-step to compute final answer."
      },
      {
        "id": "linear-equations-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Pair of Linear Equations in Two Variables Q20: Solve the NCERT problem for Pair of Linear Equations in Two Variables involving standard formulas.",
        "options": null,
        "answer": "Result Q20",
        "solution": "Apply standard Pair of Linear Equations in Two Variables formula step-by-step to compute final answer."
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
        "question": "Class 10 Quadratic Equations Q1: Find roots of x\u00b2 - 4x + 3 = 0.",
        "options": [
          "(A) Roots = 1, 3",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Roots = 1, 3",
        "solution": "(x - 1)(x - 3) = 0 \u21d2 x = 1 or x = 3."
      },
      {
        "id": "quadratic-equations-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Quadratic Equations Q2: Find roots of x\u00b2 - 5x + 4 = 0.",
        "options": [
          "(A) Roots = 1, 4",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Roots = 1, 4",
        "solution": "(x - 1)(x - 4) = 0 \u21d2 x = 1 or x = 4."
      },
      {
        "id": "quadratic-equations-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Quadratic Equations Q3: Find roots of x\u00b2 - 6x + 5 = 0.",
        "options": [
          "(A) Roots = 1, 5",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Roots = 1, 5",
        "solution": "(x - 1)(x - 5) = 0 \u21d2 x = 1 or x = 5."
      },
      {
        "id": "quadratic-equations-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Quadratic Equations Q4: Find roots of x\u00b2 - 7x + 6 = 0.",
        "options": [
          "(A) Roots = 1, 6",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Roots = 1, 6",
        "solution": "(x - 1)(x - 6) = 0 \u21d2 x = 1 or x = 6."
      },
      {
        "id": "quadratic-equations-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Quadratic Equations Q5: Find roots of x\u00b2 - 8x + 7 = 0.",
        "options": [
          "(A) Roots = 1, 7",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Roots = 1, 7",
        "solution": "(x - 1)(x - 7) = 0 \u21d2 x = 1 or x = 7."
      },
      {
        "id": "quadratic-equations-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Quadratic Equations Q6: Find roots of x\u00b2 - 9x + 8 = 0.",
        "options": null,
        "answer": "Roots = 1, 8",
        "solution": "(x - 1)(x - 8) = 0 \u21d2 x = 1 or x = 8."
      },
      {
        "id": "quadratic-equations-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Quadratic Equations Q7: Find roots of x\u00b2 - 10x + 9 = 0.",
        "options": null,
        "answer": "Roots = 1, 9",
        "solution": "(x - 1)(x - 9) = 0 \u21d2 x = 1 or x = 9."
      },
      {
        "id": "quadratic-equations-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Quadratic Equations Q8: Find roots of x\u00b2 - 11x + 10 = 0.",
        "options": null,
        "answer": "Roots = 1, 10",
        "solution": "(x - 1)(x - 10) = 0 \u21d2 x = 1 or x = 10."
      },
      {
        "id": "quadratic-equations-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Quadratic Equations Q9: Find roots of x\u00b2 - 12x + 11 = 0.",
        "options": null,
        "answer": "Roots = 1, 11",
        "solution": "(x - 1)(x - 11) = 0 \u21d2 x = 1 or x = 11."
      },
      {
        "id": "quadratic-equations-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Quadratic Equations Q10: Find roots of x\u00b2 - 13x + 12 = 0.",
        "options": null,
        "answer": "Roots = 1, 12",
        "solution": "(x - 1)(x - 12) = 0 \u21d2 x = 1 or x = 12."
      },
      {
        "id": "quadratic-equations-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Quadratic Equations Q11: Find roots of x\u00b2 - 14x + 13 = 0.",
        "options": null,
        "answer": "Roots = 1, 13",
        "solution": "(x - 1)(x - 13) = 0 \u21d2 x = 1 or x = 13."
      },
      {
        "id": "quadratic-equations-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Quadratic Equations Q12: Find roots of x\u00b2 - 15x + 14 = 0.",
        "options": null,
        "answer": "Roots = 1, 14",
        "solution": "(x - 1)(x - 14) = 0 \u21d2 x = 1 or x = 14."
      },
      {
        "id": "quadratic-equations-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Quadratic Equations Q13: Find roots of x\u00b2 - 16x + 15 = 0.",
        "options": null,
        "answer": "Roots = 1, 15",
        "solution": "(x - 1)(x - 15) = 0 \u21d2 x = 1 or x = 15."
      },
      {
        "id": "quadratic-equations-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Quadratic Equations Q14: Find roots of x\u00b2 - 17x + 16 = 0.",
        "options": null,
        "answer": "Roots = 1, 16",
        "solution": "(x - 1)(x - 16) = 0 \u21d2 x = 1 or x = 16."
      },
      {
        "id": "quadratic-equations-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Quadratic Equations Q15: Find roots of x\u00b2 - 18x + 17 = 0.",
        "options": null,
        "answer": "Roots = 1, 17",
        "solution": "(x - 1)(x - 17) = 0 \u21d2 x = 1 or x = 17."
      },
      {
        "id": "quadratic-equations-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Quadratic Equations Q16: Find roots of x\u00b2 - 19x + 18 = 0.",
        "options": null,
        "answer": "Roots = 1, 18",
        "solution": "(x - 1)(x - 18) = 0 \u21d2 x = 1 or x = 18."
      },
      {
        "id": "quadratic-equations-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Quadratic Equations Q17: Find roots of x\u00b2 - 20x + 19 = 0.",
        "options": null,
        "answer": "Roots = 1, 19",
        "solution": "(x - 1)(x - 19) = 0 \u21d2 x = 1 or x = 19."
      },
      {
        "id": "quadratic-equations-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Quadratic Equations Q18: Find roots of x\u00b2 - 21x + 20 = 0.",
        "options": null,
        "answer": "Roots = 1, 20",
        "solution": "(x - 1)(x - 20) = 0 \u21d2 x = 1 or x = 20."
      },
      {
        "id": "quadratic-equations-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Quadratic Equations Q19: Find roots of x\u00b2 - 22x + 21 = 0.",
        "options": null,
        "answer": "Roots = 1, 21",
        "solution": "(x - 1)(x - 21) = 0 \u21d2 x = 1 or x = 21."
      },
      {
        "id": "quadratic-equations-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Quadratic Equations Q20: Find roots of x\u00b2 - 23x + 22 = 0.",
        "options": null,
        "answer": "Roots = 1, 22",
        "solution": "(x - 1)(x - 22) = 0 \u21d2 x = 1 or x = 22."
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
        "question": "Class 10 AP Q1: Find the 1th term of AP 2, 5, 8, 11...",
        "options": [
          "(A) 2",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "2",
        "solution": "a = 2, d = 3. a_1 = 2 + (1-1)3 = 3(1) - 1 = 2."
      },
      {
        "id": "arithmetic-progressions-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 AP Q2: Find the 2th term of AP 2, 5, 8, 11...",
        "options": [
          "(A) 5",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "5",
        "solution": "a = 2, d = 3. a_2 = 2 + (2-1)3 = 3(2) - 1 = 5."
      },
      {
        "id": "arithmetic-progressions-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 AP Q3: Find the 3th term of AP 2, 5, 8, 11...",
        "options": [
          "(A) 8",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "8",
        "solution": "a = 2, d = 3. a_3 = 2 + (3-1)3 = 3(3) - 1 = 8."
      },
      {
        "id": "arithmetic-progressions-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 AP Q4: Find the 4th term of AP 2, 5, 8, 11...",
        "options": [
          "(A) 11",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "11",
        "solution": "a = 2, d = 3. a_4 = 2 + (4-1)3 = 3(4) - 1 = 11."
      },
      {
        "id": "arithmetic-progressions-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 AP Q5: Find the 5th term of AP 2, 5, 8, 11...",
        "options": [
          "(A) 14",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "14",
        "solution": "a = 2, d = 3. a_5 = 2 + (5-1)3 = 3(5) - 1 = 14."
      },
      {
        "id": "arithmetic-progressions-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 AP Q6: Find the 6th term of AP 2, 5, 8, 11...",
        "options": null,
        "answer": "17",
        "solution": "a = 2, d = 3. a_6 = 2 + (6-1)3 = 3(6) - 1 = 17."
      },
      {
        "id": "arithmetic-progressions-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 AP Q7: Find the 7th term of AP 2, 5, 8, 11...",
        "options": null,
        "answer": "20",
        "solution": "a = 2, d = 3. a_7 = 2 + (7-1)3 = 3(7) - 1 = 20."
      },
      {
        "id": "arithmetic-progressions-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 AP Q8: Find the 8th term of AP 2, 5, 8, 11...",
        "options": null,
        "answer": "23",
        "solution": "a = 2, d = 3. a_8 = 2 + (8-1)3 = 3(8) - 1 = 23."
      },
      {
        "id": "arithmetic-progressions-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 AP Q9: Find the 9th term of AP 2, 5, 8, 11...",
        "options": null,
        "answer": "26",
        "solution": "a = 2, d = 3. a_9 = 2 + (9-1)3 = 3(9) - 1 = 26."
      },
      {
        "id": "arithmetic-progressions-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 AP Q10: Find the 10th term of AP 2, 5, 8, 11...",
        "options": null,
        "answer": "29",
        "solution": "a = 2, d = 3. a_10 = 2 + (10-1)3 = 3(10) - 1 = 29."
      },
      {
        "id": "arithmetic-progressions-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 AP Q11: Find the 11th term of AP 2, 5, 8, 11...",
        "options": null,
        "answer": "32",
        "solution": "a = 2, d = 3. a_11 = 2 + (11-1)3 = 3(11) - 1 = 32."
      },
      {
        "id": "arithmetic-progressions-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 AP Q12: Find the 12th term of AP 2, 5, 8, 11...",
        "options": null,
        "answer": "35",
        "solution": "a = 2, d = 3. a_12 = 2 + (12-1)3 = 3(12) - 1 = 35."
      },
      {
        "id": "arithmetic-progressions-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 AP Q13: Find the 13th term of AP 2, 5, 8, 11...",
        "options": null,
        "answer": "38",
        "solution": "a = 2, d = 3. a_13 = 2 + (13-1)3 = 3(13) - 1 = 38."
      },
      {
        "id": "arithmetic-progressions-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 AP Q14: Find the 14th term of AP 2, 5, 8, 11...",
        "options": null,
        "answer": "41",
        "solution": "a = 2, d = 3. a_14 = 2 + (14-1)3 = 3(14) - 1 = 41."
      },
      {
        "id": "arithmetic-progressions-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 AP Q15: Find the 15th term of AP 2, 5, 8, 11...",
        "options": null,
        "answer": "44",
        "solution": "a = 2, d = 3. a_15 = 2 + (15-1)3 = 3(15) - 1 = 44."
      },
      {
        "id": "arithmetic-progressions-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 AP Q16: Find the 16th term of AP 2, 5, 8, 11...",
        "options": null,
        "answer": "47",
        "solution": "a = 2, d = 3. a_16 = 2 + (16-1)3 = 3(16) - 1 = 47."
      },
      {
        "id": "arithmetic-progressions-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 AP Q17: Find the 17th term of AP 2, 5, 8, 11...",
        "options": null,
        "answer": "50",
        "solution": "a = 2, d = 3. a_17 = 2 + (17-1)3 = 3(17) - 1 = 50."
      },
      {
        "id": "arithmetic-progressions-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 AP Q18: Find the 18th term of AP 2, 5, 8, 11...",
        "options": null,
        "answer": "53",
        "solution": "a = 2, d = 3. a_18 = 2 + (18-1)3 = 3(18) - 1 = 53."
      },
      {
        "id": "arithmetic-progressions-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 AP Q19: Find the 19th term of AP 2, 5, 8, 11...",
        "options": null,
        "answer": "56",
        "solution": "a = 2, d = 3. a_19 = 2 + (19-1)3 = 3(19) - 1 = 56."
      },
      {
        "id": "arithmetic-progressions-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 AP Q20: Find the 20th term of AP 2, 5, 8, 11...",
        "options": null,
        "answer": "59",
        "solution": "a = 2, d = 3. a_20 = 2 + (20-1)3 = 3(20) - 1 = 59."
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
        "question": "Class 10 Triangles Q1: In \u25b3ABC, DE || BC such that AD/DB = 1/2. If EC = 6 cm, find AE.",
        "options": [
          "(A) 3 cm",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "3 cm",
        "solution": "By Basic Proportionality Theorem: AD/DB = AE/EC \u21d2 1/2 = AE/6 \u21d2 AE = 6 \u00d7 1 / 2 = 3 cm."
      },
      {
        "id": "triangles-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Triangles Q2: In \u25b3ABC, DE || BC such that AD/DB = 2/2. If EC = 6 cm, find AE.",
        "options": [
          "(A) 6 cm",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "6 cm",
        "solution": "By Basic Proportionality Theorem: AD/DB = AE/EC \u21d2 2/2 = AE/6 \u21d2 AE = 6 \u00d7 2 / 2 = 6 cm."
      },
      {
        "id": "triangles-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Triangles Q3: In \u25b3ABC, DE || BC such that AD/DB = 3/2. If EC = 6 cm, find AE.",
        "options": [
          "(A) 9 cm",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "9 cm",
        "solution": "By Basic Proportionality Theorem: AD/DB = AE/EC \u21d2 3/2 = AE/6 \u21d2 AE = 6 \u00d7 3 / 2 = 9 cm."
      },
      {
        "id": "triangles-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Triangles Q4: In \u25b3ABC, DE || BC such that AD/DB = 4/2. If EC = 6 cm, find AE.",
        "options": [
          "(A) 12 cm",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "12 cm",
        "solution": "By Basic Proportionality Theorem: AD/DB = AE/EC \u21d2 4/2 = AE/6 \u21d2 AE = 6 \u00d7 4 / 2 = 12 cm."
      },
      {
        "id": "triangles-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Triangles Q5: In \u25b3ABC, DE || BC such that AD/DB = 5/2. If EC = 6 cm, find AE.",
        "options": [
          "(A) 15 cm",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "15 cm",
        "solution": "By Basic Proportionality Theorem: AD/DB = AE/EC \u21d2 5/2 = AE/6 \u21d2 AE = 6 \u00d7 5 / 2 = 15 cm."
      },
      {
        "id": "triangles-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Triangles Q6: In \u25b3ABC, DE || BC such that AD/DB = 6/2. If EC = 6 cm, find AE.",
        "options": null,
        "answer": "18 cm",
        "solution": "By Basic Proportionality Theorem: AD/DB = AE/EC \u21d2 6/2 = AE/6 \u21d2 AE = 6 \u00d7 6 / 2 = 18 cm."
      },
      {
        "id": "triangles-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Triangles Q7: In \u25b3ABC, DE || BC such that AD/DB = 7/2. If EC = 6 cm, find AE.",
        "options": null,
        "answer": "21 cm",
        "solution": "By Basic Proportionality Theorem: AD/DB = AE/EC \u21d2 7/2 = AE/6 \u21d2 AE = 6 \u00d7 7 / 2 = 21 cm."
      },
      {
        "id": "triangles-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Triangles Q8: In \u25b3ABC, DE || BC such that AD/DB = 8/2. If EC = 6 cm, find AE.",
        "options": null,
        "answer": "24 cm",
        "solution": "By Basic Proportionality Theorem: AD/DB = AE/EC \u21d2 8/2 = AE/6 \u21d2 AE = 6 \u00d7 8 / 2 = 24 cm."
      },
      {
        "id": "triangles-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Triangles Q9: In \u25b3ABC, DE || BC such that AD/DB = 9/2. If EC = 6 cm, find AE.",
        "options": null,
        "answer": "27 cm",
        "solution": "By Basic Proportionality Theorem: AD/DB = AE/EC \u21d2 9/2 = AE/6 \u21d2 AE = 6 \u00d7 9 / 2 = 27 cm."
      },
      {
        "id": "triangles-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Triangles Q10: In \u25b3ABC, DE || BC such that AD/DB = 10/2. If EC = 6 cm, find AE.",
        "options": null,
        "answer": "30 cm",
        "solution": "By Basic Proportionality Theorem: AD/DB = AE/EC \u21d2 10/2 = AE/6 \u21d2 AE = 6 \u00d7 10 / 2 = 30 cm."
      },
      {
        "id": "triangles-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Triangles Q11: In \u25b3ABC, DE || BC such that AD/DB = 11/2. If EC = 6 cm, find AE.",
        "options": null,
        "answer": "33 cm",
        "solution": "By Basic Proportionality Theorem: AD/DB = AE/EC \u21d2 11/2 = AE/6 \u21d2 AE = 6 \u00d7 11 / 2 = 33 cm."
      },
      {
        "id": "triangles-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Triangles Q12: In \u25b3ABC, DE || BC such that AD/DB = 12/2. If EC = 6 cm, find AE.",
        "options": null,
        "answer": "36 cm",
        "solution": "By Basic Proportionality Theorem: AD/DB = AE/EC \u21d2 12/2 = AE/6 \u21d2 AE = 6 \u00d7 12 / 2 = 36 cm."
      },
      {
        "id": "triangles-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Triangles Q13: In \u25b3ABC, DE || BC such that AD/DB = 13/2. If EC = 6 cm, find AE.",
        "options": null,
        "answer": "39 cm",
        "solution": "By Basic Proportionality Theorem: AD/DB = AE/EC \u21d2 13/2 = AE/6 \u21d2 AE = 6 \u00d7 13 / 2 = 39 cm."
      },
      {
        "id": "triangles-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Triangles Q14: In \u25b3ABC, DE || BC such that AD/DB = 14/2. If EC = 6 cm, find AE.",
        "options": null,
        "answer": "42 cm",
        "solution": "By Basic Proportionality Theorem: AD/DB = AE/EC \u21d2 14/2 = AE/6 \u21d2 AE = 6 \u00d7 14 / 2 = 42 cm."
      },
      {
        "id": "triangles-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Triangles Q15: In \u25b3ABC, DE || BC such that AD/DB = 15/2. If EC = 6 cm, find AE.",
        "options": null,
        "answer": "45 cm",
        "solution": "By Basic Proportionality Theorem: AD/DB = AE/EC \u21d2 15/2 = AE/6 \u21d2 AE = 6 \u00d7 15 / 2 = 45 cm."
      },
      {
        "id": "triangles-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Triangles Q16: In \u25b3ABC, DE || BC such that AD/DB = 16/2. If EC = 6 cm, find AE.",
        "options": null,
        "answer": "48 cm",
        "solution": "By Basic Proportionality Theorem: AD/DB = AE/EC \u21d2 16/2 = AE/6 \u21d2 AE = 6 \u00d7 16 / 2 = 48 cm."
      },
      {
        "id": "triangles-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Triangles Q17: In \u25b3ABC, DE || BC such that AD/DB = 17/2. If EC = 6 cm, find AE.",
        "options": null,
        "answer": "51 cm",
        "solution": "By Basic Proportionality Theorem: AD/DB = AE/EC \u21d2 17/2 = AE/6 \u21d2 AE = 6 \u00d7 17 / 2 = 51 cm."
      },
      {
        "id": "triangles-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Triangles Q18: In \u25b3ABC, DE || BC such that AD/DB = 18/2. If EC = 6 cm, find AE.",
        "options": null,
        "answer": "54 cm",
        "solution": "By Basic Proportionality Theorem: AD/DB = AE/EC \u21d2 18/2 = AE/6 \u21d2 AE = 6 \u00d7 18 / 2 = 54 cm."
      },
      {
        "id": "triangles-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Triangles Q19: In \u25b3ABC, DE || BC such that AD/DB = 19/2. If EC = 6 cm, find AE.",
        "options": null,
        "answer": "57 cm",
        "solution": "By Basic Proportionality Theorem: AD/DB = AE/EC \u21d2 19/2 = AE/6 \u21d2 AE = 6 \u00d7 19 / 2 = 57 cm."
      },
      {
        "id": "triangles-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Triangles Q20: In \u25b3ABC, DE || BC such that AD/DB = 20/2. If EC = 6 cm, find AE.",
        "options": null,
        "answer": "60 cm",
        "solution": "By Basic Proportionality Theorem: AD/DB = AE/EC \u21d2 20/2 = AE/6 \u21d2 AE = 6 \u00d7 20 / 2 = 60 cm."
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
        "question": "Class 10 Coordinate Geometry Q1: Find distance between points A(1, 2) and B(4, 6).",
        "options": [
          "(A) 5 units",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "5 units",
        "solution": "Distance = \u221a[((1+3) - 1)\u00b2 + (6 - 2)\u00b2] = \u221a[3\u00b2 + 4\u00b2] = \u221a[9 + 16] = \u221a25 = 5 units."
      },
      {
        "id": "coordinate-geometry-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Coordinate Geometry Q2: Find distance between points A(2, 2) and B(5, 6).",
        "options": [
          "(A) 5 units",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "5 units",
        "solution": "Distance = \u221a[((2+3) - 2)\u00b2 + (6 - 2)\u00b2] = \u221a[3\u00b2 + 4\u00b2] = \u221a[9 + 16] = \u221a25 = 5 units."
      },
      {
        "id": "coordinate-geometry-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Coordinate Geometry Q3: Find distance between points A(3, 2) and B(6, 6).",
        "options": [
          "(A) 5 units",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "5 units",
        "solution": "Distance = \u221a[((3+3) - 3)\u00b2 + (6 - 2)\u00b2] = \u221a[3\u00b2 + 4\u00b2] = \u221a[9 + 16] = \u221a25 = 5 units."
      },
      {
        "id": "coordinate-geometry-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Coordinate Geometry Q4: Find distance between points A(4, 2) and B(7, 6).",
        "options": [
          "(A) 5 units",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "5 units",
        "solution": "Distance = \u221a[((4+3) - 4)\u00b2 + (6 - 2)\u00b2] = \u221a[3\u00b2 + 4\u00b2] = \u221a[9 + 16] = \u221a25 = 5 units."
      },
      {
        "id": "coordinate-geometry-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Coordinate Geometry Q5: Find distance between points A(5, 2) and B(8, 6).",
        "options": [
          "(A) 5 units",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "5 units",
        "solution": "Distance = \u221a[((5+3) - 5)\u00b2 + (6 - 2)\u00b2] = \u221a[3\u00b2 + 4\u00b2] = \u221a[9 + 16] = \u221a25 = 5 units."
      },
      {
        "id": "coordinate-geometry-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Coordinate Geometry Q6: Find distance between points A(6, 2) and B(9, 6).",
        "options": null,
        "answer": "5 units",
        "solution": "Distance = \u221a[((6+3) - 6)\u00b2 + (6 - 2)\u00b2] = \u221a[3\u00b2 + 4\u00b2] = \u221a[9 + 16] = \u221a25 = 5 units."
      },
      {
        "id": "coordinate-geometry-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Coordinate Geometry Q7: Find distance between points A(7, 2) and B(10, 6).",
        "options": null,
        "answer": "5 units",
        "solution": "Distance = \u221a[((7+3) - 7)\u00b2 + (6 - 2)\u00b2] = \u221a[3\u00b2 + 4\u00b2] = \u221a[9 + 16] = \u221a25 = 5 units."
      },
      {
        "id": "coordinate-geometry-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Coordinate Geometry Q8: Find distance between points A(8, 2) and B(11, 6).",
        "options": null,
        "answer": "5 units",
        "solution": "Distance = \u221a[((8+3) - 8)\u00b2 + (6 - 2)\u00b2] = \u221a[3\u00b2 + 4\u00b2] = \u221a[9 + 16] = \u221a25 = 5 units."
      },
      {
        "id": "coordinate-geometry-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Coordinate Geometry Q9: Find distance between points A(9, 2) and B(12, 6).",
        "options": null,
        "answer": "5 units",
        "solution": "Distance = \u221a[((9+3) - 9)\u00b2 + (6 - 2)\u00b2] = \u221a[3\u00b2 + 4\u00b2] = \u221a[9 + 16] = \u221a25 = 5 units."
      },
      {
        "id": "coordinate-geometry-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Coordinate Geometry Q10: Find distance between points A(10, 2) and B(13, 6).",
        "options": null,
        "answer": "5 units",
        "solution": "Distance = \u221a[((10+3) - 10)\u00b2 + (6 - 2)\u00b2] = \u221a[3\u00b2 + 4\u00b2] = \u221a[9 + 16] = \u221a25 = 5 units."
      },
      {
        "id": "coordinate-geometry-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Coordinate Geometry Q11: Find distance between points A(11, 2) and B(14, 6).",
        "options": null,
        "answer": "5 units",
        "solution": "Distance = \u221a[((11+3) - 11)\u00b2 + (6 - 2)\u00b2] = \u221a[3\u00b2 + 4\u00b2] = \u221a[9 + 16] = \u221a25 = 5 units."
      },
      {
        "id": "coordinate-geometry-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Coordinate Geometry Q12: Find distance between points A(12, 2) and B(15, 6).",
        "options": null,
        "answer": "5 units",
        "solution": "Distance = \u221a[((12+3) - 12)\u00b2 + (6 - 2)\u00b2] = \u221a[3\u00b2 + 4\u00b2] = \u221a[9 + 16] = \u221a25 = 5 units."
      },
      {
        "id": "coordinate-geometry-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Coordinate Geometry Q13: Find distance between points A(13, 2) and B(16, 6).",
        "options": null,
        "answer": "5 units",
        "solution": "Distance = \u221a[((13+3) - 13)\u00b2 + (6 - 2)\u00b2] = \u221a[3\u00b2 + 4\u00b2] = \u221a[9 + 16] = \u221a25 = 5 units."
      },
      {
        "id": "coordinate-geometry-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Coordinate Geometry Q14: Find distance between points A(14, 2) and B(17, 6).",
        "options": null,
        "answer": "5 units",
        "solution": "Distance = \u221a[((14+3) - 14)\u00b2 + (6 - 2)\u00b2] = \u221a[3\u00b2 + 4\u00b2] = \u221a[9 + 16] = \u221a25 = 5 units."
      },
      {
        "id": "coordinate-geometry-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Coordinate Geometry Q15: Find distance between points A(15, 2) and B(18, 6).",
        "options": null,
        "answer": "5 units",
        "solution": "Distance = \u221a[((15+3) - 15)\u00b2 + (6 - 2)\u00b2] = \u221a[3\u00b2 + 4\u00b2] = \u221a[9 + 16] = \u221a25 = 5 units."
      },
      {
        "id": "coordinate-geometry-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Coordinate Geometry Q16: Find distance between points A(16, 2) and B(19, 6).",
        "options": null,
        "answer": "5 units",
        "solution": "Distance = \u221a[((16+3) - 16)\u00b2 + (6 - 2)\u00b2] = \u221a[3\u00b2 + 4\u00b2] = \u221a[9 + 16] = \u221a25 = 5 units."
      },
      {
        "id": "coordinate-geometry-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Coordinate Geometry Q17: Find distance between points A(17, 2) and B(20, 6).",
        "options": null,
        "answer": "5 units",
        "solution": "Distance = \u221a[((17+3) - 17)\u00b2 + (6 - 2)\u00b2] = \u221a[3\u00b2 + 4\u00b2] = \u221a[9 + 16] = \u221a25 = 5 units."
      },
      {
        "id": "coordinate-geometry-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Coordinate Geometry Q18: Find distance between points A(18, 2) and B(21, 6).",
        "options": null,
        "answer": "5 units",
        "solution": "Distance = \u221a[((18+3) - 18)\u00b2 + (6 - 2)\u00b2] = \u221a[3\u00b2 + 4\u00b2] = \u221a[9 + 16] = \u221a25 = 5 units."
      },
      {
        "id": "coordinate-geometry-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Coordinate Geometry Q19: Find distance between points A(19, 2) and B(22, 6).",
        "options": null,
        "answer": "5 units",
        "solution": "Distance = \u221a[((19+3) - 19)\u00b2 + (6 - 2)\u00b2] = \u221a[3\u00b2 + 4\u00b2] = \u221a[9 + 16] = \u221a25 = 5 units."
      },
      {
        "id": "coordinate-geometry-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Coordinate Geometry Q20: Find distance between points A(20, 2) and B(23, 6).",
        "options": null,
        "answer": "5 units",
        "solution": "Distance = \u221a[((20+3) - 20)\u00b2 + (6 - 2)\u00b2] = \u221a[3\u00b2 + 4\u00b2] = \u221a[9 + 16] = \u221a25 = 5 units."
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
        "question": "Class 10 Trigonometry Q1: Evaluate sin(45\u00b0) + cos(45\u00b0).",
        "options": [
          "(A) 1",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "1",
        "solution": "sin(\u03b8) = cos(90\u00b0 - \u03b8). Since angle pairs are complementary, sin(\u03b8) + cos(90\u00b0-\u03b8) simplifies to 1."
      },
      {
        "id": "trigonometry-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Trigonometry Q2: Evaluate sin(60\u00b0) + cos(30\u00b0).",
        "options": [
          "(A) 1",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "1",
        "solution": "sin(\u03b8) = cos(90\u00b0 - \u03b8). Since angle pairs are complementary, sin(\u03b8) + cos(90\u00b0-\u03b8) simplifies to 1."
      },
      {
        "id": "trigonometry-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Trigonometry Q3: Evaluate sin(30\u00b0) + cos(60\u00b0).",
        "options": [
          "(A) 1",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "1",
        "solution": "sin(\u03b8) = cos(90\u00b0 - \u03b8). Since angle pairs are complementary, sin(\u03b8) + cos(90\u00b0-\u03b8) simplifies to 1."
      },
      {
        "id": "trigonometry-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Trigonometry Q4: Evaluate sin(45\u00b0) + cos(45\u00b0).",
        "options": [
          "(A) 1",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "1",
        "solution": "sin(\u03b8) = cos(90\u00b0 - \u03b8). Since angle pairs are complementary, sin(\u03b8) + cos(90\u00b0-\u03b8) simplifies to 1."
      },
      {
        "id": "trigonometry-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Trigonometry Q5: Evaluate sin(60\u00b0) + cos(30\u00b0).",
        "options": [
          "(A) 1",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "1",
        "solution": "sin(\u03b8) = cos(90\u00b0 - \u03b8). Since angle pairs are complementary, sin(\u03b8) + cos(90\u00b0-\u03b8) simplifies to 1."
      },
      {
        "id": "trigonometry-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Trigonometry Q6: Evaluate sin(30\u00b0) + cos(60\u00b0).",
        "options": null,
        "answer": "1",
        "solution": "sin(\u03b8) = cos(90\u00b0 - \u03b8). Since angle pairs are complementary, sin(\u03b8) + cos(90\u00b0-\u03b8) simplifies to 1."
      },
      {
        "id": "trigonometry-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Trigonometry Q7: Evaluate sin(45\u00b0) + cos(45\u00b0).",
        "options": null,
        "answer": "1",
        "solution": "sin(\u03b8) = cos(90\u00b0 - \u03b8). Since angle pairs are complementary, sin(\u03b8) + cos(90\u00b0-\u03b8) simplifies to 1."
      },
      {
        "id": "trigonometry-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Trigonometry Q8: Evaluate sin(60\u00b0) + cos(30\u00b0).",
        "options": null,
        "answer": "1",
        "solution": "sin(\u03b8) = cos(90\u00b0 - \u03b8). Since angle pairs are complementary, sin(\u03b8) + cos(90\u00b0-\u03b8) simplifies to 1."
      },
      {
        "id": "trigonometry-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Trigonometry Q9: Evaluate sin(30\u00b0) + cos(60\u00b0).",
        "options": null,
        "answer": "1",
        "solution": "sin(\u03b8) = cos(90\u00b0 - \u03b8). Since angle pairs are complementary, sin(\u03b8) + cos(90\u00b0-\u03b8) simplifies to 1."
      },
      {
        "id": "trigonometry-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Trigonometry Q10: Evaluate sin(45\u00b0) + cos(45\u00b0).",
        "options": null,
        "answer": "1",
        "solution": "sin(\u03b8) = cos(90\u00b0 - \u03b8). Since angle pairs are complementary, sin(\u03b8) + cos(90\u00b0-\u03b8) simplifies to 1."
      },
      {
        "id": "trigonometry-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Trigonometry Q11: Evaluate sin(60\u00b0) + cos(30\u00b0).",
        "options": null,
        "answer": "1",
        "solution": "sin(\u03b8) = cos(90\u00b0 - \u03b8). Since angle pairs are complementary, sin(\u03b8) + cos(90\u00b0-\u03b8) simplifies to 1."
      },
      {
        "id": "trigonometry-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Trigonometry Q12: Evaluate sin(30\u00b0) + cos(60\u00b0).",
        "options": null,
        "answer": "1",
        "solution": "sin(\u03b8) = cos(90\u00b0 - \u03b8). Since angle pairs are complementary, sin(\u03b8) + cos(90\u00b0-\u03b8) simplifies to 1."
      },
      {
        "id": "trigonometry-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Trigonometry Q13: Evaluate sin(45\u00b0) + cos(45\u00b0).",
        "options": null,
        "answer": "1",
        "solution": "sin(\u03b8) = cos(90\u00b0 - \u03b8). Since angle pairs are complementary, sin(\u03b8) + cos(90\u00b0-\u03b8) simplifies to 1."
      },
      {
        "id": "trigonometry-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Trigonometry Q14: Evaluate sin(60\u00b0) + cos(30\u00b0).",
        "options": null,
        "answer": "1",
        "solution": "sin(\u03b8) = cos(90\u00b0 - \u03b8). Since angle pairs are complementary, sin(\u03b8) + cos(90\u00b0-\u03b8) simplifies to 1."
      },
      {
        "id": "trigonometry-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Trigonometry Q15: Evaluate sin(30\u00b0) + cos(60\u00b0).",
        "options": null,
        "answer": "1",
        "solution": "sin(\u03b8) = cos(90\u00b0 - \u03b8). Since angle pairs are complementary, sin(\u03b8) + cos(90\u00b0-\u03b8) simplifies to 1."
      },
      {
        "id": "trigonometry-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Trigonometry Q16: Evaluate sin(45\u00b0) + cos(45\u00b0).",
        "options": null,
        "answer": "1",
        "solution": "sin(\u03b8) = cos(90\u00b0 - \u03b8). Since angle pairs are complementary, sin(\u03b8) + cos(90\u00b0-\u03b8) simplifies to 1."
      },
      {
        "id": "trigonometry-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Trigonometry Q17: Evaluate sin(60\u00b0) + cos(30\u00b0).",
        "options": null,
        "answer": "1",
        "solution": "sin(\u03b8) = cos(90\u00b0 - \u03b8). Since angle pairs are complementary, sin(\u03b8) + cos(90\u00b0-\u03b8) simplifies to 1."
      },
      {
        "id": "trigonometry-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Trigonometry Q18: Evaluate sin(30\u00b0) + cos(60\u00b0).",
        "options": null,
        "answer": "1",
        "solution": "sin(\u03b8) = cos(90\u00b0 - \u03b8). Since angle pairs are complementary, sin(\u03b8) + cos(90\u00b0-\u03b8) simplifies to 1."
      },
      {
        "id": "trigonometry-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Trigonometry Q19: Evaluate sin(45\u00b0) + cos(45\u00b0).",
        "options": null,
        "answer": "1",
        "solution": "sin(\u03b8) = cos(90\u00b0 - \u03b8). Since angle pairs are complementary, sin(\u03b8) + cos(90\u00b0-\u03b8) simplifies to 1."
      },
      {
        "id": "trigonometry-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Trigonometry Q20: Evaluate sin(60\u00b0) + cos(30\u00b0).",
        "options": null,
        "answer": "1",
        "solution": "sin(\u03b8) = cos(90\u00b0 - \u03b8). Since angle pairs are complementary, sin(\u03b8) + cos(90\u00b0-\u03b8) simplifies to 1."
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
        "question": "Class 10 Some Applications of Trigonometry Q1: Solve the NCERT problem for Some Applications of Trigonometry involving standard formulas.",
        "options": [
          "(A) Result Q1",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Result Q1",
        "solution": "Apply standard Some Applications of Trigonometry formula step-by-step to compute final answer."
      },
      {
        "id": "applications-of-trigonometry-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Some Applications of Trigonometry Q2: Solve the NCERT problem for Some Applications of Trigonometry involving standard formulas.",
        "options": [
          "(A) Result Q2",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Result Q2",
        "solution": "Apply standard Some Applications of Trigonometry formula step-by-step to compute final answer."
      },
      {
        "id": "applications-of-trigonometry-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Some Applications of Trigonometry Q3: Solve the NCERT problem for Some Applications of Trigonometry involving standard formulas.",
        "options": [
          "(A) Result Q3",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Result Q3",
        "solution": "Apply standard Some Applications of Trigonometry formula step-by-step to compute final answer."
      },
      {
        "id": "applications-of-trigonometry-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Some Applications of Trigonometry Q4: Solve the NCERT problem for Some Applications of Trigonometry involving standard formulas.",
        "options": [
          "(A) Result Q4",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Result Q4",
        "solution": "Apply standard Some Applications of Trigonometry formula step-by-step to compute final answer."
      },
      {
        "id": "applications-of-trigonometry-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Some Applications of Trigonometry Q5: Solve the NCERT problem for Some Applications of Trigonometry involving standard formulas.",
        "options": [
          "(A) Result Q5",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Result Q5",
        "solution": "Apply standard Some Applications of Trigonometry formula step-by-step to compute final answer."
      },
      {
        "id": "applications-of-trigonometry-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Some Applications of Trigonometry Q6: Solve the NCERT problem for Some Applications of Trigonometry involving standard formulas.",
        "options": null,
        "answer": "Result Q6",
        "solution": "Apply standard Some Applications of Trigonometry formula step-by-step to compute final answer."
      },
      {
        "id": "applications-of-trigonometry-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Some Applications of Trigonometry Q7: Solve the NCERT problem for Some Applications of Trigonometry involving standard formulas.",
        "options": null,
        "answer": "Result Q7",
        "solution": "Apply standard Some Applications of Trigonometry formula step-by-step to compute final answer."
      },
      {
        "id": "applications-of-trigonometry-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Some Applications of Trigonometry Q8: Solve the NCERT problem for Some Applications of Trigonometry involving standard formulas.",
        "options": null,
        "answer": "Result Q8",
        "solution": "Apply standard Some Applications of Trigonometry formula step-by-step to compute final answer."
      },
      {
        "id": "applications-of-trigonometry-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Some Applications of Trigonometry Q9: Solve the NCERT problem for Some Applications of Trigonometry involving standard formulas.",
        "options": null,
        "answer": "Result Q9",
        "solution": "Apply standard Some Applications of Trigonometry formula step-by-step to compute final answer."
      },
      {
        "id": "applications-of-trigonometry-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Some Applications of Trigonometry Q10: Solve the NCERT problem for Some Applications of Trigonometry involving standard formulas.",
        "options": null,
        "answer": "Result Q10",
        "solution": "Apply standard Some Applications of Trigonometry formula step-by-step to compute final answer."
      },
      {
        "id": "applications-of-trigonometry-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Some Applications of Trigonometry Q11: Solve the NCERT problem for Some Applications of Trigonometry involving standard formulas.",
        "options": null,
        "answer": "Result Q11",
        "solution": "Apply standard Some Applications of Trigonometry formula step-by-step to compute final answer."
      },
      {
        "id": "applications-of-trigonometry-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Some Applications of Trigonometry Q12: Solve the NCERT problem for Some Applications of Trigonometry involving standard formulas.",
        "options": null,
        "answer": "Result Q12",
        "solution": "Apply standard Some Applications of Trigonometry formula step-by-step to compute final answer."
      },
      {
        "id": "applications-of-trigonometry-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Some Applications of Trigonometry Q13: Solve the NCERT problem for Some Applications of Trigonometry involving standard formulas.",
        "options": null,
        "answer": "Result Q13",
        "solution": "Apply standard Some Applications of Trigonometry formula step-by-step to compute final answer."
      },
      {
        "id": "applications-of-trigonometry-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Some Applications of Trigonometry Q14: Solve the NCERT problem for Some Applications of Trigonometry involving standard formulas.",
        "options": null,
        "answer": "Result Q14",
        "solution": "Apply standard Some Applications of Trigonometry formula step-by-step to compute final answer."
      },
      {
        "id": "applications-of-trigonometry-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Some Applications of Trigonometry Q15: Solve the NCERT problem for Some Applications of Trigonometry involving standard formulas.",
        "options": null,
        "answer": "Result Q15",
        "solution": "Apply standard Some Applications of Trigonometry formula step-by-step to compute final answer."
      },
      {
        "id": "applications-of-trigonometry-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Some Applications of Trigonometry Q16: Solve the NCERT problem for Some Applications of Trigonometry involving standard formulas.",
        "options": null,
        "answer": "Result Q16",
        "solution": "Apply standard Some Applications of Trigonometry formula step-by-step to compute final answer."
      },
      {
        "id": "applications-of-trigonometry-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Some Applications of Trigonometry Q17: Solve the NCERT problem for Some Applications of Trigonometry involving standard formulas.",
        "options": null,
        "answer": "Result Q17",
        "solution": "Apply standard Some Applications of Trigonometry formula step-by-step to compute final answer."
      },
      {
        "id": "applications-of-trigonometry-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Some Applications of Trigonometry Q18: Solve the NCERT problem for Some Applications of Trigonometry involving standard formulas.",
        "options": null,
        "answer": "Result Q18",
        "solution": "Apply standard Some Applications of Trigonometry formula step-by-step to compute final answer."
      },
      {
        "id": "applications-of-trigonometry-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Some Applications of Trigonometry Q19: Solve the NCERT problem for Some Applications of Trigonometry involving standard formulas.",
        "options": null,
        "answer": "Result Q19",
        "solution": "Apply standard Some Applications of Trigonometry formula step-by-step to compute final answer."
      },
      {
        "id": "applications-of-trigonometry-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Some Applications of Trigonometry Q20: Solve the NCERT problem for Some Applications of Trigonometry involving standard formulas.",
        "options": null,
        "answer": "Result Q20",
        "solution": "Apply standard Some Applications of Trigonometry formula step-by-step to compute final answer."
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
        "question": "Class 10 Circles Q1: Tangent TP drawn from external point T to circle with radius 5 cm has length 12 cm. Find OT.",
        "options": [
          "(A) 13 cm",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "13 cm",
        "solution": "\u2220OPT = 90\u00b0. By Pythagoras theorem: OT\u00b2 = OP\u00b2 + PT\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169 \u21d2 OT = 13 cm."
      },
      {
        "id": "circles-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Circles Q2: Tangent TP drawn from external point T to circle with radius 5 cm has length 12 cm. Find OT.",
        "options": [
          "(A) 13 cm",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "13 cm",
        "solution": "\u2220OPT = 90\u00b0. By Pythagoras theorem: OT\u00b2 = OP\u00b2 + PT\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169 \u21d2 OT = 13 cm."
      },
      {
        "id": "circles-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Circles Q3: Tangent TP drawn from external point T to circle with radius 5 cm has length 12 cm. Find OT.",
        "options": [
          "(A) 13 cm",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "13 cm",
        "solution": "\u2220OPT = 90\u00b0. By Pythagoras theorem: OT\u00b2 = OP\u00b2 + PT\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169 \u21d2 OT = 13 cm."
      },
      {
        "id": "circles-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Circles Q4: Tangent TP drawn from external point T to circle with radius 5 cm has length 12 cm. Find OT.",
        "options": [
          "(A) 13 cm",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "13 cm",
        "solution": "\u2220OPT = 90\u00b0. By Pythagoras theorem: OT\u00b2 = OP\u00b2 + PT\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169 \u21d2 OT = 13 cm."
      },
      {
        "id": "circles-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Circles Q5: Tangent TP drawn from external point T to circle with radius 5 cm has length 12 cm. Find OT.",
        "options": [
          "(A) 13 cm",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "13 cm",
        "solution": "\u2220OPT = 90\u00b0. By Pythagoras theorem: OT\u00b2 = OP\u00b2 + PT\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169 \u21d2 OT = 13 cm."
      },
      {
        "id": "circles-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Circles Q6: Tangent TP drawn from external point T to circle with radius 5 cm has length 12 cm. Find OT.",
        "options": null,
        "answer": "13 cm",
        "solution": "\u2220OPT = 90\u00b0. By Pythagoras theorem: OT\u00b2 = OP\u00b2 + PT\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169 \u21d2 OT = 13 cm."
      },
      {
        "id": "circles-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Circles Q7: Tangent TP drawn from external point T to circle with radius 5 cm has length 12 cm. Find OT.",
        "options": null,
        "answer": "13 cm",
        "solution": "\u2220OPT = 90\u00b0. By Pythagoras theorem: OT\u00b2 = OP\u00b2 + PT\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169 \u21d2 OT = 13 cm."
      },
      {
        "id": "circles-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Circles Q8: Tangent TP drawn from external point T to circle with radius 5 cm has length 12 cm. Find OT.",
        "options": null,
        "answer": "13 cm",
        "solution": "\u2220OPT = 90\u00b0. By Pythagoras theorem: OT\u00b2 = OP\u00b2 + PT\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169 \u21d2 OT = 13 cm."
      },
      {
        "id": "circles-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Circles Q9: Tangent TP drawn from external point T to circle with radius 5 cm has length 12 cm. Find OT.",
        "options": null,
        "answer": "13 cm",
        "solution": "\u2220OPT = 90\u00b0. By Pythagoras theorem: OT\u00b2 = OP\u00b2 + PT\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169 \u21d2 OT = 13 cm."
      },
      {
        "id": "circles-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Circles Q10: Tangent TP drawn from external point T to circle with radius 5 cm has length 12 cm. Find OT.",
        "options": null,
        "answer": "13 cm",
        "solution": "\u2220OPT = 90\u00b0. By Pythagoras theorem: OT\u00b2 = OP\u00b2 + PT\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169 \u21d2 OT = 13 cm."
      },
      {
        "id": "circles-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Circles Q11: Tangent TP drawn from external point T to circle with radius 5 cm has length 12 cm. Find OT.",
        "options": null,
        "answer": "13 cm",
        "solution": "\u2220OPT = 90\u00b0. By Pythagoras theorem: OT\u00b2 = OP\u00b2 + PT\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169 \u21d2 OT = 13 cm."
      },
      {
        "id": "circles-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Circles Q12: Tangent TP drawn from external point T to circle with radius 5 cm has length 12 cm. Find OT.",
        "options": null,
        "answer": "13 cm",
        "solution": "\u2220OPT = 90\u00b0. By Pythagoras theorem: OT\u00b2 = OP\u00b2 + PT\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169 \u21d2 OT = 13 cm."
      },
      {
        "id": "circles-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Circles Q13: Tangent TP drawn from external point T to circle with radius 5 cm has length 12 cm. Find OT.",
        "options": null,
        "answer": "13 cm",
        "solution": "\u2220OPT = 90\u00b0. By Pythagoras theorem: OT\u00b2 = OP\u00b2 + PT\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169 \u21d2 OT = 13 cm."
      },
      {
        "id": "circles-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Circles Q14: Tangent TP drawn from external point T to circle with radius 5 cm has length 12 cm. Find OT.",
        "options": null,
        "answer": "13 cm",
        "solution": "\u2220OPT = 90\u00b0. By Pythagoras theorem: OT\u00b2 = OP\u00b2 + PT\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169 \u21d2 OT = 13 cm."
      },
      {
        "id": "circles-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Circles Q15: Tangent TP drawn from external point T to circle with radius 5 cm has length 12 cm. Find OT.",
        "options": null,
        "answer": "13 cm",
        "solution": "\u2220OPT = 90\u00b0. By Pythagoras theorem: OT\u00b2 = OP\u00b2 + PT\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169 \u21d2 OT = 13 cm."
      },
      {
        "id": "circles-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Circles Q16: Tangent TP drawn from external point T to circle with radius 5 cm has length 12 cm. Find OT.",
        "options": null,
        "answer": "13 cm",
        "solution": "\u2220OPT = 90\u00b0. By Pythagoras theorem: OT\u00b2 = OP\u00b2 + PT\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169 \u21d2 OT = 13 cm."
      },
      {
        "id": "circles-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Circles Q17: Tangent TP drawn from external point T to circle with radius 5 cm has length 12 cm. Find OT.",
        "options": null,
        "answer": "13 cm",
        "solution": "\u2220OPT = 90\u00b0. By Pythagoras theorem: OT\u00b2 = OP\u00b2 + PT\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169 \u21d2 OT = 13 cm."
      },
      {
        "id": "circles-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Circles Q18: Tangent TP drawn from external point T to circle with radius 5 cm has length 12 cm. Find OT.",
        "options": null,
        "answer": "13 cm",
        "solution": "\u2220OPT = 90\u00b0. By Pythagoras theorem: OT\u00b2 = OP\u00b2 + PT\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169 \u21d2 OT = 13 cm."
      },
      {
        "id": "circles-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Circles Q19: Tangent TP drawn from external point T to circle with radius 5 cm has length 12 cm. Find OT.",
        "options": null,
        "answer": "13 cm",
        "solution": "\u2220OPT = 90\u00b0. By Pythagoras theorem: OT\u00b2 = OP\u00b2 + PT\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169 \u21d2 OT = 13 cm."
      },
      {
        "id": "circles-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Circles Q20: Tangent TP drawn from external point T to circle with radius 5 cm has length 12 cm. Find OT.",
        "options": null,
        "answer": "13 cm",
        "solution": "\u2220OPT = 90\u00b0. By Pythagoras theorem: OT\u00b2 = OP\u00b2 + PT\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169 \u21d2 OT = 13 cm."
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
        "question": "Class 10 Areas Related to Circles Q1: Solve the NCERT problem for Areas Related to Circles involving standard formulas.",
        "options": [
          "(A) Result Q1",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Result Q1",
        "solution": "Apply standard Areas Related to Circles formula step-by-step to compute final answer."
      },
      {
        "id": "areas-related-to-circles-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Areas Related to Circles Q2: Solve the NCERT problem for Areas Related to Circles involving standard formulas.",
        "options": [
          "(A) Result Q2",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Result Q2",
        "solution": "Apply standard Areas Related to Circles formula step-by-step to compute final answer."
      },
      {
        "id": "areas-related-to-circles-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Areas Related to Circles Q3: Solve the NCERT problem for Areas Related to Circles involving standard formulas.",
        "options": [
          "(A) Result Q3",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Result Q3",
        "solution": "Apply standard Areas Related to Circles formula step-by-step to compute final answer."
      },
      {
        "id": "areas-related-to-circles-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Areas Related to Circles Q4: Solve the NCERT problem for Areas Related to Circles involving standard formulas.",
        "options": [
          "(A) Result Q4",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Result Q4",
        "solution": "Apply standard Areas Related to Circles formula step-by-step to compute final answer."
      },
      {
        "id": "areas-related-to-circles-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Areas Related to Circles Q5: Solve the NCERT problem for Areas Related to Circles involving standard formulas.",
        "options": [
          "(A) Result Q5",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Result Q5",
        "solution": "Apply standard Areas Related to Circles formula step-by-step to compute final answer."
      },
      {
        "id": "areas-related-to-circles-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Areas Related to Circles Q6: Solve the NCERT problem for Areas Related to Circles involving standard formulas.",
        "options": null,
        "answer": "Result Q6",
        "solution": "Apply standard Areas Related to Circles formula step-by-step to compute final answer."
      },
      {
        "id": "areas-related-to-circles-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Areas Related to Circles Q7: Solve the NCERT problem for Areas Related to Circles involving standard formulas.",
        "options": null,
        "answer": "Result Q7",
        "solution": "Apply standard Areas Related to Circles formula step-by-step to compute final answer."
      },
      {
        "id": "areas-related-to-circles-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Areas Related to Circles Q8: Solve the NCERT problem for Areas Related to Circles involving standard formulas.",
        "options": null,
        "answer": "Result Q8",
        "solution": "Apply standard Areas Related to Circles formula step-by-step to compute final answer."
      },
      {
        "id": "areas-related-to-circles-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Areas Related to Circles Q9: Solve the NCERT problem for Areas Related to Circles involving standard formulas.",
        "options": null,
        "answer": "Result Q9",
        "solution": "Apply standard Areas Related to Circles formula step-by-step to compute final answer."
      },
      {
        "id": "areas-related-to-circles-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Areas Related to Circles Q10: Solve the NCERT problem for Areas Related to Circles involving standard formulas.",
        "options": null,
        "answer": "Result Q10",
        "solution": "Apply standard Areas Related to Circles formula step-by-step to compute final answer."
      },
      {
        "id": "areas-related-to-circles-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Areas Related to Circles Q11: Solve the NCERT problem for Areas Related to Circles involving standard formulas.",
        "options": null,
        "answer": "Result Q11",
        "solution": "Apply standard Areas Related to Circles formula step-by-step to compute final answer."
      },
      {
        "id": "areas-related-to-circles-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Areas Related to Circles Q12: Solve the NCERT problem for Areas Related to Circles involving standard formulas.",
        "options": null,
        "answer": "Result Q12",
        "solution": "Apply standard Areas Related to Circles formula step-by-step to compute final answer."
      },
      {
        "id": "areas-related-to-circles-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Areas Related to Circles Q13: Solve the NCERT problem for Areas Related to Circles involving standard formulas.",
        "options": null,
        "answer": "Result Q13",
        "solution": "Apply standard Areas Related to Circles formula step-by-step to compute final answer."
      },
      {
        "id": "areas-related-to-circles-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Areas Related to Circles Q14: Solve the NCERT problem for Areas Related to Circles involving standard formulas.",
        "options": null,
        "answer": "Result Q14",
        "solution": "Apply standard Areas Related to Circles formula step-by-step to compute final answer."
      },
      {
        "id": "areas-related-to-circles-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Areas Related to Circles Q15: Solve the NCERT problem for Areas Related to Circles involving standard formulas.",
        "options": null,
        "answer": "Result Q15",
        "solution": "Apply standard Areas Related to Circles formula step-by-step to compute final answer."
      },
      {
        "id": "areas-related-to-circles-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Areas Related to Circles Q16: Solve the NCERT problem for Areas Related to Circles involving standard formulas.",
        "options": null,
        "answer": "Result Q16",
        "solution": "Apply standard Areas Related to Circles formula step-by-step to compute final answer."
      },
      {
        "id": "areas-related-to-circles-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Areas Related to Circles Q17: Solve the NCERT problem for Areas Related to Circles involving standard formulas.",
        "options": null,
        "answer": "Result Q17",
        "solution": "Apply standard Areas Related to Circles formula step-by-step to compute final answer."
      },
      {
        "id": "areas-related-to-circles-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Areas Related to Circles Q18: Solve the NCERT problem for Areas Related to Circles involving standard formulas.",
        "options": null,
        "answer": "Result Q18",
        "solution": "Apply standard Areas Related to Circles formula step-by-step to compute final answer."
      },
      {
        "id": "areas-related-to-circles-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Areas Related to Circles Q19: Solve the NCERT problem for Areas Related to Circles involving standard formulas.",
        "options": null,
        "answer": "Result Q19",
        "solution": "Apply standard Areas Related to Circles formula step-by-step to compute final answer."
      },
      {
        "id": "areas-related-to-circles-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Areas Related to Circles Q20: Solve the NCERT problem for Areas Related to Circles involving standard formulas.",
        "options": null,
        "answer": "Result Q20",
        "solution": "Apply standard Areas Related to Circles formula step-by-step to compute final answer."
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
        "question": "Class 10 Surface Areas and Volumes Q1: Solve the NCERT problem for Surface Areas and Volumes involving standard formulas.",
        "options": [
          "(A) Result Q1",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Result Q1",
        "solution": "Apply standard Surface Areas and Volumes formula step-by-step to compute final answer."
      },
      {
        "id": "surface-areas-and-volumes-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Surface Areas and Volumes Q2: Solve the NCERT problem for Surface Areas and Volumes involving standard formulas.",
        "options": [
          "(A) Result Q2",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Result Q2",
        "solution": "Apply standard Surface Areas and Volumes formula step-by-step to compute final answer."
      },
      {
        "id": "surface-areas-and-volumes-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Surface Areas and Volumes Q3: Solve the NCERT problem for Surface Areas and Volumes involving standard formulas.",
        "options": [
          "(A) Result Q3",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Result Q3",
        "solution": "Apply standard Surface Areas and Volumes formula step-by-step to compute final answer."
      },
      {
        "id": "surface-areas-and-volumes-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Surface Areas and Volumes Q4: Solve the NCERT problem for Surface Areas and Volumes involving standard formulas.",
        "options": [
          "(A) Result Q4",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Result Q4",
        "solution": "Apply standard Surface Areas and Volumes formula step-by-step to compute final answer."
      },
      {
        "id": "surface-areas-and-volumes-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Surface Areas and Volumes Q5: Solve the NCERT problem for Surface Areas and Volumes involving standard formulas.",
        "options": [
          "(A) Result Q5",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "Result Q5",
        "solution": "Apply standard Surface Areas and Volumes formula step-by-step to compute final answer."
      },
      {
        "id": "surface-areas-and-volumes-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Surface Areas and Volumes Q6: Solve the NCERT problem for Surface Areas and Volumes involving standard formulas.",
        "options": null,
        "answer": "Result Q6",
        "solution": "Apply standard Surface Areas and Volumes formula step-by-step to compute final answer."
      },
      {
        "id": "surface-areas-and-volumes-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Surface Areas and Volumes Q7: Solve the NCERT problem for Surface Areas and Volumes involving standard formulas.",
        "options": null,
        "answer": "Result Q7",
        "solution": "Apply standard Surface Areas and Volumes formula step-by-step to compute final answer."
      },
      {
        "id": "surface-areas-and-volumes-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Surface Areas and Volumes Q8: Solve the NCERT problem for Surface Areas and Volumes involving standard formulas.",
        "options": null,
        "answer": "Result Q8",
        "solution": "Apply standard Surface Areas and Volumes formula step-by-step to compute final answer."
      },
      {
        "id": "surface-areas-and-volumes-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Surface Areas and Volumes Q9: Solve the NCERT problem for Surface Areas and Volumes involving standard formulas.",
        "options": null,
        "answer": "Result Q9",
        "solution": "Apply standard Surface Areas and Volumes formula step-by-step to compute final answer."
      },
      {
        "id": "surface-areas-and-volumes-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Surface Areas and Volumes Q10: Solve the NCERT problem for Surface Areas and Volumes involving standard formulas.",
        "options": null,
        "answer": "Result Q10",
        "solution": "Apply standard Surface Areas and Volumes formula step-by-step to compute final answer."
      },
      {
        "id": "surface-areas-and-volumes-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Surface Areas and Volumes Q11: Solve the NCERT problem for Surface Areas and Volumes involving standard formulas.",
        "options": null,
        "answer": "Result Q11",
        "solution": "Apply standard Surface Areas and Volumes formula step-by-step to compute final answer."
      },
      {
        "id": "surface-areas-and-volumes-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Surface Areas and Volumes Q12: Solve the NCERT problem for Surface Areas and Volumes involving standard formulas.",
        "options": null,
        "answer": "Result Q12",
        "solution": "Apply standard Surface Areas and Volumes formula step-by-step to compute final answer."
      },
      {
        "id": "surface-areas-and-volumes-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Surface Areas and Volumes Q13: Solve the NCERT problem for Surface Areas and Volumes involving standard formulas.",
        "options": null,
        "answer": "Result Q13",
        "solution": "Apply standard Surface Areas and Volumes formula step-by-step to compute final answer."
      },
      {
        "id": "surface-areas-and-volumes-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Surface Areas and Volumes Q14: Solve the NCERT problem for Surface Areas and Volumes involving standard formulas.",
        "options": null,
        "answer": "Result Q14",
        "solution": "Apply standard Surface Areas and Volumes formula step-by-step to compute final answer."
      },
      {
        "id": "surface-areas-and-volumes-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Surface Areas and Volumes Q15: Solve the NCERT problem for Surface Areas and Volumes involving standard formulas.",
        "options": null,
        "answer": "Result Q15",
        "solution": "Apply standard Surface Areas and Volumes formula step-by-step to compute final answer."
      },
      {
        "id": "surface-areas-and-volumes-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Surface Areas and Volumes Q16: Solve the NCERT problem for Surface Areas and Volumes involving standard formulas.",
        "options": null,
        "answer": "Result Q16",
        "solution": "Apply standard Surface Areas and Volumes formula step-by-step to compute final answer."
      },
      {
        "id": "surface-areas-and-volumes-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Surface Areas and Volumes Q17: Solve the NCERT problem for Surface Areas and Volumes involving standard formulas.",
        "options": null,
        "answer": "Result Q17",
        "solution": "Apply standard Surface Areas and Volumes formula step-by-step to compute final answer."
      },
      {
        "id": "surface-areas-and-volumes-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Surface Areas and Volumes Q18: Solve the NCERT problem for Surface Areas and Volumes involving standard formulas.",
        "options": null,
        "answer": "Result Q18",
        "solution": "Apply standard Surface Areas and Volumes formula step-by-step to compute final answer."
      },
      {
        "id": "surface-areas-and-volumes-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Surface Areas and Volumes Q19: Solve the NCERT problem for Surface Areas and Volumes involving standard formulas.",
        "options": null,
        "answer": "Result Q19",
        "solution": "Apply standard Surface Areas and Volumes formula step-by-step to compute final answer."
      },
      {
        "id": "surface-areas-and-volumes-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Surface Areas and Volumes Q20: Solve the NCERT problem for Surface Areas and Volumes involving standard formulas.",
        "options": null,
        "answer": "Result Q20",
        "solution": "Apply standard Surface Areas and Volumes formula step-by-step to compute final answer."
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
        "question": "Class 10 Statistics Q1: If mean of 1, 3, 5, 7, 9 is 15, find 1.",
        "options": [
          "(A) 11",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "11",
        "solution": "Mean = (5x + 20)/5 = x + 4 = 15 \u21d2 x = 11."
      },
      {
        "id": "statistics-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Statistics Q2: If mean of 2, 4, 6, 8, 10 is 15, find 2.",
        "options": [
          "(A) 11",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "11",
        "solution": "Mean = (5x + 20)/5 = x + 4 = 15 \u21d2 x = 11."
      },
      {
        "id": "statistics-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Statistics Q3: If mean of 3, 5, 7, 9, 11 is 15, find 3.",
        "options": [
          "(A) 11",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "11",
        "solution": "Mean = (5x + 20)/5 = x + 4 = 15 \u21d2 x = 11."
      },
      {
        "id": "statistics-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Statistics Q4: If mean of 4, 6, 8, 10, 12 is 15, find 4.",
        "options": [
          "(A) 11",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "11",
        "solution": "Mean = (5x + 20)/5 = x + 4 = 15 \u21d2 x = 11."
      },
      {
        "id": "statistics-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Statistics Q5: If mean of 5, 7, 9, 11, 13 is 15, find 5.",
        "options": [
          "(A) 11",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "11",
        "solution": "Mean = (5x + 20)/5 = x + 4 = 15 \u21d2 x = 11."
      },
      {
        "id": "statistics-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Statistics Q6: If mean of 6, 8, 10, 12, 14 is 15, find 6.",
        "options": null,
        "answer": "11",
        "solution": "Mean = (5x + 20)/5 = x + 4 = 15 \u21d2 x = 11."
      },
      {
        "id": "statistics-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Statistics Q7: If mean of 7, 9, 11, 13, 15 is 15, find 7.",
        "options": null,
        "answer": "11",
        "solution": "Mean = (5x + 20)/5 = x + 4 = 15 \u21d2 x = 11."
      },
      {
        "id": "statistics-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Statistics Q8: If mean of 8, 10, 12, 14, 16 is 15, find 8.",
        "options": null,
        "answer": "11",
        "solution": "Mean = (5x + 20)/5 = x + 4 = 15 \u21d2 x = 11."
      },
      {
        "id": "statistics-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Statistics Q9: If mean of 9, 11, 13, 15, 17 is 15, find 9.",
        "options": null,
        "answer": "11",
        "solution": "Mean = (5x + 20)/5 = x + 4 = 15 \u21d2 x = 11."
      },
      {
        "id": "statistics-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Statistics Q10: If mean of 10, 12, 14, 16, 18 is 15, find 10.",
        "options": null,
        "answer": "11",
        "solution": "Mean = (5x + 20)/5 = x + 4 = 15 \u21d2 x = 11."
      },
      {
        "id": "statistics-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Statistics Q11: If mean of 11, 13, 15, 17, 19 is 15, find 11.",
        "options": null,
        "answer": "11",
        "solution": "Mean = (5x + 20)/5 = x + 4 = 15 \u21d2 x = 11."
      },
      {
        "id": "statistics-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Statistics Q12: If mean of 12, 14, 16, 18, 20 is 15, find 12.",
        "options": null,
        "answer": "11",
        "solution": "Mean = (5x + 20)/5 = x + 4 = 15 \u21d2 x = 11."
      },
      {
        "id": "statistics-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Statistics Q13: If mean of 13, 15, 17, 19, 21 is 15, find 13.",
        "options": null,
        "answer": "11",
        "solution": "Mean = (5x + 20)/5 = x + 4 = 15 \u21d2 x = 11."
      },
      {
        "id": "statistics-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Statistics Q14: If mean of 14, 16, 18, 20, 22 is 15, find 14.",
        "options": null,
        "answer": "11",
        "solution": "Mean = (5x + 20)/5 = x + 4 = 15 \u21d2 x = 11."
      },
      {
        "id": "statistics-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Statistics Q15: If mean of 15, 17, 19, 21, 23 is 15, find 15.",
        "options": null,
        "answer": "11",
        "solution": "Mean = (5x + 20)/5 = x + 4 = 15 \u21d2 x = 11."
      },
      {
        "id": "statistics-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Statistics Q16: If mean of 16, 18, 20, 22, 24 is 15, find 16.",
        "options": null,
        "answer": "11",
        "solution": "Mean = (5x + 20)/5 = x + 4 = 15 \u21d2 x = 11."
      },
      {
        "id": "statistics-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Statistics Q17: If mean of 17, 19, 21, 23, 25 is 15, find 17.",
        "options": null,
        "answer": "11",
        "solution": "Mean = (5x + 20)/5 = x + 4 = 15 \u21d2 x = 11."
      },
      {
        "id": "statistics-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Statistics Q18: If mean of 18, 20, 22, 24, 26 is 15, find 18.",
        "options": null,
        "answer": "11",
        "solution": "Mean = (5x + 20)/5 = x + 4 = 15 \u21d2 x = 11."
      },
      {
        "id": "statistics-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Statistics Q19: If mean of 19, 21, 23, 25, 27 is 15, find 19.",
        "options": null,
        "answer": "11",
        "solution": "Mean = (5x + 20)/5 = x + 4 = 15 \u21d2 x = 11."
      },
      {
        "id": "statistics-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Statistics Q20: If mean of 20, 22, 24, 26, 28 is 15, find 20.",
        "options": null,
        "answer": "11",
        "solution": "Mean = (5x + 20)/5 = x + 4 = 15 \u21d2 x = 11."
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
        "question": "Class 10 Probability Q1: A die is thrown once. What is the probability of getting a prime number?",
        "options": [
          "(A) 1/2",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "1/2",
        "solution": "Prime outcomes = {2, 3, 5} (3 outcomes out of 6). P(Prime) = 3/6 = 1/2."
      },
      {
        "id": "probability-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Probability Q2: A die is thrown once. What is the probability of getting a prime number?",
        "options": [
          "(A) 1/2",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "1/2",
        "solution": "Prime outcomes = {2, 3, 5} (3 outcomes out of 6). P(Prime) = 3/6 = 1/2."
      },
      {
        "id": "probability-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Probability Q3: A die is thrown once. What is the probability of getting a prime number?",
        "options": [
          "(A) 1/2",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "1/2",
        "solution": "Prime outcomes = {2, 3, 5} (3 outcomes out of 6). P(Prime) = 3/6 = 1/2."
      },
      {
        "id": "probability-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Probability Q4: A die is thrown once. What is the probability of getting a prime number?",
        "options": [
          "(A) 1/2",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "1/2",
        "solution": "Prime outcomes = {2, 3, 5} (3 outcomes out of 6). P(Prime) = 3/6 = 1/2."
      },
      {
        "id": "probability-5",
        "number": 5,
        "type": "MCQ",
        "marks": 1,
        "question": "Class 10 Probability Q5: A die is thrown once. What is the probability of getting a prime number?",
        "options": [
          "(A) 1/2",
          "(B) Option B",
          "(C) Option C",
          "(D) Option D"
        ],
        "answer": "1/2",
        "solution": "Prime outcomes = {2, 3, 5} (3 outcomes out of 6). P(Prime) = 3/6 = 1/2."
      },
      {
        "id": "probability-6",
        "number": 6,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Probability Q6: A die is thrown once. What is the probability of getting a prime number?",
        "options": null,
        "answer": "1/2",
        "solution": "Prime outcomes = {2, 3, 5} (3 outcomes out of 6). P(Prime) = 3/6 = 1/2."
      },
      {
        "id": "probability-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Probability Q7: A die is thrown once. What is the probability of getting a prime number?",
        "options": null,
        "answer": "1/2",
        "solution": "Prime outcomes = {2, 3, 5} (3 outcomes out of 6). P(Prime) = 3/6 = 1/2."
      },
      {
        "id": "probability-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Probability Q8: A die is thrown once. What is the probability of getting a prime number?",
        "options": null,
        "answer": "1/2",
        "solution": "Prime outcomes = {2, 3, 5} (3 outcomes out of 6). P(Prime) = 3/6 = 1/2."
      },
      {
        "id": "probability-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Probability Q9: A die is thrown once. What is the probability of getting a prime number?",
        "options": null,
        "answer": "1/2",
        "solution": "Prime outcomes = {2, 3, 5} (3 outcomes out of 6). P(Prime) = 3/6 = 1/2."
      },
      {
        "id": "probability-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Probability Q10: A die is thrown once. What is the probability of getting a prime number?",
        "options": null,
        "answer": "1/2",
        "solution": "Prime outcomes = {2, 3, 5} (3 outcomes out of 6). P(Prime) = 3/6 = 1/2."
      },
      {
        "id": "probability-11",
        "number": 11,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Probability Q11: A die is thrown once. What is the probability of getting a prime number?",
        "options": null,
        "answer": "1/2",
        "solution": "Prime outcomes = {2, 3, 5} (3 outcomes out of 6). P(Prime) = 3/6 = 1/2."
      },
      {
        "id": "probability-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Probability Q12: A die is thrown once. What is the probability of getting a prime number?",
        "options": null,
        "answer": "1/2",
        "solution": "Prime outcomes = {2, 3, 5} (3 outcomes out of 6). P(Prime) = 3/6 = 1/2."
      },
      {
        "id": "probability-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Probability Q13: A die is thrown once. What is the probability of getting a prime number?",
        "options": null,
        "answer": "1/2",
        "solution": "Prime outcomes = {2, 3, 5} (3 outcomes out of 6). P(Prime) = 3/6 = 1/2."
      },
      {
        "id": "probability-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Probability Q14: A die is thrown once. What is the probability of getting a prime number?",
        "options": null,
        "answer": "1/2",
        "solution": "Prime outcomes = {2, 3, 5} (3 outcomes out of 6). P(Prime) = 3/6 = 1/2."
      },
      {
        "id": "probability-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Probability Q15: A die is thrown once. What is the probability of getting a prime number?",
        "options": null,
        "answer": "1/2",
        "solution": "Prime outcomes = {2, 3, 5} (3 outcomes out of 6). P(Prime) = 3/6 = 1/2."
      },
      {
        "id": "probability-16",
        "number": 16,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Probability Q16: A die is thrown once. What is the probability of getting a prime number?",
        "options": null,
        "answer": "1/2",
        "solution": "Prime outcomes = {2, 3, 5} (3 outcomes out of 6). P(Prime) = 3/6 = 1/2."
      },
      {
        "id": "probability-17",
        "number": 17,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Probability Q17: A die is thrown once. What is the probability of getting a prime number?",
        "options": null,
        "answer": "1/2",
        "solution": "Prime outcomes = {2, 3, 5} (3 outcomes out of 6). P(Prime) = 3/6 = 1/2."
      },
      {
        "id": "probability-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Probability Q18: A die is thrown once. What is the probability of getting a prime number?",
        "options": null,
        "answer": "1/2",
        "solution": "Prime outcomes = {2, 3, 5} (3 outcomes out of 6). P(Prime) = 3/6 = 1/2."
      },
      {
        "id": "probability-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Probability Q19: A die is thrown once. What is the probability of getting a prime number?",
        "options": null,
        "answer": "1/2",
        "solution": "Prime outcomes = {2, 3, 5} (3 outcomes out of 6). P(Prime) = 3/6 = 1/2."
      },
      {
        "id": "probability-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "Class 10 Probability Q20: A die is thrown once. What is the probability of getting a prime number?",
        "options": null,
        "answer": "1/2",
        "solution": "Prime outcomes = {2, 3, 5} (3 outcomes out of 6). P(Prime) = 3/6 = 1/2."
      }
    ]
  }
];
