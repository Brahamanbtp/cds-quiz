import type { Question } from "@/types/Question";

const mathsData: Record<string, Question[]> = {
  "2023-II": [
    {
        "question": "If a<sup>2</sup> &minus; bc = &alpha;, b<sup>2</sup> &minus; ac = &beta;, c<sup>2</sup> &minus; ab = &gamma;, then what is <sup>(a&alpha; + b&beta; + c&gamma;)</sup>&frasl;<sub>((a + b + c)(&alpha; + &beta; + &gamma;))</sub> equal to ?",
        "options": [
            "a + b &minus; c",
            "a &minus; b + c",
            "&minus; a + b + c",
            "1"
        ],
        "answer": "1"
    },
    {
        "question": "If (x &minus; 1)<sup>3</sup> is a factor of x<sup>4</sup> + &alpha;x<sup>3</sup> + &beta;x<sup>2</sup> + &gamma;x &minus; 1, then the other factor will be :",
        "options": [
            "x + 1",
            "x &minus; 3",
            "x + 2",
            "x"
        ],
        "answer": "x + 1"
    },
    {
        "question": "A 2-digit number is such that the sum of the number and the number obtained by reversing the order of the digits of the number is 55. Further, the difference of the given number and the number obtained by reversing the order of the digits of the number is 45. What is the product of the digits ?",
        "options": [
            "5",
            "2",
            "1",
            "0"
        ],
        "answer": "0"
    },
    {
        "question": "If A and B can finish a work in 10 days, B and C can finish the same work in 12 days, C and A can finish the same work in 15 days; then in how many days can A, B and C together finish half of the work ?",
        "options": [
            "8 days",
            "5 days",
            "4 days",
            "3 days"
        ],
        "answer": "4 days"
    },
    {
        "question": "A person borrowed &#x20B9; 10,000 at 12% rate of interest per annum compounded quarterly for a period of 9 months. What is the interest paid by him to settle his account after 9 months ?",
        "options": [
            "&#x20B9; 927&middot;27",
            "&#x20B9; 947&middot;47",
            "&#x20B9; 967&middot;67",
            "&#x20B9; 987&middot;87"
        ],
        "answer": "&#x20B9; 927&middot;27"
    },
    {
        "question": "For what relation between a and b is the equation sin &theta; = <sup>(a + b)</sup>&frasl;<sub>(2&radic;ab)</sub> possible ?",
        "options": [
            "a = b",
            "a &le; b",
            "a &ge; b",
            "a &gt; b"
        ],
        "answer": "a = b"
    },
    {
        "question": "Three persons A, B and C together can do a piece of work in 36 days. A and B together can do five times as much work as C alone; B and C together can do as much work as A alone. If A and C together can do n times as much work as B alone, then what is the value of n ?",
        "options": [
            "1&middot;5",
            "2",
            "2&middot;5",
            "3"
        ],
        "answer": "2"
    },
    {
        "question": "If <sup>2a</sup>&frasl;<sub>3</sub> = <sup>4b</sup>&frasl;<sub>5</sub> = <sup>3c</sup>&frasl;<sub>4</sub>, then what is the value of <sup>18</sup>&frasl;<sub>a</sub> &radic;(a<sup>2</sup> + c<sup>2</sup> &minus; b<sup>2</sup>) ?",
        "options": [
            "3&radic;5",
            "&radic;355",
            "&radic;375",
            "3&radic;15"
        ],
        "answer": "&radic;355"
    },
    {
        "question": "The sum of deviations of n numbers from 10 and 20 are a, b respectively. If <sup>b</sup>&frasl;<sub>a</sub> = &minus; 4, then what is the mean of these n numbers ?",
        "options": [
            "12",
            "14",
            "16",
            "18"
        ],
        "answer": "12"
    },
    {
        "question": "If the median of observations<br/><br/>12, 1, 8, 54, 61, 28, 45, 35, 21, 17<br/><br/>is M, then what is the value of 2M + 5 ?",
        "options": [
            "12",
            "28",
            "52",
            "54"
        ],
        "answer": "54"
    },
    {
        "question": "How many real roots does the equation &radic;(x + 9) = x &minus; 3 have ?",
        "options": [
            "Only one",
            "Only two",
            "Only three",
            "None"
        ],
        "answer": "Only one"
    },
    {
        "question": "If x = 97 + 56&radic;3, then what is the value of &radic;[4](x) + <sup>1</sup>&frasl;<sub>&radic;[4](x)</sub> ?",
        "options": [
            "7",
            "6",
            "5",
            "4"
        ],
        "answer": "4"
    },
    {
        "question": "Let L be the LCM and H be the HCF of two given numbers. L and H are in the ratio 3 : 2. If the sum of the two numbers is 45, then what is the product of the numbers ?",
        "options": [
            "243",
            "486",
            "504",
            "Cannot be determined due to insufficient data"
        ],
        "answer": "Cannot be determined due to insufficient data"
    },
    {
        "question": "A man walks at an average speed of 3 km/hr from his home and reaches office 40 minutes early. If he walks at an average speed of 2 km/hr, he would reach office 40 minutes late. What is the distance between his home and office ?",
        "options": [
            "6 km",
            "8 km",
            "10 km",
            "12 km"
        ],
        "answer": "8 km"
    },
    {
        "question": "If 3<sup>x &minus; 1</sup> + 3<sup>3 &minus; x</sup> = 6, then what is 2<sup>x &minus; 1</sup> + 2<sup>3 &minus; x</sup> equal to ?",
        "options": [
            "4",
            "3",
            "2",
            "1"
        ],
        "answer": "4"
    },
    {
        "question": "If x(a &minus; b + <sup>ab</sup>&frasl;<sub>(a &minus; b)</sub>) = y(a + b &minus; <sup>ab</sup>&frasl;<sub>(a + b)</sub>) and x + y = 2a<sup>3</sup>, then what is x &minus; y equal to ?",
        "options": [
            "&minus; 2b<sup>3</sup>",
            "&minus; 2ab<sup>3</sup>",
            "2b<sup>3</sup>",
            "2ab<sup>3</sup>"
        ],
        "answer": "&minus; 2b<sup>3</sup>"
    },
    {
        "question": "Which one of the following is a factor of 3&radic;3x<sup>3</sup> + 2&radic;2y<sup>3</sup> &minus; 18xy + 6&radic;6 ?",
        "options": [
            "&radic;3x + &radic;2y &minus; &radic;3",
            "&radic;3x + &radic;2y &minus; &radic;6",
            "3x<sup>2</sup> + 2y<sup>2</sup> &minus; &radic;18x &minus; &radic;12y &minus; &radic;6xy + 6",
            "3x<sup>2</sup> + 2y<sup>2</sup> + &radic;18x + &radic;12y &minus; &radic;6xy + 6"
        ],
        "answer": "3x<sup>2</sup> + 2y<sup>2</sup> &minus; &radic;18x &minus; &radic;12y &minus; &radic;6xy + 6"
    },
    {
        "question": "What is number of digits in the expansion of 125<sup>100</sup> ? (Given log<sub>10</sub> 2 = 0&middot;301)",
        "options": [
            "69",
            "70",
            "209",
            "210"
        ],
        "answer": "210"
    },
    {
        "question": "What is the HCF of<br/><br/>acx<sup>3</sup> + bcx<sup>2</sup> + adx<sup>2</sup> + acdx + bdx + bcd and<br/><br/>adx<sup>3</sup> + acx<sup>2</sup> + bdx<sup>2</sup> + bcx + acdx + bcd<br/><br/>if HCF (c, d) = 1, c &ne; d ?",
        "options": [
            "bx + c",
            "cx + d",
            "ax + d",
            "ax + b"
        ],
        "answer": "ax + b"
    },
    {
        "question": "If x<sup>n</sup> &minus; py<sup>n</sup> + qz<sup>n</sup> is divisible by x<sup>2</sup> + abyz &minus; bzx &minus; axy, then what is <sup>p</sup>&frasl;<sub>a<sup>n</sup></sub> &minus; <sup>q</sup>&frasl;<sub>b<sup>n</sup></sub> equal to ?",
        "options": [
            "&minus; 1",
            "0",
            "1",
            "2"
        ],
        "answer": "2"
    },
    {
        "question": "Consider the following statements :<br/><br/>1. If (a + b) is directly proportional to (a &minus; b), then (a<sup>2</sup> + b<sup>2</sup>) is directly proportional to ab.<br/>2. If a is directly proportional to b, then (a<sup>2</sup> &minus; b<sup>2</sup>) is directly proportional to ab.<br/><br/>Which of the statements given above is/are correct ?",
        "options": [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        "answer": "Both 1 and 2"
    },
    {
        "question": "If (3a + 6b + c + 2d) &times; (3a &minus; 6b &minus; c + 2d) = (3a &minus; 6b + c &minus; 2d) &times; (3a + 6b &minus; c &minus; 2d), then which one of the following is correct ?",
        "options": [
            "ab = cd",
            "ac = bd",
            "ad = bc",
            "ad + bc = 0"
        ],
        "answer": "ad = bc"
    },
    {
        "question": "If 3 sin &theta; + 5 cos &theta; = 5, then what is the value of 5 sin &theta; &minus; 3 cos &theta; equal to ?",
        "options": [
            "5",
            "3",
            "&minus; 2",
            "0"
        ],
        "answer": "3"
    },
    {
        "question": "The combined age of a man and his wife is 6 times the combined age of their children. Two years ago their combined age was 10 times the combined age of their children; and six years later their combined age will be 3 times the combined age of their children. How many children do they have if each child is at least 2 years old ?",
        "options": [
            "2",
            "3",
            "4",
            "5"
        ],
        "answer": "3"
    },
    {
        "question": "What is 3 (sin x &minus; cos x)<sup>4</sup> + 6 (sin x + cos x)<sup>2</sup> + 4 (sin x)<sup>6</sup> + 4 (cos x)<sup>6</sup> equal to ?",
        "options": [
            "9",
            "11",
            "13",
            "15"
        ],
        "answer": "13"
    },
    {
        "question": "What is the value of sin &theta; + cos &theta;, if &theta; satisfies the equation cot<sup>2</sup> &theta; &minus; (&radic;3 + 1) cot &theta; + &radic;3 = 0; 0 &lt; &theta; &lt; <sup>&pi;</sup>&frasl;<sub>4</sub> ?",
        "options": [
            "&radic;2",
            "2",
            "<sup>(&radic;3 + 1)</sup>&frasl;<sub>2</sub>",
            "<sup>(&radic;3 &minus; 1)</sup>&frasl;<sub>2</sub>"
        ],
        "answer": "<sup>(&radic;3 + 1)</sup>&frasl;<sub>2</sub>"
    },
    {
        "question": "Which one of the following is a value of &theta;, if &theta; satisfies the equation tan 2&theta; tan 4&theta; &minus; 1 = 0; 0 &lt; &theta; &lt; <sup>&pi;</sup>&frasl;<sub>2</sub> ?",
        "options": [
            "<sup>&pi;</sup>&frasl;<sub>12</sub>",
            "<sup>&pi;</sup>&frasl;<sub>15</sub>",
            "<sup>&pi;</sup>&frasl;<sub>6</sub>",
            "<sup>&pi;</sup>&frasl;<sub>5</sub>"
        ],
        "answer": "<sup>&pi;</sup>&frasl;<sub>12</sub>"
    },
    {
        "question": "If tan x = <sup>(sin &theta; + cos &theta;)</sup>&frasl;<sub>(sin &theta; &minus; cos &theta;)</sub>, <sup>&pi;</sup>&frasl;<sub>4</sub> &lt; &theta; &lt; <sup>&pi;</sup>&frasl;<sub>2</sub>, then what is &radic;2 sin x equal to ?",
        "options": [
            "sin &theta; + cos &theta;",
            "sin &theta; &minus; cos &theta;",
            "<sup>(sin &theta; + cos &theta;)</sup>&frasl;<sub>2</sub>",
            "<sup>(sin &theta; &minus; cos &theta;)</sup>&frasl;<sub>2</sub>"
        ],
        "answer": "sin &theta; + cos &theta;"
    },
    {
        "question": "How many values of &theta; will satisfy the equation<br/>(sin<sup>2</sup> &theta; &minus; 4 sin &theta; + 3) (4 &minus; cos<sup>2</sup> &theta; + 4 sin &theta;) = 0,<br/>where 0 &lt; &theta; &lt; <sup>&pi;</sup>&frasl;<sub>2</sub> ?",
        "options": [
            "None",
            "Only one",
            "Only two",
            "Only three"
        ],
        "answer": "None"
    },
    {
        "question": "If x sin<sup>3</sup> &theta; + y cos<sup>3</sup> &theta; = sin &theta; cos &theta; and x sin &theta; &minus; y cos &theta; = 0, for every &theta; &isin; (0, <sup>&pi;</sup>&frasl;<sub>2</sub>), then what is x<sup>2</sup> + y<sup>2</sup> equal to ?",
        "options": [
            "0",
            "1",
            "2",
            "3"
        ],
        "answer": "1"
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next two (02) items that follow:<br/>A flagstaff stands on the top of a vertical tower. The angle of elevation of the top of the flagstaff from a certain place on the same horizontal level with the base of the tower is found to be &alpha;. Advancing a distance d towards the tower in the same horizontal plane, the angle of elevation of the top of the flagstaff is observed to be &beta; and that of the top of the tower is observed to be &gamma;. Let H be the height of the top of the flagstaff from the base of the tower and h be the height of the tower.<br/><br/>Which one of the following is correct ?",
        "options": [
            "H tan &gamma; &minus; h tan &beta; = 0",
            "h tan &gamma; &minus; H tan &beta; = 0",
            "H tan &gamma; &minus; h tan &alpha; = 0",
            "h tan &gamma; &minus; H tan &alpha; = 0"
        ],
        "answer": "H tan &gamma; &minus; h tan &beta; = 0"
    },
    {
        "question": "Which one of the following is correct ?",
        "options": [
            "d = <sup>H(cot &alpha; &minus; cot &beta;)</sup>&frasl;<sub>2</sub>",
            "d = <sup>H(tan &alpha; &minus; tan &beta;)</sup>&frasl;<sub>2</sub>",
            "d = H (cot &alpha; &minus; cot &beta;)",
            "d = H (tan &alpha; &minus; tan &beta;)"
        ],
        "answer": "d = H (cot &alpha; &minus; cot &beta;)"
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next two (02) items that follow:<br/>AB is a straight road leading to the foot P of a tower of height h. Q is at distance x from P and R is at a distance y from Q (R is farther from P than Q; R, Q are on the same side). The angle of elevation of the top of the tower at Q is twice of that at R. (Use the formula tan 2&theta; = <sup>2 tan &theta;</sup>&frasl;<sub>(1 &minus; tan<sup>2</sup> &theta;)</sub>)<br/><br/>Which one of the following is correct ?",
        "options": [
            "x = y",
            "x &lt; y",
            "x &gt; y",
            "Cannot be concluded due to insufficient data"
        ],
        "answer": "x &lt; y"
    },
    {
        "question": "Which one of the following is correct ?",
        "options": [
            "h<sup>2</sup> = x<sup>2</sup> &minus; y<sup>2</sup>",
            "h<sup>2</sup> = x<sup>2</sup> + y<sup>2</sup>",
            "h<sup>2</sup> = 2 (y<sup>2</sup> &minus; x<sup>2</sup>)",
            "h<sup>2</sup> = y<sup>2</sup> &minus; x<sup>2</sup>"
        ],
        "answer": "h<sup>2</sup> = y<sup>2</sup> &minus; x<sup>2</sup>"
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next two (02) items that follow:<br/>Two parallel chords AB and CD of a circle are of lengths 60 cm and 80 cm respectively. They are on the same side of the centre O and 10 cm apart.<br/><br/>What is the diameter of the circle ?",
        "options": [
            "120 cm",
            "110 cm",
            "100 cm",
            "90 cm"
        ],
        "answer": "100 cm"
    },
    {
        "question": "If the chord AB subtends an angle &alpha; and chord CD subtends an angle &beta; at the centre O, then what is the value of tan <sup>&beta;</sup>&frasl;<sub>2</sub> &minus; tan <sup>&alpha;</sup>&frasl;<sub>2</sub> ?",
        "options": [
            "<sup>3</sup>&frasl;<sub>4</sub>",
            "<sup>5</sup>&frasl;<sub>12</sub>",
            "<sup>1</sup>&frasl;<sub>2</sub>",
            "<sup>7</sup>&frasl;<sub>12</sub>"
        ],
        "answer": "<sup>7</sup>&frasl;<sub>12</sub>"
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next two (02) items that follow:<br/>Let p = x<sup>4</sup> &minus; y<sup>2</sup>z<sup>2</sup>, q = y<sup>4</sup> &minus; z<sup>2</sup>x<sup>2</sup>, r = z<sup>4</sup> &minus; x<sup>2</sup>y<sup>2</sup>.<br/><br/>What is px<sup>2</sup> + qy<sup>2</sup> + rz<sup>2</sup> equal to ?",
        "options": [
            "(x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup>) (p + q + r)",
            "&minus; (x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup>) (p + q + r)",
            "(y<sup>2</sup> + z<sup>2</sup> &minus; x<sup>2</sup>) (r &minus; q &minus; p)",
            "(x<sup>2</sup> + y<sup>2</sup> &minus; z<sup>2</sup>) (p &minus; q &minus; r)"
        ],
        "answer": "(x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup>) (p + q + r)"
    },
    {
        "question": "What is x<sup>2</sup> (px<sup>2</sup> + qy<sup>2</sup> + rz<sup>2</sup>) + qr &minus; p<sup>2</sup> equal to ?",
        "options": [
            "0",
            "1",
            "p + q + r",
            "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup>"
        ],
        "answer": "0"
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next two (02) items that follow:<br/>A right conical cap just covers two spheres placed one above the other on a table such that it touches both the spheres. Let r be the radius of the smaller sphere and R be the radius of the bigger sphere. Let 2&theta; be the vertical angle of the cone.<br/><br/>What is the height of the cone ?",
        "options": [
            "<sup>2r<sup>2</sup></sup>&frasl;<sub>(R &minus; r)</sub>",
            "<sup>2R<sup>2</sup></sup>&frasl;<sub>(R &minus; r)</sub>",
            "<sup>2(r<sup>2</sup> + R<sup>2</sup>)</sup>&frasl;<sub>(R &minus; r)</sub>",
            "<sup>(r<sup>2</sup> + R<sup>2</sup>)</sup>&frasl;<sub>(R &minus; r)</sub>"
        ],
        "answer": "<sup>2R<sup>2</sup></sup>&frasl;<sub>(R &minus; r)</sub>"
    },
    {
        "question": "What is the radius of the base of the cone ?",
        "options": [
            "<sup>2r<sup>2</sup> tan &theta;</sup>&frasl;<sub>(R &minus; r)</sub>",
            "<sup>2R<sup>2</sup> tan &theta;</sup>&frasl;<sub>(R &minus; r)</sub>",
            "<sup>2(r<sup>2</sup> + R<sup>2</sup>) tan &theta;</sup>&frasl;<sub>(R &minus; r)</sub>",
            "<sup>(r<sup>2</sup> + R<sup>2</sup>) tan &theta;</sup>&frasl;<sub>(R &minus; r)</sub>"
        ],
        "answer": "<sup>2R<sup>2</sup> tan &theta;</sup>&frasl;<sub>(R &minus; r)</sub>"
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next two (02) items that follow:<br/>A line segment AB is bisected at C and semi-circles S<sub>1</sub>, S<sub>2</sub> and S<sub>3</sub> are drawn respectively on AB, AC and CB as diameters such that they all lie on same side of AB. A circle S is drawn touching internally S<sub>1</sub> and externally S<sub>2</sub> and S<sub>3</sub>.<br/><br/>If r is the radius of S and R is the radius of S<sub>2</sub>, then which one of the following is correct ?",
        "options": [
            "R = 3r",
            "R = 2r",
            "3R = 4r",
            "2R = 3r"
        ],
        "answer": "2R = 3r"
    },
    {
        "question": "If m is the area of the circle S and n is the area of semi-circle S<sub>1</sub>, then which one of the following is correct ?",
        "options": [
            "9m = 2n",
            "9m = 4n",
            "3m = 2n",
            "7m = 3n"
        ],
        "answer": "9m = 2n"
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next two (02) items that follow:<br/>Let <sup>(x &minus; a)(x &minus; b)</sup>&frasl;<sub>(x &minus; ma)(x &minus; mb)</sub> = <sup>(x + a)(x + b)</sup>&frasl;<sub>(x + ma)(x + mb)</sub> ; m, a, b &gt; 0.<br/><br/>What is <sup>(x<sup>2</sup> + ab)</sup>&frasl;<sub>(x<sup>2</sup> + m<sup>2</sup>ab)</sub> equal to ?",
        "options": [
            "&minus; <sup>1</sup>&frasl;<sub>m<sup>2</sup></sub>",
            "<sup>1</sup>&frasl;<sub>m<sup>2</sup></sub>",
            "<sup>2</sup>&frasl;<sub>m</sub>",
            "<sup>1</sup>&frasl;<sub>m</sub>"
        ],
        "answer": "<sup>1</sup>&frasl;<sub>m</sub>"
    },
    {
        "question": "What is x equal to ?",
        "options": [
            "&plusmn; &radic;mab",
            "&plusmn; &radic;ab",
            "&plusmn; &radic;2mab",
            "&plusmn; &radic;2ab"
        ],
        "answer": "&plusmn; &radic;mab"
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next two (02) items that follow:<br/>The total monthly electricity bill for a house consists of the sum of two parts, one part is proportional to number of rooms and the other part is proportional to number of units consumed. &#x20B9; 400 is the monthly electricity bill for a house with 8 rooms and consuming 240 units and &#x20B9; 320 is the monthly electricity bill for a house with 6 rooms and consuming 200 units.<br/><br/>What is the monthly electricity bill for a house with m rooms and consuming n units ?",
        "options": [
            "&#x20B9; (40m + n)",
            "&#x20B9; (20m + n)",
            "&#x20B9; <sup>(40m + n)</sup>&frasl;<sub>2</sub>",
            "&#x20B9; <sup>(30m + n)</sup>&frasl;<sub>2</sub>"
        ],
        "answer": "&#x20B9; (20m + n)"
    },
    {
        "question": "What is the monthly electricity bill for a house with 7 rooms consuming 300 units ?",
        "options": [
            "&#x20B9; 500",
            "&#x20B9; 440",
            "&#x20B9; 340",
            "&#x20B9; 300"
        ],
        "answer": "&#x20B9; 440"
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next two (02) items that follow:<br/>A grouped frequency distribution is given below :<br/><br/>Weekly wages in Rupees (&#x20B9;) | Numbers of workers<br/>2050 - 2550 | 5<br/>2550 - 3050 | 10<br/>3050 - 3550 | k<br/>3550 - 4050 | 8<br/>4050 - 4550 | 2<br/>4550 - 5050 | 10<br/><br/>If average weekly wages earned by a worker is &#x20B9; 3,520, then what is the value of k ?",
        "options": [
            "10",
            "12",
            "15",
            "20"
        ],
        "answer": "15"
    },
    {
        "question": "What is the median (approximate value) of the distribution ?",
        "options": [
            "&#x20B9; 3,263",
            "&#x20B9; 3,383",
            "&#x20B9; 3,413",
            "&#x20B9; 3,483"
        ],
        "answer": "&#x20B9; 3,383"
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next two (02) items that follow:<br/>A quadratic equation is given by<br/>(a + b + c) x<sup>2</sup> &minus; (2a + 2b) x + (a + b &minus; c) = 0;<br/>where a, b and c are real and distinct.<br/><br/>What are the roots of the equation ?",
        "options": [
            "1, <sup>(a + b &minus; c)</sup>&frasl;<sub>(a + b + c)</sub>",
            "1, <sup>(a &minus; b + c)</sup>&frasl;<sub>(a + b + c)</sub>",
            "&minus; 1, <sup>(&minus; a &minus; b + c)</sup>&frasl;<sub>(a + b + c)</sub>",
            "&minus; 1, <sup>(a + b &minus; c)</sup>&frasl;<sub>(a + b + c)</sub>"
        ],
        "answer": "1, <sup>(a + b &minus; c)</sup>&frasl;<sub>(a + b + c)</sub>"
    },
    {
        "question": "Consider the following statements :<br/><br/>1. One of the roots of the equation is always less than 1 if a, b and c are all positive.<br/>2. One of the roots of the equation is always negative if a, b and c are all negative.<br/><br/>Which of the statements given above is/are correct ?",
        "options": [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        "answer": "1 only"
    },
    {
        "question": "What is the radius of the sphere passing through the corners of the cuboid with edges 8 cm, 12 cm and 24 cm ?",
        "options": [
            "10&middot;5 cm",
            "14 cm",
            "21 cm",
            "28 cm"
        ],
        "answer": "14 cm"
    },
    {
        "question": "A lamp shade is in the shape of a part of a cone and its top and bottom ends are circles whose circumferences are respectively 30 cm and 40 cm. The perpendicular distance between the ends is 6 cm. If the cone were to be completed, then how far would its vertex be from the top end ?",
        "options": [
            "20 cm",
            "18 cm",
            "12 cm",
            "9 cm"
        ],
        "answer": "18 cm"
    },
    {
        "question": "A sum of money at 20% rate of compound interest per annum becomes more than 100 times in n years. What is the least value of n ? (Use log<sub>10</sub> 2 = 0&middot;301, log<sub>10</sub> 3 = 0&middot;477)",
        "options": [
            "23",
            "24",
            "25",
            "26"
        ],
        "answer": "26"
    },
    {
        "question": "The corners of an equilateral triangular plate were cut in such a manner that it forms a regular hexagonal plate. What is the ratio of the area of the triangular plate to the area of the hexagonal plate ?",
        "options": [
            "2 : 1",
            "3 : 2",
            "4 : 3",
            "5 : 3"
        ],
        "answer": "3 : 2"
    },
    {
        "question": "Two equal arcs of different circles C<sub>1</sub> and C<sub>2</sub> subtend angles of 60&deg; and 75&deg; respectively, at the centres. What is the ratio of the radius of C<sub>1</sub> to the radius of C<sub>2</sub> ?",
        "options": [
            "4 : 5",
            "5 : 4",
            "1 : 1",
            "3 : 2"
        ],
        "answer": "5 : 4"
    },
    {
        "question": "ABC is a triangle with sides AB = 41 cm, BC = 28 cm and CA = 15 cm. If D, E and F are the mid-points of AB, BC and CA respectively, then what is the area of the triangle DEF ?",
        "options": [
            "63 square cm",
            "45 square cm",
            "31&middot;5 square cm",
            "22&middot;5 square cm"
        ],
        "answer": "31&middot;5 square cm"
    },
    {
        "question": "A triangle has sides 13 cm, 14 cm and 15 cm long. What is the length of the smallest altitude of the triangle ?",
        "options": [
            "11 cm",
            "11&middot;2 cm",
            "12 cm",
            "12&middot;2 cm"
        ],
        "answer": "11&middot;2 cm"
    }
  ],
  "2024-I": [
    {
        "question": "If a : b : c : d = &radic;4 : &radic;3 : &radic;2 : &radic;1, then what is the value of <sup>(&minus; a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> + d<sup>2</sup>)</sup>&frasl;<sub>(a<sup>2</sup> &minus; b<sup>2</sup> + c<sup>2</sup> &minus; d<sup>2</sup>)</sub> ?",
        "options": [
            "1",
            "2",
            "3",
            "6"
        ],
        "answer": "1"
    },
    {
        "question": "The speeds of four cars are 2u, 3u, 4u and xu and the time taken by them to cover the same distance is xt, 4t, 3t and 2t respectively, where x, u, t are real numbers. What is the value of x ?",
        "options": [
            "8",
            "6",
            "5",
            "2"
        ],
        "answer": "6"
    },
    {
        "question": "If m : n = 1 : 2 and p : q = 3 : 4, then what is (2m + 4p) : (n + 3q) equal to ?",
        "options": [
            "1 : 1",
            "1 : 3",
            "2 : 1",
            "2 : 3"
        ],
        "answer": "1 : 1"
    },
    {
        "question": "If the rate of interest is 5%, then what would be the difference between compound interest and simple interest received on &#x20B9; 10,000 (each) after 3 years from now ?",
        "options": [
            "&#x20B9; 175&middot;25",
            "&#x20B9; 152&middot;25",
            "&#x20B9; 76&middot;25",
            "&#x20B9; 24&middot;25"
        ],
        "answer": "&#x20B9; 76&middot;25"
    },
    {
        "question": "A person bought a book at 3/4<sup>th</sup> of its listed price and sold it at 50% more than its listed price. What is the percentage of gain in the transaction ?",
        "options": [
            "20%",
            "40%",
            "75%",
            "100%"
        ],
        "answer": "100%"
    },
    {
        "question": "If the difference between the interior and exterior angles of a regular polygon is 144&deg;, then what is the number of sides of the polygon ?",
        "options": [
            "12",
            "16",
            "18",
            "20"
        ],
        "answer": "20"
    },
    {
        "question": "If the sum and product of the roots of a quadratic equation are 2 and &minus; 100 respectively, then which one of the following is correct ?",
        "options": [
            "There are infinitely many such equations having different roots.",
            "There is only one such equation which is x<sup>2</sup> + 2x &minus; 100 = 0.",
            "There is only one such equation which is x<sup>2</sup> &minus; 2x &minus; 100 = 0.",
            "There is no such equation."
        ],
        "answer": "There is only one such equation which is x<sup>2</sup> &minus; 2x &minus; 100 = 0."
    },
    {
        "question": "If 2 is a zero of the polynomial p(x) = x<sup>3</sup> + 3x<sup>2</sup> &minus; 6x &minus; a, then what is the sum of the squares of the other zeros of the polynomial ?",
        "options": [
            "10",
            "17",
            "21",
            "37"
        ],
        "answer": "17"
    },
    {
        "question": "If t = cos 79&deg;, then what is cosec 79&deg; (1 &minus; cos 79&deg;) equal to ?",
        "options": [
            "&radic;(1 + t) / &radic;(1 &minus; t)",
            "t / &radic;(1 &minus; t<sup>2</sup>)",
            "&radic;(1 &minus; t<sup>2</sup>) / t",
            "&radic;(1 &minus; t) / &radic;(1 + t)"
        ],
        "answer": "&radic;(1 &minus; t) / &radic;(1 + t)"
    },
    {
        "question": "Suppose p(x) = x<sup>4</sup> + a<sub>3</sub>x<sup>3</sup> + a<sub>2</sub>x<sup>2</sup> + a<sub>1</sub>x + a<sub>0</sub> and q(x) = x<sup>4</sup> + b<sub>3</sub>x<sup>3</sup> + b<sub>2</sub>x<sup>2</sup> + b<sub>1</sub>x + b<sub>0</sub> are the polynomials. If &alpha;, &beta;, &gamma;, &delta; are zeros of p(x) and &alpha;, &beta;, &gamma;, &lambda; are zeros of q(x), then what is <sup>(p(x) &minus; q(x))</sup>&frasl;<sub>((x &minus; &alpha;)(x &minus; &beta;)(x &minus; &gamma;))</sub> equal to ?",
        "options": [
            "&minus; &lambda; + &delta;",
            "&lambda; &minus; &delta;",
            "&lambda; + &delta;",
            "&minus; &lambda; &minus; &delta;"
        ],
        "answer": "&lambda; &minus; &delta;"
    },
    {
        "question": "If the equation x cos &theta; = x<sup>2</sup> + p has a real solution for every &theta; where 0 &le; &theta; &le; &pi;/4, then which one of the following is correct ?",
        "options": [
            "p = 1/8",
            "p &le; 1/8",
            "p &ge; 1/8",
            "p &le; 1/4"
        ],
        "answer": "p &le; 1/8"
    },
    {
        "question": "What is the difference between the greatest value and the least value of cos<sup>2</sup> &theta; + 3 sin<sup>2</sup> &theta; + 2 ?",
        "options": [
            "4",
            "3",
            "2",
            "1"
        ],
        "answer": "2"
    },
    {
        "question": "ABC is a right-angled triangle, right-angled at B such that AB = 6 cm and BC = 8 cm. What is the perimeter of the square inscribed in the triangle ABC with maximum area ?",
        "options": [
            "24/7 cm",
            "96/7 cm",
            "24 cm",
            "32 cm"
        ],
        "answer": "96/7 cm"
    },
    {
        "question": "What is the greatest value of k for which 2x<sup>2</sup> &minus; 4x + k = 0 has real roots ?",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": "2"
    },
    {
        "question": "Consider the following data :<br/>110, 41, 43, 95, 127, 99, 61, 92, 71, 93, 110, 36.<br/>If 93 is replaced by 94, then consider the following statements :<br/><br/>1. The difference between new median and old median is 1.<br/>2. The difference between new mean and old mean is less than 0&middot;1.<br/>3. The difference between new mode and old mode is zero.<br/><br/>Which of the statements given above are correct ?",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        "answer": "2 and 3 only"
    },
    {
        "question": "What is the digit at the 100<sup>th</sup> place of number (225)<sup>40</sup> ?",
        "options": [
            "6",
            "5",
            "4",
            "2"
        ],
        "answer": "6"
    },
    {
        "question": "If a, b, c, d are natural numbers, then how many possible remainders are there when 1<sup>a</sup> + 2<sup>b</sup> + 3<sup>c</sup> + 4<sup>d</sup> is divided by 10 ?",
        "options": [
            "3",
            "4",
            "5",
            "6"
        ],
        "answer": "5"
    },
    {
        "question": "If n is a natural number, then what is the sum of all distinct remainders of 4<sup>n</sup> + 6<sup>n</sup> + 9<sup>n</sup> + 11<sup>n</sup> when divided by 10 for various values of n ?",
        "options": [
            "3",
            "4",
            "6",
            "7"
        ],
        "answer": "4"
    },
    {
        "question": "When the number (12345678910111213 ... 99100) is divided by 16, what will be the remainder ?",
        "options": [
            "15",
            "12",
            "4",
            "3"
        ],
        "answer": "12"
    },
    {
        "question": "A, B, C, D can complete a work in 3, 6, 9, 12 hours respectively. Further, only one person can work at a time in each hour and nobody can work for two consecutive hours. It is not necessary to engage all. What is the minimum number of hours that they will take to finish the work ?",
        "options": [
            "36/25",
            "12/5",
            "4",
            "2"
        ],
        "answer": "4"
    },
    {
        "question": "If p = &radic;[3](a + &radic;(a<sup>2</sup> + b<sup>3</sup>)) + &radic;[3](a &minus; &radic;(a<sup>2</sup> + b<sup>3</sup>)), then what is p<sup>3</sup> + 3bp equal to ?",
        "options": [
            "&minus; 2a",
            "a",
            "2a",
            "3a"
        ],
        "answer": "2a"
    },
    {
        "question": "A plank of wood 4&middot;25 m long and 3&middot;4 m wide is to be cut into square pieces of equal size. How many square pieces of largest size can be cut from the plank, if no wastage is allowed ?",
        "options": [
            "45",
            "90",
            "400",
            "500"
        ],
        "answer": "500"
    },
    {
        "question": "What is the HCF of x<sup>4</sup> &minus; 13x<sup>2</sup>y<sup>2</sup> &minus; 300y<sup>4</sup>, x<sup>3</sup> &minus; 4x<sup>2</sup>y &minus; 4xy<sup>2</sup> &minus; 5y<sup>3</sup> and x<sup>3</sup> &minus; 125y<sup>3</sup> ?",
        "options": [
            "x &minus; 5y",
            "x + 5y",
            "x<sup>2</sup> + 5xy + 25y<sup>2</sup>",
            "1"
        ],
        "answer": "x &minus; 5y"
    },
    {
        "question": "If HCF of 768 and x<sup>6</sup>y<sup>2</sup> is 32xy for natural numbers x &ge; 2, y &ge; 2, then what is the value of (x + y) ?",
        "options": [
            "5",
            "7",
            "9",
            "11"
        ],
        "answer": "5"
    },
    {
        "question": "What is the smallest natural number n such that (n + 1) &times; n &times; (n &minus; 1) &times; (n &minus; 2) &times; ... 3 &times; 2 &times; 1 is divisible by 910 ?",
        "options": [
            "91",
            "90",
            "13",
            "12"
        ],
        "answer": "12"
    },
    {
        "question": "The expression 555<sup>777</sup> + 777<sup>555</sup> is divisible by which of the following ?<br/><br/>1. 2<br/>2. 3<br/>3. 37<br/><br/>Select the correct answer using the code given below :",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        "answer": "1, 2 and 3"
    },
    {
        "question": "Consider the following statements :<br/><br/>1. If (3m<sup>3</sup> + 2m<sup>2</sup> + 5m + n)/m is not an integer, where m and n are integers, then n is not divisible by m.<br/>2. 5(8<sup>m</sup>) + 2<sup>3m</sup> is divisible by 48 for all whole numbers m.<br/><br/>Which of the statements given above is/are correct ?",
        "options": [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        "answer": "1 only"
    },
    {
        "question": "The sum of two positive numbers is 40. If the GM of these two numbers is lower than their AM by 20%, then what is the difference between the two numbers ?",
        "options": [
            "12",
            "18",
            "24",
            "28"
        ],
        "answer": "24"
    },
    {
        "question": "50 men can complete a work in 40 days. They begin the work together but a batch of 5 men left after each period of 10 days. What is the time to complete the work ?",
        "options": [
            "45 days",
            "50 days",
            "55 days",
            "60 days"
        ],
        "answer": "50 days"
    },
    {
        "question": "If x = 1 / (2 + 3 / (4 + 5 / (6 + 7 / (8 + 9 / 10)))), then which one of the following is correct ?",
        "options": [
            "0 &lt; x &lt; 0&middot;5",
            "x = 0&middot;5",
            "0&middot;5 &lt; x &lt; 1&middot;0",
            "x &gt; 1&middot;0"
        ],
        "answer": "0 &lt; x &lt; 0&middot;5"
    },
    {
        "question": "A bottle contains spirit and water in the ratio 1 : 4 and another identical bottle contains spirit and water in the ratio 4 : 1. In what ratio should the mixtures in the two bottles be mixed to get a new mixture in which the ratio of spirit to water is 1 : 3 ?",
        "options": [
            "5 : 1",
            "6 : 1",
            "10 : 1",
            "11 : 1"
        ],
        "answer": "11 : 1"
    },
    {
        "question": "If 3 sin &theta; + 5 cos &theta; = 5, then what is the value of 5 sin &theta; &minus; 3 cos &theta; ?",
        "options": [
            "&minus; 3",
            "&minus; 2",
            "5",
            "8"
        ],
        "answer": "&minus; 3"
    },
    {
        "question": "Consider the following in respect of the polynomial x<sup>4k</sup> + x<sup>4k+2</sup> + x<sup>4k+4</sup> + x<sup>4k+6</sup> :<br/><br/>1. The remainder is zero when the polynomial is divided by x<sup>2</sup> + 1.<br/>2. The remainder is zero when the polynomial is divided by x<sup>4</sup> + 1.<br/><br/>Which of the statements given above is/are correct ?",
        "options": [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        "answer": "Both 1 and 2"
    }
  ,
    {
        "question": "What is the minimum value of <sup>(sin<sup>2</sup> A + 5 sin A + 1)</sup>&frasl;<sub>sin A</sub> for 0 &lt; A &le; &pi;/2 ?",
        "options": [
            "3",
            "5",
            "7",
            "9"
        ],
        "answer": "7"
    },
    {
        "question": "What is <sup>3</sup>&frasl;<sub>(1<sup>2</sup> &times; 2<sup>2</sup>)</sub> + <sup>5</sup>&frasl;<sub>(2<sup>2</sup> &times; 3<sup>2</sup>)</sub> + <sup>7</sup>&frasl;<sub>(3<sup>2</sup> &times; 4<sup>2</sup>)</sub> + ... equal to ?",
        "options": [
            "1",
            "4",
            "7",
            "9"
        ],
        "answer": "1"
    },
    {
        "question": "If 1 / (a + 1 / (b + 1 / (c + 1 / (d + 1 / e)))) = 421 / 972, then what is the value of a &times; b &times; c &times; d &times; e ?",
        "options": [
            "720",
            "480",
            "360",
            "60"
        ],
        "answer": "720"
    },
    {
        "question": "A cube whose edge is 14 cm long has on each of its faces a circle of 7 cm radius painted yellow. What is the total area of unpainted surface ? (Take &pi; = 22/7)",
        "options": [
            "126 square cm",
            "189 square cm",
            "252 square cm",
            "315 square cm"
        ],
        "answer": "252 square cm"
    },
    {
        "question": "From a circular metal plate of radius 7 cm and thickness 0&middot;16 mm, a sector is cut off containing an angle 150&deg;. The remaining piece is moulded into a spherical bead of radius r. What is the value of r in cm ?",
        "options": [
            "0&middot;35",
            "0&middot;7",
            "1&middot;05",
            "1&middot;4"
        ],
        "answer": "0&middot;7"
    },
    {
        "question": "The chord AB of a circle with centre at O is 2&radic;3 times the height of the minor segment. If P is the area of the sector OAB and Q is the area of the minor segment of the circle, then what is the approximate value of P/Q ?<br/><br/>(Take &radic;3 = 1&middot;7 and &pi; = 3&middot;14)",
        "options": [
            "1&middot;4",
            "1&middot;7",
            "2&middot;2",
            "2&middot;6"
        ],
        "answer": "1&middot;7"
    },
    {
        "question": "What is the area of the region between two concentric circles, if the length of a chord of the outer circle touching the inner circle at a particular point of its circumference is 14 cm ?<br/><br/>(Take &pi; = 22/7)",
        "options": [
            "154 square cm",
            "144 square cm",
            "132 square cm",
            "Cannot be determined due to insufficient data"
        ],
        "answer": "154 square cm"
    },
    {
        "question": "In a right-angled triangle ABC, AB = 15 cm, BC = 20 cm and AC = 25 cm. Further, BP is the perpendicular on AC. What is the difference in the area of triangles PAB and PCB ?",
        "options": [
            "40 square cm",
            "42 square cm",
            "45 square cm",
            "48 square cm"
        ],
        "answer": "42 square cm"
    },
    {
        "question": "Let the positive numbers a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, ...., a<sub>3n</sub> be in GP. If P is the GM of a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, ...., a<sub>n</sub> and Q is the GM of a<sub>n+1</sub>, a<sub>n+2</sub>, a<sub>n+3</sub>, ...., a<sub>3n</sub>, then what is the GM of 3n numbers ?",
        "options": [
            "P<sup>2</sup>Q",
            "PQ<sup>2</sup>",
            "&radic;(PQ)",
            "P<sup>1/3</sup> Q<sup>2/3</sup>"
        ],
        "answer": "P<sup>1/3</sup> Q<sup>2/3</sup>"
    },
    {
        "question": "The cost price of y articles is equal to selling price of z articles. If y : z = 5 : 4, what is the profit percentage ?",
        "options": [
            "20%",
            "25%",
            "30%",
            "40%"
        ],
        "answer": "25%"
    },
    {
        "question": "A sum of money invested at simple interest triples itself in 8 years and becomes n times in 20 years. What is the value of n ?",
        "options": [
            "5",
            "6",
            "7&middot;5",
            "9"
        ],
        "answer": "6"
    },
    {
        "question": "If the work done by x men in (x + 1) days is equal to the work done by (x + 5) men in (x &minus; 2) days, then what is the value of x ?",
        "options": [
            "5",
            "6",
            "7",
            "8"
        ],
        "answer": "5"
    },
    {
        "question": "If (a + b) : (b + c) : (c + a) = 5 : 7 : 6, then what is the value of (a &minus; b + c) : (a + b &minus; c) ?",
        "options": [
            "1 : 1",
            "2 : 3",
            "3 : 1",
            "4 : 3"
        ],
        "answer": "3 : 1"
    },
    {
        "question": "Let x be the compound interest at the end of 3 years on a sum of &#x20B9; 1000 at the rate of 10% compounded annually and y be the simple interest at the end of 3 years on a sum of &#x20B9; 1000 at the annual rate of 11%. What is the difference between x and y ?",
        "options": [
            "&#x20B9; 16",
            "&#x20B9; 15",
            "&#x20B9; 5",
            "&#x20B9; 1"
        ],
        "answer": "&#x20B9; 1"
    },
    {
        "question": "In a quadrilateral ABCD, AB = 6 cm, BC = 18 cm, CD = 6 cm and DA = 10 cm. If the diagonal BD = x, then which one of the following is correct ?",
        "options": [
            "8 &lt; x &lt; 12",
            "12 &lt; x &lt; 16",
            "16 &lt; x &lt; 18",
            "18 &lt; x &lt; 20"
        ],
        "answer": "12 &lt; x &lt; 16"
    },
    {
        "question": "In a quarter circle of radius R, a circle of radius r is inscribed. What is the ratio of R to r ?",
        "options": [
            "(&radic;2 + 1) : 1",
            "(&radic;3 + 1) : 1",
            "3 : 2",
            "5 : 4"
        ],
        "answer": "(&radic;2 + 1) : 1"
    },
    {
        "question": "In a quadrilateral ABCD, AB = BC and CD = DA; AC and BD are diagonals such that AC = 6 cm and BD = 12 cm. What is the area of the quadrilateral ?",
        "options": [
            "24 square cm",
            "30 square cm",
            "36 square cm",
            "40 square cm"
        ],
        "answer": "36 square cm"
    },
    {
        "question": "If tan (3A) = cot (A &minus; 22&deg;), where 3A is an acute angle, then what is the value of A ?",
        "options": [
            "25&deg;",
            "27&deg;",
            "28&deg;",
            "30&deg;"
        ],
        "answer": "28&deg;"
    },
    {
        "question": "If (sin &theta; &minus; cos &theta; + 1) / (sin &theta; + cos &theta; &minus; 1) = p sec &theta; + q tan &theta;, where 0 &lt; &theta; &lt; &pi;/2, then what is p + q equal to ?",
        "options": [
            "0",
            "1",
            "2",
            "4"
        ],
        "answer": "2"
    },
    {
        "question": "The angles of elevation of the top of a tower from two points A and B at a distance of x m and (x + 5) m from the base of the tower of height 6 m and in the same straight line with it are complementary. What is the value of x ?",
        "options": [
            "4 m",
            "5 m",
            "6 m",
            "9 m"
        ],
        "answer": "4 m"
    },
    {
        "question": "Consider the following statements :<br/><br/>1. In a triangle ABC, if sin A + sin B + sin C = 3&radic;3 / 2, then the triangle can be equilateral.<br/>2. In a triangle ABC, if cos A + cos B + cos C = 3 / 2, then the triangle can be equilateral.<br/><br/>Which of the statements given above is/are correct ?",
        "options": [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        "answer": "Both 1 and 2"
    },
    {
        "question": "Two trains A and B leave Delhi for Hyderabad at 7:00 a.m. and 7:50 a.m. on the same day and travel at 80 kmph and 100 kmph respectively. After how many kilometers from Delhi will the two trains be together ?",
        "options": [
            "200/3 km",
            "100 km",
            "400/3 km",
            "1000/3 km"
        ],
        "answer": "1000/3 km"
    },
    {
        "question": "The length, breadth and height of a cuboid are increased by 10%, 20% and 50% respectively. What is the percentage increase in volume of the cuboid ?",
        "options": [
            "100%",
            "99%",
            "98%",
            "50%"
        ],
        "answer": "98%"
    },
    {
        "question": "&#x20B9; 9400 is distributed among P, Q, R in such a way that if &#x20B9; 93, &#x20B9; 24, &#x20B9; 55 are deducted from their respective shares, then they have money in the ratio 3 : 4 : 5. What is the share of P ?",
        "options": [
            "&#x20B9; 2307",
            "&#x20B9; 2376",
            "&#x20B9; 2508",
            "&#x20B9; 2896"
        ],
        "answer": "&#x20B9; 2307"
    },
    {
        "question": "If P<sup>2</sup> varies as R and Q<sup>2</sup> varies as R, (P &ne; Q), then which of the following are correct ?<br/><br/>1. P<sup>2</sup> + Q<sup>2</sup> varies as R.<br/>2. PQ varies as R.<br/>3. P<sup>2</sup> &minus; Q<sup>2</sup> varies as R.<br/><br/>Select the correct answer using the code given below :",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        "answer": "1, 2 and 3"
    },
    {
        "question": "p number of men can finish a piece of work in q days. If there are 50% more men, then the work will be finished 12 days earlier. What is the value of q ?",
        "options": [
            "48",
            "40",
            "36",
            "Cannot be determined due to insufficient data"
        ],
        "answer": "36"
    },
    {
        "question": "What is the minimum value of <sup>(a<sup>2</sup> + 3a + 1)</sup>&frasl;<sub>a</sub> &times; <sup>(b<sup>2</sup> + 3b + 1)</sup>&frasl;<sub>b</sub> for a, b &gt; 0 ?",
        "options": [
            "1",
            "9",
            "16",
            "25"
        ],
        "answer": "25"
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next ten (10) items that follow:<br/>Each item contains a Question followed by two Statements. Answer each item using the following instructions:<br/><br/>Let a, b, c and d be positive integers.<br/><br/><i>Question :</i> Which one of a, b, c, d is closest to the product abcd ?<br/><br/><i>Statement-I :</i> a &gt; b &gt; c<br/><i>Statement-II :</i> c is not the smallest.",
        "options": [
            "If the Question can be answered by one of the Statements alone, but not by the other.",
            "If the Question can be answered by either Statement alone.",
            "If the Question can be answered by using both the Statements together, but cannot be answered by using either Statement alone.",
            "If the Question cannot be answered even by using both Statements together."
        ],
        "answer": "If the Question can be answered by using both the Statements together, but cannot be answered by using either Statement alone."
    },
    {
        "question": "Let mn = k, where m and n are prime numbers and k is an even number.<br/><br/><i>Question :</i> What is the value of mn - n + 1?<br/><br/><i>Statement-I :</i> m &gt; n<br/><i>Statement-II :</i> One of the numbers is 2.",
        "options": [
            "If the Question can be answered by one of the Statements alone, but not by the other.",
            "If the Question can be answered by either Statement alone.",
            "If the Question can be answered by using both the Statements together, but cannot be answered by using either Statement alone.",
            "If the Question cannot be answered even by using both Statements together."
        ],
        "answer": "If the Question cannot be answered even by using both Statements together."
    },
    {
        "question": "<i>Question :</i> If p is a positive integer, then what is the remainder when p<sup>n</sup> is divided by p + 1 ?<br/><br/><i>Statement-I :</i> n is even.<br/><i>Statement-II :</i> p is even.",
        "options": [
            "If the Question can be answered by one of the Statements alone, but not by the other.",
            "If the Question can be answered by either Statement alone.",
            "If the Question can be answered by using both the Statements together, but cannot be answered by using either Statement alone.",
            "If the Question cannot be answered even by using both Statements together."
        ],
        "answer": "If the Question can be answered by one of the Statements alone, but not by the other."
    },
    {
        "question": "<i>Question :</i> Is xy positive ?<br/><br/><i>Statement-I :</i> x = &radic;[3](- 0&middot;19683)<br/><i>Statement-II :</i> y = &radic;[3](x)",
        "options": [
            "If the Question can be answered by one of the Statements alone, but not by the other.",
            "If the Question can be answered by either Statement alone.",
            "If the Question can be answered by using both the Statements together, but cannot be answered by using either Statement alone.",
            "If the Question cannot be answered even by using both Statements together."
        ],
        "answer": "If the Question can be answered by using both the Statements together, but cannot be answered by using either Statement alone."
    },
    {
        "question": "Let a, b and c be the sides of a triangle ABC.<br/><br/><i>Question :</i> Is the triangle equilateral ?<br/><br/><i>Statement-I :</i> a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> = (ab + bc + ca)<br/><i>Statement-II :</i> 3a<sup>2</sup> + 3b<sup>2</sup> + 4c<sup>2</sup> = 2ab + 4bc + 4ca",
        "options": [
            "If the Question can be answered by one of the Statements alone, but not by the other.",
            "If the Question can be answered by either Statement alone.",
            "If the Question can be answered by using both the Statements together, but cannot be answered by using either Statement alone.",
            "If the Question cannot be answered even by using both Statements together."
        ],
        "answer": "If the Question can be answered by either Statement alone."
    },
    {
        "question": "Area of a rectangle with length x and breadth y is P and area of a parallelogram (which is strictly not a rectangle) with adjacent sides of length x and y is Q.<br/><br/><i>Question :</i> Is P &gt; Q ?<br/><br/><i>Statement-I :</i> x : y = 2 : 1<br/><i>Statement-II :</i> The angle between the two adjacent sides of the parallelogram is 60&deg;.",
        "options": [
            "If the Question can be answered by one of the Statements alone, but not by the other.",
            "If the Question can be answered by either Statement alone.",
            "If the Question can be answered by using both the Statements together, but cannot be answered by using either Statement alone.",
            "If the Question cannot be answered even by using both Statements together."
        ],
        "answer": "If the Question can be answered by either Statement alone."
    },
    {
        "question": "A circle touches all the four sides AB, BC, CD, DA of a quadrilateral ABCD.<br/><br/><i>Question :</i> What is the perimeter of the quadrilateral ?<br/><br/><i>Statement-I :</i> AB + DC = 10 cm<br/><i>Statement-II :</i> AD + BC = 10 cm",
        "options": [
            "If the Question can be answered by one of the Statements alone, but not by the other.",
            "If the Question can be answered by either Statement alone.",
            "If the Question can be answered by using both the Statements together, but cannot be answered by using either Statement alone.",
            "If the Question cannot be answered even by using both Statements together."
        ],
        "answer": "If the Question can be answered by either Statement alone."
    },
    {
        "question": "<i>Question :</i> What is the ratio of the lengths of diagonals of a rhombus ?<br/><br/><i>Statement-I :</i> One diagonal of the rhombus is equal to its side.<br/><i>Statement-II :</i> The longer diagonal of the rhombus is equal to &radic;3 times its side.",
        "options": [
            "If the Question can be answered by one of the Statements alone, but not by the other.",
            "If the Question can be answered by either Statement alone.",
            "If the Question can be answered by using both the Statements together, but cannot be answered by using either Statement alone.",
            "If the Question cannot be answered even by using both Statements together."
        ],
        "answer": "If the Question can be answered by either Statement alone."
    },
    {
        "question": "The chord of a circle of radius R touches at a point on the circumference of a concentric circle of radius r. The length of the chord is 24 units.<br/><br/><i>Question :</i> What are the values of r and R ?<br/><br/><i>Statement-I :</i> r is an integer.<br/><i>Statement-II :</i> R is an integer.",
        "options": [
            "If the Question can be answered by one of the Statements alone, but not by the other.",
            "If the Question can be answered by either Statement alone.",
            "If the Question can be answered by using both the Statements together, but cannot be answered by using either Statement alone.",
            "If the Question cannot be answered even by using both Statements together."
        ],
        "answer": "If the Question cannot be answered even by using both Statements together."
    },
    {
        "question": "P, Q, R, S are the mid-points of sides AB, BC, CD, DA respectively of a quadrilateral ABCD.<br/><br/><i>Question :</i> What is the difference in the area of the quadrilateral ABCD and the area of the quadrilateral PQRS ?<br/><br/><i>Statement-I :</i> Area of the quadrilateral ABCD is 100 square unit.<br/><i>Statement-II :</i> Area of the quadrilateral PQRS is 50 square unit.",
        "options": [
            "If the Question can be answered by one of the Statements alone, but not by the other.",
            "If the Question can be answered by either Statement alone.",
            "If the Question can be answered by using both the Statements together, but cannot be answered by using either Statement alone.",
            "If the Question cannot be answered even by using both Statements together."
        ],
        "answer": "If the Question can be answered by either Statement alone."
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next two (02) items that follow:<br/>In a pie-diagram (with radius 7 cm), the central angles of the sectors are in the ratio 2 : 3 : 7 : 5 : 1.<br/>(Take &pi; = 22/7)<br/><br/>If P is the area of the smallest sector and Q is the area of the largest sector, then what is P + Q equal to ?",
        "options": [
            "88/3 square cm",
            "77/3 square cm",
            "149/6 square cm",
            "616/9 square cm"
        ],
        "answer": "616/9 square cm"
    },
    {
        "question": "If p is the perimeter of the smallest sector, then what is the value of 9p ?",
        "options": [
            "142 cm",
            "148 cm",
            "156 cm",
            "221 cm"
        ],
        "answer": "148 cm"
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next three (03) items that follow:<br/>Two trains A and B started from stations P and Q respectively towards each other. Train A started at 7 p.m. at a speed of 60 km/hr and train B started at 4 a.m. (next day) at a speed of 90 km/hr. The distance between the two stations P and Q is 800 km.<br/><br/>How far from station Q will the two trains meet ?",
        "options": [
            "104 km",
            "144 km",
            "156 km",
            "504 km"
        ],
        "answer": "156 km"
    },
    {
        "question": "At what time will the two trains meet ?",
        "options": [
            "5:28 a.m.",
            "5:44 a.m.",
            "4:56 a.m.",
            "6:24 a.m."
        ],
        "answer": "5:44 a.m."
    },
    {
        "question": "If the lengths of the two trains A and B are 400 m and 500 m respectively, then what is the time taken by them to cross each other ?",
        "options": [
            "21&middot;6 seconds",
            "18&middot;2 seconds",
            "17&middot;4 seconds",
            "15&middot;4 seconds"
        ],
        "answer": "21&middot;6 seconds"
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next three (03) items that follow:<br/>A triangle CEF is drawn inside a square ABCD. Given : CF = 8 cm, EF = 6 cm and CE = 10 cm. Angle &alpha; is &ang;FCB and angle &beta; is &ang;AEF.<br/><br/>What is the area of the square ?",
        "options": [
            "512/17 square cm",
            "625/13 square cm",
            "1024/17 square cm",
            "1296/13 square cm<br/><br/><img src=\"/images/maths_2024_I_q76_78.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "1024/17 square cm"
    },
    {
        "question": "What is tan &alpha; + tan &beta; equal to ?",
        "options": [
            "13/16",
            "15/16",
            "17/16",
            "17/4<br/><br/><img src=\"/images/maths_2024_I_q76_78.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "17/4"
    },
    {
        "question": "What is the area of triangle CDE ?",
        "options": [
            "416/17 square cm",
            "312/13 square cm",
            "208/17 square cm",
            "156/13 square cm<br/><br/><img src=\"/images/maths_2024_I_q76_78.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "416/17 square cm"
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next two (02) items that follow:<br/>ABCD is a circle with centre O and taking OC as a diameter, a smaller circle is drawn. Let OB = 7 cm. (Use &pi; = 22/7)<br/><br/>What is the area of the shaded region (comprising the smaller circle on OC and the segments bounded by chords AB, AD and arcs AB, AD) ?",
        "options": [
            "38&middot;5 square cm",
            "48 square cm",
            "52&middot;5 square cm",
            "66&middot;5 square cm<br/><br/><img src=\"/images/maths_2024_I_q79_80.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "66&middot;5 square cm"
    },
    {
        "question": "What is the ratio of the area of the shaded region to the area of the non-shaded region ?",
        "options": [
            "19/25",
            "18/25",
            "17/25",
            "16/25<br/><br/><img src=\"/images/maths_2024_I_q79_80.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "19/25"
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next two (02) items that follow:<br/>Let two parallel line segments PQ = 5 cm and RS = 3 cm be perpendicular to a horizontal line AB. The point of intersection of PS and QR is M and MN is perpendicular to QS.<br/><br/>What is the length of MN ?",
        "options": [
            "3/8 cm",
            "5/8 cm",
            "9/8 cm",
            "15/8 cm<br/><br/><img src=\"/images/maths_2024_I_q81_82.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "15/8 cm"
    },
    {
        "question": "What is the ratio of the area of the quadrilateral PQNM to the area of the quadrilateral RSNM ?",
        "options": [
            "200/117",
            "212/117",
            "275/117",
            "250/117<br/><br/><img src=\"/images/maths_2024_I_q81_82.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "275/117"
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next three (03) items that follow:<br/>The Pie-Chart-I shows the people migrating to Delhi from different Indian States (P=40%, Q=30%, R=10%, S=20%). Pie-Chart-II indicates the different age groups A=50%, B=15%, C=15%, D=20% of these migrating people for each State.<br/><br/>If the people coming from a particular State belonging to S are 15% (of total migrating people) and 24,000 in number, then what is the total number of migrating people belonging to the age group B ?",
        "options": [
            "1&middot;2 lac",
            "1&middot;25 lac",
            "1&middot;30 lac",
            "1&middot;50 lac<br/><br/><img src=\"/images/maths_2024_I_q83_85.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "1&middot;2 lac"
    },
    {
        "question": "What is the maximum of differences between the number of people coming from different groups P, Q, R and S ?",
        "options": [
            "1&middot;6 lac",
            "1&middot;8 lac",
            "2&middot;4 lac",
            "2&middot;6 lac<br/><br/><img src=\"/images/maths_2024_I_q83_85.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "2&middot;4 lac"
    },
    {
        "question": "What is the difference between number of people coming from R having age group A and those coming from Q having age group D ?",
        "options": [
            "6,000",
            "8,000",
            "12,000",
            "18,000<br/><br/><img src=\"/images/maths_2024_I_q83_85.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "8,000"
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next two (02) items that follow:<br/>Consider two identical rectangles ABCD and BEDF. Let AB = 1 cm and BC = 2 cm. They share the diagonal BD.<br/><br/>What is the area of the overlapping region ?",
        "options": [
            "8/5 square cm",
            "5/4 square cm",
            "4/5 square cm",
            "3/4 square cm<br/><br/><img src=\"/images/maths_2024_I_q86_87.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "5/4 square cm"
    },
    {
        "question": "What is the area of the non-overlapping region ?",
        "options": [
            "3/4 square cm",
            "11/4 square cm",
            "3/2 square cm",
            "5/4 square cm<br/><br/><img src=\"/images/maths_2024_I_q86_87.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "3/2 square cm"
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next three (03) items that follow:<br/>ABC is a right-angled triangle with &ang;ABC = 90&deg;. The centre of the incircle of the given triangle is at O, whose radius is 2 cm. Two more circles with centres at O<sub>1</sub> and O<sub>2</sub>, touch this circle and the two sides. Further, MA : MC = 2 : 3 (where M is the point of contact on AC).<br/><br/>What is AB + BC equal to ?",
        "options": [
            "10 cm",
            "12 cm",
            "13 cm",
            "14 cm<br/><br/><img src=\"/images/maths_2024_I_q88_90.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "14 cm"
    },
    {
        "question": "What is the radius of the circle with centre at O<sub>1</sub> ?",
        "options": [
            "4 - &radic;5",
            "1 + &radic;5",
            "2 + &radic;5",
            "3 - &radic;5<br/><br/><img src=\"/images/maths_2024_I_q88_90.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "3 - &radic;5"
    },
    {
        "question": "What is the radius of the circle with centre at O<sub>2</sub> ?",
        "options": [
            "5 - &radic;10",
            "1 + 2&radic;5",
            "(22 - 4&radic;10) / 9",
            "(22 - 2&radic;10) / 9<br/><br/><img src=\"/images/maths_2024_I_q88_90.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "(22 - 4&radic;10) / 9"
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next three (03) items that follow:<br/>Consider two identical semicircles and one circle inscribed in a rectangle of length 10 cm. The semicircles are on the left and right sides. (Take &pi; = 3&middot;14 and &radic;2 = 1&middot;4).<br/><br/>What is the area of triangle EOF (where O is the top center and E, F are intersection points) ?",
        "options": [
            "12&middot;5 &radic;3 square cm",
            "6&middot;25 &radic;3 square cm",
            "12&middot;5 square cm",
            "6&middot;25 square cm<br/><br/><img src=\"/images/maths_2024_I_q91_93.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "12&middot;5 square cm"
    },
    {
        "question": "What is the area of trapezium AEFB ?",
        "options": [
            "30 square cm",
            "25 square cm",
            "20 square cm",
            "18&middot;75 square cm<br/><br/><img src=\"/images/maths_2024_I_q91_93.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "30 square cm"
    },
    {
        "question": "What is the area of the shaded region (lens formed by intersection of semicircles) ?",
        "options": [
            "14&middot;75 square cm",
            "14&middot;25 square cm",
            "7&middot;225 square cm",
            "7&middot;625 square cm<br/><br/><img src=\"/images/maths_2024_I_q91_93.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "14&middot;25 square cm"
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next two (02) items that follow:<br/>Consider a circle of area 9&pi; square unit and an equilateral triangle ABC as shown in the figure given below. The circle passes through A and is tangent to BC at its midpoint.<br/><br/>What is the length of the side of the triangle ABC ?",
        "options": [
            "2&radic;3 unit",
            "4&radic;3 unit",
            "6&radic;3 unit",
            "8&radic;3 unit<br/><br/><img src=\"/images/maths_2024_I_q94_95.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "4&radic;3 unit"
    },
    {
        "question": "What is the area of the shaded region ?",
        "options": [
            "6(&pi; + &radic;3 ) square unit",
            "3(&pi; + 2&radic;3 ) square unit",
            "1&middot;5(3&pi; + 8&radic;3 ) square unit",
            "6(&pi; + 2&radic;3 ) square unit<br/><br/><img src=\"/images/maths_2024_I_q94_95.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "3(&pi; + 2&radic;3 ) square unit"
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next three (03) items that follow:<br/>Two circles with centres at O<sub>1</sub> and O<sub>2</sub> touching each other are placed inside a rectangle of sides 9 cm and 8 cm. The larger circle O<sub>1</sub> touches three sides of the rectangle, and the smaller circle O<sub>2</sub> touches two sides and the larger circle.<br/><br/>What is the sum of the areas of the two circles ?",
        "options": [
            "17&pi; square unit",
            "16&middot;75&pi; square unit",
            "16&middot;5&pi; square unit",
            "16&middot;25&pi; square unit<br/><br/><img src=\"/images/maths_2024_I_q96_97.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "17&pi; square unit"
    },
    {
        "question": "Which one of the following is correct in respect of angle &theta; (where &theta; is the angle between the vertical line through O<sub>1</sub> and the line O<sub>1</sub>O<sub>2</sub>) ?",
        "options": [
            "0 &lt; &theta; &lt; 30&deg;",
            "30&deg; &lt; &theta; &lt; 45&deg;",
            "45&deg; &lt; &theta; &lt; 60&deg;",
            "60&deg; &lt; &theta; &lt; 90&deg;<br/><br/><img src=\"/images/maths_2024_I_q96_97.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "45&deg; &lt; &theta; &lt; 60&deg;"
    },
    {
        "question": "What is the area of the shaded region (bounded by the two circles and the bottom side of the rectangle) ?",
        "options": [
            "<sup>(240 &minus; 10&pi; &minus; &pi;&theta;)</sup>&frasl;<sub>24</sub> square unit",
            "<sup>(240 &minus; 6&pi; &minus; &pi;&theta;)</sup>&frasl;<sub>24</sub> square unit",
            "<sup>(120 &minus; 12&pi; &minus; &pi;&theta;)</sup>&frasl;<sub>24</sub> square unit",
            "<sup>(240 &minus; 12&pi; &minus; &pi;&theta;)</sup>&frasl;<sub>24</sub> square unit<br/><br/><img src=\"/images/maths_2024_I_q96_97.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "<sup>(240 &minus; 12&pi; &minus; &pi;&theta;)</sup>&frasl;<sub>24</sub> square unit"
    },
    {
        "question": "<b>Directions:</b> Consider the following for the next two (02) items that follow:<br/>Let ABCD be the diameter of a circle of radius 6 cm. The lengths AB, BC and CD are equal. Semi-circles are drawn with AB and BD as diameters. The shaded region lies in the lower half, bounded by the large semicircle on AD and the two smaller semicircles.<br/><br/>What is the ratio of the area of the shaded region to that of the non-shaded region ?",
        "options": [
            "2 : 7",
            "2 : 5",
            "3 : 5",
            "5 : 8<br/><br/><img src=\"/images/maths_2024_I_q99_100.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "2 : 7"
    },
    {
        "question": "What is the perimeter of the shaded region ?",
        "options": [
            "24&pi; cm",
            "18&pi; cm",
            "15&pi; cm",
            "12&pi; cm<br/><br/><img src=\"/images/maths_2024_I_q99_100.png\" alt=\"Diagram\" style=\"max-width: 100%; height: auto; margin: 1rem auto; display: block;\" />"
        ],
        "answer": "12&pi; cm"
    }],
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
  ],
  "2024-II": [
    {
          "question": "A real number <i>x</i> is such that the sum of the number and four times its square is the least. What is that number ?",
          "options": [
                "-0.625",
                "-0.125",
                "0.125",
                "1"
          ],
          "answer": "-0.125"
    },
    {
          "question": "The difference of the square of two natural numbers <i>m</i> and <i>n</i> (<i>m</i> &gt; <i>n</i>) is 72. How many pairs of natural numbers will satisfy ?",
          "options": [
                "3",
                "4",
                "5",
                "6"
          ],
          "answer": "3"
    },
    {
          "question": "Let <i>N</i> be a 5-digit number. When <i>N</i> is divided by 6, 12, 15, 24 it leaves respectively 2, 8, 11, 20 as remainders. What is the greatest value of <i>N</i> ?",
          "options": [
                "99960",
                "99956",
                "99950",
                "99946"
          ],
          "answer": "99956"
    },
    {
          "question": "What is the remainder when 111<sup>222</sup> + 222<sup>333</sup> + 333<sup>444</sup> is divided by 5 ?",
          "options": [
                "1",
                "2",
                "3",
                "4"
          ],
          "answer": "4"
    },
    {
          "question": "What are the last three digits in the multiplication of 4321012345 &times; 98766789 ?",
          "options": [
                "1, 0, 5",
                "2, 0, 5",
                "2, 1, 5",
                "3, 0, 5"
          ],
          "answer": "2, 0, 5"
    },
    {
          "question": "<i>p</i> varies directly as (<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>). When <i>x</i> = 1, <i>y</i> = 2, <i>z</i> = 3, then <i>p</i> = 70. What is the value of <i>p</i> when <i>x</i> = &minus;1, <i>y</i> = 1, <i>z</i> = 5 ?",
          "options": [
                "100",
                "125",
                "135",
                "140"
          ],
          "answer": "135"
    },
    {
          "question": "Let <i>N</i> be the least positive multiple of 11 that leaves a remainder of 5 when divided by 6, 12, 15, 18. Which one of the following is correct ?",
          "options": [
                "900 &lt; <i>N</i> &lt; 1000",
                "1000 &lt; <i>N</i> &lt; 1100",
                "1100 &lt; <i>N</i> &lt; 1200",
                "1200 &lt; <i>N</i> &lt; 1300"
          ],
          "answer": "1200 &lt; <i>N</i> &lt; 1300"
    },
    {
          "question": "What is <sup>1</sup>/<sub>(&radic;10 + &radic;9)</sub> + <sup>1</sup>/<sub>(&radic;11 + &radic;10)</sub> + <sup>1</sup>/<sub>(&radic;12 + &radic;11)</sub> + ... + <sup>1</sup>/<sub>(&radic;196 + &radic;195)</sub> equal to ?",
          "options": [
                "17",
                "14",
                "11",
                "10"
          ],
          "answer": "11"
    },
    {
          "question": "Train <i>X</i> crosses a man standing on the platform in 24 seconds and train <i>Y</i> crosses a man standing on the platform in 18 seconds. They cross each other while running in opposite directions in 20 seconds. What is the ratio of speed of <i>X</i> to speed of <i>Y</i> ?",
          "options": [
                "1 : 2",
                "2 : 3",
                "1 : 3",
                "3 : 4"
          ],
          "answer": "1 : 2"
    },
    {
          "question": "Let <i>p</i>, <i>q</i> be the roots of the equation <i>x</i><sup>2</sup> + <i>mx</i> &minus; <i>n</i> = 0 and <i>m</i>, <i>n</i> be the roots of the equation <i>x</i><sup>2</sup> + <i>px</i> &minus; <i>q</i> = 0 (<i>m</i>, <i>n</i>, <i>p</i>, <i>q</i> are non-zero numbers). Which of the following statements is/are correct ?<br/><br/>I. <i>m</i>(<i>m</i> + <i>n</i>) = &minus;1<br/><br/>II. <i>p</i> + <i>q</i> = 1<br/><br/>Select the answer using the code given below :",
          "options": [
                "I only",
                "II only",
                "Both I and II",
                "Neither I nor II"
          ],
          "answer": "Both I and II"
    },
    {
          "question": "What is the maximum value of 8sin<i>&theta;</i> &minus; 4sin<sup>2</sup><i>&theta;</i> ?",
          "options": [
                "3",
                "4",
                "8",
                "12"
          ],
          "answer": "4"
    },
    {
          "question": "What is (1 + tan<i>&alpha;</i> tan<i>&beta;</i>)<sup>2</sup> + (tan<i>&alpha;</i> &minus; tan<i>&beta;</i>)<sup>2</sup> equal to ?",
          "options": [
                "tan<sup>2</sup><i>&alpha;</i> tan<sup>2</sup><i>&beta;</i>",
                "sec<sup>2</sup><i>&alpha;</i> sec<sup>2</sup><i>&beta;</i>",
                "tan<sup>2</sup><i>&alpha;</i> cot<sup>2</sup><i>&beta;</i>",
                "sec<sup>2</sup><i>&alpha;</i> tan<sup>2</sup><i>&beta;</i>"
          ],
          "answer": "sec<sup>2</sup><i>&alpha;</i> sec<sup>2</sup><i>&beta;</i>"
    },
    {
          "question": "Consider the following statements :<br/><br/>I. tan 50&deg; &minus; cot 50&deg; is positive<br/><br/>II. cot 25&deg; &minus; tan 25&deg; is negative<br/><br/>Which of the statements is/are correct ?",
          "options": [
                "I only",
                "II only",
                "Both I and II",
                "Neither I nor II"
          ],
          "answer": "I only"
    },
    {
          "question": "If 0 &le; (<i>&alpha;</i> &minus; <i>&beta;</i>) &le; (<i>&alpha;</i> + <i>&beta;</i>) &le; <i>&pi;</i>/2, tan(<i>&alpha;</i> + <i>&beta;</i>) = &radic;3 and tan(<i>&alpha;</i> &minus; <i>&beta;</i>) = 1/&radic;3, then what is tan <i>&alpha;</i> &middot; cot 2<i>&beta;</i> equal to ?",
          "options": [
                "1",
                "&radic;2",
                "&radic;3",
                "1/&radic;3"
          ],
          "answer": "&radic;3"
    },
    {
          "question": "What is the value of sin<sup>2</sup><i>&theta;</i> cos<sup>2</sup><i>&theta;</i> (sec<sup>2</sup><i>&theta;</i> + cosec<sup>2</sup><i>&theta;</i>) equal to ?",
          "options": [
                "0",
                "1",
                "2",
                "4"
          ],
          "answer": "1"
    },
    {
          "question": "If 64<sup>sin<sup>2</sup><i>&theta;</i></sup> + 64<sup>cos<sup>2</sup><i>&theta;</i></sup> = 16 where 0 &le; <i>&theta;</i> &le; <i>&pi;</i>/2, then what is the value of tan <i>&theta;</i> + cot <i>&theta;</i> ?",
          "options": [
                "1",
                "2",
                "3",
                "4"
          ],
          "answer": "2"
    },
    {
          "question": "If cosec <i>&theta;</i> &minus; cot <i>&theta;</i> = <i>m</i> and sec <i>&theta;</i> &minus; tan <i>&theta;</i> = <i>n</i>, then what is cosec <i>&theta;</i> + sec <i>&theta;</i> equal to ?",
          "options": [
                "<sup>1</sup>/<sub>2</sub>(<i>m</i> + <i>n</i> + <sup>1</sup>/<sub><i>m</i></sub> + <sup>1</sup>/<sub><i>n</i></sub>)",
                "(<i>m</i> + <i>n</i> + <sup>1</sup>/<sub><i>m</i></sub> + <sup>1</sup>/<sub><i>n</i></sub>)",
                "<sup>1</sup>/<sub>2</sub>(<i>m</i> + <i>n</i> &minus; <sup>1</sup>/<sub><i>m</i></sub> &minus; <sup>1</sup>/<sub><i>n</i></sub>)",
                "(<i>m</i> + <i>n</i> &minus; <sup>1</sup>/<sub><i>m</i></sub> &minus; <sup>1</sup>/<sub><i>n</i></sub>)"
          ],
          "answer": "<sup>1</sup>/<sub>2</sub>(<i>m</i> + <i>n</i> + <sup>1</sup>/<sub><i>m</i></sub> + <sup>1</sup>/<sub><i>n</i></sub>)"
    },
    {
          "question": "From a point <i>X</i> on a bridge across a river, the angles of depression of two points <i>P</i> and <i>Q</i> on the banks on opposite side of the river are <i>&alpha;</i> and <i>&beta;</i> respectively. If the point <i>X</i> is at a height <i>h</i> above the surface of the river, what is the width of the river if <i>&alpha;</i> and <i>&beta;</i> are complementary ?",
          "options": [
                "2<i>h</i>(tan <i>&alpha;</i> + cot <i>&alpha;</i>)",
                "<i>h</i> tan <i>&alpha;</i> &middot; tan <i>&beta;</i>",
                "<i>h</i> cot <i>&alpha;</i> &middot; cot <i>&beta;</i>",
                "<i>h</i> sec <i>&alpha;</i> &middot; cosec <i>&alpha;</i>"
          ],
          "answer": "<i>h</i> sec <i>&alpha;</i> &middot; cosec <i>&alpha;</i>"
    },
    {
          "question": "In a triangle <i>ABC</i>, &ang;<i>ABC</i> = 60&deg; and <i>AD</i> is the altitude. If <i>AB</i> = 6 cm and <i>BC</i> = 8 cm, then what is the area of the triangle ?",
          "options": [
                "12 square cm",
                "12&radic;3 square cm",
                "24 square cm",
                "24&radic;3 square cm"
          ],
          "answer": "12&radic;3 square cm"
    },
    {
          "question": "If <i>p</i> and <i>q</i> are the roots of the equation <i>x</i><sup>2</sup> &minus; (sin<sup>2</sup><i>&theta;</i>)<i>x</i> &minus; cos<sup>2</sup><i>&theta;</i> = 0, then what is the minimum value of <i>p</i><sup>2</sup> + <i>q</i><sup>2</sup> ?",
          "options": [
                "<sup>1</sup>/<sub>2</sub>",
                "1",
                "<sup>3</sup>/<sub>2</sub>",
                "2"
          ],
          "answer": "1"
    },
    {
          "question": "The arithmetic mean of <i>n</i> numbers is <i>M</i>. If the sum of first (<i>n</i> &minus; 1) terms is <i>k</i>, then what is the <i>n</i>th number ?",
          "options": [
                "<i>M</i> &minus; <i>k</i>",
                "<i>nM</i> &minus; <i>k</i>",
                "<i>n</i>(<i>M</i> &minus; <i>k</i>)",
                "<i>M</i> &minus; <i>nk</i>"
          ],
          "answer": "<i>nM</i> &minus; <i>k</i>"
    },
    {
          "question": "What is the geometric mean of 3, 9, 27, 81, 243, 729, 2187 ?",
          "options": [
                "81",
                "105",
                "144",
                "243"
          ],
          "answer": "81"
    },
    {
          "question": "A person purchases one kg of tea powder from each of the four places <i>A</i>, <i>B</i>, <i>C</i>, <i>D</i> at the rate of ₹ 1000 per 1 kg, 2 kg, 4 kg, 5 kg. If on an average he purchased <i>x</i> kg of tea powder per ₹ 1000, then what is the approximate value of <i>x</i> ?",
          "options": [
                "1.95",
                "2.00",
                "2.05",
                "2.10"
          ],
          "answer": "2.05"
    },
    {
          "question": "What is the sum of the largest and the smallest 4-digit numbers made by using single digit prime numbers (without repetition) ?",
          "options": [
                "7887",
                "7997",
                "8998",
                "9889"
          ],
          "answer": "9889"
    },
    {
          "question": "What is the remainder when 3<sup>255</sup> is divided by 28 ?",
          "options": [
                "1",
                "11",
                "24",
                "27"
          ],
          "answer": "27"
    },
    {
          "question": "What is the value of <i>x</i> (0 &le; <i>x</i> &le; 8) if (100<sup>97</sup> + 100<sup>54</sup> + <i>x</i> + 1) leaves a remainder 0 when divided by 9 ?",
          "options": [
                "8",
                "6",
                "4",
                "1"
          ],
          "answer": "6"
    },
    {
          "question": "In a triangle <i>ABC</i>, <i>D</i> is a point on <i>BC</i>. If <i>AB</i> &middot; <i>DC</i> = <i>AC</i> &middot; <i>BD</i>, &ang;<i>BAD</i> = <i>&alpha;</i> and &ang;<i>CAD</i> = <i>&beta;</i> then which one of the following is correct ?",
          "options": [
                "<i>&alpha;</i> = <i>&beta;</i>",
                "<i>&alpha;</i> = 2<i>&beta;</i>",
                "2<i>&alpha;</i> = <i>&beta;</i>",
                "2<i>&alpha;</i> = 3<i>&beta;</i>"
          ],
          "answer": "<i>&alpha;</i> = <i>&beta;</i>"
    },
    {
          "question": "Let <i>N</i> = 12345678<i>AB</i> be a 10-digit number, where <i>A</i>, <i>B</i> are digits. If <i>N</i> is divisible by 9, then which of the following statements is/are correct ?<br/><br/>I. (<i>A</i> + <i>B</i>) is divisible by 9<br/><br/>II. If <i>A</i> is odd, then <i>B</i> is odd<br/><br/>Select the answer using the code given below :",
          "options": [
                "I only",
                "II only",
                "Both I and II",
                "Neither I nor II"
          ],
          "answer": "I only"
    },
    {
          "question": "If <i>x</i><sup>3</sup> + <sup>1</sup>/<sub><i>x</i><sup>3</sup></sub> = <sup>65</sup>/<sub>8</sub> and <i>y</i><sup>3</sup> + <sup>1</sup>/<sub><i>y</i><sup>3</sup></sub> = <sup>730</sup>/<sub>27</sub>, then which one of the following is a value of <i>xy</i> ?",
          "options": [
                "3",
                "6",
                "8",
                "9"
          ],
          "answer": "6"
    },
    {
          "question": "If 11<i>x</i> + 5<i>y</i> is a prime number where <i>x</i>, <i>y</i> are natural numbers then what is the minimum value of (<i>x</i> + <i>y</i>) ?",
          "options": [
                "3",
                "4",
                "5",
                "6"
          ],
          "answer": "5"
    },
    {
          "question": "A 4-digit number <i>N</i> has exactly 15 distinct divisors. What is the total number of distinct divisors of <i>N</i><sup>2</sup> ?",
          "options": [
                "16",
                "30",
                "45",
                "225"
          ],
          "answer": "45"
    },
    {
          "question": "If <i>p</i>, <i>q</i> and <i>r</i> are the lengths (in cm) of the sides of a right-angled triangle, then (<i>p</i> &minus; <i>q</i> &minus; <i>r</i>)(<i>q</i> &minus; <i>r</i> &minus; <i>p</i>)(<i>r</i> &minus; <i>p</i> &minus; <i>q</i>) is always",
          "options": [
                "Positive only",
                "Negative only",
                "Non-positive only",
                "Non-negative only"
          ],
          "answer": "Negative only"
    },
    {
          "question": "What is the minimum value of <sup>(<i>a</i><sup>8</sup> + <i>a</i><sup>4</sup> + 1)(<i>b</i><sup>8</sup> + <i>b</i><sup>4</sup> + 1)</sup>/<sub><i>a</i><sup>4</sup><i>b</i><sup>4</sup></sub> , where <i>a</i> &gt; 0, <i>b</i> &gt; 0 ?",
          "options": [
                "1",
                "4",
                "9",
                "16"
          ],
          "answer": "9"
    }
  ,
    {
          "question": "In a class containing 200 students, <i>n</i> students prefer both tea and coffee; 2<i>n</i> students prefer coffee, 3<i>n</i> students prefer tea; 4<i>n</i> students prefer neither tea nor coffee. What is the value of <i>n</i> ?",
          "options": [
                "20",
                "25",
                "30",
                "35"
          ],
          "answer": "25"
    },
    {
          "question": "Let <i>ABC</i> be a triangle with area 36 square cm. If <i>AB</i> = 9 cm, <i>BC</i> = 12 cm and &ang;<i>ABC</i> = <i>&theta;</i>, then what is cos <i>&theta;</i> equal to ?",
          "options": [
                "&radic;5 / 3",
                "&radic;5 / 4",
                "1 / 3",
                "2 / 3"
          ],
          "answer": "&radic;5 / 3"
    },
    {
          "question": "Let <i>n</i> be a natural number. The HCF of <i>n</i>, <i>n</i> + 10 is 10. If the LCM is <i>x</i> (a 2-digit number), then how many values of <i>x</i> are possible ?",
          "options": [
                "Only one",
                "Only two",
                "Only three",
                "More than three"
          ],
          "answer": "Only two"
    },
    {
          "question": "What is HCF of <i>a</i><sup>4</sup> + 2<i>a</i><sup>3</sup> + 3<i>a</i><sup>2</sup> + 2<i>a</i> + 1 and <i>a</i><sup>6</sup> &minus; 2<i>a</i><sup>3</sup> + 1 ?",
          "options": [
                "<i>a</i><sup>3</sup> + 3<i>a</i><sup>2</sup> + 2<i>a</i> + 1",
                "<i>a</i><sup>3</sup> + <i>a</i><sup>2</sup> + <i>a</i> + 1",
                "(<i>a</i><sup>2</sup> + <i>a</i> + 1)<sup>2</sup>",
                "(<i>a</i><sup>2</sup> &minus; <i>a</i> + 1)<sup>2</sup>"
          ],
          "answer": "(<i>a</i><sup>2</sup> + <i>a</i> + 1)<sup>2</sup>"
    },
    {
          "question": "If the roots of the equation <i>x</i><sup>2</sup> &minus; (<i>k</i> &minus; 2)<i>x</i> + (<i>k</i> + 1) = 0 are equal, then what are the values of <i>k</i> ?",
          "options": [
                "0, 4",
                "0, 8",
                "4, 4",
                "2, 6"
          ],
          "answer": "0, 8"
    },
    {
          "question": "What is (<sup>(cos <i>&theta;</i> &minus; sin <i>&theta;</i> + 1)</sup>/<sub>(cos <i>&theta;</i> + sin <i>&theta;</i> &minus; 1)</sub>)(cot <i>&theta;</i> &minus; cosec <i>&theta;</i>) equal to ?",
          "options": [
                "&minus;1",
                "0",
                "1",
                "2"
          ],
          "answer": "&minus;1"
    },
    {
          "question": "What is <sup>(sin <i>&theta;</i> &minus; 2sin<sup>3</sup><i>&theta;</i>)</sup>/<sub>(2cos<sup>3</sup><i>&theta;</i> &minus; cos <i>&theta;</i>)</sub> equal to ?",
          "options": [
                "sin<sup>2</sup><i>&theta;</i>",
                "cos<sup>2</sup><i>&theta;</i>",
                "cot <i>&theta;</i>",
                "tan <i>&theta;</i>"
          ],
          "answer": "tan <i>&theta;</i>"
    },
    {
          "question": "The mean weight of 150 students in a class is 60 kg. The mean weight of boys in the class is 70 kg and that of girls is 55 kg. What is the ratio of number of boys to number of girls ?",
          "options": [
                "1 : 2",
                "1 : 1",
                "2 : 1",
                "2 : 3"
          ],
          "answer": "1 : 2"
    },
    {
          "question": "Two towers <i>A</i> and <i>B</i> of height 23 m and 11 m respectively, stand 9 m apart. A straight rod is joined to the two tops of the towers. A monkey sitting on the top of <i>A</i>, climbs the rod to reach the top of <i>B</i>. If the monkey takes 5 minutes to reach the other end, what is the average speed of the monkey ?",
          "options": [
                "10 m/min",
                "5 m/min",
                "10 cm/sec",
                "5 cm/sec"
          ],
          "answer": "5 cm/sec"
    },
    {
          "question": "A spherical wooden ball of radius <i>r</i> is to be divided into eight identical parts by cutting by planes passing through the same diameter. What is the surface area of each final piece ?",
          "options": [
                "<sup>&pi;<i>r</i><sup>2</sup></sup>/<sub>3</sub>",
                "<sup>3&pi;<i>r</i><sup>2</sup></sup>/<sub>2</sub>",
                "<sup>2&pi;<i>r</i><sup>2</sup></sup>/<sub>3</sub>",
                "<sup>4&pi;<i>r</i><sup>2</sup></sup>/<sub>3</sub>"
          ],
          "answer": "<sup>3&pi;<i>r</i><sup>2</sup></sup>/<sub>2</sub>"
    },
    {
          "question": "A trolley with two wheels one metre apart is moved clockwise on the circular track around a ground with radius 50 m (described by right wheel). If the size of each wheel is of 1 foot radius and the right wheel turns 1000 times, how many times will the other wheel turn ?",
          "options": [
                "1010",
                "1015",
                "1020",
                "1025"
          ],
          "answer": "1020"
    },
    {
          "question": "What is the remainder when 70 &times; 71 &times; 72 &times; 73 &times; 74 &times; 75 &times; 76 &times; 77 &times; 78 &times; 79 is divided by 1000 ?",
          "options": [
                "3",
                "2",
                "1",
                "0"
          ],
          "answer": "0"
    },
    {
          "question": "A vertical pole of length 80 m is situated on the horizontal plane. The base of the pole is at <i>P</i>. There are two points <i>A</i> and <i>B</i> such that <i>P</i>, <i>A</i>, <i>B</i> are on the same straight line. Let the angles of elevation of top of the pole from <i>A</i> and <i>B</i> be <i>&alpha;</i> and <i>&beta;</i> (<i>&alpha;</i> &gt; <i>&beta;</i>) respectively. If <i>PA</i> = 64 m and <i>AB</i> = 36 m, then what is (<i>&alpha;</i> + <i>&beta;</i>) equal to ?",
          "options": [
                "60&deg;",
                "90&deg;",
                "120&deg;",
                "135&deg;"
          ],
          "answer": "90&deg;"
    },
    {
          "question": "Let <i>k</i> be a positive integer. What is the quotient when <i>x</i><sup>8<i>k</i>+3</sup> + <i>x</i><sup>8<i>k</i>+6</sup> + <i>x</i><sup>8<i>k</i>+9</sup> + <i>x</i><sup>8<i>k</i>+12</sup> is divided by (1 + <i>x</i><sup>3</sup>)(1 + <i>x</i><sup>6</sup>) ?",
          "options": [
                "<i>x</i><sup>8<i>k</i></sup>",
                "<i>x</i><sup>8<i>k</i>+1</sup>",
                "<i>x</i><sup>8<i>k</i>+2</sup>",
                "<i>x</i><sup>8<i>k</i>+3</sup>"
          ],
          "answer": "<i>x</i><sup>8<i>k</i>+3</sup>"
    },
    {
          "question": "A square is drawn inside a square of side 14 cm in such a way that the corners of the inner square coincide with the mid points of the sides of the outer square. What is the area lying between the two squares ?",
          "options": [
                "98 square cm",
                "56 square cm",
                "49 square cm",
                "24.5 square cm"
          ],
          "answer": "98 square cm"
    },
    {
          "question": "The base of a right-angled triangle is <sup>4</sup>/<sub>3</sub> times the height of triangle. If the area of the triangle is 54 square cm, then what is the perimeter of the triangle ?",
          "options": [
                "30 cm",
                "32 cm",
                "36 cm",
                "40 cm"
          ],
          "answer": "36 cm"
    },
    {
          "question": "What is the area of a triangle having sides 4, 4 and 6 units ?",
          "options": [
                "3&radic;7 square unit",
                "8 square unit",
                "7 square unit",
                "7&radic;3 square unit"
          ],
          "answer": "3&radic;7 square unit"
    },
    {
          "question": "Consider the following for the next three (03) items that follow :<br/><br/>Let <i>ABC</i> be a triangle right-angled at <i>B</i>. Let <i>P</i> be the point on <i>BC</i> such that <i>BP</i> = <i>PC</i>. If <i>AB</i> = 10 cm, &ang;<i>BAP</i> = 45&deg; and &ang;<i>CAP</i> = <i>&theta;</i><br/><br/>(use tan(<i>&alpha;</i> + <i>&beta;</i>) = <sup>(tan <i>&alpha;</i> + tan <i>&beta;</i>)</sup>/<sub>(1 &minus; tan <i>&alpha;</i> tan <i>&beta;</i>)</sub>)<br/><br/>What is tan <i>&theta;</i> equal to ?",
          "options": [
                "<sup>1</sup>/<sub>2</sub>",
                "<sup>1</sup>/<sub>3</sub>",
                "<sup>1</sup>/<sub>4</sub>",
                "<sup>1</sup>/<sub>5</sub>"
          ],
          "answer": "<sup>1</sup>/<sub>3</sub>"
    },
    {
          "question": "If &ang;<i>ACP</i> = <i>&gamma;</i>, then what is tan <i>&gamma;</i> equal to ?",
          "options": [
                "<sup>1</sup>/<sub>2</sub>",
                "<sup>1</sup>/<sub>3</sub>",
                "<sup>2</sup>/<sub>3</sub>",
                "1"
          ],
          "answer": "<sup>1</sup>/<sub>2</sub>"
    },
    {
          "question": "Consider the following statements :<br/><br/>I. The line segment <i>AP</i> divides the area of the triangle <i>ABC</i> into two equal parts<br/><br/>II. The perimeter of the triangle <i>APC</i> is more than 46 cm<br/><br/>III. The area of the triangle <i>APC</i> is 50 square cm<br/><br/>Which of the statements given above are correct ?",
          "options": [
                "I and II only",
                "II and III only",
                "I and III only",
                "I, II and III"
          ],
          "answer": "I, II and III"
    },
    {
          "question": "Consider the following for the next two (02) items that follow :<br/><br/>A frequency distribution is as follows :<br/><br/><table border=\"1\" cellpadding=\"5\"><tr><td>Marks</td><td>18-26</td><td>27-35</td><td>36-44</td><td>45-53</td><td>54-62</td><td>63-71</td><td>72-80</td></tr><tr><td>Number of students</td><td>5</td><td>7</td><td>10</td><td>15</td><td>8</td><td>3</td><td>2</td></tr></table><br/><br/>What is the median of the distribution ?",
          "options": [
                "44.9",
                "45.5",
                "45.9",
                "46.3"
          ],
          "answer": "46.3"
    },
    {
          "question": "What is the mode of the distribution ?",
          "options": [
                "47.25",
                "47.75",
                "48.25",
                "48.75"
          ],
          "answer": "48.25"
    },
    {
          "question": "Consider the following for the next two (02) items that follow :<br/><br/><i>ABC</i> is a triangle right-angled at <i>B</i>. Given that <i>AC</i> &minus; <i>AB</i> = 2 cm and <i>BC</i> = 16 cm<br/><br/>If &ang;<i>BAC</i> = <i>&theta;</i> then what is sin <i>&theta;</i> + cos <i>&theta;</i> equal to ?",
          "options": [
                "1",
                "<sup>71</sup>/<sub>65</sub>",
                "<sup>73</sup>/<sub>65</sub>",
                "<sup>79</sup>/<sub>65</sub>"
          ],
          "answer": "<sup>79</sup>/<sub>65</sub>"
    },
    {
          "question": "If <i>BD</i> is the perpendicular on the side <i>AC</i>, then what is the length of <i>BD</i> ?",
          "options": [
                "<sup>1008</sup>/<sub>65</sub> cm",
                "<sup>756</sup>/<sub>65</sub> cm",
                "<sup>168</sup>/<sub>7</sub> cm",
                "<sup>165</sup>/<sub>7</sub> cm"
          ],
          "answer": "<sup>1008</sup>/<sub>65</sub> cm"
    },
    {
          "question": "Consider the following for the next three (03) items that follow :<br/><br/>Let <i>MN</i> be a chord of length 16 cm of a circle with centre at <i>O</i> and radius 10 cm. The tangents at <i>M</i> and <i>N</i> intersect at a point <i>P</i>. Further, <i>OP</i> intersects <i>MN</i> perpendicularly at <i>Q</i>.<br/><br/>What is <i>OQ</i> equal to ?",
          "options": [
                "5 cm",
                "6 cm",
                "7 cm",
                "8 cm"
          ],
          "answer": "6 cm"
    },
    {
          "question": "What is <i>PM</i> equal to ?",
          "options": [
                "10 cm",
                "12 cm",
                "<sup>40</sup>/<sub>3</sub> cm",
                "<sup>50</sup>/<sub>3</sub> cm"
          ],
          "answer": "<sup>40</sup>/<sub>3</sub> cm"
    },
    {
          "question": "What is the area of triangle <i>OMN</i> ?",
          "options": [
                "36 square cm",
                "40 square cm",
                "45 square cm",
                "48 square cm"
          ],
          "answer": "48 square cm"
    },
    {
          "question": "A question is given followed by two statements I and II. Consider the Question and the Statements and mark the correct option.<br/><br/>Question : What is the integral value of <i>k</i> for which the expression 4<i>x</i><sup>2</sup> &minus; <i>kx</i> + 1 is positive ?<br/><br/>Statement-I : <i>k</i> &lt; &minus;2<br/><br/>Statement-II : <i>k</i> &gt; &minus;4<br/><br/>Which one of the following is correct in respect of the above Question and the Statements ?",
          "options": [
                "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone",
                "The Question can be answered by using either Statement alone",
                "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
                "The Question cannot be answered even by using both the Statements together"
          ],
          "answer": "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone"
    }
  ,
    {
          "question": "A question is given followed by two statements I and II. Consider the Question and the Statements and mark the correct option.<br/><br/>Question : In how many days can <i>A</i>, <i>B</i> and <i>C</i> together finish the work ?<br/><br/>Statement-I : <i>A</i> and <i>B</i> together can finish the work in 24 days<br/><br/>Statement-II : <i>B</i> and <i>C</i> together can finish the work in 36 days<br/><br/>Which one of the following is correct in respect of the above Question and the Statements ?",
          "options": [
                "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone",
                "The Question can be answered by using either Statement alone",
                "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
                "The Question cannot be answered even by using both the Statements together"
          ],
          "answer": "The Question cannot be answered even by using both the Statements together"
    },
    {
          "question": "A question is given followed by two statements I and II. Consider the Question and the Statements and mark the correct option.<br/><br/>Question : Can we have a common solution which is prime ?<br/><br/>Statement-I : <i>x</i><sup>2</sup> &minus; 26<i>x</i> + 133 = 0<br/><br/>Statement-II : <i>x</i><sup>2</sup> &minus; 44<i>x</i> + 475 = 0<br/><br/>Which one of the following is correct in respect of the above Question and the Statements ?",
          "options": [
                "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone",
                "The Question can be answered by using either Statement alone",
                "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
                "The Question cannot be answered even by using both the Statements together"
          ],
          "answer": "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone"
    },
    {
          "question": "A question is given followed by two statements I and II. Consider the Question and the Statements and mark the correct option.<br/><br/>Question : Is 327<sup><i>n</i></sup> + 173<sup><i>n</i></sup> divisible by 500 ?<br/><br/>Statement-I : <i>n</i> is odd natural number<br/><br/>Statement-II : <i>n</i> is a positive integer<br/><br/>Which one of the following is correct in respect of the above Question and the Statements ?",
          "options": [
                "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone",
                "The Question can be answered by using either Statement alone",
                "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
                "The Question can be answered even without using any of the Statements"
          ],
          "answer": "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone"
    },
    {
          "question": "A question is given followed by two statements I and II. Consider the Question and the Statements and mark the correct option.<br/><br/>Question : If the price of petrol goes up by 20%, by what percentage should the consumption be reduced so that the expenditure remains the same ?<br/><br/>Statement-I : Price of petrol per litre was Rs. 90<br/><br/>Statement-II : Consumption was 24 litre before price hike<br/><br/>Which one of the following is correct in respect of the above Question and the Statements ?",
          "options": [
                "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone",
                "The Question can be answered by using either Statement alone",
                "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
                "The Question can be answered even without using any of the Statements"
          ],
          "answer": "The Question can be answered even without using any of the Statements"
    },
    {
          "question": "A question is given followed by two statements I and II. Consider the Question and the Statements and mark the correct option.<br/><br/>Question : The ratio of <i>P</i>'s salary to <i>Q</i>'s salary is 6 : 5. How much is <i>P</i>'s expenditure ?<br/><br/>Statement-I : The ratio of <i>P</i>'s saving to <i>Q</i>'s saving is 3 : 2<br/><br/>Statement-II : The ratio of <i>P</i>'s expenditure to <i>Q</i>'s expenditure is 1 : 1<br/><br/>Which one of the following is correct in respect of the above Question and the Statements ?",
          "options": [
                "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone",
                "The Question can be answered by using either Statement alone",
                "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
                "The Question cannot be answered even by using both the Statements together"
          ],
          "answer": "The Question cannot be answered even by using both the Statements together"
    },
    {
          "question": "A question is given followed by two statements I and II. Consider the Question and the Statements and mark the correct option.<br/><br/>Question : The largest of five different integers is 8 and least is 2. What is the average of these integers ?<br/><br/>Statement-I : The sum of all the 5 integers is a multiple of 5<br/><br/>Statement-II : The number of odd integers is odd<br/><br/>Which one of the following is correct in respect of the above Question and the Statements ?",
          "options": [
                "The Question can be answered by using one of the Statements alone, but cannot be answered using the other statement alone",
                "The Question can be answered by using either Statement alone",
                "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
                "The Question cannot be answered even by using both the Statements together"
          ],
          "answer": "The Question can be answered by using one of the Statements alone, but cannot be answered using the other statement alone"
    },
    {
          "question": "A question is given followed by two statements I and II. Consider the Question and the Statements and mark the correct option.<br/><br/>Question : There are three different weights. All the weights are integers and their sum is a prime number. What are the weights ?<br/><br/>Statement-I : One of the weights is twice the another weight<br/><br/>Statement-II : One of the weights is thrice the another weight<br/><br/>Which one of the following is correct in respect of the above Question and the Statements ?",
          "options": [
                "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone",
                "The Question can be answered by using either Statement alone",
                "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
                "The Question cannot be answered even by using both the Statements together"
          ],
          "answer": "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone"
    },
    {
          "question": "A question is given followed by two statements I and II. Consider the Question and the Statements and mark the correct option.<br/><br/>Question : What is the amount at the end of 10 years ?<br/><br/>Statement-I : The principal amount is ₹ 1,00,000<br/><br/>Statement-II : Rate of interest is 10% per annum<br/><br/>Which one of the following is correct in respect of the above Question and the Statements ?",
          "options": [
                "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone",
                "The Question can be answered by using either Statement alone",
                "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
                "The Question cannot be answered even by using both the Statements together"
          ],
          "answer": "The Question cannot be answered even by using both the Statements together"
    },
    {
          "question": "A question is given followed by two statements I and II. Consider the Question and the Statements and mark the correct option.<br/><br/>Question : Is <i>p</i><sup>2</sup> + <i>pq</i> + <i>q</i><sup>2</sup> odd where <i>p</i>, <i>q</i> are integers ?<br/><br/>Statement-I : <i>p</i> + <i>q</i> is even<br/><br/>Statement-II : <i>pq</i> is odd<br/><br/>Which one of the following is correct in respect of the above Question and the Statements ?",
          "options": [
                "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone",
                "The Question can be answered by using either Statement alone",
                "The Question can be answered by using both the Statements together, but cannot be answered using either Statement alone",
                "The Question cannot be answered even by using both the Statements together"
          ],
          "answer": "The Question can be answered by using one of the Statements alone, but cannot be answered using the other Statement alone"
    },
    {
          "question": "The total population of an area is 10,000 out of which males and females are equal in number. Out of the total population 30% are Newspaper readers. Out of the total newspaper readers, one-third read English Newspaper. Out of the total English Newspaper readers, 20% are females. What is the number of males who do not read English Newspaper ?",
          "options": [
                "800",
                "2100",
                "4200",
                "Cannot be determined due to insufficient data"
          ],
          "answer": "4200"
    },
    {
          "question": "What is the maximum area of a rectangle, in square cm, whose perimeter is 400 cm ?",
          "options": [
                "100",
                "200",
                "1000",
                "10,000"
          ],
          "answer": "10,000"
    },
    {
          "question": "What is the remainder if we divide 3<sup>10</sup> by 7 ?",
          "options": [
                "0",
                "1",
                "2",
                "4"
          ],
          "answer": "4"
    },
    {
          "question": "What is the square root of 64% ?",
          "options": [
                "0.08%",
                "0.8%",
                "8%",
                "80%"
          ],
          "answer": "80%"
    }
  ,
    {
          "question": "The difference of 10<sup>31</sup> &minus; 5 and 10<sup>30</sup> + <i>p</i> is divisible by 3 where <i>p</i> is a digit. How many values of <i>p</i> are possible ?",
          "options": [
                "4",
                "3",
                "2",
                "1"
          ],
          "answer": "3"
    },
    {
          "question": "Consider the following statements :<br/><br/>I. 61 divides 107<sup>100</sup> &minus; 76<sup>100</sup><br/><br/>II. 100 divides 67<sup>5</sup> + 33<sup>5</sup><br/><br/>Which of the statements given above is/are correct ?",
          "options": [
                "I only",
                "II only",
                "Both I and II",
                "Neither I nor II"
          ],
          "answer": "Both I and II"
    },
    {
          "question": "The average of the temperatures recorded at noontime from Monday to Sunday is 31&deg;C. If the lowest temperature recorded is 30&deg;C, then what is the maximum of temperature that is possible to record at noontime on any one of the days",
          "options": [
                "34&deg;C",
                "35&deg;C",
                "36&deg;C",
                "37&deg;C"
          ],
          "answer": "37&deg;C"
    },
    {
          "question": "If<br/><br/>(<i>x</i> + <sup>1</sup>/<sub><i>yz</i></sub>) &minus; (<i>y</i> + <sup>1</sup>/<sub><i>zx</i></sub>) = (<i>y</i> + <sup>1</sup>/<sub><i>zx</i></sub>) &minus; (<i>z</i> + <sup>1</sup>/<sub><i>xy</i></sub>)<br/><br/>and <i>x</i> + <i>z</i> &ne; 2<i>y</i>, then what is <i>xyz</i> equal to ?",
          "options": [
                "&minus;3",
                "&minus;1",
                "1",
                "3"
          ],
          "answer": "&minus;1"
    },
    {
          "question": "Consider the following statements in respect of<br/><i>p</i> = <i>n</i>(<i>n</i> + 1)(<i>n</i> + 2)(<i>n</i> + 3) + 1,<br/>where <i>n</i> is a natural number :<br/><br/>I. <i>p</i> is always odd<br/><br/>II. <i>p</i> is a perfect square<br/><br/>Which of the statements given above is/are correct ?",
          "options": [
                "I only",
                "II only",
                "Both I and II",
                "Neither I nor II"
          ],
          "answer": "Both I and II"
    },
    {
          "question": "What is the difference between the average of first 50 even natural numbers and the average of first 50 odd natural numbers ?",
          "options": [
                "0",
                "0.5",
                "1",
                "2"
          ],
          "answer": "1"
    },
    {
          "question": "Three amounts <i>x</i>, <i>y</i>, <i>z</i> are such that <i>y</i> is the compound interest on <i>x</i>; and <i>z</i> is the compound interest on <i>y</i>. The rate of interest per annum and the time period in years are same. Which one of the following is correct ?",
          "options": [
                "<i>x</i><sup>2</sup> = <i>yz</i>",
                "<i>y</i><sup>2</sup> = <i>zx</i>",
                "<i>z</i><sup>2</sup> = <i>xy</i>",
                "<i>x</i> = <i>yz</i>"
          ],
          "answer": "<i>y</i><sup>2</sup> = <i>zx</i>"
    },
    {
          "question": "There are <i>n</i> concentric squares. The area of the innermost square is 1 unit and the distance between corresponding corners of any two consecutive squares is 1 unit. Consider the following statements :<br/><br/>I. The diagonal of the <i>n</i>th square is 2<i>n</i> + &radic;2 &minus; 2<br/><br/>II. The area included between <i>n</i>th square and (<i>n</i> &minus; 1)th square is independent of <i>n</i><br/><br/>Which of the statements given above is/are correct ?",
          "options": [
                "I only",
                "II only",
                "Both I and II",
                "Neither I nor II"
          ],
          "answer": "I only"
    },
    {
          "question": "In a rectangle <i>ABCD</i>, <i>AC</i> is one of the diagonals. If <i>AC</i> + <i>AB</i> = 3<i>AD</i> and <i>AC</i> &minus; <i>AD</i> = 4 units, then what is the area of the triangle ?",
          "options": [
                "24 square unit",
                "36 square unit",
                "48 square unit",
                "72 square unit"
          ],
          "answer": "24 square unit"
    },
    {
          "question": "The area of the circle circumscribing three identical circles touching each other is <sup>&pi;(2 + &radic;3)<sup>2</sup></sup>/<sub>3</sub> square cm. What is the radius of one of the smaller circles ?",
          "options": [
                "0.5 cm",
                "1 cm",
                "1.5 cm",
                "&radic;3 cm"
          ],
          "answer": "1 cm"
    },
    {
          "question": "In a triangle <i>ABC</i>, <i>AB</i> = 21 cm, <i>BC</i> = 20 cm and <i>CA</i> = 13 cm. A perpendicular <i>CD</i> is drawn upon the longest side. What is the area of the triangle <i>BCD</i> ?",
          "options": [
                "96 square cm",
                "84 square cm",
                "80 square cm",
                "72 square cm"
          ],
          "answer": "96 square cm"
    },
    {
          "question": "There are two containers <i>A</i> and <i>B</i>. In container <i>A</i>, the ratio of milk and water is 1 : 3 and in container <i>B</i>, the ratio of milk and water is <i>m</i> : <i>n</i>. If the mixture in the containers <i>A</i> and <i>B</i> are mixed in the ratio 2 : 3 to get 20 litres of a mixture having milk and water in the ratio 3 : 7, then what is the value of <sup><i>m</i></sup>/<sub><i>n</i></sub> ?",
          "options": [
                "<sup>1</sup>/<sub>2</sub>",
                "<sup>2</sup>/<sub>3</sub>",
                "<sup>3</sup>/<sub>4</sub>",
                "<sup>4</sup>/<sub>5</sub>"
          ],
          "answer": "<sup>1</sup>/<sub>2</sub>"
    },
    {
          "question": "A cone, a hemisphere and a cylinder stand on equal base of radius <i>r</i> and have the same height. If the sum of volumes of cone, the hemisphere and the cylinder is equal to volume of a sphere of radius <i>R</i>, then what is <sup><i>R</i><sup>3</sup></sup>/<sub><i>r</i><sup>3</sup></sub> equal to ?",
          "options": [
                "1.25",
                "1.5",
                "2",
                "2.5"
          ],
          "answer": "1.5"
    },
    {
          "question": "If <i>x</i><sup>3</sup> + <i>px</i><sup>2</sup> + <i>qx</i> + <i>r</i> is an integer for all integral values of <i>x</i>, then consider the following statements :<br/><br/>I. <i>p</i> must be an integer<br/><br/>II. <i>q</i> must be an integer<br/><br/>III. <i>r</i> must be an integer<br/><br/>Which of the statements given above is/are correct ?",
          "options": [
                "I and II only",
                "III only",
                "I, II and III",
                "None of the statements is correct"
          ],
          "answer": "III only"
    },
    {
          "question": "<i>XYZ</i> is a 3-digit number, where <i>X</i>, <i>Y</i>, <i>Z</i> are distinct non-zero digits. The difference between the two 3-digit numbers <i>XYZ</i> and <i>YXZ</i> is 90. How many possible values exist for the sum (<i>X</i> + <i>Y</i>) ?",
          "options": [
                "9",
                "8",
                "7",
                "6"
          ],
          "answer": "8"
    },
    {
          "question": "How many times does the minute hand of a clock coincide with the second hand between 2&middot;01 pm and 4&middot;01 pm on the same day ?",
          "options": [
                "121",
                "120",
                "119",
                "None of the above"
          ],
          "answer": "None of the above"
    },
    {
          "question": "What is the HCF of 2<sup>36</sup> &minus; 1 and 2<sup>45</sup> &minus; 1 ?",
          "options": [
                "1023",
                "512",
                "511",
                "255"
          ],
          "answer": "511"
    },
    {
          "question": "The section of a solid right circular cone by a plane containing vertex and perpendicular to base is an equilateral triangle of side 14 cm. What is the volume of the cone ? (<i>&pi;</i> = <sup>22</sup>/<sub>7</sub>)",
          "options": [
                "1078&radic;3 cubic cm",
                "<sup>1078</sup>/<sub>&radic;3</sub> cubic cm",
                "539&radic;3 cubic cm",
                "<sup>539</sup>/<sub>&radic;3</sub> cubic cm"
          ],
          "answer": "<sup>1078</sup>/<sub>&radic;3</sub> cubic cm"
    },
    {
          "question": "Three identical cones each with base radius 3 cm are placed on their bases so that each is touching the other two. There will be one and only circle that would pass through each of the vertices of the cones. What is the area of the circle ?",
          "options": [
                "3&pi; square cm",
                "6&pi; square cm",
                "9&pi; square cm",
                "12&pi; square cm"
          ],
          "answer": "12&pi; square cm"
    },
    {
          "question": "A circle is inscribed in a triangle <i>ABC</i> right-angled at <i>B</i>. If <i>AB</i> = 5 cm and <i>BC</i> = 12 cm, then what is the radius of the circle ?",
          "options": [
                "1 cm",
                "1.5 cm",
                "2 cm",
                "2.5 cm"
          ],
          "answer": "2 cm"
    },
    {
          "question": "The ratio of sum of interior angles to sum of exterior angles of a regular polygon of <i>n</i> sides is <sup>7</sup>/<sub>2</sub>. What is the measure of an interior angle of polygon ?",
          "options": [
                "110&deg;",
                "120&deg;",
                "130&deg;",
                "140&deg;"
          ],
          "answer": "140&deg;"
    },
    {
          "question": "The number 199 can be written as <i>m</i><sup>2</sup> &minus; <i>n</i><sup>2</sup>, where <i>m</i>, <i>n</i> are natural numbers (<i>m</i> &gt; <i>n</i>). What is the value of <i>mn</i> ?",
          "options": [
                "9900",
                "9800",
                "9701",
                "Cannot be uniquely determined"
          ],
          "answer": "9900"
    },
    {
          "question": "How many numbers of the form 2<sup><i>n</i></sup> &minus; 1 and less than 2000 are prime ?",
          "options": [
                "3",
                "4",
                "5",
                "6"
          ],
          "answer": "4"
    },
    {
          "question": "In a class of 160 students, each of them opt at least one language from among English, Hindi and Sanskrit. It is found that 130 students opt English, 120 students Hindi and 110 Sanskrit. If the students opt either only one language or all three languages, then what is the number of students who study all three languages ?",
          "options": [
                "40",
                "60",
                "80",
                "100"
          ],
          "answer": "100"
    },
    {
          "question": "Let <i>S</i> = 5<sup><i>a</i></sup> + 7<sup><i>b</i></sup> + 11<sup><i>c</i></sup> + 13<sup><i>d</i></sup>, where <i>a</i>, <i>b</i>, <i>c</i> and <i>d</i> are natural numbers. What is the number of distinct remainders of <i>S</i> when it is divided by 10 ?",
          "options": [
                "1",
                "4",
                "5",
                "More than 5"
          ],
          "answer": "5"
    },
    {
          "question": "In a right triangle <i>ABC</i>, &ang;<i>A</i> = 90&deg; and <i>AD</i> is perpendicular to <i>BC</i>. If &ang;<i>CAD</i> = 60&deg; and <i>BC</i> = 6 cm, then what is <i>AB</i> equal to ?",
          "options": [
                "3 cm",
                "4 cm",
                "5 cm",
                "6 cm"
          ],
          "answer": "3 cm"
    }
  ]
};

export default mathsData;