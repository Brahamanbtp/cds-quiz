import type { Question } from "@/types/Question";

const mathsData: Record<string, Question[]> = {
  "2026": [
    {
      question: "If <i>p</i> + <i>q</i> + <i>r</i> = 0, then what is <i>z</i><sup><i>p</i><sup>2</sup>/<i>qr</i></sup> &times; <i>z</i><sup><i>q</i><sup>2</sup>/<i>rp</i></sup> &times; <i>z</i><sup><i>r</i><sup>2</sup>/<i>pq</i></sup> equal to ?",
      options: [
        "1",
        "<i>z</i>",
        "<i>z</i><sup>2</sup>",
        "<i>z</i><sup>3</sup>"
      ],
      answer: "<i>z</i><sup>3</sup>"
    },
    {
      question: "What is the value of k for which (k<sup>2</sup> &minus; 5k + 4)x<sup>2</sup> + (k<sup>2</sup> &minus; 3k &minus; 4)x + (k<sup>2</sup> &minus; 4k) = 0 is an identity ?",
      options: [
        "-1",
        "0",
        "1",
        "4"
      ],
      answer: "4"
    },
    {
      question: "If a<sup>2</sup> / (b<sup>2</sup> + c<sup>2</sup>) = b<sup>2</sup> / (c<sup>2</sup> + a<sup>2</sup>) = c<sup>2</sup> / (a<sup>2</sup> + b<sup>2</sup>), then what is the value of a<sup>4</sup> + b<sup>4</sup> + c<sup>4</sup> equal to ?",
      options: [
        "a<sup>2</sup>b<sup>2</sup> + b<sup>2</sup>c<sup>2</sup> + c<sup>2</sup>a<sup>2</sup>",
        "2(a<sup>2</sup>b<sup>2</sup> + b<sup>2</sup>c<sup>2</sup> + c<sup>2</sup>a<sup>2</sup>)",
        "3(a<sup>2</sup>b<sup>2</sup> + b<sup>2</sup>c<sup>2</sup> + c<sup>2</sup>a<sup>2</sup>)",
        "4(a<sup>2</sup>b<sup>2</sup> + b<sup>2</sup>c<sup>2</sup> + c<sup>2</sup>a<sup>2</sup>)"
      ],
      answer: "a<sup>2</sup>b<sup>2</sup> + b<sup>2</sup>c<sup>2</sup> + c<sup>2</sup>a<sup>2</sup>"
    },
    {
      question: "If 1/x = 1/p + 1/q, then what is (pq / (p<sup>2</sup> &minus; q<sup>2</sup>)) &times; ((x+p)/(x&minus;p) &minus; (x+q)/(x&minus;q)) equal to ?",
      options: [
        "-2",
        "-1",
        "1",
        "2"
      ],
      answer: "2"
    },
    {
      question: "Let P = 5<sup>5</sup> &times; 15<sup>15</sup> &times; 25<sup>25</sup> &times; 35<sup>35</sup> and Q = 10<sup>10</sup> &times; 20<sup>20</sup> &times; 30<sup>30</sup> &times; 40<sup>40</sup>. What is the number of consecutive zeros at the end of the sum (P + Q) ?",
      options: [
        "100",
        "65",
        "50",
        "Zero"
      ],
      answer: "Zero"
    },
    {
      question: "If (x &minus; 5) is the HCF of x<sup>2</sup> &minus; x &minus; p and x<sup>2</sup> &minus; qx &minus; 10, then what is the value of (p + q) ?",
      options: [
        "-23",
        "-17",
        "17",
        "23"
      ],
      answer: "23"
    },
    {
      question: "The LCM and HCF of two polynomials p(x) and q(x) are (x + a)(x<sup>3</sup> &minus; a<sup>3</sup>) and (x<sup>2</sup> &minus; ax + a<sup>2</sup>), respectively. If p(x) = x<sup>4</sup> + a<sup>2</sup>x<sup>2</sup> + a<sup>4</sup>, then what is q(x) equal to ?",
      options: [
        "x<sup>4</sup> &minus; 2a<sup>2</sup>x<sup>2</sup> + a<sup>4</sup>",
        "x<sup>4</sup> + 2a<sup>2</sup>x<sup>2</sup> + a<sup>4</sup>",
        "x<sup>2</sup> &minus; a<sup>2</sup>",
        "x<sup>4</sup> &minus; a<sup>2</sup>x<sup>2</sup> + a<sup>4</sup>"
      ],
      answer: "x<sup>2</sup> &minus; a<sup>2</sup>"
    },
    {
      question: "Which of the following expressions can divide both the polynomials x<sup>3</sup> + 2x<sup>2</sup> &minus; 5x + 2 and x<sup>3</sup> + 4x<sup>2</sup> + x &minus; 6 exactly ?<br/><br/>I. x &minus; 1<br/>II. x + 1<br/>III. x + 2<br/><br/>Select the correct answer using the code given below :",
      options: [
        "I and II only",
        "II and III only",
        "I and III only",
        "I only"
      ],
      answer: "I only"
    },
    {
      question: "Eight men and 24 women can finish a piece of work in one day while 12 men and 18 women can also finish it in one day. What is the time taken by 24 men and 72 women to finish the work ?",
      options: [
        "1/3 of a day",
        "2/3 of a day",
        "3 days",
        "9/2 days"
      ],
      answer: "1/3 of a day"
    },
    {
      question: "For what integral value of k, the system of equations kx &minus; 5y + 6 = 0 and 4(k &minus; 1)y &minus; 12x + 3 = 0 has no solution ?",
      options: [
        "4",
        "3",
        "1",
        "No such value exists"
      ],
      answer: "No such value exists"
    },
    {
      question: "Seven times a two-digit positive number is equal to four times the number obtained by reversing the order of the digits. How many such two-digit numbers are there ?",
      options: [
        "1",
        "4",
        "6",
        "8"
      ],
      answer: "4"
    },
    {
      question: "In what duration of time will ₹3300 become ₹3399 at 12% per annum interest compounded quarterly ?",
      options: [
        "3 months",
        "6 months",
        "9 months",
        "1 year"
      ],
      answer: "3 months"
    },
    {
      question: "If x varies directly as y, then which of the following is/are correct ?<br/><br/>I. (x<sup>2</sup> + y<sup>2</sup>) varies directly as y<sup>2</sup>.<br/>II. (x<sup>3</sup>/y<sup>2</sup>) varies directly as y.<br/><br/>Select the answer using the code given below :",
      options: [
        "I only",
        "II only",
        "Both I and II",
        "Neither I nor II"
      ],
      answer: "Both I and II"
    },
    {
      question: "X can do a piece of work in 4 days and Y can do the same piece of work in 6 days. Which of the following statements is/are correct ?<br/><br/>I. If X and Y work alternately starting with X, then the piece of work will be finished on the fifth day.<br/>II. If X and Y work alternately starting with Y, then the piece of work will be finished in less than 5 days.<br/><br/>Select the answer using the code given below :",
      options: [
        "I only",
        "II only",
        "Both I and II",
        "Neither I nor II"
      ],
      answer: "I only"
    },
    {
      question: "12 men working 8 hours a day can completely build a wall of length 100 m, breadth 20 cm and height 5 m in 10 days. How many days will 16 men working 10 hours a day require to build a wall of length 200 m, breadth 60 cm and height 5 m ?",
      options: [
        "18",
        "24",
        "27",
        "36"
      ],
      answer: "36"
    },
    {
      question: "A train P starts from station X for station Y and another train Q starts from station Y for station X at the same time. After passing each other, P takes 4 hours to reach Y and Q takes 1 hour to reach X. If the average speed of P is 60 km/h, then what is the average speed of Q ?",
      options: [
        "72 km/h",
        "80 km/h",
        "96 km/h",
        "120 km/h"
      ],
      answer: "120 km/h"
    },
    {
      question: "Without stoppages, a train travels at an average speed of 60 km/h and with stoppages it covers the same distance at an average speed of 48 km/h. How many minutes per hour does the train stop ?",
      options: [
        "10 minutes",
        "12 minutes",
        "15 minutes",
        "20 minutes"
      ],
      answer: "12 minutes"
    },
    {
      question: "A person goes downstream at x km/h and upstream at y km/h by the same boat. What is the ratio of speed of boat in still water to speed of water ?",
      options: [
        "x/y",
        "y/x",
        "(x+y)/(x&minus;y)",
        "(x&minus;y)/(x+y)"
      ],
      answer: "(x+y)/(x&minus;y)"
    },
    {
      question: "Let Q = x<sup>2</sup> + bx + c. If the sum of the roots is equal to product of the roots of the equation Q = 0, then which of the following statements is/are correct ?<br/><br/>I. Q can be a perfect square.<br/>II. Q is positive for all real values of x.<br/><br/>Select the answer using the code given below :",
      options: [
        "I only",
        "II only",
        "Both I and II",
        "Neither I nor II"
      ],
      answer: "I only"
    },
    {
      question: "The ratio of the present age of X to that of Y is 4 : 5. k (less than 10) years ago, this ratio was 1 : 2. How many values of k are possible if the ages are expressed in complete years ?",
      options: [
        "1",
        "2",
        "3",
        "More than 3"
      ],
      answer: "3"
    },
    {
      question: "27<sup>27</sup> &minus; 9<sup>40</sup> &minus; 3<sup>79</sup> is divisible by how many natural numbers less than 10 ?",
      options: [
        "1",
        "2",
        "3",
        "More than 3"
      ],
      answer: "More than 3"
    },
    {
      question: "If the HCF of p and q (p > q) is G, then which of the following statements is/are correct ?<br/><br/>I. HCF of p and (p + q) is G<br/>II. HCF of p, (p &minus; q) is G<br/><br/>Select the answer using the code given below :",
      options: [
        "I only",
        "II only",
        "Both I and II",
        "Neither I nor II"
      ],
      answer: "Both I and II"
    },
    {
      question: "The HCF and LCM of two numbers p and q are 44 and 4620 respectively. When p is divided by 55, the quotient is 4 and remainder is 0. What is the value of q ?",
      options: [
        "770",
        "924",
        "1155",
        "2310"
      ],
      answer: "924"
    },
    {
      question: "Let N be the greatest number that will divide 600, 631 and 724, leaving the same remainder. What is the value of N ?",
      options: [
        "41",
        "37",
        "33",
        "31"
      ],
      answer: "31"
    },
    {
      question: "What is the LCM of 3.6, 0.009, 0.27 ?",
      options: [
        "5.4",
        "10.8",
        "16.2",
        "21.6"
      ],
      answer: "10.8"
    },
    {
      question: "What is the greatest possible speed at which a person can walk 13.3 km and 20.9 km so that the time (in hours) required in each case is a whole number ?",
      options: [
        "1.7 km/h",
        "1.9 km/h",
        "2.1 km/h",
        "2.3 km/h"
      ],
      answer: "1.9 km/h"
    },
    {
      question: "What is the sum of all the divisors of 256 ?",
      options: [
        "511",
        "510",
        "256",
        "255"
      ],
      answer: "511"
    },
    {
      question: "Consider the following statements :<br/><br/>I. Two consecutive natural numbers are always co-prime.<br/>II. If m and n are relatively prime, then m &times; n is always even.<br/><br/>Which of the statements given above is/are correct ?",
      options: [
        "I only",
        "II only",
        "Both I and II",
        "Neither I nor II"
      ],
      answer: "I only"
    },
    {
      question: "If log<sub>10</sub>(80) = p, log<sub>10</sub>(45) = q and log<sub>10</sub>(216) = r, then what is log<sub>10</sub>(384) equal to ?",
      options: [
        "p + q + r",
        "p &minus; q + r",
        "p &minus; q &minus; r",
        "p + q &minus; r"
      ],
      answer: "p &minus; q + r"
    },
    {
      question: "What is the digit in the unit place of the number 1<sup>1</sup> &times; 3<sup>3</sup> &times; 5<sup>5</sup> &times; 7<sup>7</sup> &times; 9<sup>9</sup> ?",
      options: [
        "1",
        "3",
        "5",
        "7"
      ],
      answer: "5"
    },
    {
      question: "Let P = N<sup>2</sup> where N is an odd integer. What is the remainder when P is divided by 8 ?",
      options: [
        "1",
        "3",
        "5",
        "Cannot be determined due to insufficient data"
      ],
      answer: "1"
    },
    {
      question: "A reduction of 10% in the price of sugar enables a person to buy 6.2 kg more for ₹2790. What is the reduced price per kilogram ?",
      options: [
        "₹50",
        "₹48",
        "₹45",
        "₹42"
      ],
      answer: "₹45"
    },
    {
      question: "A single discount which is equivalent to a series of discounts p %, p/2 %, p/4 % is 31.6%. What is the value of p ?",
      options: [
        "24%",
        "20%",
        "18%",
        "16%"
      ],
      answer: "20%"
    },
    {
      question: "A locomotive engine can go 40 km/hr. Its speed gets reduced by a quantity that varies directly as the square root of the number of wagons attached. It is known that its speed becomes 16 km/hr if 36 wagons are attached. What is the smallest number of wagons with which the engine is unable to move ?",
      options: [
        "100",
        "81",
        "64",
        "49"
      ],
      answer: "100"
    },
    {
      question: "Two numbers P and Q are such that P : Q = x : y. If 1 is added to both the numbers, the ratio becomes 7 : 10. If 3 is added to both the numbers, the ratio becomes 3 : 4. What is (x + y) : (x &minus; y) equal to ?",
      options: [
        "-5",
        "-3",
        "3",
        "Cannot be determined due to insufficient data"
      ],
      answer: "-5"
    },
    {
      question: "ABC is a triangle right-angled at C. A semicircle is drawn on AB as diameter. Let P be any point on AC produced such that AP = AB = 10 cm. Further, B and P are joined. If BC = 8 cm, then what is BP equal to ?",
      options: [
        "4&radic;5 cm",
        "9 cm",
        "10 cm",
        "5&radic;5 cm"
      ],
      answer: "4&radic;5 cm"
    },
    {
      question: "All possible groups of 3 distinct numbers from among A, B, C, D and E are formed. If the aggregate of sums of numbers of each group is 120, then what is the arithmetic mean of A, B, C, D and E ?",
      options: [
        "4",
        "5",
        "10",
        "20"
      ],
      answer: "4"
    },
    {
      question: "The arithmetic mean of 100 observations is 50. If 10 is added to each observation then what will be the new arithmetic mean ?",
      options: [
        "50",
        "55",
        "60",
        "65"
      ],
      answer: "60"
    },
    {
      question: "The sum of the deviations of a set of n numbers x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>, ..., x<sub>n</sub> measured from 15 is &minus;90 and the sum of the deviations of the same numbers measured from &minus;3 is 54. What is the arithmetic mean ?",
      options: [
        "3.25",
        "3.50",
        "3.75",
        "4.25"
      ],
      answer: "3.75"
    },
    {
      question: "The numbers 59, 53, 51, 43, 36, (8x + 1), (x<sup>2</sup> + 1), 13, 12, 9, 7, 3 are written in descending order and their median is 25. What is/are the values of x ?",
      options: [
        "&minus;12 only",
        "4 only",
        "&minus;12, 4",
        "12, &minus;4"
      ],
      answer: "4 only"
    },
    {
      question: "If (cos&theta;)/(1 &minus; sin&theta;) + (cos&theta;)/(1 + sin&theta;) = 4, then which one of the following is a value of (tan<sup>2</sup>&theta; + cot<sup>2</sup>&theta;) ?",
      options: [
        "5/3",
        "10/3",
        "4",
        "5"
      ],
      answer: "10/3"
    },
    {
      question: "For 0 &lt; &theta; &lt; &pi;/2, consider the following :<br/><br/>I. (tan<sup>4</sup>&theta; + tan<sup>6</sup>&theta;)(cot<sup>4</sup>&theta; + cot<sup>6</sup>&theta;) = sec<sup>2</sup>&theta; cosec<sup>2</sup>&theta;<br/>II. (tan&theta; + sin&theta;)/(tan&theta; &minus; sin&theta;) = cot<sup>2</sup>&theta; (sec&theta; + 1)<sup>2</sup><br/><br/>Which of the above is/are identities ?",
      options: [
        "I only",
        "II only",
        "Both I and II",
        "Neither I nor II"
      ],
      answer: "Both I and II"
    },
    {
      question: "If 3sin&theta; + 4cos&theta; = 5, then what is a value of 4tan&theta; + 3cot&theta; ?",
      options: [
        "7",
        "8",
        "9",
        "10"
      ],
      answer: "7"
    },
    {
      question: "At a point on level ground, the tangent of the angle of elevation of the top of a tower is found to be 5/6. On walking 70 m towards the tower, the tangent of the angle of elevation of the top of the tower is found to be 9/8. What is the height of the tower ?",
      options: [
        "225 m",
        "270 m",
        "300 m",
        "330 m"
      ],
      answer: "225 m"
    },
    {
      question: "Two persons are on diametrically opposite sides of a tower. They measure the angles of elevation of the top of the tower as 30&deg; and 60&deg; respectively. If the height of the tower is 100 m, what is the approximate distance between the two persons ?",
      options: [
        "220 m",
        "225 m",
        "230 m",
        "235 m"
      ],
      answer: "230 m"
    },
    {
      question: "In a cyclic quadrilateral ABCD, the diagonal AC bisects the angle C. Which of the following statements is/are correct ?<br/><br/>I. &ang;ABD = &ang;ADB<br/>II. The diagonal BD is parallel to the tangent of the circle at A<br/><br/>Select the answer using the code given below :",
      options: [
        "I only",
        "II only",
        "Both I and II",
        "Neither I nor II"
      ],
      answer: "Both I and II"
    },
    {
      question: "Let x be the length of a diagonal of a face of a cube and y be the length of a diagonal of the cube. If x + y = (5 + 2&radic;6) units, then what is the total surface area of the cube ?",
      options: [
        "6(x + y)",
        "6xy",
        "3(x + y)",
        "3xy"
      ],
      answer: "6(x + y)"
    },
    {
      question: "ABC is a triangle in which AB = AC and D is any point on BC. Which of the following statements is/are correct ?<br/><br/>I. AB<sup>2</sup> &minus; AD<sup>2</sup> = CD &times; BD<br/>II. BC<sup>2</sup> + BD<sup>2</sup> &minus; DC<sup>2</sup> = 2BD &times; BC<br/><br/>Select the answer using the code given below :",
      options: [
        "I only",
        "II only",
        "Both I and II",
        "Neither I nor II"
      ],
      answer: "Both I and II"
    },
    {
      question: "ABC is a triangle right-angled at B with sides BC = a, CA = b and AB = c. Let p be the length of the perpendicular from B to AC. Which of the following statements is/are correct ?<br/><br/>I. p = ac / &radic;(a<sup>2</sup> + c<sup>2</sup>)<br/>II. pb = ac<br/><br/>Select the answer using the code given below :",
      options: [
        "I only",
        "II only",
        "Both I and II",
        "Neither I nor II"
      ],
      answer: "Both I and II"
    },
    {
      question: "ABC is an equilateral triangle. Let PQRS be a square inscribed in it such that P is on AB and Q is on AC. Which of the following is/are correct ?<br/><br/>I. AP : PB = 4 : 3<br/>II. &radic;3AB = (2 + &radic;3)PQ<br/><br/>Select the answer using the code given below :",
      options: [
        "I only",
        "II only",
        "Both I and II",
        "Neither I nor II"
      ],
      answer: "II only"
    },
    {
      question: "The perimeter of a right-angled isosceles triangle is 20 units. If &alpha; is the area of the triangle, then",
      options: [
        "15 &lt; &alpha; &lt; 16",
        "16 &lt; &alpha; &lt; 17",
        "17 &lt; &alpha; &lt; 18",
        "18 &lt; &alpha; &lt; 19"
      ],
      answer: "17 &lt; &alpha; &lt; 18"
    },
    {
      question: "Let O be the centre of a circle. Let A, B and C lie on the circle such that &ang;ABC = 153&deg;. What is the value of &ang;AOC ?",
      options: [
        "54&deg;",
        "52&deg;",
        "39&deg;",
        "27&deg;"
      ],
      answer: "54&deg;"
    },
    {
      question: "In a quadrilateral ABCD, the diagonals intersect at O. Let the area of the triangle ABD be p. If AO : OC = m : n, then what is the area of the triangle BCD ?",
      options: [
        "np/m",
        "mp/n",
        "n<sup>2</sup>p/m<sup>2</sup>",
        "m<sup>2</sup>p/n<sup>2</sup>"
      ],
      answer: "np/m"
    },
    {
      question: "Let ABCD be a parallelogram and E be the midpoint of BC. The diagonal BD and line segment AE intersects at F. If BF = 2.4 cm, then what is BD equal to ?",
      options: [
        "6.0 cm",
        "6.4 cm",
        "7.2 cm",
        "8.4 cm"
      ],
      answer: "7.2 cm"
    },
    {
      question: "ABC is a triangle right-angled at C. Let P be the midpoint of BC. If AP = 4&radic;13 cm and AB = 20 cm, then what is the perimeter of the triangle ABC ?",
      options: [
        "40 cm",
        "48 cm",
        "50 cm",
        "60 cm"
      ],
      answer: "48 cm"
    },
    {
      question: "ABC is a triangle right-angled at B. Points M and N trisect BC. If AM = 6 cm and AN = 9 cm, then what is AC equal to ?",
      options: [
        "4&radic;39 cm",
        "2&radic;39 cm",
        "24 cm",
        "20 cm"
      ],
      answer: "2&radic;39 cm"
    },
    {
      question: "ABC is a triangle right-angled at B. If AC = (p+q)/2 and BC = (p&minus;q)/2, then which of the following statements is/are correct ?<br/><br/>I. The value of AB is equal to the geometric mean of p and q.<br/>II. The perimeter of the triangle is p(q + 1).<br/><br/>Select the answer using the code given below :",
      options: [
        "I only",
        "II only",
        "Both I and II",
        "Neither I nor II"
      ],
      answer: "I only"
    },
    {
      question: "A sphere of diameter 14 cm is dropped into a cylindrical vessel partly filled with water. The radius of the vessel is 14 cm. If the sphere is completely submerged in water, then how much will the level of water rise ?",
      options: [
        "7/3 cm",
        "8/3 cm",
        "14/3 cm",
        "16/3 cm"
      ],
      answer: "7/3 cm"
    },
    {
      question: "ABCD is a quadrilateral with sides AB = 9 cm, BC = 40 cm, CD = 28 cm and DA = 15 cm and one of the diagonals AC = 41 cm. Which of the following statements is/are correct ?<br/><br/>I. The vertices A, B, C and D of the quadrilateral lie on a circle.<br/>II. The area of triangle ACD is 126 cm<sup>2</sup>.<br/><br/>Select the answer using the code given below :",
      options: [
        "I only",
        "II only",
        "Both I and II",
        "Neither I nor II"
      ],
      answer: "II only"
    },
    {
      question: "Let O be the centre of a circle. Let the chords AB = 10 cm and CD = 24 cm be two parallel chords of the circle. The two chords are on opposite side of the centre and the distance between them is 17 cm. Let P be the midpoint of AB and Q be the midpoint of CD. Further, the points O and A, the points O and C, the points A and C are joined. Which of the statements given below is/are correct ?<br/><br/>I. Area of triangle OAP is equal to area of triangle OCQ.<br/>II. Area of triangle OAC is equal to 102 cm<sup>2</sup>.<br/><br/>Select the answer using the code given below :",
      options: [
        "I only",
        "II only",
        "Both I and II",
        "Neither I nor II"
      ],
      answer: "I only"
    },
    {
      question: "A metallic sheet of rectangular shape is 48 cm &times; 36 cm. From each corner a square of side x cm is cut off and an open box is made of the remaining sheet. If the box holds 5.12 litre of water, then what is the value of x ?",
      options: [
        "6 cm",
        "7.5 cm",
        "8 cm",
        "8.5 cm"
      ],
      answer: "8 cm"
    },
    {
      question: "Two triangles ABC right-angled at A and DBC right-angled at D are drawn such that AC and DB intersect at P. If AP = x, PC = y and BP = z, then what is (AC + BD) equal to ?",
      options: [
        "(xy + yz + zx)/z",
        "(xy + yz + zx + z<sup>2</sup>)/z",
        "(xy + yz + zx + y<sup>2</sup>)/y",
        "(xy + yz + zx + x<sup>2</sup>)/x"
      ],
      answer: "(xy + yz + zx + z<sup>2</sup>)/z"
    },
    {
      question: "In a triangle ABC, AB = 18 cm, BC = 22 cm and AC = 15 cm. The bisector of &ang;BAC intersects BC at D. What is (BD &times; DC) equal to ?",
      options: [
        "121 cm<sup>2</sup>",
        "120 cm<sup>2</sup>",
        "117 cm<sup>2</sup>",
        "96 cm<sup>2</sup>"
      ],
      answer: "120 cm<sup>2</sup>"
    },
    {
      question: "The volume of a cube is 8 cm<sup>3</sup> and is equal to the volume of a cuboid of length x, breadth y and height z, where x, y and z are natural numbers (x > y > z). Let n be the number of such cuboids with different dimensions. What is the value of n ?",
      options: [
        "1",
        "2",
        "3",
        "More than 3"
      ],
      answer: "1"
    },
    {
      question: "Let x, y, z (all prime) be the length, breadth and height respectively of a cuboid with x > y > z. The volume of the cuboid is 30k<sup>3</sup> cubic units, where k is a natural number. What is the total surface area of the cuboid ?",
      options: [
        "60 square units",
        "62 square units",
        "64 square units",
        "Cannot be determined due to insufficient data"
      ],
      answer: "62 square units"
    },
    {
      question: "A Question is given followed by two Statements I and II. Consider the Question and the Statements and mark the correct option.<br/><br/>Question : A circle is inscribed in the equilateral triangle &Delta;. What is the radius of the circle ?<br/><br/>Statement-I : Area of &Delta; is equal to 16&radic;3 cm<sup>2</sup>.<br/><br/>Statement-II : Perimeter of &Delta; is 24 cm.<br/><br/>Which one of the following is correct in respect of the above Question and the Statements ?",
      options: [
        "The Question can be answered by using one of the statements alone, but cannot be answered using the other statement alone",
        "The Question can be answered by using either Statement alone",
        "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
        "The Question cannot be answered even by using both the Statements together"
      ],
      answer: "The Question can be answered by using either Statement alone"
    },
    {
      question: "A Question is given followed by two Statements I and II. Consider the Question and the Statements and mark the correct option.<br/><br/>Question : ABCD is a quadrilateral in which AD = BC. What is &ang;ABC + &ang;ADC equal to ?<br/><br/>Statement-I : AB is parallel to DC<br/>Statement-II : AD is not parallel to BC<br/><br/>Which one of the following is correct in respect of the above Question and the Statements ?",
      options: [
        "The Question can be answered by using one of the statements alone, but cannot be answered using the other statement alone",
        "The Question can be answered by using either Statement alone",
        "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
        "The Question cannot be answered even by using both the Statements together"
      ],
      answer: "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone"
    },
    {
      question: "A Question is given followed by two Statements I and II. Consider the Question and the Statements and mark the correct option.<br/><br/>Question : ABCD is a quadrilateral such that AC bisects &ang;A and &ang;C. Is AB/DC equal to AD/BC ?<br/><br/>Statement-I : AB is parallel to DC<br/>Statement-II : AD is parallel to BC<br/><br/>Which one of the following is correct in respect of the above Question and the Statements ?",
      options: [
        "The Question can be answered by using one of the statements alone, but cannot be answered using the other statement alone",
        "The Question can be answered by using either Statement alone",
        "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
        "The Question can be answered even without using both the Statements"
      ],
      answer: "The Question can be answered even without using both the Statements"
    },
    {
      question: "A Question is given followed by two Statements I and II. Consider the Question and the Statements and mark the correct option.<br/><br/>Question : P, Q, R and S are respectively the mid-points of sides AB, BC, CD, DA of a rhombus ABCD. These points are joined to form a quadrilateral PQRS. Is the quadrilateral cyclic ?<br/><br/>Statement-I : &ang;ABC = 120&deg;<br/>Statement-II : &ang;BCD = 60&deg;<br/><br/>Which one of the following is correct in respect of the above Question and the Statements ?",
      options: [
        "The Question can be answered by using one of the statements alone, but cannot be answered using the other statement alone",
        "The Question can be answered by using either Statement alone",
        "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
        "The Question can be answered even without using both the Statements"
      ],
      answer: "The Question can be answered even without using both the Statements"
    },
    {
      question: "A Question is given followed by two Statements I and II. Consider the Question and the Statements and mark the correct option.<br/><br/>Question : Two circles with radii p, q (p > q) in cm touch externally, where p, q are natural numbers and each greater than 1. What is the value of (p &minus; q) ?<br/><br/>Statement-I : The sum of their areas is 130&pi; cm<sup>2</sup><br/>Statement-II : The distance between the centres of the two circles is 14 cm<br/><br/>Which one of the following is correct in respect of the above Question and the Statements ?",
      options: [
        "The Question can be answered by using one of the statements alone, but cannot be answered using the other statement alone",
        "The Question can be answered by using either Statement alone",
        "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
        "The Question cannot be answered even by using both the Statements together"
      ],
      answer: "The Question can be answered by using one of the statements alone, but cannot be answered using the other statement alone"
    },
    {
      question: "A Question is given followed by two Statements I and II. Consider the Question and the Statements and mark the correct option.<br/><br/>Question : Is r<sup>n</sup> less than 1, where r is a real number and n is a natural number ?<br/><br/>Statement-I : 0 &lt; r<sup>2</sup> &lt; 1<br/>Statement-II : 0 &lt; r<sup>3</sup> &lt; 2<br/><br/>Which one of the following is correct in respect of the above Question and the Statements ?",
      options: [
        "The Question can be answered by using one of the statements alone, but cannot be answered using the other statement alone",
        "The Question can be answered by using either Statement alone",
        "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
        "The Question cannot be answered even by using both the Statements together"
      ],
      answer: "The Question can be answered by using one of the statements alone, but cannot be answered using the other statement alone"
    },
    {
      question: "A Question is given followed by two Statements I and II. Consider the Question and the Statements and mark the correct option.<br/><br/>Question : Is (p<sup>2</sup> + q<sup>2</sup>) always composite number, where p and q are different prime numbers ?<br/><br/>Statement-I : (p &minus; q) is an odd integer<br/>Statement-II : (p + q) is an odd integer<br/><br/>Which one of the following is correct in respect of the above Question and the Statements ?",
      options: [
        "The Question can be answered by using one of the statements alone, but cannot be answered using the other statement alone",
        "The Question can be answered by using either Statement alone",
        "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
        "The Question cannot be answered even by using both the Statements together"
      ],
      answer: "The Question can be answered by using either Statement alone"
    },
    {
      question: "A Question is given followed by two Statements I and II. Consider the Question and the Statements and mark the correct option.<br/><br/>Question : Is (0.5)<sup>n</sup> + (0.5)<sup>&minus;n</sup> always greater than 2, where n is an integer ?<br/><br/>Statement-I : n is an even integer<br/>Statement-II : n is negative<br/><br/>Which one of the following is correct in respect of the above Question and the Statements ?",
      options: [
        "The Question can be answered by using one of the statements alone, but cannot be answered using the other statement alone",
        "The Question can be answered by using either Statement alone",
        "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
        "The Question can be answered even without using both the Statements"
      ],
      answer: "The Question can be answered by using one of the statements alone, but cannot be answered using the other statement alone"
    },
    {
      question: "A Question is given followed by two Statements I and II. Consider the Question and the Statements and mark the correct option.<br/><br/>Question : LCM of three numbers p, q and r (p > q > r > 0) is 30 and their HCF is 5. What is the product of the three numbers ?<br/><br/>Statement-I : p = 15<br/>Statement-II : q = 10<br/><br/>Which one of the following is correct in respect of the above Question and the Statements ?",
      options: [
        "The Question can be answered by using one of the statements alone, but cannot be answered using the other statement alone",
        "The Question can be answered by using either Statement alone",
        "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
        "The Question can be answered even without using both the Statements"
      ],
      answer: "The Question can be answered by using one of the statements alone, but cannot be answered using the other statement alone"
    },
    {
      question: "A Question is given followed by two Statements I and II. Consider the Question and the Statements and mark the correct option.<br/><br/>Question : Let XYZ be a 3-digit number and the difference between XYZ and ZYX is equal to PQR. Is (P + R) equal to Q ?<br/><br/>Statement-I : P = 3<br/>Statement-II : R = 6<br/><br/>Which one of the following is correct in respect of the above Question and the Statements ?",
      options: [
        "The Question can be answered by using one of the statements alone, but cannot be answered using the other statement alone",
        "The Question can be answered by using either Statement alone",
        "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
        "The Question can be answered even without using both the Statements"
      ],
      answer: "The Question can be answered even without using both the Statements"
    },
    {
      question: "<b>For the next two (02) items that follow :</b><br/><br/>x<sup>4</sup> + px<sup>3</sup> + qx<sup>2</sup> + x + 6 is divisible by x<sup>2</sup> &minus; x &minus; 6.<br/><br/>What is the value of p ?",
      options: [
        "&minus;2",
        "&minus;1",
        "1",
        "2"
      ],
      answer: "&minus;1"
    },
    {
      question: "<b>For the items that follow :</b><br/><br/>x<sup>4</sup> + px<sup>3</sup> + qx<sup>2</sup> + x + 6 is divisible by x<sup>2</sup> &minus; x &minus; 6.<br/><br/>What is the value of q ?",
      options: [
        "&minus;7",
        "&minus;5",
        "&minus;3",
        "&minus;1"
      ],
      answer: "&minus;7"
    },
    {
      question: "<b>For the next two (02) items that follow :</b><br/><br/>16(x<sup>4</sup> + 1/x<sup>4</sup>) &minus; 257 = 0<br/><br/>What is (x<sup>2</sup> + 1/x<sup>2</sup>) equal to ?",
      options: [
        "25/16",
        "21/16",
        "19/4",
        "17/4"
      ],
      answer: "17/4"
    },
    {
      question: "<b>Following the previous context:</b><br/><br/>16(x<sup>4</sup> + 1/x<sup>4</sup>) &minus; 257 = 0<br/><br/>What is (x<sup>3</sup> + 1/x<sup>3</sup>) equal to ?",
      options: [
        "65/8",
        "63/8",
        "61/8",
        "59/8"
      ],
      answer: "65/8"
    },
    {
      question: "<b>For the next two (02) items that follow :</b><br/><br/>Let x = (&radic;6 + &radic;5)/(&radic;6 &minus; &radic;5) and y = (&radic;6 &minus; &radic;5)/(&radic;6 + &radic;5)<br/><br/>What is (x<sup>2</sup> &minus; y<sup>2</sup>) equal to ?",
      options: [
        "22&radic;30",
        "44&radic;30",
        "66&radic;30",
        "88&radic;30"
      ],
      answer: "88&radic;30"
    },
    {
      question: "<b>Following the previous context:</b><br/><br/>Let x = (&radic;6 + &radic;5)/(&radic;6 &minus; &radic;5) and y = (&radic;6 &minus; &radic;5)/(&radic;6 + &radic;5)<br/><br/>What is (x<sup>2</sup> &minus; xy + y<sup>2</sup>) equal to ?",
      options: [
        "487",
        "483",
        "481",
        "480"
      ],
      answer: "481"
    },
    {
      question: "<b>For the next two (02) items that follow :</b><br/><br/>X is an alloy of copper and zinc. Y is an alloy containing 80% of copper, 4% of zinc and 16% of tin. A fused mass of X and Y is found to contain 74% of copper, 16% of zinc and 10% of tin.<br/><br/>What is the percentage of copper in X ?",
      options: [
        "60%",
        "64%",
        "66%",
        "70%"
      ],
      answer: "64%"
    },
    {
      question: "<b>Following the previous context:</b><br/><br/>X is an alloy of copper and zinc. Y is an alloy containing 80% of copper, 4% of zinc and 16% of tin. A fused mass of X and Y is found to contain 74% of copper, 16% of zinc and 10% of tin.<br/><br/>What is the percentage of zinc in X ?",
      options: [
        "40%",
        "36%",
        "34%",
        "30%"
      ],
      answer: "36%"
    },
    {
      question: "<b>For the next two (02) items that follow :</b><br/><br/>A person borrows a sum of ₹16,000 on simple interest at the beginning of a year. After 4 months, ₹24,000 more is borrowed at a rate of interest double the previous one. At the end of the year, the total interest on both the loans is ₹4800.<br/><br/>What is the initial rate of interest per annum ?",
      options: [
        "8%",
        "10%",
        "12%",
        "16%"
      ],
      answer: "10%"
    },
    {
      question: "<b>Following the previous context:</b><br/><br/>A person borrows a sum of ₹16,000 on simple interest at the beginning of a year. After 4 months, ₹24,000 more is borrowed at a rate of interest double the previous one. At the end of the year, the total interest on both the loans is ₹4800.<br/><br/>What is the ratio of the interest on the first loan to the interest on the second loan ?",
      options: [
        "1 : 2",
        "2 : 3",
        "3 : 4",
        "4 : 5"
      ],
      answer: "1 : 2"
    },
    {
      question: "<b>For the next two (02) items that follow :</b><br/><br/>Let 12(tan&theta; + cot&theta;) = 25, where 45&deg; &lt; &theta; &lt; 90&deg;.<br/><br/>What is a value of (sin&theta; &minus; cos&theta;) ?",
      options: [
        "&minus;1/5",
        "&minus;2/5",
        "1/5",
        "2/5"
      ],
      answer: "1/5"
    },
    {
      question: "<b>Following the previous context:</b><br/><br/>Let 12(tan&theta; + cot&theta;) = 25, where 45&deg; &lt; &theta; &lt; 90&deg;.<br/><br/>What is a value of (cosec&theta; + sec&theta;) ?",
      options: [
        "4",
        "35/12",
        "25/12",
        "2"
      ],
      answer: "35/12"
    },
    {
      question: "<b>For the next two (02) items that follow :</b><br/><br/>cosec&theta; &minus; sin&theta; = p<sup>3</sup> and sec&theta; &minus; cos&theta; = q<sup>3</sup><br/><br/>What is tan&theta; equal to ?",
      options: [
        "p/q",
        "q/p",
        "pq",
        "&radic;pq"
      ],
      answer: "q/p"
    },
    {
      question: "<b>Following the previous context:</b><br/><br/>cosec&theta; &minus; sin&theta; = p<sup>3</sup> and sec&theta; &minus; cos&theta; = q<sup>3</sup><br/><br/>What is p<sup>4</sup>q<sup>2</sup> + p<sup>2</sup>q<sup>4</sup> equal to ?",
      options: [
        "&minus;2",
        "&minus;1",
        "0",
        "1"
      ],
      answer: "1"
    },
    {
      question: "<b>For the next two (02) items that follow :</b><br/><br/>p sin<sup>2</sup>&alpha; + q cos<sup>2</sup>&alpha; = m and p cos<sup>2</sup>&beta; + q sin<sup>2</sup>&beta; = n<br/><br/>What is tan<sup>2</sup>&alpha; equal to ?",
      options: [
        "(m &minus; q)/(p &minus; m)",
        "(m &minus; p)/(q &minus; m)",
        "(m &minus; q)/(m &minus; p)",
        "(m &minus; p)/(m &minus; q)"
      ],
      answer: "(m &minus; q)/(p &minus; m)"
    },
    {
      question: "<b>Following the previous context:</b><br/><br/>p sin<sup>2</sup>&alpha; + q cos<sup>2</sup>&alpha; = m and p cos<sup>2</sup>&beta; + q sin<sup>2</sup>&beta; = n<br/><br/>What is cot<sup>2</sup>&beta; equal to ?",
      options: [
        "(n &minus; q)/(p &minus; n)",
        "(n &minus; p)/(q &minus; n)",
        "(n &minus; p)/(n &minus; q)",
        "(n &minus; q)/(n &minus; p)"
      ],
      answer: "(n &minus; q)/(p &minus; n)"
    },
    {
      question: "<b>For the next two (02) items that follow :</b><br/><br/>p + q cot&theta; = 3cosec&theta; and<br/>q &minus; p cot&theta; = 2cosec&theta;<br/><br/>What is p<sup>2</sup> + q<sup>2</sup> equal to ?",
      options: [
        "5",
        "7",
        "10",
        "13"
      ],
      answer: "13"
    },
    {
      question: "<b>Following the previous context:</b><br/><br/>p + q cot&theta; = 3cosec&theta; and<br/>q &minus; p cot&theta; = 2cosec&theta;<br/><br/>What is tan&theta; equal to ?",
      options: [
        "(2q + 3p)/(3q &minus; 2p)",
        "(2q &minus; 3p)/(3q + 2p)",
        "(3q + 2p)/(2q &minus; 3p)",
        "(3q &minus; 2p)/(2q + 3p)"
      ],
      answer: "(2q + 3p)/(3q &minus; 2p)"
    },
    {
      question: "<b>For the next two (02) items that follow :</b><br/><br/>p = sin&theta; / (1 + cos&theta; + sin&theta;) and q = (1 + sin&theta;) / (1 + sin&theta; &minus; cos&theta;)<br/><br/>Which one of the following is correct ?",
      options: [
        "p &minus; q = 0",
        "2pq &minus; 1 = 0",
        "pq &minus; 2 = 0",
        "pq &minus; 1 = 0"
      ],
      answer: "2pq &minus; 1 = 0"
    },
    {
      question: "<b>Following the previous context:</b><br/><br/>p = sin&theta; / (1 + cos&theta; + sin&theta;) and q = (1 + sin&theta;) / (1 + sin&theta; &minus; cos&theta;)<br/><br/>What is (p + 1/q)(q + 1/p) equal to ?",
      options: [
        "1/2",
        "17/4",
        "9/2",
        "21/4"
      ],
      answer: "9/2"
    },
    {
      question: "The minute hand of a clock is 15 cm long and sweeps an area of 15&pi; cm<sup>2</sup> on the dial of the clock. How much angle does it describe during this period ?",
      options: [
        "12&deg;",
        "18&deg;",
        "24&deg;",
        "30&deg;"
      ],
      answer: "24&deg;"
    },
    {
      question: "The diameter of a copper solid sphere is 6 cm. The sphere is melted and recast into a wire. If the diameter of the wire is 0.5 cm, then what is the length of the wire ?",
      options: [
        "5.24 m",
        "5.36 m",
        "5.76 m",
        "5.96 m"
      ],
      answer: "5.76 m"
    },
    {
      question: "A square and a rectangle have the same perimeter p and their areas differ by q units. What is the square of the difference between the length and breadth of the rectangle ?",
      options: [
        "1.5q",
        "2q",
        "2.5q",
        "4q"
      ],
      answer: "4q"
    },
    {
      question: "A triangle PQR is inscribed in a circle with its centre at O. A tangent PT is drawn at P such that &ang;QPT = 36&deg;. What is &ang;POQ equal to ?",
      options: [
        "36&deg;",
        "54&deg;",
        "72&deg;",
        "108&deg;"
      ],
      answer: "72&deg;"
    },
    {
      question: "ABCD is a cyclic quadrilateral. AB and DC are produced to meet at P. Which of the following statements is/are correct ?<br/><br/>I. &Delta;PAD is similar to &Delta;PBC<br/>II. &ang;PAD + &ang;PDA = &ang;PBC + &ang;PCB<br/><br/>Select the answer using the code given below :",
      options: [
        "I only",
        "II only",
        "Both I and II",
        "Neither I nor II"
      ],
      answer: "II only"
    }
  ],
  "2025": [
    {
      question: "If x + y = 10 and x - y = 4, what is the value of x?",
      options: ["3", "5", "7", "10"],
      answer: "7"
    }
  ]
};

export default mathsData;
