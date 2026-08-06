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
      "question": "Let p(x) be a polynomial. When p(x) is divided by (x - 1), it leaves 2 as the remainder. When p(x) is divided by (x - 2), it leaves 1 as the remainder. What is the remainder when p(x) is divided by (x - 1)(x - 2)?",
      "options": [
            "3",
            "-3",
            "3 - x",
            "3 - 2x"
      ],
      "answer": "3 - x"
},
    {
      "question": "Consider the following in respect of a positive real number x :<br/><br/>I. x + 1/x > 1<br/>II. (x + 1/x)<sup>2</sup> > 2<br/>III. (x + 1/x)<sup>4</sup> > 9<br/><br/>Which of the above are correct?",
      "options": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
      ],
      "answer": "I, II and III"
},
    {
      "question": "Let p and q be natural numbers such that q > p. What is the largest value of p such that q<sup>2</sup> - 5p - 4 is negative?",
      "options": [
            "3",
            "4",
            "5",
            "6"
      ],
      "answer": "3"
},
    {
      "question": "Let x and y be natural numbers, each less than 20, such that x, y, x + y and x - y are prime numbers. How many such combinations of (x, y, x + y, x - y) are possible?",
      "options": [
            "One",
            "Two",
            "Three",
            "None"
      ],
      "answer": "One"
},
    {
      "question": "If (x + 1)(x + p)(x<sup>2</sup> + p<sup>2</sup>) = x<sup>4</sup> - 1, then what is the value of p?",
      "options": [
            "-1",
            "0",
            "1",
            "Cannot be determined"
      ],
      "answer": "-1"
},
    {
      "question": "If (2 + &radic;3)<sup>x</sup> + (2 - &radic;3)<sup>x</sup> = 2, then what is (2 + &radic;3)<sup>x</sup> - (2 - &radic;3)<sup>x</sup> equal to?",
      "options": [
            "0",
            "0.5",
            "1",
            "1.5"
      ],
      "answer": "0"
},
    {
      "question": "If 1/a + 1/b = 5/6 and 1/a<sup>2</sup> + 1/b<sup>2</sup> = 13/36, then what is 1/a<sup>3</sup> + 1/b<sup>3</sup> equal to?",
      "options": [
            "31/216",
            "35/216",
            "37/216",
            "41/216"
      ],
      "answer": "35/216"
},
    {
      "question": "What is the remainder when x<sup>6</sup> is divided by x<sup>2</sup> + 1?",
      "options": [
            "-1",
            "0",
            "1",
            "x + 1"
      ],
      "answer": "-1"
},
    {
      "question": "(x + 2) is a factor of which one of the following?",
      "options": [
            "x<sup>5</sup> - 4x<sup>4</sup> - 3x<sup>3</sup> + 8x<sup>2</sup> - 14x + 12",
            "x<sup>5</sup> + 4x<sup>4</sup> - 3x<sup>3</sup> + 8x<sup>2</sup> - 14x + 12",
            "x<sup>5</sup> - 4x<sup>4</sup> + 3x<sup>3</sup> + 8x<sup>2</sup> - 14x + 12",
            "x<sup>5</sup> - 4x<sup>4</sup> - 3x<sup>3</sup> + 8x<sup>2</sup> + 14x + 12"
      ],
      "answer": "x<sup>5</sup> - 4x<sup>4</sup> - 3x<sup>3</sup> + 8x<sup>2</sup> - 14x + 12"
},
    {
      "question": "If log<sub>10</sub> 2 = 0.301 and log<sub>10</sub> 3 = 0.477, then what is the number of digits in the expansion of 60<sup>60</sup> ?",
      "options": [
            "105",
            "106",
            "107",
            "108"
      ],
      "answer": "107"
},
    {
      "question": "What is the remainder when (17<sup>25</sup> + 19<sup>25</sup>) is divided by 18?",
      "options": [
            "0",
            "1",
            "3",
            "9"
      ],
      "answer": "0"
},
    {
      "question": "The HCF of x and y is H. Consider the following statements in respect of the HCF of p = (x<sup>3</sup> + y<sup>3</sup>) / (x<sup>2</sup> - xy + y<sup>2</sup>) and q = (x<sup>3</sup> - y<sup>3</sup>) / (x<sup>2</sup> + xy + y<sup>2</sup>) :<br/><br/>I. The HCF of p and q can be H.<br/>II. The HCF of p and q can be 2H.<br/><br/>Which of the statements given above is/are correct?",
      "options": [
            "I only",
            "II only",
            "Both I and II",
            "Neither I nor II"
      ],
      "answer": "Both I and II"
},
    {
      "question": "If x<sup>4</sup> = x<sup>2</sup> + 1, where x > 0, then what is 2x<sup>4</sup> equal to?",
      "options": [
            "2 + &radic;3",
            "3 + &radic;5",
            "5 - 2&radic;3",
            "3 - &radic;5"
      ],
      "answer": "3 + &radic;5"
},
    {
      "question": "If (p + q) / (q + r) = (r + s) / (s + p); (q + r) &ne; 0, (s + p) &ne; 0, then which one of the following is correct?",
      "options": [
            "p + q + r + s = 0",
            "p = r",
            "Either p + q + r + s = 0 or p = r",
            "None of the above"
      ],
      "answer": "Either p + q + r + s = 0 or p = r"
},
    {
      "question": "If n is natural number less than 7, then what is the number of values of n for which (12n + 2) and (8n + 1) are relatively prime?",
      "options": [
            "6",
            "5",
            "4",
            "3"
      ],
      "answer": "6"
},
    {
      "question": "What is the HCF of x<sup>3</sup> + y<sup>3</sup> + 3xy - 1 and (x + y)<sup>4</sup> - 1?",
      "options": [
            "x + y",
            "x + y + 1",
            "x + y - 1",
            "1"
      ],
      "answer": "x + y - 1"
},
    {
      "question": "Let x = n(n + 1)(n + 2), where n is an even natural number. Which of the following statements is/are correct?<br/><br/>I. x is always divisible by 48.<br/>II. x<sup>2</sup> is always divisible by 144.<br/><br/>Select the answer using the code given below.",
      "options": [
            "I only",
            "II only",
            "Both I and II",
            "Neither I nor II"
      ],
      "answer": "II only"
},
    {
      "question": "What is the LCM of x<sup>4</sup> + x<sup>2</sup>y<sup>2</sup> + y<sup>4</sup>, x<sup>3</sup>y + y<sup>4</sup> and x<sup>4</sup>y<sup>2</sup> - x<sup>3</sup>y<sup>3</sup> ?",
      "options": [
            "x<sup>3</sup>y<sup>3</sup>(x<sup>6</sup> - y<sup>6</sup>)",
            "x<sup>3</sup>y<sup>2</sup>(x<sup>6</sup> - y<sup>6</sup>)",
            "x<sup>3</sup>y(x<sup>6</sup> - y<sup>6</sup>)",
            "xy(x<sup>6</sup> - y<sup>6</sup>)"
      ],
      "answer": "x<sup>3</sup>y<sup>2</sup>(x<sup>6</sup> - y<sup>6</sup>)"
},
    {
      "question": "Let XYZ be a 3-digit number. Let D be the difference between XYZ and ZYX. What is the remainder when D is divided by 99?",
      "options": [
            "0",
            "1",
            "7",
            "9"
      ],
      "answer": "0"
},
    {
      "question": "Let p and q be two natural numbers such that (p + q)<sup>p + q</sup> is divisible by 512. What is the least value of (p + q)?",
      "options": [
            "4",
            "6",
            "8",
            "12"
      ],
      "answer": "8"
},
    {
      "question": "What is (a + b)<sup>2</sup> / ((c - a)(c + a + b)) + (a + b)c / (c<sup>2</sup> + bc - a<sup>2</sup> - ab) - (a + 2b + c) / (2(c - a)), a &ne; b, b &ne; c, c &ne; a equal to?",
      "options": [
            "-1/2",
            "0",
            "1/2",
            "1"
      ],
      "answer": "-1/2"
},
    {
      "question": "If a<sup>b</sup> = b<sup>a</sup>, then what is (a * (a / b)<sup>a / b</sup>) / a<sup>(a / b)</sup> equal to?",
      "options": [
            "1",
            "ab",
            "b",
            "a<sup>b</sup>"
      ],
      "answer": "1"
},
    {
      "question": "If x = 2 + 2<sup>1/2</sup> + 2<sup>3/2</sup>, then what is x<sup>2</sup> - 4x - 10 equal to?",
      "options": [
            "0",
            "1",
            "4",
            "6"
      ],
      "answer": "4"
},
    {
      "question": "If (&radic;(p + x) + &radic;(p - x)) / (&radic;(p + x) - &radic;(p - x)) = p, then what is x equal to?",
      "options": [
            "p / (p<sup>2</sup> + 1)",
            "2p / (p<sup>2</sup> + 1)",
            "p<sup>2</sup> / (p<sup>2</sup> + 1)",
            "2p<sup>2</sup> / (p<sup>2</sup> + 1)"
      ],
      "answer": "2p<sup>2</sup> / (p<sup>2</sup> + 1)"
},
    {
      "question": "If ((a - b) / 2)x<sup>2</sup> - ((a + b) / 2)x + b = 0, then what are the roots of this equation?",
      "options": [
            "1, b / (a - b)",
            "1, 2b / (a - b)",
            "1/2, b / (a + b)",
            "1/2, 2b / (a + b)"
      ],
      "answer": "1, 2b / (a - b)"
},
    {
      "question": "If x - 1/x = 2, x > 0; then what is x<sup>2</sup> - 1/x<sup>2</sup> equal to?",
      "options": [
            "6",
            "4&radic;2",
            "4",
            "2&radic;2"
      ],
      "answer": "4&radic;2"
},
    {
      "question": "If (a - b)<sup>2</sup> + (b - c)<sup>2</sup> + (c - a)<sup>2</sup> = 6 and a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> = 29, then what is (a + b + c) equal to?",
      "options": [
            "&plusmn;9",
            "&plusmn;8",
            "&plusmn;6",
            "&plusmn;3"
      ],
      "answer": "&plusmn;9"
},
    {
      "question": "If p = (&radic;5 - 2) / (&radic;5 + 2) and q = (&radic;5 + 2) / (&radic;5 - 2), then what is (p/q + q/p) equal to?",
      "options": [
            "18",
            "8&radic;5",
            "322",
            "72&radic;5"
      ],
      "answer": "322"
},
    {
      "question": "What is the digit at hundreds place of the number (25)<sup>10</sup> ?",
      "options": [
            "1",
            "2",
            "5",
            "6"
      ],
      "answer": "6"
},
    {
      "question": "A number N is such that when divided by 4, 6, 7 or 9, it leaves 3 as remainder. What is the smallest 4-digit number that satisfies this property?",
      "options": [
            "1003",
            "1005",
            "1007",
            "1011"
      ],
      "answer": "1011"
},
    {
      "question": "If &radic;(2 + &radic;(2 + &radic;(2 + &radic;(2 + ...)))) = cosec&theta;, then what is sin&theta; equal to?",
      "options": [
            "1",
            "&radic;3 / 2",
            "1 / &radic;2",
            "1 / 2"
      ],
      "answer": "1 / 2"
},
    {
          "question": "If 8 sin&theta; - cos&theta; = 4, where 0 < &theta; < &pi;/2, then what is cosec&theta; equal to?",
          "options": [
                "1",
                "3 / 2",
                "5 / 3",
                "2"
          ],
          "answer": "5 / 3"
    },
    {
          "question": "If 2 tan&theta; = sec<sup>2</sup>&theta; - 2, where 0 < &theta; < &pi;/2, then what is cot&theta; equal to?",
          "options": [
                "&radic;2 - 1",
                "&radic;2 + 1",
                "&radic;3 - 1",
                "&radic;3 + 2"
          ],
          "answer": "&radic;2 - 1"
    },
    {
          "question": "What is (sec&theta; - tan&theta;) - &radic;((1 - sin&theta;) / (1 + sin&theta;)) equal to?",
          "options": [
                "0",
                "2 tan&theta;",
                "2 sec&theta;",
                "sin&theta; + cos&theta;"
          ],
          "answer": "0"
    },
    {
          "question": "If cot&theta; = &radic;7, then what is (cosec<sup>2</sup>&theta; - sec<sup>2</sup>&theta;) / (cosec<sup>2</sup>&theta; + sec<sup>2</sup>&theta;) equal to?",
          "options": [
                "1 / 2",
                "1 / 3",
                "2 / 3",
                "3 / 4"
          ],
          "answer": "3 / 4"
    },
    {
          "question": "The difference between the two acute angles in a right-angled triangle is &pi;/12 radian. One of the acute angles of the triangle is",
          "options": [
                "60&deg;",
                "57.5&deg;",
                "52.5&deg;",
                "47.5&deg;"
          ],
          "answer": "52.5&deg;"
    },
    {
          "question": "If &alpha; and &beta; are the roots of the equation log<sub>10</sub>(998 + &radic;(x<sup>2</sup> - 18x + 76)) = 3, then what is (&alpha; - &beta;)<sup>2</sup> equal to?",
          "options": [
                "16",
                "25",
                "36",
                "49"
          ],
          "answer": "36"
    },
    {
          "question": "If x<sup>4</sup> + y<sup>4</sup> = 14x<sup>2</sup>y<sup>2</sup>, then consider the following :<br/><br/>I. log<sub>10</sub>(x<sup>2</sup> + y<sup>2</sup>) = log<sub>10</sub>x + log<sub>10</sub>y + 2log<sub>10</sub>2<br/>II. log<sub>10</sub>(x<sup>2</sup> - y<sup>2</sup>) = log<sub>10</sub>x + log<sub>10</sub>y + log<sub>10</sub>2 + 0.5log<sub>10</sub>3<br/><br/>Which of the above is/are correct?",
          "options": [
                "I only",
                "II only",
                "Both I and II",
                "Neither I nor II"
          ],
          "answer": "Both I and II"
    },
    {
          "question": "Which of the following is/are the factor(s) of (3x + y)<sup>2</sup> + (3x + y)(x + 5y) - 20(x + 5y)<sup>2</sup> ?<br/><br/>I. (4x + 13y)<br/>II. (x + 19y)<br/><br/>Select the correct answer using the code given below.",
          "options": [
                "I only",
                "II only",
                "Both I and II",
                "Neither I nor II"
          ],
          "answer": "Both I and II"
    },
    {
          "question": "What is (x / (x - y) + y / (y - z) + z / (z - x)) / ( (x + y) / (x - y) + (y + z) / (y - z) + (z + x) / (z - x) + 3 ) equal to?",
          "options": [
                "1",
                "1 / 2",
                "1 / 3",
                "1 / 4"
          ],
          "answer": "1 / 2"
    },
    {
          "question": "Let psin<sup>2</sup>&alpha; + qcos<sup>2</sup>&alpha; = m, qsin<sup>2</sup>&beta; + pcos<sup>2</sup>&beta; = n; p &ne; m, n and q &ne; m, n.<br/><br/>What is tan<sup>2</sup>&alpha; / tan<sup>2</sup>&beta; equal to?",
          "options": [
                "- ((m - q)(n - q)) / ((m - p)(n - p))",
                "- ((m - q)(n - p)) / ((m - p)(n - q))",
                "((m - q)(n - q)) / ((m - p)(n - p))",
                "((m - q)(n - p)) / ((m - p)(n - q))"
          ],
          "answer": "((m - q)(n - q)) / ((m - p)(n - p))"
    },
    {
          "question": "If &alpha; and &beta; are complementary angles, then which one of the following is correct?",
          "options": [
                "mn - 1 = 0",
                "mn + 1 = 0",
                "m + n = 0",
                "m - n = 0"
          ],
          "answer": "m - n = 0"
    },
    {
          "question": "Let cosec&theta; - sin&theta; = p and sec&theta; - cos&theta; = q.<br/><br/>What is (psin&theta; + qcos&theta;) equal to?",
          "options": [
                "-1",
                "0",
                "1",
                "2"
          ],
          "answer": "1"
    },
    {
          "question": "What is p<sup>2</sup>q<sup>2</sup>(p<sup>2</sup> + q<sup>2</sup> + 3) equal to?",
          "options": [
                "0",
                "1",
                "2",
                "4"
          ],
          "answer": "1"
    },
    {
          "question": "Let (sin&alpha;) / (sin&beta;) = (4&radic;2) / 3 and (cos&alpha;) / (cos&beta;) = (2&radic;3) / 9.<br/><br/>What is tan<sup>2</sup>&alpha; equal to?",
          "options": [
                "8",
                "6",
                "4",
                "3"
          ],
          "answer": "8"
    },
    {
          "question": "What is tan<sup>2</sup>&beta; equal to?",
          "options": [
                "1 / &radic;2",
                "3 / &radic;2",
                "1 / 3",
                "2 / 3"
          ],
          "answer": "1 / 3"
    },
    {
          "question": "Let (1 + sin&theta;) / cos&theta; = p + &radic;(p<sup>2</sup> + 1).<br/><br/>What is sec&theta; equal to?",
          "options": [
                "p",
                "&radic;(p<sup>2</sup> + 1)",
                "1 / &radic;(p<sup>2</sup> + 1)",
                "p / &radic;(p<sup>2</sup> + 1)"
          ],
          "answer": "&radic;(p<sup>2</sup> + 1)"
    },
    {
          "question": "What is tan&theta; equal to?",
          "options": [
                "p",
                "&radic;(p<sup>2</sup> + 1)",
                "1 / &radic;(p<sup>2</sup> + 1)",
                "p / &radic;(p<sup>2</sup> + 1)"
          ],
          "answer": "p"
    },
    {
          "question": "Let sin&theta; + cos&theta; = p and sec&theta; + cosec&theta; = q, where p &ne; 1.<br/><br/>What is the relation between p and q?",
          "options": [
                "p = q(p<sup>2</sup> - 1)",
                "2p = q(p<sup>2</sup> - 1)",
                "q = p<sup>2</sup> - 1",
                "2q = p(p<sup>2</sup> - 1)"
          ],
          "answer": "2p = q(p<sup>2</sup> - 1)"
    },
    {
          "question": "What is tan&theta; + cot&theta; equal to?",
          "options": [
                "p / q",
                "q / p",
                "2p / q",
                "2q / p"
          ],
          "answer": "q / p"
    },
    {
          "question": "Two trains X and Y are travelling in the same direction at 100 km/hr and 60 km/hr respectively. Train X crosses a man in train Y in 9 seconds. What is the length of train X?",
          "options": [
                "80 m",
                "100 m",
                "120 m",
                "150 m"
          ],
          "answer": "100 m"
    },
    {
          "question": "Two persons X and Y leave place P for place Q at 7:00 a.m. and 7:10 a.m. respectively along the same path. X walks at a speed of 4.8 km/hr and Y walks at a speed of 6 km/hr. How many kilometres from place P will X meet Y?",
          "options": [
                "3 km",
                "3.5 km",
                "4 km",
                "4.5 km"
          ],
          "answer": "4 km"
    },
    {
          "question": "There are two employees X and Y. X's salary is first increased by 12% and then decreased by 10%, and Y's salary is first increased by 10% and then decreased by 12%. If their salaries at present are equal, then what was the ratio of initial salary of X to initial salary of Y?",
          "options": [
                "50 : 53",
                "51 : 53",
                "121 : 126",
                "121 : 125"
          ],
          "answer": "121 : 126"
    },
    {
          "question": "In a village consisting of p persons, x% can read and write. Of the males, only y% can read and write. Of the females, only z% can read and write. If x, y > z, then what is the number of males in the village?",
          "options": [
                "p(x - z) / (y - z)",
                "p(y - z) / (x - z)",
                "px / y",
                "py / x"
          ],
          "answer": "p(x - z) / (y - z)"
    },
    {
          "question": "X and Y are two alloys of copper (Cu) and zinc (Zn). Alloy X is prepared by mixing Cu and Zn in the ratio 5:4, and alloy Y is prepared by mixing Cu and Zn in the ratio 5:13 respectively. If equal quantities of alloys X and Y are melted to form a third alloy Z, then what is the ratio of Cu to Zn in Z?",
          "options": [
                "5 : 8",
                "5 : 7",
                "6 : 7",
                "7 : 8"
          ],
          "answer": "5 : 7"
    },
    {
          "question": "Two students X and Y appeared in a test. The score of X is 20 more than that of Y. If the score of X is 75% of the sum of the scores of X and Y, then what is the ratio of score of X to score of Y?",
          "options": [
                "5 : 1",
                "4 : 1",
                "3 : 1",
                "3 : 2"
          ],
          "answer": "3 : 1"
    },
    {
          "question": "If one root of the equation 2x<sup>2</sup> - 5px + 2p<sup>2</sup> = 0 exceeds the other by 4, then what is the value of p?",
          "options": [
                "8 / 3",
                "4 / 3",
                "2 / 3",
                "1 / 3"
          ],
          "answer": "8 / 3"
    },
    {
          "question": "An amount of &#8377;10,000 is borrowed at 10% per annum on compound interest for 3 years, compounded annually, and paid back in 3 equal annual installments during these years. What is the amount of each installment (approximately)?",
          "options": [
                "&#8377;4,437",
                "&#8377;4,237",
                "&#8377;4,021",
                "&#8377;3,811"
          ],
          "answer": "&#8377;4,021"
    },
    {
          "question": "What is the solution of the inequalities 5x + 3 < 8x - 9 and 2x + 20 > 5x + 2?",
          "options": [
                "4 < x < 6",
                "3 < x < 5",
                "x < 3 or x > 5",
                "x < 4 or x > 6"
          ],
          "answer": "4 < x < 6"
    },
    {
          "question": "A shopkeeper gives three consecutive discounts 10%, 20% and 25% after which he sells the article at a profit of 8% on the cost price. Had he sold the article after the first discount, how much profit would he have got?",
          "options": [
                "20%",
                "40%",
                "50%",
                "None of the above"
          ],
          "answer": "None of the above"
    },
    {
          "question": "Let AD be the altitude of a triangle ABC. If (AB + AC) = p, (AB - AC) = q and (BD - CD) = r, then what is BC equal to?",
          "options": [
                "qr / p",
                "pr / q",
                "pq / r",
                "p + q - r"
          ],
          "answer": "pq / r"
    },
    {
          "question": "The sum of the height and the radius of a right circular cylinder is 21 cm, and the radius is less than the height. If the curved surface area of the cylinder is 616 cm<sup>2</sup>, then what is the volume of the cylinder? (Take &pi; = 22 / 7)",
          "options": [
                "1078 cm<sup>3</sup>",
                "1617 cm<sup>3</sup>",
                "1927 cm<sup>3</sup>",
                "2156 cm<sup>3</sup>"
          ],
          "answer": "2156 cm<sup>3</sup>"
    },
    {
          "question": "ABC is a triangle right angled at B. P is the midpoint of AB and Q is the midpoint of BC. Consider the following :<br/><br/>I. AQ = &radic;73 units<br/>II. CP = &radic;52 units<br/><br/>Which of the above is/are required to determine the area of the triangle?",
          "options": [
                "I only",
                "II only",
                "Both I and II",
                "More information is needed"
          ],
          "answer": "Both I and II"
    },
    {
          "question": "The length, breadth and height of a cuboid are consecutive integers. If the volume of the cuboid is 336 cubic units, then what is the total surface area of the cuboid?",
          "options": [
                "288 square units",
                "292 square units",
                "296 square units",
                "Cannot be determined due to insufficient data"
          ],
          "answer": "292 square units"
    },
    {
          "question": "In a circle of radius 14 cm, APB is a shorter arc and P is the midpoint of the arc. Let C be the midpoint of the chord AB and PC = 7 cm. What is the length of the chord AP?",
          "options": [
                "3.5 cm",
                "7 cm",
                "10.5 cm",
                "14 cm"
          ],
          "answer": "14 cm"
    },
    {
          "question": "Two poles of heights 10 m and 15 m are 25 m apart. What is the height of the point of intersection of the lines joining the tip of each pole to the foot of the other pole?",
          "options": [
                "4.8 m",
                "5 m",
                "6 m",
                "6.4 m"
          ],
          "answer": "6 m"
    },
    {
          "question": "ABC is a triangle right angled at B. Further, (AB + BC) exceeds AC by 10 units. If the perimeter of the triangle is 60 units, then what is the area of the triangle?",
          "options": [
                "75 square units",
                "100 square units",
                "125 square units",
                "150 square units"
          ],
          "answer": "150 square units"
    },
    {
          "question": "Two poles are situated 24 m apart and their heights differ by 10 m. What is the distance between their tips?",
          "options": [
                "25 m",
                "26 m",
                "30 m",
                "Cannot be determined due to insufficient data"
          ],
          "answer": "26 m"
    },
    {
          "question": "Let X, Y and Z be the midpoints of the sides BC, CA and AB of a triangle ABC respectively. Consider the following statements :<br/><br/>I. The quadrilateral AZXY is a parallelogram.<br/>II. The area of the quadrilateral AZXY is half of the area of the triangle ABC.<br/><br/>Which of the statements given above is/are correct?",
          "options": [
                "I only",
                "II only",
                "Both I and II",
                "Neither I nor II"
          ],
          "answer": "Both I and II"
    },
    {
          "question": "Consider the following angles :<br/><br/>I. 4&deg;<br/>II. 5&deg;<br/>III. 6&deg;<br/>IV. 8&deg;<br/><br/>How many of the above can be the exterior angle of a regular polygon?",
          "options": [
                "One",
                "Two",
                "Three",
                "All four"
          ],
          "answer": "All four"
    },
    {
          "question": "In a triangle ABC, &ang;A = 30&deg;, AB = 7 cm and AC = 12 cm. What is the area of the triangle ABC?",
          "options": [
                "21 cm<sup>2</sup>",
                "21&radic;3 cm<sup>2</sup>",
                "42 cm<sup>2</sup>",
                "42&radic;3 cm<sup>2</sup>"
          ],
          "answer": "21 cm<sup>2</sup>"
    },
    {
          "question": "ABC is a triangle right angled at B. D is a point on AC such that BD is perpendicular to AC. If AB = p and BC = &radic;3p, then what is BD equal to?",
          "options": [
                "p / 3",
                "p / 2",
                "&radic;3p / 2",
                "&radic;3p / 4"
          ],
          "answer": "&radic;3p / 2"
    },
    {
          "question": "The difference between an interior angle and an exterior angle of a regular polygon is 120&deg;. What is the number of sides of the polygon?",
          "options": [
                "9",
                "10",
                "11",
                "12"
          ],
          "answer": "12"
    },
    {
          "question": "An angle &theta; is exactly one-fourth of its complementary angle. What is the value of angle &theta;?",
          "options": [
                "12&deg;",
                "15&deg;",
                "18&deg;",
                "20&deg;"
          ],
          "answer": "18&deg;"
    },
    {
          "question": "The sides of a triangle are 11 cm, 60 cm and 61 cm. What is the area of the triangle formed by joining the mid-points of the sides of the triangle?",
          "options": [
                "165 cm<sup>2</sup>",
                "110 cm<sup>2</sup>",
                "82.5 cm<sup>2</sup>",
                "72.5 cm<sup>2</sup>"
          ],
          "answer": "82.5 cm<sup>2</sup>"
    },
    {
          "question": "A pendulum swings through an angle of 30&deg; and its end describes an arc of length 55 cm. What is the length of the pendulum? (Take &pi; = 22 / 7)",
          "options": [
                "90 cm",
                "100 cm",
                "105 cm",
                "110 cm"
          ],
          "answer": "105 cm"
    },
    {
          "question": "A conical tent has an angle of 60&deg; at the vertex. If the curved surface area is 100 m<sup>2</sup>, then what is the volume of the tent?",
          "options": [
                "250&radic;2 / &radic;(3&pi;) m<sup>3</sup>",
                "500&radic;3 / &radic;&pi; m<sup>3</sup>",
                "1000&radic;3 / &radic;(2&pi;) m<sup>3</sup>",
                "1000&radic;3 / &radic;&pi; m<sup>3</sup>"
          ],
          "answer": "250&radic;2 / &radic;(3&pi;) m<sup>3</sup>"
    },
    {
          "question": "A right circular cone and a hemisphere have equal base and equal volume. What is the ratio of the height of the cone to the radius of the hemisphere?",
          "options": [
                "1 : 1",
                "1 : 2",
                "2 : 1",
                "3 : 2"
          ],
          "answer": "2 : 1"
    },
    {
          "question": "A wire is in the form of an equilateral triangle with an area of 36&radic;3 cm<sup>2</sup>. If it is changed into a semicircle, then what is its radius?",
          "options": [
                "9 / &pi; cm",
                "18 / (&pi; + 2) cm",
                "18 / &pi; cm",
                "None of the above"
          ],
          "answer": "None of the above"
    },
    {
          "question": "Let the area of the largest possible square inscribed in a circle of unit radius be x. Let the area of the largest possible circle inscribed in a square of unit side length be y. What is the relation between x and y?",
          "options": [
                "&pi;x = 2y",
                "2&pi;x = y",
                "&pi;x = 4y",
                "&pi;x = 8y"
          ],
          "answer": "&pi;x = 8y"
    },
    {
          "question": "A Question is given followed by two Statements I and II. Consider the Question and the Statements.<br/><br/><b>Question :</b> What is the remainder when x<sup>2n</sup> - y<sup>2n</sup> + 1 is divided by x<sup>n</sup> + y<sup>n</sup>, where n is a natural number?<br/><br/><b>Statement-I :</b> n is odd.<br/><br/><b>Statement-II :</b> n is even.<br/><br/>Which one of the following is correct in respect of the above Question and the Statements?",
          "options": [
                "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone",
                "The Question can be answered by using either Statement alone",
                "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
                "The Question can be answered even without using any of the Statements"
          ],
          "answer": "The Question can be answered even without using any of the Statements"
    },
    {
          "question": "A Question is given followed by two Statements I and II. Consider the Question and the Statements.<br/><br/><b>Question :</b> The product of a natural number N and the number M written by the same digits of N in the reverse order is 252. What is the number N?<br/><br/><b>Statement-I :</b> N + M = 33<br/><br/><b>Statement-II :</b> N > M<br/><br/>Which one of the following is correct in respect of the above Question and the Statements?",
          "options": [
                "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone",
                "The Question can be answered by using either Statement alone",
                "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
                "The Question can be answered even without using any of the Statements"
          ],
          "answer": "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone"
    },
    {
          "question": "A Question is given followed by two Statements I and II. Consider the Question and the Statements.<br/><br/><b>Question :</b> The last digit in the expansion of the number (54D)<sup>100</sup> is 1. What is the value of the digit D?<br/><br/><b>Statement-I :</b> D > 5<br/><br/><b>Statement-II :</b> D is a multiple of 3.<br/><br/>Which one of the following is correct in respect of the above Question and the Statements?",
          "options": [
                "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone",
                "The Question can be answered by using either Statement alone",
                "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
                "The Question can be answered even without using any of the Statements"
          ],
          "answer": "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone"
    },
    {
          "question": "A Question is given followed by two Statements I and II. Consider the Question and the Statements.<br/><br/><b>Question :</b> In a triangle ABC, &ang;A = &ang;B - &ang;C. Is angle A acute?<br/><br/><b>Statement-I :</b> ABC is not an obtuse-angled triangle.<br/><br/><b>Statement-II :</b> Angle C is acute.<br/><br/>Which one of the following is correct in respect of the above Question and the Statements?",
          "options": [
                "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone",
                "The Question can be answered by using either Statement alone",
                "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
                "The Question can be answered even without using any of the Statements"
          ],
          "answer": "The Question can be answered even without using any of the Statements"
    },
    {
          "question": "A Question is given followed by two Statements I and II. Consider the Question and the Statements.<br/><br/><b>Question :</b> In a triangle ABC right angled at B, AC = 20 cm. What is the circum-radius of the triangle?<br/><br/><b>Statement-I :</b> AB = 12 cm<br/><br/><b>Statement-II :</b> BC = 16 cm<br/><br/>Which one of the following is correct in respect of the above Question and the Statements?",
          "options": [
                "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone",
                "The Question can be answered by using either Statement alone",
                "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
                "The Question can be answered even without using any of the Statements"
          ],
          "answer": "The Question can be answered even without using any of the Statements"
    },
    {
          "question": "A Question is given followed by two Statements I and II. Consider the Question and the Statements.<br/><br/><b>Question :</b> ABCD is a parallelogram with &ang;ABC = 60&deg;. If the area of the parallelogram is 7&radic;3 square units, then what is the perimeter of the parallelogram?<br/><br/><b>Statement-I :</b> The lengths of the sides AB and DA are prime numbers.<br/><br/><b>Statement-II :</b> The lengths of the sides are natural numbers each greater than 1 unit.<br/><br/>Which one of the following is correct in respect of the above Question and the Statements?",
          "options": [
                "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone",
                "The Question can be answered by using either Statement alone",
                "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
                "The Question can be answered even without using any of the Statements"
          ],
          "answer": "The Question can be answered by using either Statement alone"
    },
    {
          "question": "A Question is given followed by two Statements I and II. Consider the Question and the Statements.<br/><br/><b>Question :</b> AB and CD are chords of a circle intersecting at P. If AP &times; PB = 48 square units, then what is CP &times; PD equal to?<br/><br/><b>Statement-I :</b> AP = 8 units<br/><br/><b>Statement-II :</b> CP = 10 units<br/><br/>Which one of the following is correct in respect of the above Question and the Statements?",
          "options": [
                "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone",
                "The Question can be answered by using either Statement alone",
                "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
                "The Question can be answered even without using any of the Statements"
          ],
          "answer": "The Question can be answered even without using any of the Statements"
    },
    {
          "question": "A Question is given followed by two Statements I and II. Consider the Question and the Statements.<br/><br/><b>Question :</b> In a quadrilateral ABCD, AB = 6 units, BC = 18 units, CD = 6 units, DA = 9 units. What is the length of diagonal BD?<br/><br/><b>Statement-I :</b> The length of BD is an integer greater than 13.<br/><br/><b>Statement-II :</b> The length of BD is an even integer.<br/><br/>Which one of the following is correct in respect of the above Question and the Statements?",
          "options": [
                "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone",
                "The Question can be answered by using either Statement alone",
                "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
                "The Question can be answered even without using any of the Statements"
          ],
          "answer": "The Question can be answered by using either Statement alone"
    },
    {
          "question": "A Question is given followed by two Statements I and II. Consider the Question and the Statements.<br/><br/><b>Question :</b> ABC is an isosceles triangle with AB = AC = 10 units. If the area of the triangle is 48 square units, then what is the length of the base BC?<br/><br/><b>Statement-I :</b> The length of BC is an even integer.<br/><br/><b>Statement-II :</b> The height of the triangle is greater than the length of half of the base.<br/><br/>Which one of the following is correct in respect of the above Question and the Statements?",
          "options": [
                "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone",
                "The Question can be answered by using either Statement alone",
                "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
                "The Question can be answered even without using any of the Statements"
          ],
          "answer": "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone"
    },
    {
          "question": "A Question is given followed by two Statements I and II. Consider the Question and the Statements.<br/><br/><b>Question :</b> The diagonals of a rhombus ABCD are in the ratio 5:12. Is one of the diagonals equal to side of the rhombus?<br/><br/><b>Statement-I :</b> The sum of the diagonals = 34 cm.<br/><br/><b>Statement-II :</b> The length of a side = 13 cm.<br/><br/>Which one of the following is correct in respect of the above Question and the Statements?",
          "options": [
                "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone",
                "The Question can be answered by using either Statement alone",
                "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
                "The Question can be answered even without using any of the Statements"
          ],
          "answer": "The Question can be answered even without using any of the Statements"
    },
    {
          "question": "Which measure of central tendency is least affected by the presence of extreme observations in the data?",
          "options": [
                "Arithmetic mean",
                "Harmonic mean",
                "Geometric mean",
                "Median"
          ],
          "answer": "Median"
    },
    {
          "question": "For the following two (02) items:<br/><br/>The following data represent the distance covered (in metres) by two groups of athletic children. It is known that the median distance in the first group is 20.8 metres while the mean distance in the second group is 17.3 metres. Some frequencies in both the groups are missing :<br/><br/><b>Distance Class</b> | <b>First Group</b> | <b>Second Group</b><br/>0-5 | u | 3u<br/>5-10 | v | 2v<br/>10-15 | 11 | 40<br/>15-20 | 52 | 50<br/>20-25 | 75 | 30<br/>25-30 | 22 | 28<br/><br/>What is the value of u?",
          "options": [
                "1",
                "2",
                "3",
                "4"
          ],
          "answer": "3"
    },
    {
          "question": "What is the value of v?",
          "options": [
                "5",
                "6",
                "7",
                "8"
          ],
          "answer": "7"
    },
    {
          "question": "For the following two (02) items:<br/><br/>Consider the following distribution having median value 24 :<br/><br/><b>Marks</b> | <b>Number of Students</b><br/>Less than 10 | 5<br/>Less than 20 | 30<br/>Less than 30 | 30 + k<br/>Less than 40 | 48 + k<br/>Less than 50 | 55 + k<br/><br/>What is the value of k?",
          "options": [
                "20",
                "22",
                "25",
                "30"
          ],
          "answer": "25"
    },
    {
          "question": "What is the mean of the distribution?",
          "options": [
                "21.625",
                "22.225",
                "23.225",
                "24.625"
          ],
          "answer": "24.625"
    },
    {
          "question": "To find the average ratio like price/unit, work done/hour, kilometre/hour under certain conditions, the suitable measure of central tendency applicable is",
          "options": [
                "arithmetic mean",
                "geometric mean",
                "harmonic mean",
                "mode"
          ],
          "answer": "harmonic mean"
    },
    {
          "question": "The frequency distribution of marks of 100 candidates in a particular examination is as follows :<br/><br/><b>Marks</b> | <b>Number of Candidates</b><br/>More than 10 | 100<br/>More than 20 | 75<br/>More than 30 | 60<br/>More than 40 | 40<br/><br/>What are the average marks of the candidates?",
          "options": [
                "20.5",
                "22.5",
                "30.5",
                "32.5"
          ],
          "answer": "32.5"
    },
    {
          "question": "The arithmetic mean of 200 observations is 60. If 5 is multiplied to each observation, then what will be the new arithmetic mean?",
          "options": [
                "500",
                "300",
                "60",
                "40"
          ],
          "answer": "300"
    },
    {
          "question": "A distribution consists of 3 components with frequencies 45, 40 and 55 having their means 2, 2.5 and 2 respectively. What is the mean of the combined distribution?",
          "options": [
                "2.14",
                "2.25",
                "2.37",
                "2.50"
          ],
          "answer": "2.14"
    },
    {
          "question": "Which one of the following is a positional average?",
          "options": [
                "Arithmetic mean",
                "Median",
                "Mode",
                "Geometric mean"
          ],
          "answer": "Median"
    }
  ],
  "2025-I": [
    {
          "question": "A real number M is squared to give the value N. What is the minimum value of (M + N) ?",
          "options": [
                "&minus;0&middot;25",
                "&minus;0&middot;50",
                "0",
                "0&middot;25"
          ],
          "answer": "&minus;0&middot;25"
    },
    {
          "question": "What is the sum of all 3-digit numbers that give a remainder of 5 when they are divided by 50 ?",
          "options": [
                "9005",
                "9540",
                "9600",
                "9640"
          ],
          "answer": "9540"
    },
    {
          "question": "If the average of 64, 69, 72, 75, x lies between 62 and 76 (excluding 62 and 76), then what is the number of possible integer values of x ?",
          "options": [
                "68",
                "69",
                "70",
                "71"
          ],
          "answer": "69"
    },
    {
          "question": "Let x, y, z be variables such that (x + y + z) = k, where k is a constant. If (x + z &minus; y) &times; (x &minus; z + y) is proportional to yz, then (y + z &minus; x) is proportional to :",
          "options": [
                "x",
                "y",
                "yz",
                "xz"
          ],
          "answer": "x"
    },
    {
          "question": "Let p be the remainder when 7<sup>84</sup> is divided by 342 and q be the remainder when 7<sup>84</sup> is divided by 344. What is (p &minus; q) equal to ?",
          "options": [
                "0",
                "1",
                "2",
                "6"
          ],
          "answer": "0"
    },
    {
          "question": "N is the smallest 5-digit number which when divided by 2, 2<sup>2</sup>, 2<sup>3</sup>, 2<sup>4</sup>, ..., 2<sup>n</sup> leaves a remainder 1. What is the value of n ?",
          "options": [
                "12",
                "13",
                "14",
                "15"
          ],
          "answer": "13"
    },
    {
          "question": "What is the minimum value of p for which<br/>1 / 532900 + p<sup>2</sup> / 266450 + p<sup>4</sup> / 523900 is an integer ?",
          "options": [
                "729",
                "243",
                "27",
                "1"
          ],
          "answer": "729"
    },
    {
          "question": "If &alpha; and &beta; are the roots of the equation<br/>x + a + b = abx / (ab + ax + bx) , then what is<br/>(&alpha;&beta; + &alpha; + &beta;) equal to ?",
          "options": [
                "ab + a + b",
                "ab &minus; a &minus; b",
                "a + b &minus; ab",
                "&minus;(ab + a + b)"
          ],
          "answer": "&minus;(ab + a + b)"
    },
    {
          "question": "Consider a 2-digit number N. Let P be the product of the digits of the number. If P is added to square of the digit in the tens place of N, we get 84. If P is added to the square of the digit in the unit place of N, we get 60. What is the value of P + N ?",
          "options": [
                "100",
                "110",
                "115",
                "120"
          ],
          "answer": "110"
    },
    {
          "question": "A mixture of 100 L contains kerosene and turpentine oil in the ratio 3 : 2. What is the minimum quantity of kerosene in litres (whole number) that should be mixed in the mixture so that the resulting mixture has 20% of kerosene ?",
          "options": [
                "10 L",
                "20 L",
                "25 L",
                "Not possible"
          ],
          "answer": "Not possible"
    },
    {
          "question": "A lamp is kept on a vertical pole. The height of the top of the lamp above the ground is (5&radic;3)/2 m. The perpendicular distances of the bottom of the pole from two adjacent walls meeting perpendicularly are 0&middot;7 m and 2&middot;4 m. What is the distance of the top of the lamp from the corner point of the walls on the ground ?",
          "options": [
                "3 m",
                "5 m",
                "6 m",
                "7 m"
          ],
          "answer": "5 m"
    },
    {
          "question": "C is the centre of a circle of radius 20 cm. AB is a chord of length 32 cm. E is a point on AB such that CE = 13 cm. What is AE &times; EB equal to ?",
          "options": [
                "231 square cm",
                "256 square cm",
                "272 square cm",
                "297 square cm"
          ],
          "answer": "231 square cm"
    },
    {
          "question": "The inside of a bowl is part of a sphere. When water is put into the bowl to a depth d, the water surface becomes a circle of radius 2d. What is the radius of the sphere ?",
          "options": [
                "2&middot;5d",
                "2&middot;75d",
                "3d",
                "3&middot;25d"
          ],
          "answer": "2&middot;5d"
    },
    {
          "question": "In a triangle ABC, AB = 2 cm, BC = 4 cm and AC = 3 cm. The bisector of angle A meets BC at D and the bisector of angle B meets AD at E. What is AE : ED equal to ?",
          "options": [
                "5 : 4",
                "5 : 3",
                "4 : 3",
                "3 : 2"
          ],
          "answer": "5 : 4"
    },
    {
          "question": "In a triangle ABC, the bisector of angle A cuts BC at D. If AB + AC = 10 cm and BD : DC = 3 : 1, then what is the length of AC ?",
          "options": [
                "2&middot;5 cm",
                "6 cm",
                "7&middot;5 cm",
                "8 cm"
          ],
          "answer": "2&middot;5 cm"
    },
    {
          "question": "In a triangle ABC, AB + BC = 7&middot;1 cm, BC + CA = 12&middot;1 cm and CA + AB = 7&middot;2 cm. What is the area of the triangle ?",
          "options": [
                "3 square cm",
                "32 square cm",
                "33 square cm",
                "3&middot;3 square cm"
          ],
          "answer": "3&middot;3 square cm"
    },
    {
          "question": "The adjacent sides of a parallelogram are 10 cm and 8 cm and the angle between them is 150&deg;. What is the area of the parallelogram ?",
          "options": [
                "40&radic;3 square cm",
                "40 square cm",
                "20&radic;3 square cm",
                "20 square cm"
          ],
          "answer": "40 square cm"
    },
    {
          "question": "The measure of an angle formed by the bisectors of the angles A and C of the triangle ABC is 130&deg;. What is the measure of the angle B ?",
          "options": [
                "65&deg;",
                "75&deg;",
                "80&deg;",
                "85&deg;"
          ],
          "answer": "80&deg;"
    },
    {
          "question": "What is log<sub>10</sub> 2000 + log<sub>10</sub> 400 + 4 log<sub>10</sub> 25 + 5 log<sub>10</sub> 20 equal to ?",
          "options": [
                "10",
                "16",
                "18",
                "20"
          ],
          "answer": "18"
    },
    {
          "question": "If log<sub>10</sub>(100001 &minus; 4<sup>x</sup>) / (5 &minus; x) = 1, then what is x equal to ?",
          "options": [
                "0",
                "1",
                "10",
                "100"
          ],
          "answer": "0"
    },
    {
          "question": "If 2 sin<sup>4</sup> &alpha; + 2 cos<sup>4</sup> &alpha; &minus; 1 = 0, where 0 &le; &alpha; &lt; &pi;/2, then what is sin 2&alpha; + cos 2&alpha; equal to ?",
          "options": [
                "0",
                "1",
                "(&radic;3 + 1)/2",
                "(&radic;3 &minus; 1)/2"
          ],
          "answer": "1"
    },
    {
          "question": "Consider the following :<br/><br/>I. 1 &minus; sin<sup>6</sup> &alpha; = cos<sup>2</sup> &alpha; (cos<sup>4</sup> &alpha; &minus; 3 cos<sup>2</sup> &alpha; + 3)<br/>II. cos<sup>8</sup> &alpha; &minus; sin<sup>8</sup> &alpha; = 2 sin<sup>2</sup> &alpha; (1 &minus; cos<sup>4</sup> &alpha; + sin<sup>2</sup> &alpha; cos<sup>2</sup> &alpha;)<br/><br/>Which of the above is/are identities ?",
          "options": [
                "I only",
                "II only",
                "Both I and II",
                "Neither I nor II"
          ],
          "answer": "I only"
    },
    {
          "question": "If p = 1 / (cosec &theta; + cot &theta;) and q = cosec &theta;, then what is p<sup>2</sup> &minus; 2pq equal to ?",
          "options": [
                "&minus;1",
                "0",
                "1",
                "2"
          ],
          "answer": "&minus;1"
    },
    {
          "question": "Consider the following statements :<br/><br/>I. (cosec &alpha; &minus; sec &alpha;) is always positive in the first quadrant.<br/>II. (tan &alpha; &minus; cot &alpha;) is always negative in the first quadrant.<br/><br/>Which of the statements given above is/are correct ?",
          "options": [
                "I only",
                "II only",
                "Both I and II",
                "Neither I nor II"
          ],
          "answer": "Neither I nor II"
    },
    {
          "question": "A tower subtends an angle 60&deg; at a point A on the same level as the foot of the tower. B is a point vertically above A and AB = h. The angle of depression of the foot of the tower, measured from B is 30&deg;. What is the height of the tower ?",
          "options": [
                "2h",
                "2&middot;5h",
                "3h",
                "3&middot;5h"
          ],
          "answer": "3h"
    },
    {
          "question": "What is (sin &theta;) / (1 &minus; cot &theta;) + (cos &theta;) / (1 &minus; tan &theta;) (&theta; &ne; &pi;/4) equal to ?",
          "options": [
                "sin &theta; + cos &theta;",
                "sin &theta; &minus; cos &theta;",
                "cos &theta; &minus; sin &theta;",
                "&minus;(sin &theta; + cos &theta;)"
          ],
          "answer": "sin &theta; + cos &theta;"
    },
    {
          "question": "The length of an arc of a circle of radius 4 cm is &pi; cm. What is the magnitude of the angle subtended by the arc at the centre ?",
          "options": [
                "&pi;",
                "&pi;/2",
                "&pi;/3",
                "&pi;/4"
          ],
          "answer": "&pi;/4"
    },
    {
          "question": "If cot<sup>2</sup> &theta; &minus; 3&radic;3 cot &theta; + 6 = 0, where &pi;/6 &le; &theta; &lt; &pi;/2, then what is a value of sin &theta; + cos 2&theta; ?",
          "options": [
                "0",
                "1",
                "&radic;3",
                "1 + &radic;2"
          ],
          "answer": "1"
    },
    {
          "question": "Which of the following equations is/are possible ?<br/><br/>I. sin<sup>2</sup> &theta; = (x + y)<sup>2</sup> / 4xy, where x, y are positive unequal real quantities.<br/>II. sin &theta; + cos &theta; = x + 1/x, where x is a positive real quantity.<br/><br/>Select the correct answer using the code given below :",
          "options": [
                "I only",
                "II only",
                "Both I and II",
                "Neither I nor II"
          ],
          "answer": "Neither I nor II"
    },
    {
          "question": "If m<sup>2</sup>(sin &theta; &minus; 1) + n<sup>2</sup>(sin &theta; + 1) = 0, where 0 &lt; &theta; &lt; &pi;/2, then what is (m<sup>2</sup> + n<sup>2</sup>) cos &theta; &minus; (m<sup>2</sup> &minus; n<sup>2</sup>) cot &theta; equal to ?",
          "options": [
                "4mn",
                "2mn",
                "1",
                "0"
          ],
          "answer": "0"
    },
    {
          "question": "If sin &alpha; + cos &alpha; = &radic;2, where 0 &lt; &alpha; &lt; &pi;/2, then what is sin<sup>3</sup> &alpha; &minus; cos<sup>3</sup> &alpha; equal to ?",
          "options": [
                "1",
                "1/2",
                "1/4",
                "0"
          ],
          "answer": "0"
    },
    {
          "question": "What is (1 + cot &alpha; &minus; cosec &alpha;) (1 + tan &alpha; + sec &alpha;) equal to ?",
          "options": [
                "1/2",
                "1",
                "2",
                "4"
          ],
          "answer": "2"
    },
    {
          "question": "If tan &theta; = (sin &alpha; &minus; cos &alpha;) / (sin &alpha; + cos &alpha;), where &theta; and &alpha; (&alpha; &ne; &pi;/4) are acute angles, then what is &radic;2 sin &theta; equal to ?",
          "options": [
                "sin &alpha; &minus; cos &alpha;",
                "sin &alpha; + cos &alpha;",
                "cos &alpha; &minus; sin &alpha;",
                "&plusmn;(sin &alpha; &minus; cos &alpha;)"
          ],
          "answer": "sin &alpha; &minus; cos &alpha;"
    },
    {
          "question": "For how many values of &alpha; does the expression (sin &alpha; + 2) (sin &alpha; + 4) (sin &alpha; &minus; 2) (sin &alpha; &minus; 4) become zero ?",
          "options": [
                "No value",
                "One",
                "Two",
                "Four"
          ],
          "answer": "No value"
    },
    {
          "question": "What is the value of x, where 0 &le; x &lt; 30&deg;, satisfying tan 3x tan 6x = 1 ?",
          "options": [
                "0&deg;",
                "10&deg;",
                "12&deg;",
                "15&deg;"
          ],
          "answer": "10&deg;"
    },
    {
          "question": "What is (a &minus; b)<sup>2</sup> / ((b &minus; c)(c &minus; a)) + (b &minus; c)<sup>2</sup> / ((c &minus; a)(a &minus; b)) + (c &minus; a)<sup>2</sup> / ((a &minus; b)(b &minus; c)) &minus; 3 equal to, where a &ne; b &ne; c ?",
          "options": [
                "0",
                "3",
                "a + b + c",
                "3(a &minus; b)(b &minus; c)(c &minus; a)"
          ],
          "answer": "0"
    },
    {
          "question": "Given that (100 &times; 99 &times; 98 &times; ... &times; 3 &times; 2 &times; 1) / 100<sup>n</sup> is an integer. What is the largest value of n for which this is true ?",
          "options": [
                "20",
                "21",
                "24",
                "None of the above"
          ],
          "answer": "None of the above"
    },
    {
          "question": "A man starting from a place P went x metre (x &gt; 120 m) East before turning South. He went 40 m straight before turning to West. He went 60 m to reach a place Q. From Q he went 200 m North and reached a place R. If PR = 200 m, then what is x equal to ?",
          "options": [
                "150 m",
                "180 m",
                "200 m",
                "240 m"
          ],
          "answer": "180 m"
    },
    {
          "question": "If x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 3, where x, y and z are integers, then how many values can (xy + yz + zx) have ?",
          "options": [
                "One",
                "Two",
                "Three",
                "Four"
          ],
          "answer": "Two"
    },
    {
          "question": "If x, y, z are real numbers such that x + y + z = 10 and xy + yz + zx = 18, then what is the value of x<sup>3</sup> + y<sup>3</sup> + z<sup>3</sup> &minus; 3xyz ?",
          "options": [
                "400",
                "440",
                "460",
                "500"
          ],
          "answer": "460"
    },
    {
          "question": "What is &radic;(17 &minus; 4&radic;15) + &radic;(8 &minus; 2&radic;15) equal to ?",
          "options": [
                "&radic;3",
                "2&radic;3",
                "2(&radic;5 &minus; &radic;3)",
                "2(&radic;5 + &radic;3)"
          ],
          "answer": "&radic;3"
    },
    {
          "question": "What is the maximum value of the sum of the numbers 36, 33, 30, 27, 24, ... ?",
          "options": [
                "240",
                "237",
                "234",
                "231"
          ],
          "answer": "234"
    },
    {
          "question": "There are two natural numbers m and n (m &gt; n). When m is divided by 12, it leaves a remainder 4. When n is divided by 12, it leaves a remainder 6. Which of the following statements is/are correct ?<br/><br/>I. The remainder when (m + n) is divided by 12 is 10.<br/>II. The remainder when (m &minus; n) is divided by 12 is 10.<br/><br/>Select the correct answer using the code given below :",
          "options": [
                "I only",
                "II only",
                "Both I and II",
                "Neither I nor II"
          ],
          "answer": "Both I and II"
    },
    {
          "question": "If (x + y) : (y + z) : (z + x) = 3 : 5 : 6 and x + y + z = 14, then what is x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> equal to ?",
          "options": [
                "81",
                "84",
                "87",
                "90"
          ],
          "answer": "84"
    },
    {
          "question": "The ratio of sum of two numbers to their difference is 5 : 1. What is the ratio of the sum of their squares to the difference of their squares ?",
          "options": [
                "13 : 5",
                "25 : 1",
                "9 : 4",
                "16 : 1"
          ],
          "answer": "13 : 5"
    },
    {
          "question": "Travelling at 3/5th of his usual speed, a man is late by 20 minutes. What is the usual time if he travels with his usual speed ?",
          "options": [
                "25 minutes",
                "30 minutes",
                "32 minutes",
                "35 minutes"
          ],
          "answer": "30 minutes"
    },
    {
          "question": "What is the remainder when 2<sup>p</sup> &minus; 1 is divided by p, where p &gt; 5 is a prime number ?",
          "options": [
                "1",
                "2",
                "3",
                "4"
          ],
          "answer": "1"
    },
    {
          "question": "What is the number of factors of 24<sup>3</sup> &minus; 16<sup>3</sup> &minus; 8<sup>3</sup> ?",
          "options": [
                "33",
                "30",
                "28",
                "24"
          ],
          "answer": "33"
    },
    {
          "question": "What is the least number of complete years in which a sum of money put out at 20% compound interest (compounded annually) will be more than doubled ?",
          "options": [
                "2",
                "3",
                "4",
                "5"
          ],
          "answer": "4"
    },
    {
          "question": "A train of certain length takes time t to pass completely through a station of length x. The same train with same speed takes time 2t to pass completely through another station of length y. What is the time taken by the train to pass completely through a station of length (x + y) ?",
          "options": [
                "(2yt + xt) / (y &minus; x)",
                "(yt + xt) / (y &minus; x)",
                "(3yt &minus; xt) / (2y &minus; x)",
                "(2yt &minus; xt) / (y &minus; x)"
          ],
          "answer": "(2yt &minus; xt) / (y &minus; x)"
    },
    {
          "question": "<b>Consider the following for the next two (02) items that follow :</b><br/><br/>A frustum of a right cone has a top of diameter 2k, bottom of diameter 2&middot;5k and height k.<br/><br/>What is the whole surface area of the frustum ?",
          "options": [
                "39&pi;k<sup>2</sup>/8",
                "41&pi;k<sup>2</sup>/8",
                "43&pi;k<sup>2</sup>/8",
                "45&pi;k<sup>2</sup>/8"
          ],
          "answer": "39&pi;k<sup>2</sup>/8"
    },
    {
          "question": "<b>Following the previous context:</b><br/><br/>A frustum of a right cone has a top of diameter 2k, bottom of diameter 2&middot;5k and height k.<br/><br/>What is the volume of the frustum ?",
          "options": [
                "61&pi;k<sup>3</sup>/48",
                "59&pi;k<sup>3</sup>/48",
                "57&pi;k<sup>3</sup>/48",
                "53&pi;k<sup>3</sup>/48"
          ],
          "answer": "61&pi;k<sup>3</sup>/48"
    },
    {
          "question": "<b>Consider the following for the next two (02) items that follow :</b><br/><br/>ABC is a triangle right-angled at B. The perimeter of the triangle is 24 cm and the difference between the sum of the perpendicular sides and the hypotenuse is 4 cm.<br/><br/>What is the area of the triangle ABC ?",
          "options": [
                "18 square cm",
                "24 square cm",
                "36 square cm",
                "48 square cm"
          ],
          "answer": "24 square cm"
    },
    {
          "question": "<b>Following the previous context:</b><br/><br/>ABC is a triangle right-angled at B. The perimeter of the triangle is 24 cm and the difference between the sum of the perpendicular sides and the hypotenuse is 4 cm.<br/><br/>A circle is inscribed in the triangle. What is its radius ?",
          "options": [
                "1 cm",
                "1&middot;5 cm",
                "2 cm",
                "2&middot;5 cm"
          ],
          "answer": "2 cm"
    },
    {
          "question": "<b>Consider the following for the next two (02) items that follow :</b><br/><br/>A circle M of radius 8 cm touches externally with another circle N of radius 16 cm. Let P, Q be the points where the common tangent touches the circles M and N respectively.<br/><br/>What is the length of the common tangent PQ ?",
          "options": [
                "16 cm",
                "16&radic;2 cm",
                "24 cm",
                "24&radic;2 cm"
          ],
          "answer": "16&radic;2 cm"
    },
    {
          "question": "<b>Following the previous context:</b><br/><br/>A circle M of radius 8 cm touches externally with another circle N of radius 16 cm. Let P, Q be the points where the common tangent touches the circles M and N respectively.<br/><br/>If U, V are the centres of the circles M and N respectively, then what is the area of the quadrilateral formed by the points P, Q, V and U ?",
          "options": [
                "192&radic;2 square cm",
                "192 square cm",
                "96&radic;2 square cm",
                "96 square cm"
          ],
          "answer": "192&radic;2 square cm"
    },
    {
          "question": "<b>Consider the following for the next two (02) items that follow :</b><br/><br/>The perimeter of a triangle ABC is 105 cm. The altitudes AD, BE and CF are in the ratio 3 : 5 : 6.<br/><br/>What is AB : BC : CA equal to ?",
          "options": [
                "10 : 6 : 5",
                "5 : 10 : 6",
                "6 : 5 : 3",
                "3 : 5 : 6"
          ],
          "answer": "5 : 10 : 6"
    },
    {
          "question": "<b>Following the previous context:</b><br/><br/>The perimeter of a triangle ABC is 105 cm. The altitudes AD, BE and CF are in the ratio 3 : 5 : 6.<br/><br/>What is the approximate area of the triangle ABC ?",
          "options": [
                "175 square cm",
                "190 square cm",
                "205 square cm",
                "285 square cm"
          ],
          "answer": "285 square cm"
    },
    {
          "question": "<b>Consider the following for the next two (02) items that follow :</b><br/><br/>A pot is made from a hollow sphere of inner radius 20 cm by cutting its upper portion horizontally. The height of the pot is 30 cm.<br/><br/>What is the inner radius of the circular opening of the pot so formed ?",
          "options": [
                "10&radic;2 cm",
                "15 cm",
                "10&radic;3 cm",
                "12 cm"
          ],
          "answer": "10&radic;3 cm"
    },
    {
          "question": "<b>Following the previous context:</b><br/><br/>A pot is made from a hollow sphere of inner radius 20 cm by cutting its upper portion horizontally. The height of the pot is 30 cm.<br/><br/>What is the angle made by the line joining the centre of the sphere and any point on the rim of the circular opening with a vertical line passing through the centre ?",
          "options": [
                "&pi;/3",
                "&pi;/4",
                "&pi;/6",
                "&pi;/12"
          ],
          "answer": "&pi;/3"
    },
    {
          "question": "<b>Consider the following for the next two (02) items that follow :</b><br/><br/>A hall is of length l, breadth b and height h. The maximum distance between any two points (say P and Q) inside the hall is 14 m, whereas the maximum distance between two points (say P and R) on the floor is 6&radic;5 m.<br/><br/>What is h equal to ?",
          "options": [
                "3&middot;5 m",
                "4 m",
                "4&middot;5 m",
                "5 m"
          ],
          "answer": "4 m"
    },
    {
          "question": "<b>Following the previous context:</b><br/><br/>A hall is of length l, breadth b and height h. The maximum distance between any two points (say P and Q) inside the hall is 14 m, whereas the maximum distance between two points (say P and R) on the floor is 6&radic;5 m.<br/><br/>If &alpha; is the angle between the line joining P and Q, and the line joining P and R, then what is cos &alpha; equal to ?",
          "options": [
                "2&radic;5 / 7",
                "3&radic;5 / 7",
                "1 / 3",
                "2 / 3"
          ],
          "answer": "3&radic;5 / 7"
    },
    {
          "question": "<b>Consider the following for the next two (02) items that follow :</b><br/><br/>The sides of an open box are 0&middot;5 cm thick and bottom is 1 cm thick. The internal length, breadth and depth are respectively 14 cm, 10 cm and 8 cm. It is completely filled with water.<br/><br/>If the material weighs 2000 kg per cubic metre, then what is the weight of the material used in the construction of the box ?",
          "options": [
                "360 gm",
                "365 gm",
                "720 gm",
                "730 gm"
          ],
          "answer": "730 gm"
    },
    {
          "question": "<b>Following the previous context:</b><br/><br/>The sides of an open box are 0&middot;5 cm thick and bottom is 1 cm thick. The internal length, breadth and depth are respectively 14 cm, 10 cm and 8 cm. It is completely filled with water.<br/><br/>If water weighs 1000 kg per cubic metre, then what is the weight of the box with water ?",
          "options": [
                "1&middot;850 kg",
                "1&middot;900 kg",
                "2&middot;050 kg",
                "2&middot;100 kg"
          ],
          "answer": "1&middot;850 kg"
    },
    {
          "question": "<b>Consider the following for the next two (02) items that follow :</b><br/><br/>ABC is a triangle right-angled at A. Further, AB = 8 cm, BC = 10 cm. D is the point on BC such that AD is perpendicular to BC.<br/><br/>What is AD equal to ?",
          "options": [
                "4&middot;8 cm",
                "5&middot;0 cm",
                "5&middot;2 cm",
                "5&middot;4 cm"
          ],
          "answer": "4&middot;8 cm"
    },
    {
          "question": "<b>Following the previous context:</b><br/><br/>ABC is a triangle right-angled at A. Further, AB = 8 cm, BC = 10 cm. D is the point on BC such that AD is perpendicular to BC.<br/><br/>What is ratio of area of triangle ADC to area of triangle ADB ?",
          "options": [
                "7 : 15",
                "9 : 16",
                "2 : 3",
                "3 : 4"
          ],
          "answer": "9 : 16"
    },
    {
          "question": "<b>Consider the following for the next two (02) items that follow :</b><br/><br/>The annual rainfall at a place is 40 cm. The weight of water is 1 metric tonne per cubic meter.<br/><br/>What is the volume of rainfall in cubic meter per hectare ?",
          "options": [
                "40",
                "400",
                "4000",
                "40000"
          ],
          "answer": "4000"
    },
    {
          "question": "<b>Following the previous context:</b><br/><br/>The annual rainfall at a place is 40 cm. The weight of water is 1 metric tonne per cubic meter.<br/><br/>What is the weight of water (in metric tonnes) of annual rainfall falling there on a hectare of land ?",
          "options": [
                "40",
                "400",
                "4000",
                "40000"
          ],
          "answer": "4000"
    },
    {
          "question": "<b>Consider the following for the next two (02) items that follow :</b><br/><br/>The angle at the vertex of a conical body is 120&deg;.<br/><br/>What is the ratio of the radius of the conical body to its slant height ?",
          "options": [
                "1 : 2",
                "&radic;3 : 1",
                "&radic;3 : 2",
                "&radic;2 : 1"
          ],
          "answer": "&radic;3 : 2"
    },
    {
          "question": "<b>Following the previous context:</b><br/><br/>The angle at the vertex of a conical body is 120&deg;.<br/><br/>If the sum of slant height, height and radius is (9 + 3&radic;3) cm, then what is the volume of the cone ?",
          "options": [
                "27&pi; cubic cm",
                "18&radic;3 &pi; cubic cm",
                "24&pi; cubic cm",
                "27&radic;3 &pi; cubic cm"
          ],
          "answer": "27&pi; cubic cm"
    },
    {
          "question": "A person sells article X for ₹ 34,500 and makes a profit of 15%. He sells article Y at a loss of 10%. He neither loses nor gains on the whole because of these two transactions. What is the selling price of article Y ?",
          "options": [
                "₹ 40,000",
                "₹ 40,500",
                "₹ 41,000",
                "₹ 51,500"
          ],
          "answer": "₹ 40,500"
    },
    {
          "question": "100 quintals is what percent of 10 metric tonnes ?",
          "options": [
                "1%",
                "10%",
                "100%",
                "1000%"
          ],
          "answer": "100%"
    },
    {
          "question": "A circle is inscribed in an equilateral triangle. The radius of the circle is 2 cm. What is the area of the triangle ?",
          "options": [
                "12&radic;3 square cm",
                "12 square cm",
                "9&radic;3 square cm",
                "9 square cm"
          ],
          "answer": "12&radic;3 square cm"
    },
    {
          "question": "The sides of a triangle are k, 1&middot;5k and 2&middot;25k. What is the sum of the squares of its medians ?",
          "options": [
                "359k<sup>2</sup>/64",
                "379k<sup>2</sup>/64",
                "389k<sup>2</sup>/64",
                "399k<sup>2</sup>/64"
          ],
          "answer": "399k<sup>2</sup>/64"
    },
    {
          "question": "If 2s = a + b + c, then what is s(s &minus; a)(s &minus; b)(s &minus; c) [1/(s &minus; a) + 1/(s &minus; b) + 1/(s &minus; c) &minus; 1/s] equal to ?",
          "options": [
                "abc",
                "2abc",
                "4abc",
                "ab + bc + ca"
          ],
          "answer": "abc"
    },
    {
          "question": "How much will ₹ 10,000 amount to in one year's time at 4% rate of interest per annum if the interest is compounded once in every three months ? (take approximate value)",
          "options": [
                "₹ 10,406",
                "₹ 10,416",
                "₹ 10,426",
                "₹ 10,436"
          ],
          "answer": "₹ 10,406"
    },
    {
          "question": "If p = 0.09&#773;, then what is the value of 70p<sup>2</sup> + 43p &minus; 5 ?",
          "options": [
                "&minus;1",
                "0",
                "1",
                "10"
          ],
          "answer": "0"
    },
    {
          "question": "What is the remainder when 2<sup>101</sup> is divided by 101 ?",
          "options": [
                "1",
                "2",
                "5",
                "7"
          ],
          "answer": "2"
    },
    {
          "question": "If p (&ne; 0) and q (&ne; 0) are the roots of the equation x<sup>2</sup> + px + q = 0, then what is p<sup>2</sup> + q<sup>2</sup> equal to ?",
          "options": [
                "2",
                "3",
                "4",
                "5"
          ],
          "answer": "5"
    },
    {
          "question": "The equations x<sup>2</sup> + px + q = 0 and x<sup>2</sup> + qx + p = 0 (p &ne; q) have a common root. What is the value of (p + q) ?",
          "options": [
                "&minus;1",
                "0",
                "1",
                "2"
          ],
          "answer": "&minus;1"
    },
    {
          "question": "If x<sup>2</sup> &minus; 5x + 4 is a factor of x<sup>4</sup> &minus; px<sup>2</sup> + q, then what are the values of p and q respectively ?",
          "options": [
                "17, 16",
                "16, 17",
                "15, 16",
                "16, 15"
          ],
          "answer": "17, 16"
    },
    {
          "question": "If two quadratic equations px<sup>2</sup> + px + 4 = 0 and x<sup>2</sup> + qx + q = 0 have a common root 2, then what is p + q equal to ?",
          "options": [
                "&minus;3",
                "&minus;2",
                "0",
                "3"
          ],
          "answer": "&minus;2"
    },
    {
          "question": "What is the HCF of the polynomials x<sup>8</sup> + x<sup>4</sup> + 1 and x<sup>4</sup> + x<sup>2</sup> + 1 ?",
          "options": [
                "1",
                "x<sup>4</sup> &minus; x<sup>2</sup> + 1",
                "x<sup>4</sup> + x<sup>2</sup> + 1",
                "x<sup>4</sup> &minus; x<sup>2</sup> &minus; 1"
          ],
          "answer": "x<sup>4</sup> + x<sup>2</sup> + 1"
    },
    {
          "question": "An arc AB of a circle subtends an angle x radian at the centre O. If the area of the sector AOB is equal to half of the square of length of arc AB, then what is x equal to ?",
          "options": [
                "1/4",
                "1/2",
                "1",
                "2"
          ],
          "answer": "1"
    },
    {
          "question": "Consider the following statements in respect of prime numbers p and q :<br/><br/>I. Their LCM is always an odd number.<br/>II. Sum of their LCM and HCF is always an even number.<br/><br/>Which of the statements given above is/are correct ?",
          "options": [
                "I only",
                "II only",
                "Both I and II",
                "Neither I nor II"
          ],
          "answer": "Neither I nor II"
    },
    {
          "question": "<b>Consider the following for the next five (05) items that follow :</b><br/><br/>The frequency distribution of 205 observations on X is given below :<br/><br/><i>X :</i> 3, 5, 6, 7<br/><i>Frequency :</i> f, f+2, f&minus;3, f+6<br/><br/>What is the value of f ?",
          "options": [
                "50",
                "60",
                "70",
                "80"
          ],
          "answer": "50"
    },
    {
          "question": "<b>Following the previous context:</b><br/><br/>What is the median of the frequency distribution ?",
          "options": [
                "3",
                "5",
                "6",
                "It cannot be determined from the given data"
          ],
          "answer": "6"
    },
    {
          "question": "<b>Following the previous context:</b><br/><br/>What is the mode of the frequency distribution ?",
          "options": [
                "5",
                "6",
                "7",
                "It cannot be determined from the given data"
          ],
          "answer": "7"
    },
    {
          "question": "<b>Following the previous context:</b><br/><br/>What is the most appropriate graphical representation of the given frequency distribution of X ?",
          "options": [
                "Bar diagram",
                "Histogram",
                "Frequency polygon",
                "Pie Chart"
          ],
          "answer": "Bar diagram"
    },
    {
          "question": "<b>Following the previous context:</b><br/><br/>What is the mean of the frequency distribution ?",
          "options": [
                "3&middot;29",
                "4&middot;29",
                "5&middot;29",
                "6&middot;29"
          ],
          "answer": "5&middot;29"
    },
    {
          "question": "<b>Consider the following for the next two (02) items that follow :</b><br/><br/>The frequency distribution of marks obtained by students in an English examination is given below :<br/><br/>Marks obtained : Number of Students<br/>Below 40 : 50<br/>Below 50 : 125<br/>Below 60 : 210<br/>Below 70 : 315<br/>Below 80 : 350<br/><br/>What is the number of students who scored between 60 and 70 marks ?",
          "options": [
                "105",
                "110",
                "205",
                "210"
          ],
          "answer": "105"
    },
    {
          "question": "<b>Following the previous context:</b><br/><br/>What is the number of students who scored more than 50 marks ?",
          "options": [
                "100",
                "125",
                "200",
                "225"
          ],
          "answer": "225"
    },
    {
          "question": "<b>Consider the following for the next three (03) items that follow :</b><br/><br/>Circulation figures (in thousands) of different newspapers (A, B, C, D, E) for five years are given below :<br/><br/>Year | A | B | C | D | E<br/>2019 | 20| 10| 15| 8 | 20<br/>2020 | 12| 12| 18| 12| 12<br/>2021 | 24| 14| 17| 14| 15<br/>2022 | 26| 10| 16| 15| 9<br/>2023 | 22| 16| 14| 16| 11<br/><br/>In which of the given years was the circulation of the newspaper D close to its average circulation over all the years ?",
          "options": [
                "2020 and 2021",
                "2022 and 2023",
                "2022 only",
                "2020 only"
          ],
          "answer": "2020 and 2021"
    },
    {
          "question": "<b>Following the previous context:</b><br/><br/>In which of the years from 2019 to 2022 was the circulation of the newspaper D close to the average circulation of all the newspapers in that year ?",
          "options": [
                "2019",
                "2020",
                "2021",
                "2022"
          ],
          "answer": "2022"
    },
    {
          "question": "<b>Following the previous context:</b><br/><br/>How many cases are there in which average of the circulation for an individual newspaper was more than the average of the circulation of all the newspapers ?",
          "options": [
                "One",
                "Two",
                "Three",
                "Four"
          ],
          "answer": "Two"
    },
    {
          "question": "<b>Consider the following for the next three (03) items that follow :</b><br/><br/>Study the following Pie Charts :<br/><br/>Chart-I : Number of houses : 1,20,000<br/>PUCCA : 110&deg;, SEMI PUCCA : 210&deg;, KUTCHA : 40&deg;<br/><br/>Chart-II : Population : 21,00,000<br/>LIVING IN PUCCA HOUSES : 60&deg;, LIVING IN KUTCHA HOUSES : 70&deg;, HOUSELESS : 20&deg;, LIVING IN SEMI PUCCA HOUSES : 210&deg;<br/><br/>Chart-III : Number of families : 3,60,000<br/>LIVING IN PUCCA HOUSES : 70&deg;, LIVING IN KUTCHA HOUSES : 185&deg;, HOUSELESS : 20&deg;, LIVING IN SEMI PUCCA HOUSES : 85&deg;<br/><br/><img src=\"/images/maths_2025_I_96_100.png\" alt=\"Pie Charts\" class=\"w-full max-w-xl my-4 rounded-lg shadow-md border border-gray-200\" /><br/><br/>On an average, how many persons live in every pucca house ?",
          "options": [
                "8",
                "8&middot;54",
                "9&middot;54",
                "7&middot;54"
          ],
          "answer": "9&middot;54"
    },
    {
          "question": "<b>Following the previous context:</b><br/><br/>If 5000 more Kutcha houses are built, then what will be approximate change in angle for Kutcha houses in Pie Chart-I ?",
          "options": [
                "11&deg;",
                "13&deg;",
                "15&deg;",
                "23&deg;"
          ],
          "answer": "13&deg;"
    },
    {
          "question": "<b>Following the previous context:</b><br/><br/>If 300 families from the \"Houseless\" category shift into Kutcha houses, what will be the average number of families in every Kutcha house ?",
          "options": [
                "15",
                "13&middot;9",
                "12&middot;9",
                "10&middot;5"
          ],
          "answer": "13&middot;9"
    },
    {
          "question": "Marks obtained by 60 students in a test (Maximum Marks-100) are given below :<br/><br/>60, 82, 63, 40, 88, 80, 24, 60, 09, 58, 44, 74<br/>57, 60, 63, 30, 31, 64, 00, 62, 37, 54, 10, 99<br/>35, 83, 58, 33, 92, 43, 66, 41, 78, 72, 32, 33<br/>65, 11, 60, 17, 53, 93, 57, 03, 29, 31, 82, 50<br/>63, 15, 41, 55, 72, 42, 32, 23, 30, 48, 67, 34<br/><br/>What is the percentage (approximate) of students getting marks higher than or equal to 60 but less than 80 ?",
          "options": [
                "25&middot;0",
                "26&middot;7",
                "28&middot;3",
                "30&middot;0"
          ],
          "answer": "26&middot;7"
    },
    {
          "question": "The arithmetic mean of 100 observations was 50. Later on, it was found that two observations were misread as 82 and 6 instead of 182 and 56. What is the value of the corrected mean ?",
          "options": [
                "50&middot;1",
                "51&middot;5",
                "52&middot;3",
                "53&middot;4"
          ],
          "answer": "51&middot;5"
    }
  ]
};

export default mathsData;
