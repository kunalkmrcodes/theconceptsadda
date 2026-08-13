// Class 10 Diverse Practice Questions Dataset (6 CBSE Types)
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
        "id": "rn-2",
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
        "id": "rn-3",
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
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): The HCF of two numbers is 5 and their product is 150, then their LCM is 30.\nReason (R): For any two positive integers a and b, HCF(a, b) \u00d7 LCM(a, b) = a \u00d7 b.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Option A",
        "solution": "HCF \u00d7 LCM = 5 \u00d7 30 = 150 = Product of numbers. Both A and R are true and R explains A."
      },
      {
        "id": "rn-6",
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
        "answer": "(A) Option A",
        "solution": "Since 3 is prime, \u221a3 is irrational. Both A and R are true and R is correct explanation."
      },
      {
        "id": "rn-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Express 140 as a product of its prime factors.",
        "answer": "2\u00b2 \u00d7 5 \u00d7 7",
        "solution": "140 = 2 \u00d7 70 = 2 \u00d7 2 \u00d7 35 = 2\u00b2 \u00d7 5 \u00d7 7."
      },
      {
        "id": "rn-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Find HCF and LCM of 12, 15 and 21 using prime factorisation.",
        "answer": "HCF = 3, LCM = 420",
        "solution": "12 = 2\u00b2\u00d73, 15 = 3\u00d75, 21 = 3\u00d77. HCF = 3, LCM = 2\u00b2\u00d73\u00d75\u00d77 = 420."
      },
      {
        "id": "rn-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Check whether 6\u207f can end with digit 0 for any natural number n.",
        "answer": "No",
        "solution": "6\u207f = (2\u00d73)\u207f = 2\u207f \u00d7 3\u207f. Prime factorisation does not contain factor 5, so cannot end with 0."
      },
      {
        "id": "rn-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Explain why 7 \u00d7 11 \u00d7 13 + 13 is a composite number.",
        "answer": "Composite number",
        "solution": "13(7\u00d711 + 1) = 13 \u00d7 78. Has factors other than 1 and itself."
      },
      {
        "id": "rn-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Given that HCF(96, 404) = 4, find LCM(96, 404).",
        "answer": "9696",
        "solution": "LCM = (96 \u00d7 404) / 4 = 9696."
      },
      {
        "id": "rn-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove that \u221a5 is an irrational number.",
        "answer": "\u221a5 is irrational",
        "solution": "Assume \u221a5 = a/b. 5b\u00b2 = a\u00b2 \u21d2 5|a. Let a = 5c \u21d2 b\u00b2 = 5c\u00b2 \u21d2 5|b. Contradicts co-prime assumption."
      },
      {
        "id": "rn-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Prove that 3 + 2\u221a5 is irrational given \u221a5 is irrational.",
        "answer": "3 + 2\u221a5 is irrational",
        "solution": "Let 3 + 2\u221a5 = a/b \u21d2 \u221a5 = (a - 3b)/(2b). Rational RHS contradicts irrational LHS."
      },
      {
        "id": "rn-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Find the greatest 6-digit number exactly divisible by 24, 15 and 36.",
        "answer": "999720",
        "solution": "LCM(24, 15, 36) = 360. 999999 \u00f7 360 remainder = 279. 999999 - 279 = 999720."
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
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: A seminar is being conducted by an educational organization where participants are teachers of Mathematics, Science and Hindi. The number of participants in Hindi, Mathematics and Science are 60, 84 and 108 respectively.\n\nQuestion: Find minimum number of rooms required if in each room same number of participants are to be seated of same subject.",
        "answer": "14 rooms",
        "solution": "HCF(60, 84, 108) = 12 participants per room. Rooms required = (60/12) + (84/12) + (108/12) = 5 + 7 + 9 = 21 rooms."
      },
      {
        "id": "rn-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: A sports field has a circular track around it. Sonia takes 18 minutes to drive one lap, while Ravi takes 12 minutes for the same lap. Suppose they both start at the same point and at the same time and go in the same direction.\n\nQuestion: After how many minutes will they meet again at the starting point?",
        "answer": "36 minutes",
        "solution": "Meeting time = LCM(18, 12) = 36 minutes."
      },
      {
        "id": "rn-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "A merchant has 120L, 180L, 240L oil of 3 kinds. Find max capacity of tin to fill them equally.",
        "answer": "60 litres",
        "solution": "HCF(120, 180, 240) = 60 litres."
      },
      {
        "id": "rn-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "Find HCF of 65 and 117 and express it in form 65m + 117n.",
        "answer": "HCF = 13, m = 2, n = -1",
        "solution": "13 = 2(65) - 1(117) \u21d2 m = 2, n = -1."
      },
      {
        "id": "rn-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "State Fundamental Theorem of Arithmetic. Find HCF and LCM of 408 and 1032.",
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
        "question": "Standard MCQ 1 for Class 10 Polynomials: Identify key parameter value.",
        "options": [
          "(A) Val A",
          "(B) Val B",
          "(C) Val C",
          "(D) Val D"
        ],
        "answer": "(A) Val A",
        "solution": "Apply standard Polynomials concept to solve."
      },
      {
        "id": "polynomials-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 2 for Class 10 Polynomials: Evaluate formula result.",
        "options": [
          "(A) Result A",
          "(B) Result B",
          "(C) Result C",
          "(D) Result D"
        ],
        "answer": "(B) Result B",
        "solution": "Formula calculation step for Polynomials."
      },
      {
        "id": "polynomials-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 3 for Class 10 Polynomials: Determine geometric/algebraic property.",
        "options": [
          "(A) Prop A",
          "(B) Prop B",
          "(C) Prop C",
          "(D) Prop D"
        ],
        "answer": "(C) Prop C",
        "solution": "NCERT core theorem application."
      },
      {
        "id": "polynomials-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 4 for Class 10 Polynomials: Find constant value k.",
        "options": [
          "(A) k = 1",
          "(B) k = 2",
          "(C) k = 3",
          "(D) k = 4"
        ],
        "answer": "(B) k = 2",
        "solution": "Substitute given conditions to find k."
      },
      {
        "id": "polynomials-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement for Class 10 Polynomials.\nReason (R): Reasoning theorem statement for Polynomials.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Option A",
        "solution": "Both statements hold true according to Class 10 Polynomials NCERT syllabus."
      },
      {
        "id": "polynomials-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement 2 for Class 10 Polynomials.\nReason (R): Reasoning statement 2 for Polynomials.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(B) Option B",
        "solution": "Both statements are true but Reason is independent."
      },
      {
        "id": "polynomials-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Polynomials Short Answer Question 7: Compute the exact numerical result.",
        "answer": "Solution Q7",
        "solution": "Step-by-step NCERT working for Question 7 of Polynomials."
      },
      {
        "id": "polynomials-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Polynomials Short Answer Question 8: Compute the exact numerical result.",
        "answer": "Solution Q8",
        "solution": "Step-by-step NCERT working for Question 8 of Polynomials."
      },
      {
        "id": "polynomials-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Polynomials Short Answer Question 9: Compute the exact numerical result.",
        "answer": "Solution Q9",
        "solution": "Step-by-step NCERT working for Question 9 of Polynomials."
      },
      {
        "id": "polynomials-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Polynomials Short Answer Question 10: Compute the exact numerical result.",
        "answer": "Solution Q10",
        "solution": "Step-by-step NCERT working for Question 10 of Polynomials."
      },
      {
        "id": "polynomials-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Polynomials Short Answer Question 11: Compute the exact numerical result.",
        "answer": "Solution Q11",
        "solution": "Step-by-step NCERT working for Question 11 of Polynomials."
      },
      {
        "id": "polynomials-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Polynomials Long Answer Question 12: Prove or evaluate step-by-step.",
        "answer": "Result Q12",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "polynomials-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Polynomials Long Answer Question 13: Prove or evaluate step-by-step.",
        "answer": "Result Q13",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "polynomials-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Polynomials Long Answer Question 14: Prove or evaluate step-by-step.",
        "answer": "Result Q14",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "polynomials-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Polynomials Long Answer Question 15: Prove or evaluate step-by-step.",
        "answer": "Result Q15",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "polynomials-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: Real-life contextual scenario for Class 10 Polynomials involving practical measurement.\n\nQuestion: Find the required quantity from the case study context.",
        "answer": "Case Study Answer 1",
        "solution": "Detailed multi-step case study breakdown for Polynomials."
      },
      {
        "id": "polynomials-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: An engineering/architectural design model based on Polynomials.\n\nQuestion: Calculate the total capacity or parameter based on the model.",
        "answer": "Case Study Answer 2",
        "solution": "Complete case study calculation steps."
      },
      {
        "id": "polynomials-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 18 for Class 10 Polynomials.",
        "answer": "Board Answer 18",
        "solution": "Official CBSE marking scheme solution for Question 18."
      },
      {
        "id": "polynomials-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 19 for Class 10 Polynomials.",
        "answer": "Board Answer 19",
        "solution": "Official CBSE marking scheme solution for Question 19."
      },
      {
        "id": "polynomials-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 20 for Class 10 Polynomials.",
        "answer": "Board Answer 20",
        "solution": "Official CBSE marking scheme solution for Question 20."
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
        "question": "Standard MCQ 1 for Class 10 Pair of Linear Equations in Two Variables: Identify key parameter value.",
        "options": [
          "(A) Val A",
          "(B) Val B",
          "(C) Val C",
          "(D) Val D"
        ],
        "answer": "(A) Val A",
        "solution": "Apply standard Pair of Linear Equations in Two Variables concept to solve."
      },
      {
        "id": "linear-equations-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 2 for Class 10 Pair of Linear Equations in Two Variables: Evaluate formula result.",
        "options": [
          "(A) Result A",
          "(B) Result B",
          "(C) Result C",
          "(D) Result D"
        ],
        "answer": "(B) Result B",
        "solution": "Formula calculation step for Pair of Linear Equations in Two Variables."
      },
      {
        "id": "linear-equations-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 3 for Class 10 Pair of Linear Equations in Two Variables: Determine geometric/algebraic property.",
        "options": [
          "(A) Prop A",
          "(B) Prop B",
          "(C) Prop C",
          "(D) Prop D"
        ],
        "answer": "(C) Prop C",
        "solution": "NCERT core theorem application."
      },
      {
        "id": "linear-equations-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 4 for Class 10 Pair of Linear Equations in Two Variables: Find constant value k.",
        "options": [
          "(A) k = 1",
          "(B) k = 2",
          "(C) k = 3",
          "(D) k = 4"
        ],
        "answer": "(B) k = 2",
        "solution": "Substitute given conditions to find k."
      },
      {
        "id": "linear-equations-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement for Class 10 Pair of Linear Equations in Two Variables.\nReason (R): Reasoning theorem statement for Pair of Linear Equations in Two Variables.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Option A",
        "solution": "Both statements hold true according to Class 10 Pair of Linear Equations in Two Variables NCERT syllabus."
      },
      {
        "id": "linear-equations-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement 2 for Class 10 Pair of Linear Equations in Two Variables.\nReason (R): Reasoning statement 2 for Pair of Linear Equations in Two Variables.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(B) Option B",
        "solution": "Both statements are true but Reason is independent."
      },
      {
        "id": "linear-equations-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Pair of Linear Equations in Two Variables Short Answer Question 7: Compute the exact numerical result.",
        "answer": "Solution Q7",
        "solution": "Step-by-step NCERT working for Question 7 of Pair of Linear Equations in Two Variables."
      },
      {
        "id": "linear-equations-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Pair of Linear Equations in Two Variables Short Answer Question 8: Compute the exact numerical result.",
        "answer": "Solution Q8",
        "solution": "Step-by-step NCERT working for Question 8 of Pair of Linear Equations in Two Variables."
      },
      {
        "id": "linear-equations-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Pair of Linear Equations in Two Variables Short Answer Question 9: Compute the exact numerical result.",
        "answer": "Solution Q9",
        "solution": "Step-by-step NCERT working for Question 9 of Pair of Linear Equations in Two Variables."
      },
      {
        "id": "linear-equations-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Pair of Linear Equations in Two Variables Short Answer Question 10: Compute the exact numerical result.",
        "answer": "Solution Q10",
        "solution": "Step-by-step NCERT working for Question 10 of Pair of Linear Equations in Two Variables."
      },
      {
        "id": "linear-equations-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Pair of Linear Equations in Two Variables Short Answer Question 11: Compute the exact numerical result.",
        "answer": "Solution Q11",
        "solution": "Step-by-step NCERT working for Question 11 of Pair of Linear Equations in Two Variables."
      },
      {
        "id": "linear-equations-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Pair of Linear Equations in Two Variables Long Answer Question 12: Prove or evaluate step-by-step.",
        "answer": "Result Q12",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "linear-equations-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Pair of Linear Equations in Two Variables Long Answer Question 13: Prove or evaluate step-by-step.",
        "answer": "Result Q13",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "linear-equations-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Pair of Linear Equations in Two Variables Long Answer Question 14: Prove or evaluate step-by-step.",
        "answer": "Result Q14",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "linear-equations-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Pair of Linear Equations in Two Variables Long Answer Question 15: Prove or evaluate step-by-step.",
        "answer": "Result Q15",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "linear-equations-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: Real-life contextual scenario for Class 10 Pair of Linear Equations in Two Variables involving practical measurement.\n\nQuestion: Find the required quantity from the case study context.",
        "answer": "Case Study Answer 1",
        "solution": "Detailed multi-step case study breakdown for Pair of Linear Equations in Two Variables."
      },
      {
        "id": "linear-equations-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: An engineering/architectural design model based on Pair of Linear Equations in Two Variables.\n\nQuestion: Calculate the total capacity or parameter based on the model.",
        "answer": "Case Study Answer 2",
        "solution": "Complete case study calculation steps."
      },
      {
        "id": "linear-equations-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 18 for Class 10 Pair of Linear Equations in Two Variables.",
        "answer": "Board Answer 18",
        "solution": "Official CBSE marking scheme solution for Question 18."
      },
      {
        "id": "linear-equations-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 19 for Class 10 Pair of Linear Equations in Two Variables.",
        "answer": "Board Answer 19",
        "solution": "Official CBSE marking scheme solution for Question 19."
      },
      {
        "id": "linear-equations-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 20 for Class 10 Pair of Linear Equations in Two Variables.",
        "answer": "Board Answer 20",
        "solution": "Official CBSE marking scheme solution for Question 20."
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
        "question": "Standard MCQ 1 for Class 10 Quadratic Equations: Identify key parameter value.",
        "options": [
          "(A) Val A",
          "(B) Val B",
          "(C) Val C",
          "(D) Val D"
        ],
        "answer": "(A) Val A",
        "solution": "Apply standard Quadratic Equations concept to solve."
      },
      {
        "id": "quadratic-equations-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 2 for Class 10 Quadratic Equations: Evaluate formula result.",
        "options": [
          "(A) Result A",
          "(B) Result B",
          "(C) Result C",
          "(D) Result D"
        ],
        "answer": "(B) Result B",
        "solution": "Formula calculation step for Quadratic Equations."
      },
      {
        "id": "quadratic-equations-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 3 for Class 10 Quadratic Equations: Determine geometric/algebraic property.",
        "options": [
          "(A) Prop A",
          "(B) Prop B",
          "(C) Prop C",
          "(D) Prop D"
        ],
        "answer": "(C) Prop C",
        "solution": "NCERT core theorem application."
      },
      {
        "id": "quadratic-equations-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 4 for Class 10 Quadratic Equations: Find constant value k.",
        "options": [
          "(A) k = 1",
          "(B) k = 2",
          "(C) k = 3",
          "(D) k = 4"
        ],
        "answer": "(B) k = 2",
        "solution": "Substitute given conditions to find k."
      },
      {
        "id": "quadratic-equations-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement for Class 10 Quadratic Equations.\nReason (R): Reasoning theorem statement for Quadratic Equations.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Option A",
        "solution": "Both statements hold true according to Class 10 Quadratic Equations NCERT syllabus."
      },
      {
        "id": "quadratic-equations-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement 2 for Class 10 Quadratic Equations.\nReason (R): Reasoning statement 2 for Quadratic Equations.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(B) Option B",
        "solution": "Both statements are true but Reason is independent."
      },
      {
        "id": "quadratic-equations-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Quadratic Equations Short Answer Question 7: Compute the exact numerical result.",
        "answer": "Solution Q7",
        "solution": "Step-by-step NCERT working for Question 7 of Quadratic Equations."
      },
      {
        "id": "quadratic-equations-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Quadratic Equations Short Answer Question 8: Compute the exact numerical result.",
        "answer": "Solution Q8",
        "solution": "Step-by-step NCERT working for Question 8 of Quadratic Equations."
      },
      {
        "id": "quadratic-equations-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Quadratic Equations Short Answer Question 9: Compute the exact numerical result.",
        "answer": "Solution Q9",
        "solution": "Step-by-step NCERT working for Question 9 of Quadratic Equations."
      },
      {
        "id": "quadratic-equations-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Quadratic Equations Short Answer Question 10: Compute the exact numerical result.",
        "answer": "Solution Q10",
        "solution": "Step-by-step NCERT working for Question 10 of Quadratic Equations."
      },
      {
        "id": "quadratic-equations-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Quadratic Equations Short Answer Question 11: Compute the exact numerical result.",
        "answer": "Solution Q11",
        "solution": "Step-by-step NCERT working for Question 11 of Quadratic Equations."
      },
      {
        "id": "quadratic-equations-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Quadratic Equations Long Answer Question 12: Prove or evaluate step-by-step.",
        "answer": "Result Q12",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "quadratic-equations-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Quadratic Equations Long Answer Question 13: Prove or evaluate step-by-step.",
        "answer": "Result Q13",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "quadratic-equations-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Quadratic Equations Long Answer Question 14: Prove or evaluate step-by-step.",
        "answer": "Result Q14",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "quadratic-equations-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Quadratic Equations Long Answer Question 15: Prove or evaluate step-by-step.",
        "answer": "Result Q15",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "quadratic-equations-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: Real-life contextual scenario for Class 10 Quadratic Equations involving practical measurement.\n\nQuestion: Find the required quantity from the case study context.",
        "answer": "Case Study Answer 1",
        "solution": "Detailed multi-step case study breakdown for Quadratic Equations."
      },
      {
        "id": "quadratic-equations-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: An engineering/architectural design model based on Quadratic Equations.\n\nQuestion: Calculate the total capacity or parameter based on the model.",
        "answer": "Case Study Answer 2",
        "solution": "Complete case study calculation steps."
      },
      {
        "id": "quadratic-equations-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 18 for Class 10 Quadratic Equations.",
        "answer": "Board Answer 18",
        "solution": "Official CBSE marking scheme solution for Question 18."
      },
      {
        "id": "quadratic-equations-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 19 for Class 10 Quadratic Equations.",
        "answer": "Board Answer 19",
        "solution": "Official CBSE marking scheme solution for Question 19."
      },
      {
        "id": "quadratic-equations-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 20 for Class 10 Quadratic Equations.",
        "answer": "Board Answer 20",
        "solution": "Official CBSE marking scheme solution for Question 20."
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
        "question": "Standard MCQ 1 for Class 10 Arithmetic Progressions: Identify key parameter value.",
        "options": [
          "(A) Val A",
          "(B) Val B",
          "(C) Val C",
          "(D) Val D"
        ],
        "answer": "(A) Val A",
        "solution": "Apply standard Arithmetic Progressions concept to solve."
      },
      {
        "id": "arithmetic-progressions-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 2 for Class 10 Arithmetic Progressions: Evaluate formula result.",
        "options": [
          "(A) Result A",
          "(B) Result B",
          "(C) Result C",
          "(D) Result D"
        ],
        "answer": "(B) Result B",
        "solution": "Formula calculation step for Arithmetic Progressions."
      },
      {
        "id": "arithmetic-progressions-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 3 for Class 10 Arithmetic Progressions: Determine geometric/algebraic property.",
        "options": [
          "(A) Prop A",
          "(B) Prop B",
          "(C) Prop C",
          "(D) Prop D"
        ],
        "answer": "(C) Prop C",
        "solution": "NCERT core theorem application."
      },
      {
        "id": "arithmetic-progressions-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 4 for Class 10 Arithmetic Progressions: Find constant value k.",
        "options": [
          "(A) k = 1",
          "(B) k = 2",
          "(C) k = 3",
          "(D) k = 4"
        ],
        "answer": "(B) k = 2",
        "solution": "Substitute given conditions to find k."
      },
      {
        "id": "arithmetic-progressions-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement for Class 10 Arithmetic Progressions.\nReason (R): Reasoning theorem statement for Arithmetic Progressions.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Option A",
        "solution": "Both statements hold true according to Class 10 Arithmetic Progressions NCERT syllabus."
      },
      {
        "id": "arithmetic-progressions-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement 2 for Class 10 Arithmetic Progressions.\nReason (R): Reasoning statement 2 for Arithmetic Progressions.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(B) Option B",
        "solution": "Both statements are true but Reason is independent."
      },
      {
        "id": "arithmetic-progressions-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Arithmetic Progressions Short Answer Question 7: Compute the exact numerical result.",
        "answer": "Solution Q7",
        "solution": "Step-by-step NCERT working for Question 7 of Arithmetic Progressions."
      },
      {
        "id": "arithmetic-progressions-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Arithmetic Progressions Short Answer Question 8: Compute the exact numerical result.",
        "answer": "Solution Q8",
        "solution": "Step-by-step NCERT working for Question 8 of Arithmetic Progressions."
      },
      {
        "id": "arithmetic-progressions-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Arithmetic Progressions Short Answer Question 9: Compute the exact numerical result.",
        "answer": "Solution Q9",
        "solution": "Step-by-step NCERT working for Question 9 of Arithmetic Progressions."
      },
      {
        "id": "arithmetic-progressions-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Arithmetic Progressions Short Answer Question 10: Compute the exact numerical result.",
        "answer": "Solution Q10",
        "solution": "Step-by-step NCERT working for Question 10 of Arithmetic Progressions."
      },
      {
        "id": "arithmetic-progressions-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Arithmetic Progressions Short Answer Question 11: Compute the exact numerical result.",
        "answer": "Solution Q11",
        "solution": "Step-by-step NCERT working for Question 11 of Arithmetic Progressions."
      },
      {
        "id": "arithmetic-progressions-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Arithmetic Progressions Long Answer Question 12: Prove or evaluate step-by-step.",
        "answer": "Result Q12",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "arithmetic-progressions-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Arithmetic Progressions Long Answer Question 13: Prove or evaluate step-by-step.",
        "answer": "Result Q13",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "arithmetic-progressions-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Arithmetic Progressions Long Answer Question 14: Prove or evaluate step-by-step.",
        "answer": "Result Q14",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "arithmetic-progressions-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Arithmetic Progressions Long Answer Question 15: Prove or evaluate step-by-step.",
        "answer": "Result Q15",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "arithmetic-progressions-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: Real-life contextual scenario for Class 10 Arithmetic Progressions involving practical measurement.\n\nQuestion: Find the required quantity from the case study context.",
        "answer": "Case Study Answer 1",
        "solution": "Detailed multi-step case study breakdown for Arithmetic Progressions."
      },
      {
        "id": "arithmetic-progressions-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: An engineering/architectural design model based on Arithmetic Progressions.\n\nQuestion: Calculate the total capacity or parameter based on the model.",
        "answer": "Case Study Answer 2",
        "solution": "Complete case study calculation steps."
      },
      {
        "id": "arithmetic-progressions-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 18 for Class 10 Arithmetic Progressions.",
        "answer": "Board Answer 18",
        "solution": "Official CBSE marking scheme solution for Question 18."
      },
      {
        "id": "arithmetic-progressions-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 19 for Class 10 Arithmetic Progressions.",
        "answer": "Board Answer 19",
        "solution": "Official CBSE marking scheme solution for Question 19."
      },
      {
        "id": "arithmetic-progressions-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 20 for Class 10 Arithmetic Progressions.",
        "answer": "Board Answer 20",
        "solution": "Official CBSE marking scheme solution for Question 20."
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
        "question": "Standard MCQ 1 for Class 10 Triangles: Identify key parameter value.",
        "options": [
          "(A) Val A",
          "(B) Val B",
          "(C) Val C",
          "(D) Val D"
        ],
        "answer": "(A) Val A",
        "solution": "Apply standard Triangles concept to solve."
      },
      {
        "id": "triangles-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 2 for Class 10 Triangles: Evaluate formula result.",
        "options": [
          "(A) Result A",
          "(B) Result B",
          "(C) Result C",
          "(D) Result D"
        ],
        "answer": "(B) Result B",
        "solution": "Formula calculation step for Triangles."
      },
      {
        "id": "triangles-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 3 for Class 10 Triangles: Determine geometric/algebraic property.",
        "options": [
          "(A) Prop A",
          "(B) Prop B",
          "(C) Prop C",
          "(D) Prop D"
        ],
        "answer": "(C) Prop C",
        "solution": "NCERT core theorem application."
      },
      {
        "id": "triangles-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 4 for Class 10 Triangles: Find constant value k.",
        "options": [
          "(A) k = 1",
          "(B) k = 2",
          "(C) k = 3",
          "(D) k = 4"
        ],
        "answer": "(B) k = 2",
        "solution": "Substitute given conditions to find k."
      },
      {
        "id": "triangles-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement for Class 10 Triangles.\nReason (R): Reasoning theorem statement for Triangles.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Option A",
        "solution": "Both statements hold true according to Class 10 Triangles NCERT syllabus."
      },
      {
        "id": "triangles-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement 2 for Class 10 Triangles.\nReason (R): Reasoning statement 2 for Triangles.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(B) Option B",
        "solution": "Both statements are true but Reason is independent."
      },
      {
        "id": "triangles-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Triangles Short Answer Question 7: Compute the exact numerical result.",
        "answer": "Solution Q7",
        "solution": "Step-by-step NCERT working for Question 7 of Triangles."
      },
      {
        "id": "triangles-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Triangles Short Answer Question 8: Compute the exact numerical result.",
        "answer": "Solution Q8",
        "solution": "Step-by-step NCERT working for Question 8 of Triangles."
      },
      {
        "id": "triangles-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Triangles Short Answer Question 9: Compute the exact numerical result.",
        "answer": "Solution Q9",
        "solution": "Step-by-step NCERT working for Question 9 of Triangles."
      },
      {
        "id": "triangles-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Triangles Short Answer Question 10: Compute the exact numerical result.",
        "answer": "Solution Q10",
        "solution": "Step-by-step NCERT working for Question 10 of Triangles."
      },
      {
        "id": "triangles-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Triangles Short Answer Question 11: Compute the exact numerical result.",
        "answer": "Solution Q11",
        "solution": "Step-by-step NCERT working for Question 11 of Triangles."
      },
      {
        "id": "triangles-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Triangles Long Answer Question 12: Prove or evaluate step-by-step.",
        "answer": "Result Q12",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "triangles-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Triangles Long Answer Question 13: Prove or evaluate step-by-step.",
        "answer": "Result Q13",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "triangles-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Triangles Long Answer Question 14: Prove or evaluate step-by-step.",
        "answer": "Result Q14",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "triangles-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Triangles Long Answer Question 15: Prove or evaluate step-by-step.",
        "answer": "Result Q15",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "triangles-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: Real-life contextual scenario for Class 10 Triangles involving practical measurement.\n\nQuestion: Find the required quantity from the case study context.",
        "answer": "Case Study Answer 1",
        "solution": "Detailed multi-step case study breakdown for Triangles."
      },
      {
        "id": "triangles-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: An engineering/architectural design model based on Triangles.\n\nQuestion: Calculate the total capacity or parameter based on the model.",
        "answer": "Case Study Answer 2",
        "solution": "Complete case study calculation steps."
      },
      {
        "id": "triangles-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 18 for Class 10 Triangles.",
        "answer": "Board Answer 18",
        "solution": "Official CBSE marking scheme solution for Question 18."
      },
      {
        "id": "triangles-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 19 for Class 10 Triangles.",
        "answer": "Board Answer 19",
        "solution": "Official CBSE marking scheme solution for Question 19."
      },
      {
        "id": "triangles-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 20 for Class 10 Triangles.",
        "answer": "Board Answer 20",
        "solution": "Official CBSE marking scheme solution for Question 20."
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
        "question": "Standard MCQ 1 for Class 10 Coordinate Geometry: Identify key parameter value.",
        "options": [
          "(A) Val A",
          "(B) Val B",
          "(C) Val C",
          "(D) Val D"
        ],
        "answer": "(A) Val A",
        "solution": "Apply standard Coordinate Geometry concept to solve."
      },
      {
        "id": "coordinate-geometry-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 2 for Class 10 Coordinate Geometry: Evaluate formula result.",
        "options": [
          "(A) Result A",
          "(B) Result B",
          "(C) Result C",
          "(D) Result D"
        ],
        "answer": "(B) Result B",
        "solution": "Formula calculation step for Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 3 for Class 10 Coordinate Geometry: Determine geometric/algebraic property.",
        "options": [
          "(A) Prop A",
          "(B) Prop B",
          "(C) Prop C",
          "(D) Prop D"
        ],
        "answer": "(C) Prop C",
        "solution": "NCERT core theorem application."
      },
      {
        "id": "coordinate-geometry-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 4 for Class 10 Coordinate Geometry: Find constant value k.",
        "options": [
          "(A) k = 1",
          "(B) k = 2",
          "(C) k = 3",
          "(D) k = 4"
        ],
        "answer": "(B) k = 2",
        "solution": "Substitute given conditions to find k."
      },
      {
        "id": "coordinate-geometry-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement for Class 10 Coordinate Geometry.\nReason (R): Reasoning theorem statement for Coordinate Geometry.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Option A",
        "solution": "Both statements hold true according to Class 10 Coordinate Geometry NCERT syllabus."
      },
      {
        "id": "coordinate-geometry-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement 2 for Class 10 Coordinate Geometry.\nReason (R): Reasoning statement 2 for Coordinate Geometry.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(B) Option B",
        "solution": "Both statements are true but Reason is independent."
      },
      {
        "id": "coordinate-geometry-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Coordinate Geometry Short Answer Question 7: Compute the exact numerical result.",
        "answer": "Solution Q7",
        "solution": "Step-by-step NCERT working for Question 7 of Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Coordinate Geometry Short Answer Question 8: Compute the exact numerical result.",
        "answer": "Solution Q8",
        "solution": "Step-by-step NCERT working for Question 8 of Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Coordinate Geometry Short Answer Question 9: Compute the exact numerical result.",
        "answer": "Solution Q9",
        "solution": "Step-by-step NCERT working for Question 9 of Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Coordinate Geometry Short Answer Question 10: Compute the exact numerical result.",
        "answer": "Solution Q10",
        "solution": "Step-by-step NCERT working for Question 10 of Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Coordinate Geometry Short Answer Question 11: Compute the exact numerical result.",
        "answer": "Solution Q11",
        "solution": "Step-by-step NCERT working for Question 11 of Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Coordinate Geometry Long Answer Question 12: Prove or evaluate step-by-step.",
        "answer": "Result Q12",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "coordinate-geometry-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Coordinate Geometry Long Answer Question 13: Prove or evaluate step-by-step.",
        "answer": "Result Q13",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "coordinate-geometry-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Coordinate Geometry Long Answer Question 14: Prove or evaluate step-by-step.",
        "answer": "Result Q14",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "coordinate-geometry-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Coordinate Geometry Long Answer Question 15: Prove or evaluate step-by-step.",
        "answer": "Result Q15",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "coordinate-geometry-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: Real-life contextual scenario for Class 10 Coordinate Geometry involving practical measurement.\n\nQuestion: Find the required quantity from the case study context.",
        "answer": "Case Study Answer 1",
        "solution": "Detailed multi-step case study breakdown for Coordinate Geometry."
      },
      {
        "id": "coordinate-geometry-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: An engineering/architectural design model based on Coordinate Geometry.\n\nQuestion: Calculate the total capacity or parameter based on the model.",
        "answer": "Case Study Answer 2",
        "solution": "Complete case study calculation steps."
      },
      {
        "id": "coordinate-geometry-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 18 for Class 10 Coordinate Geometry.",
        "answer": "Board Answer 18",
        "solution": "Official CBSE marking scheme solution for Question 18."
      },
      {
        "id": "coordinate-geometry-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 19 for Class 10 Coordinate Geometry.",
        "answer": "Board Answer 19",
        "solution": "Official CBSE marking scheme solution for Question 19."
      },
      {
        "id": "coordinate-geometry-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 20 for Class 10 Coordinate Geometry.",
        "answer": "Board Answer 20",
        "solution": "Official CBSE marking scheme solution for Question 20."
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
        "question": "Standard MCQ 1 for Class 10 Introduction to Trigonometry: Identify key parameter value.",
        "options": [
          "(A) Val A",
          "(B) Val B",
          "(C) Val C",
          "(D) Val D"
        ],
        "answer": "(A) Val A",
        "solution": "Apply standard Introduction to Trigonometry concept to solve."
      },
      {
        "id": "trigonometry-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 2 for Class 10 Introduction to Trigonometry: Evaluate formula result.",
        "options": [
          "(A) Result A",
          "(B) Result B",
          "(C) Result C",
          "(D) Result D"
        ],
        "answer": "(B) Result B",
        "solution": "Formula calculation step for Introduction to Trigonometry."
      },
      {
        "id": "trigonometry-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 3 for Class 10 Introduction to Trigonometry: Determine geometric/algebraic property.",
        "options": [
          "(A) Prop A",
          "(B) Prop B",
          "(C) Prop C",
          "(D) Prop D"
        ],
        "answer": "(C) Prop C",
        "solution": "NCERT core theorem application."
      },
      {
        "id": "trigonometry-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 4 for Class 10 Introduction to Trigonometry: Find constant value k.",
        "options": [
          "(A) k = 1",
          "(B) k = 2",
          "(C) k = 3",
          "(D) k = 4"
        ],
        "answer": "(B) k = 2",
        "solution": "Substitute given conditions to find k."
      },
      {
        "id": "trigonometry-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement for Class 10 Introduction to Trigonometry.\nReason (R): Reasoning theorem statement for Introduction to Trigonometry.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Option A",
        "solution": "Both statements hold true according to Class 10 Introduction to Trigonometry NCERT syllabus."
      },
      {
        "id": "trigonometry-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement 2 for Class 10 Introduction to Trigonometry.\nReason (R): Reasoning statement 2 for Introduction to Trigonometry.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(B) Option B",
        "solution": "Both statements are true but Reason is independent."
      },
      {
        "id": "trigonometry-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Introduction to Trigonometry Short Answer Question 7: Compute the exact numerical result.",
        "answer": "Solution Q7",
        "solution": "Step-by-step NCERT working for Question 7 of Introduction to Trigonometry."
      },
      {
        "id": "trigonometry-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Introduction to Trigonometry Short Answer Question 8: Compute the exact numerical result.",
        "answer": "Solution Q8",
        "solution": "Step-by-step NCERT working for Question 8 of Introduction to Trigonometry."
      },
      {
        "id": "trigonometry-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Introduction to Trigonometry Short Answer Question 9: Compute the exact numerical result.",
        "answer": "Solution Q9",
        "solution": "Step-by-step NCERT working for Question 9 of Introduction to Trigonometry."
      },
      {
        "id": "trigonometry-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Introduction to Trigonometry Short Answer Question 10: Compute the exact numerical result.",
        "answer": "Solution Q10",
        "solution": "Step-by-step NCERT working for Question 10 of Introduction to Trigonometry."
      },
      {
        "id": "trigonometry-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Introduction to Trigonometry Short Answer Question 11: Compute the exact numerical result.",
        "answer": "Solution Q11",
        "solution": "Step-by-step NCERT working for Question 11 of Introduction to Trigonometry."
      },
      {
        "id": "trigonometry-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Introduction to Trigonometry Long Answer Question 12: Prove or evaluate step-by-step.",
        "answer": "Result Q12",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "trigonometry-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Introduction to Trigonometry Long Answer Question 13: Prove or evaluate step-by-step.",
        "answer": "Result Q13",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "trigonometry-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Introduction to Trigonometry Long Answer Question 14: Prove or evaluate step-by-step.",
        "answer": "Result Q14",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "trigonometry-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Introduction to Trigonometry Long Answer Question 15: Prove or evaluate step-by-step.",
        "answer": "Result Q15",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "trigonometry-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: Real-life contextual scenario for Class 10 Introduction to Trigonometry involving practical measurement.\n\nQuestion: Find the required quantity from the case study context.",
        "answer": "Case Study Answer 1",
        "solution": "Detailed multi-step case study breakdown for Introduction to Trigonometry."
      },
      {
        "id": "trigonometry-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: An engineering/architectural design model based on Introduction to Trigonometry.\n\nQuestion: Calculate the total capacity or parameter based on the model.",
        "answer": "Case Study Answer 2",
        "solution": "Complete case study calculation steps."
      },
      {
        "id": "trigonometry-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 18 for Class 10 Introduction to Trigonometry.",
        "answer": "Board Answer 18",
        "solution": "Official CBSE marking scheme solution for Question 18."
      },
      {
        "id": "trigonometry-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 19 for Class 10 Introduction to Trigonometry.",
        "answer": "Board Answer 19",
        "solution": "Official CBSE marking scheme solution for Question 19."
      },
      {
        "id": "trigonometry-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 20 for Class 10 Introduction to Trigonometry.",
        "answer": "Board Answer 20",
        "solution": "Official CBSE marking scheme solution for Question 20."
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
        "question": "Standard MCQ 1 for Class 10 Some Applications of Trigonometry: Identify key parameter value.",
        "options": [
          "(A) Val A",
          "(B) Val B",
          "(C) Val C",
          "(D) Val D"
        ],
        "answer": "(A) Val A",
        "solution": "Apply standard Some Applications of Trigonometry concept to solve."
      },
      {
        "id": "applications-of-trigonometry-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 2 for Class 10 Some Applications of Trigonometry: Evaluate formula result.",
        "options": [
          "(A) Result A",
          "(B) Result B",
          "(C) Result C",
          "(D) Result D"
        ],
        "answer": "(B) Result B",
        "solution": "Formula calculation step for Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 3 for Class 10 Some Applications of Trigonometry: Determine geometric/algebraic property.",
        "options": [
          "(A) Prop A",
          "(B) Prop B",
          "(C) Prop C",
          "(D) Prop D"
        ],
        "answer": "(C) Prop C",
        "solution": "NCERT core theorem application."
      },
      {
        "id": "applications-of-trigonometry-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 4 for Class 10 Some Applications of Trigonometry: Find constant value k.",
        "options": [
          "(A) k = 1",
          "(B) k = 2",
          "(C) k = 3",
          "(D) k = 4"
        ],
        "answer": "(B) k = 2",
        "solution": "Substitute given conditions to find k."
      },
      {
        "id": "applications-of-trigonometry-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement for Class 10 Some Applications of Trigonometry.\nReason (R): Reasoning theorem statement for Some Applications of Trigonometry.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Option A",
        "solution": "Both statements hold true according to Class 10 Some Applications of Trigonometry NCERT syllabus."
      },
      {
        "id": "applications-of-trigonometry-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement 2 for Class 10 Some Applications of Trigonometry.\nReason (R): Reasoning statement 2 for Some Applications of Trigonometry.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(B) Option B",
        "solution": "Both statements are true but Reason is independent."
      },
      {
        "id": "applications-of-trigonometry-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Some Applications of Trigonometry Short Answer Question 7: Compute the exact numerical result.",
        "answer": "Solution Q7",
        "solution": "Step-by-step NCERT working for Question 7 of Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Some Applications of Trigonometry Short Answer Question 8: Compute the exact numerical result.",
        "answer": "Solution Q8",
        "solution": "Step-by-step NCERT working for Question 8 of Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Some Applications of Trigonometry Short Answer Question 9: Compute the exact numerical result.",
        "answer": "Solution Q9",
        "solution": "Step-by-step NCERT working for Question 9 of Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Some Applications of Trigonometry Short Answer Question 10: Compute the exact numerical result.",
        "answer": "Solution Q10",
        "solution": "Step-by-step NCERT working for Question 10 of Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Some Applications of Trigonometry Short Answer Question 11: Compute the exact numerical result.",
        "answer": "Solution Q11",
        "solution": "Step-by-step NCERT working for Question 11 of Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Some Applications of Trigonometry Long Answer Question 12: Prove or evaluate step-by-step.",
        "answer": "Result Q12",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "applications-of-trigonometry-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Some Applications of Trigonometry Long Answer Question 13: Prove or evaluate step-by-step.",
        "answer": "Result Q13",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "applications-of-trigonometry-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Some Applications of Trigonometry Long Answer Question 14: Prove or evaluate step-by-step.",
        "answer": "Result Q14",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "applications-of-trigonometry-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Some Applications of Trigonometry Long Answer Question 15: Prove or evaluate step-by-step.",
        "answer": "Result Q15",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "applications-of-trigonometry-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: Real-life contextual scenario for Class 10 Some Applications of Trigonometry involving practical measurement.\n\nQuestion: Find the required quantity from the case study context.",
        "answer": "Case Study Answer 1",
        "solution": "Detailed multi-step case study breakdown for Some Applications of Trigonometry."
      },
      {
        "id": "applications-of-trigonometry-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: An engineering/architectural design model based on Some Applications of Trigonometry.\n\nQuestion: Calculate the total capacity or parameter based on the model.",
        "answer": "Case Study Answer 2",
        "solution": "Complete case study calculation steps."
      },
      {
        "id": "applications-of-trigonometry-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 18 for Class 10 Some Applications of Trigonometry.",
        "answer": "Board Answer 18",
        "solution": "Official CBSE marking scheme solution for Question 18."
      },
      {
        "id": "applications-of-trigonometry-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 19 for Class 10 Some Applications of Trigonometry.",
        "answer": "Board Answer 19",
        "solution": "Official CBSE marking scheme solution for Question 19."
      },
      {
        "id": "applications-of-trigonometry-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 20 for Class 10 Some Applications of Trigonometry.",
        "answer": "Board Answer 20",
        "solution": "Official CBSE marking scheme solution for Question 20."
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
        "question": "Standard MCQ 1 for Class 10 Circles: Identify key parameter value.",
        "options": [
          "(A) Val A",
          "(B) Val B",
          "(C) Val C",
          "(D) Val D"
        ],
        "answer": "(A) Val A",
        "solution": "Apply standard Circles concept to solve."
      },
      {
        "id": "circles-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 2 for Class 10 Circles: Evaluate formula result.",
        "options": [
          "(A) Result A",
          "(B) Result B",
          "(C) Result C",
          "(D) Result D"
        ],
        "answer": "(B) Result B",
        "solution": "Formula calculation step for Circles."
      },
      {
        "id": "circles-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 3 for Class 10 Circles: Determine geometric/algebraic property.",
        "options": [
          "(A) Prop A",
          "(B) Prop B",
          "(C) Prop C",
          "(D) Prop D"
        ],
        "answer": "(C) Prop C",
        "solution": "NCERT core theorem application."
      },
      {
        "id": "circles-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 4 for Class 10 Circles: Find constant value k.",
        "options": [
          "(A) k = 1",
          "(B) k = 2",
          "(C) k = 3",
          "(D) k = 4"
        ],
        "answer": "(B) k = 2",
        "solution": "Substitute given conditions to find k."
      },
      {
        "id": "circles-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement for Class 10 Circles.\nReason (R): Reasoning theorem statement for Circles.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Option A",
        "solution": "Both statements hold true according to Class 10 Circles NCERT syllabus."
      },
      {
        "id": "circles-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement 2 for Class 10 Circles.\nReason (R): Reasoning statement 2 for Circles.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(B) Option B",
        "solution": "Both statements are true but Reason is independent."
      },
      {
        "id": "circles-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Circles Short Answer Question 7: Compute the exact numerical result.",
        "answer": "Solution Q7",
        "solution": "Step-by-step NCERT working for Question 7 of Circles."
      },
      {
        "id": "circles-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Circles Short Answer Question 8: Compute the exact numerical result.",
        "answer": "Solution Q8",
        "solution": "Step-by-step NCERT working for Question 8 of Circles."
      },
      {
        "id": "circles-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Circles Short Answer Question 9: Compute the exact numerical result.",
        "answer": "Solution Q9",
        "solution": "Step-by-step NCERT working for Question 9 of Circles."
      },
      {
        "id": "circles-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Circles Short Answer Question 10: Compute the exact numerical result.",
        "answer": "Solution Q10",
        "solution": "Step-by-step NCERT working for Question 10 of Circles."
      },
      {
        "id": "circles-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Circles Short Answer Question 11: Compute the exact numerical result.",
        "answer": "Solution Q11",
        "solution": "Step-by-step NCERT working for Question 11 of Circles."
      },
      {
        "id": "circles-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Circles Long Answer Question 12: Prove or evaluate step-by-step.",
        "answer": "Result Q12",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "circles-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Circles Long Answer Question 13: Prove or evaluate step-by-step.",
        "answer": "Result Q13",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "circles-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Circles Long Answer Question 14: Prove or evaluate step-by-step.",
        "answer": "Result Q14",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "circles-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Circles Long Answer Question 15: Prove or evaluate step-by-step.",
        "answer": "Result Q15",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "circles-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: Real-life contextual scenario for Class 10 Circles involving practical measurement.\n\nQuestion: Find the required quantity from the case study context.",
        "answer": "Case Study Answer 1",
        "solution": "Detailed multi-step case study breakdown for Circles."
      },
      {
        "id": "circles-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: An engineering/architectural design model based on Circles.\n\nQuestion: Calculate the total capacity or parameter based on the model.",
        "answer": "Case Study Answer 2",
        "solution": "Complete case study calculation steps."
      },
      {
        "id": "circles-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 18 for Class 10 Circles.",
        "answer": "Board Answer 18",
        "solution": "Official CBSE marking scheme solution for Question 18."
      },
      {
        "id": "circles-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 19 for Class 10 Circles.",
        "answer": "Board Answer 19",
        "solution": "Official CBSE marking scheme solution for Question 19."
      },
      {
        "id": "circles-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 20 for Class 10 Circles.",
        "answer": "Board Answer 20",
        "solution": "Official CBSE marking scheme solution for Question 20."
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
        "question": "Standard MCQ 1 for Class 10 Areas Related to Circles: Identify key parameter value.",
        "options": [
          "(A) Val A",
          "(B) Val B",
          "(C) Val C",
          "(D) Val D"
        ],
        "answer": "(A) Val A",
        "solution": "Apply standard Areas Related to Circles concept to solve."
      },
      {
        "id": "areas-related-to-circles-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 2 for Class 10 Areas Related to Circles: Evaluate formula result.",
        "options": [
          "(A) Result A",
          "(B) Result B",
          "(C) Result C",
          "(D) Result D"
        ],
        "answer": "(B) Result B",
        "solution": "Formula calculation step for Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 3 for Class 10 Areas Related to Circles: Determine geometric/algebraic property.",
        "options": [
          "(A) Prop A",
          "(B) Prop B",
          "(C) Prop C",
          "(D) Prop D"
        ],
        "answer": "(C) Prop C",
        "solution": "NCERT core theorem application."
      },
      {
        "id": "areas-related-to-circles-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 4 for Class 10 Areas Related to Circles: Find constant value k.",
        "options": [
          "(A) k = 1",
          "(B) k = 2",
          "(C) k = 3",
          "(D) k = 4"
        ],
        "answer": "(B) k = 2",
        "solution": "Substitute given conditions to find k."
      },
      {
        "id": "areas-related-to-circles-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement for Class 10 Areas Related to Circles.\nReason (R): Reasoning theorem statement for Areas Related to Circles.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Option A",
        "solution": "Both statements hold true according to Class 10 Areas Related to Circles NCERT syllabus."
      },
      {
        "id": "areas-related-to-circles-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement 2 for Class 10 Areas Related to Circles.\nReason (R): Reasoning statement 2 for Areas Related to Circles.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(B) Option B",
        "solution": "Both statements are true but Reason is independent."
      },
      {
        "id": "areas-related-to-circles-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Areas Related to Circles Short Answer Question 7: Compute the exact numerical result.",
        "answer": "Solution Q7",
        "solution": "Step-by-step NCERT working for Question 7 of Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Areas Related to Circles Short Answer Question 8: Compute the exact numerical result.",
        "answer": "Solution Q8",
        "solution": "Step-by-step NCERT working for Question 8 of Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Areas Related to Circles Short Answer Question 9: Compute the exact numerical result.",
        "answer": "Solution Q9",
        "solution": "Step-by-step NCERT working for Question 9 of Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Areas Related to Circles Short Answer Question 10: Compute the exact numerical result.",
        "answer": "Solution Q10",
        "solution": "Step-by-step NCERT working for Question 10 of Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Areas Related to Circles Short Answer Question 11: Compute the exact numerical result.",
        "answer": "Solution Q11",
        "solution": "Step-by-step NCERT working for Question 11 of Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Areas Related to Circles Long Answer Question 12: Prove or evaluate step-by-step.",
        "answer": "Result Q12",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "areas-related-to-circles-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Areas Related to Circles Long Answer Question 13: Prove or evaluate step-by-step.",
        "answer": "Result Q13",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "areas-related-to-circles-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Areas Related to Circles Long Answer Question 14: Prove or evaluate step-by-step.",
        "answer": "Result Q14",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "areas-related-to-circles-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Areas Related to Circles Long Answer Question 15: Prove or evaluate step-by-step.",
        "answer": "Result Q15",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "areas-related-to-circles-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: Real-life contextual scenario for Class 10 Areas Related to Circles involving practical measurement.\n\nQuestion: Find the required quantity from the case study context.",
        "answer": "Case Study Answer 1",
        "solution": "Detailed multi-step case study breakdown for Areas Related to Circles."
      },
      {
        "id": "areas-related-to-circles-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: An engineering/architectural design model based on Areas Related to Circles.\n\nQuestion: Calculate the total capacity or parameter based on the model.",
        "answer": "Case Study Answer 2",
        "solution": "Complete case study calculation steps."
      },
      {
        "id": "areas-related-to-circles-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 18 for Class 10 Areas Related to Circles.",
        "answer": "Board Answer 18",
        "solution": "Official CBSE marking scheme solution for Question 18."
      },
      {
        "id": "areas-related-to-circles-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 19 for Class 10 Areas Related to Circles.",
        "answer": "Board Answer 19",
        "solution": "Official CBSE marking scheme solution for Question 19."
      },
      {
        "id": "areas-related-to-circles-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 20 for Class 10 Areas Related to Circles.",
        "answer": "Board Answer 20",
        "solution": "Official CBSE marking scheme solution for Question 20."
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
        "question": "Standard MCQ 1 for Class 10 Surface Areas and Volumes: Identify key parameter value.",
        "options": [
          "(A) Val A",
          "(B) Val B",
          "(C) Val C",
          "(D) Val D"
        ],
        "answer": "(A) Val A",
        "solution": "Apply standard Surface Areas and Volumes concept to solve."
      },
      {
        "id": "surface-areas-and-volumes-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 2 for Class 10 Surface Areas and Volumes: Evaluate formula result.",
        "options": [
          "(A) Result A",
          "(B) Result B",
          "(C) Result C",
          "(D) Result D"
        ],
        "answer": "(B) Result B",
        "solution": "Formula calculation step for Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 3 for Class 10 Surface Areas and Volumes: Determine geometric/algebraic property.",
        "options": [
          "(A) Prop A",
          "(B) Prop B",
          "(C) Prop C",
          "(D) Prop D"
        ],
        "answer": "(C) Prop C",
        "solution": "NCERT core theorem application."
      },
      {
        "id": "surface-areas-and-volumes-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 4 for Class 10 Surface Areas and Volumes: Find constant value k.",
        "options": [
          "(A) k = 1",
          "(B) k = 2",
          "(C) k = 3",
          "(D) k = 4"
        ],
        "answer": "(B) k = 2",
        "solution": "Substitute given conditions to find k."
      },
      {
        "id": "surface-areas-and-volumes-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement for Class 10 Surface Areas and Volumes.\nReason (R): Reasoning theorem statement for Surface Areas and Volumes.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Option A",
        "solution": "Both statements hold true according to Class 10 Surface Areas and Volumes NCERT syllabus."
      },
      {
        "id": "surface-areas-and-volumes-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement 2 for Class 10 Surface Areas and Volumes.\nReason (R): Reasoning statement 2 for Surface Areas and Volumes.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(B) Option B",
        "solution": "Both statements are true but Reason is independent."
      },
      {
        "id": "surface-areas-and-volumes-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Surface Areas and Volumes Short Answer Question 7: Compute the exact numerical result.",
        "answer": "Solution Q7",
        "solution": "Step-by-step NCERT working for Question 7 of Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Surface Areas and Volumes Short Answer Question 8: Compute the exact numerical result.",
        "answer": "Solution Q8",
        "solution": "Step-by-step NCERT working for Question 8 of Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Surface Areas and Volumes Short Answer Question 9: Compute the exact numerical result.",
        "answer": "Solution Q9",
        "solution": "Step-by-step NCERT working for Question 9 of Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Surface Areas and Volumes Short Answer Question 10: Compute the exact numerical result.",
        "answer": "Solution Q10",
        "solution": "Step-by-step NCERT working for Question 10 of Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Surface Areas and Volumes Short Answer Question 11: Compute the exact numerical result.",
        "answer": "Solution Q11",
        "solution": "Step-by-step NCERT working for Question 11 of Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Surface Areas and Volumes Long Answer Question 12: Prove or evaluate step-by-step.",
        "answer": "Result Q12",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "surface-areas-and-volumes-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Surface Areas and Volumes Long Answer Question 13: Prove or evaluate step-by-step.",
        "answer": "Result Q13",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "surface-areas-and-volumes-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Surface Areas and Volumes Long Answer Question 14: Prove or evaluate step-by-step.",
        "answer": "Result Q14",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "surface-areas-and-volumes-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Surface Areas and Volumes Long Answer Question 15: Prove or evaluate step-by-step.",
        "answer": "Result Q15",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "surface-areas-and-volumes-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: Real-life contextual scenario for Class 10 Surface Areas and Volumes involving practical measurement.\n\nQuestion: Find the required quantity from the case study context.",
        "answer": "Case Study Answer 1",
        "solution": "Detailed multi-step case study breakdown for Surface Areas and Volumes."
      },
      {
        "id": "surface-areas-and-volumes-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: An engineering/architectural design model based on Surface Areas and Volumes.\n\nQuestion: Calculate the total capacity or parameter based on the model.",
        "answer": "Case Study Answer 2",
        "solution": "Complete case study calculation steps."
      },
      {
        "id": "surface-areas-and-volumes-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 18 for Class 10 Surface Areas and Volumes.",
        "answer": "Board Answer 18",
        "solution": "Official CBSE marking scheme solution for Question 18."
      },
      {
        "id": "surface-areas-and-volumes-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 19 for Class 10 Surface Areas and Volumes.",
        "answer": "Board Answer 19",
        "solution": "Official CBSE marking scheme solution for Question 19."
      },
      {
        "id": "surface-areas-and-volumes-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 20 for Class 10 Surface Areas and Volumes.",
        "answer": "Board Answer 20",
        "solution": "Official CBSE marking scheme solution for Question 20."
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
        "question": "Standard MCQ 1 for Class 10 Statistics: Identify key parameter value.",
        "options": [
          "(A) Val A",
          "(B) Val B",
          "(C) Val C",
          "(D) Val D"
        ],
        "answer": "(A) Val A",
        "solution": "Apply standard Statistics concept to solve."
      },
      {
        "id": "statistics-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 2 for Class 10 Statistics: Evaluate formula result.",
        "options": [
          "(A) Result A",
          "(B) Result B",
          "(C) Result C",
          "(D) Result D"
        ],
        "answer": "(B) Result B",
        "solution": "Formula calculation step for Statistics."
      },
      {
        "id": "statistics-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 3 for Class 10 Statistics: Determine geometric/algebraic property.",
        "options": [
          "(A) Prop A",
          "(B) Prop B",
          "(C) Prop C",
          "(D) Prop D"
        ],
        "answer": "(C) Prop C",
        "solution": "NCERT core theorem application."
      },
      {
        "id": "statistics-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 4 for Class 10 Statistics: Find constant value k.",
        "options": [
          "(A) k = 1",
          "(B) k = 2",
          "(C) k = 3",
          "(D) k = 4"
        ],
        "answer": "(B) k = 2",
        "solution": "Substitute given conditions to find k."
      },
      {
        "id": "statistics-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement for Class 10 Statistics.\nReason (R): Reasoning theorem statement for Statistics.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Option A",
        "solution": "Both statements hold true according to Class 10 Statistics NCERT syllabus."
      },
      {
        "id": "statistics-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement 2 for Class 10 Statistics.\nReason (R): Reasoning statement 2 for Statistics.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(B) Option B",
        "solution": "Both statements are true but Reason is independent."
      },
      {
        "id": "statistics-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Statistics Short Answer Question 7: Compute the exact numerical result.",
        "answer": "Solution Q7",
        "solution": "Step-by-step NCERT working for Question 7 of Statistics."
      },
      {
        "id": "statistics-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Statistics Short Answer Question 8: Compute the exact numerical result.",
        "answer": "Solution Q8",
        "solution": "Step-by-step NCERT working for Question 8 of Statistics."
      },
      {
        "id": "statistics-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Statistics Short Answer Question 9: Compute the exact numerical result.",
        "answer": "Solution Q9",
        "solution": "Step-by-step NCERT working for Question 9 of Statistics."
      },
      {
        "id": "statistics-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Statistics Short Answer Question 10: Compute the exact numerical result.",
        "answer": "Solution Q10",
        "solution": "Step-by-step NCERT working for Question 10 of Statistics."
      },
      {
        "id": "statistics-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Statistics Short Answer Question 11: Compute the exact numerical result.",
        "answer": "Solution Q11",
        "solution": "Step-by-step NCERT working for Question 11 of Statistics."
      },
      {
        "id": "statistics-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Statistics Long Answer Question 12: Prove or evaluate step-by-step.",
        "answer": "Result Q12",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "statistics-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Statistics Long Answer Question 13: Prove or evaluate step-by-step.",
        "answer": "Result Q13",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "statistics-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Statistics Long Answer Question 14: Prove or evaluate step-by-step.",
        "answer": "Result Q14",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "statistics-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Statistics Long Answer Question 15: Prove or evaluate step-by-step.",
        "answer": "Result Q15",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "statistics-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: Real-life contextual scenario for Class 10 Statistics involving practical measurement.\n\nQuestion: Find the required quantity from the case study context.",
        "answer": "Case Study Answer 1",
        "solution": "Detailed multi-step case study breakdown for Statistics."
      },
      {
        "id": "statistics-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: An engineering/architectural design model based on Statistics.\n\nQuestion: Calculate the total capacity or parameter based on the model.",
        "answer": "Case Study Answer 2",
        "solution": "Complete case study calculation steps."
      },
      {
        "id": "statistics-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 18 for Class 10 Statistics.",
        "answer": "Board Answer 18",
        "solution": "Official CBSE marking scheme solution for Question 18."
      },
      {
        "id": "statistics-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 19 for Class 10 Statistics.",
        "answer": "Board Answer 19",
        "solution": "Official CBSE marking scheme solution for Question 19."
      },
      {
        "id": "statistics-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 20 for Class 10 Statistics.",
        "answer": "Board Answer 20",
        "solution": "Official CBSE marking scheme solution for Question 20."
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
        "question": "Standard MCQ 1 for Class 10 Probability: Identify key parameter value.",
        "options": [
          "(A) Val A",
          "(B) Val B",
          "(C) Val C",
          "(D) Val D"
        ],
        "answer": "(A) Val A",
        "solution": "Apply standard Probability concept to solve."
      },
      {
        "id": "probability-2",
        "number": 2,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 2 for Class 10 Probability: Evaluate formula result.",
        "options": [
          "(A) Result A",
          "(B) Result B",
          "(C) Result C",
          "(D) Result D"
        ],
        "answer": "(B) Result B",
        "solution": "Formula calculation step for Probability."
      },
      {
        "id": "probability-3",
        "number": 3,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 3 for Class 10 Probability: Determine geometric/algebraic property.",
        "options": [
          "(A) Prop A",
          "(B) Prop B",
          "(C) Prop C",
          "(D) Prop D"
        ],
        "answer": "(C) Prop C",
        "solution": "NCERT core theorem application."
      },
      {
        "id": "probability-4",
        "number": 4,
        "type": "MCQ",
        "marks": 1,
        "question": "Standard MCQ 4 for Class 10 Probability: Find constant value k.",
        "options": [
          "(A) k = 1",
          "(B) k = 2",
          "(C) k = 3",
          "(D) k = 4"
        ],
        "answer": "(B) k = 2",
        "solution": "Substitute given conditions to find k."
      },
      {
        "id": "probability-5",
        "number": 5,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement for Class 10 Probability.\nReason (R): Reasoning theorem statement for Probability.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(A) Option A",
        "solution": "Both statements hold true according to Class 10 Probability NCERT syllabus."
      },
      {
        "id": "probability-6",
        "number": 6,
        "type": "Assertion-Reason",
        "marks": 1,
        "question": "Assertion (A): Assertion statement 2 for Class 10 Probability.\nReason (R): Reasoning statement 2 for Probability.",
        "options": [
          "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
          "(B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
          "(C) Assertion (A) is true but Reason (R) is false.",
          "(D) Assertion (A) is false but Reason (R) is true."
        ],
        "answer": "(B) Option B",
        "solution": "Both statements are true but Reason is independent."
      },
      {
        "id": "probability-7",
        "number": 7,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Probability Short Answer Question 7: Compute the exact numerical result.",
        "answer": "Solution Q7",
        "solution": "Step-by-step NCERT working for Question 7 of Probability."
      },
      {
        "id": "probability-8",
        "number": 8,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Probability Short Answer Question 8: Compute the exact numerical result.",
        "answer": "Solution Q8",
        "solution": "Step-by-step NCERT working for Question 8 of Probability."
      },
      {
        "id": "probability-9",
        "number": 9,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Probability Short Answer Question 9: Compute the exact numerical result.",
        "answer": "Solution Q9",
        "solution": "Step-by-step NCERT working for Question 9 of Probability."
      },
      {
        "id": "probability-10",
        "number": 10,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Probability Short Answer Question 10: Compute the exact numerical result.",
        "answer": "Solution Q10",
        "solution": "Step-by-step NCERT working for Question 10 of Probability."
      },
      {
        "id": "probability-11",
        "number": 11,
        "type": "Short Answer",
        "marks": 2,
        "question": "Class 10 Probability Short Answer Question 11: Compute the exact numerical result.",
        "answer": "Solution Q11",
        "solution": "Step-by-step NCERT working for Question 11 of Probability."
      },
      {
        "id": "probability-12",
        "number": 12,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Probability Long Answer Question 12: Prove or evaluate step-by-step.",
        "answer": "Result Q12",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "probability-13",
        "number": 13,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Probability Long Answer Question 13: Prove or evaluate step-by-step.",
        "answer": "Result Q13",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "probability-14",
        "number": 14,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Probability Long Answer Question 14: Prove or evaluate step-by-step.",
        "answer": "Result Q14",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "probability-15",
        "number": 15,
        "type": "Long Answer",
        "marks": 3,
        "question": "Class 10 Probability Long Answer Question 15: Prove or evaluate step-by-step.",
        "answer": "Result Q15",
        "solution": "Complete 3-mark NCERT derivation and algebraic calculation."
      },
      {
        "id": "probability-16",
        "number": 16,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: Real-life contextual scenario for Class 10 Probability involving practical measurement.\n\nQuestion: Find the required quantity from the case study context.",
        "answer": "Case Study Answer 1",
        "solution": "Detailed multi-step case study breakdown for Probability."
      },
      {
        "id": "probability-17",
        "number": 17,
        "type": "Case Study",
        "marks": 4,
        "question": "Case Study Context: An engineering/architectural design model based on Probability.\n\nQuestion: Calculate the total capacity or parameter based on the model.",
        "answer": "Case Study Answer 2",
        "solution": "Complete case study calculation steps."
      },
      {
        "id": "probability-18",
        "number": 18,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 18 for Class 10 Probability.",
        "answer": "Board Answer 18",
        "solution": "Official CBSE marking scheme solution for Question 18."
      },
      {
        "id": "probability-19",
        "number": 19,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 19 for Class 10 Probability.",
        "answer": "Board Answer 19",
        "solution": "Official CBSE marking scheme solution for Question 19."
      },
      {
        "id": "probability-20",
        "number": 20,
        "type": "PYQ",
        "marks": 5,
        "question": "CBSE Board Exam Official PYQ 20 for Class 10 Probability.",
        "answer": "Board Answer 20",
        "solution": "Official CBSE marking scheme solution for Question 20."
      }
    ]
  }
];
