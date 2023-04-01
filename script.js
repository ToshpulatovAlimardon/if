// If1
// const a = 5,
//     b = 8,
//     c = 1;
// if (b > a && c > a) {
//     console.log(a);
// } else if (a > b && c > b) {
//     console.log(b);
// } else {
//     console.log(c);
// }

// If2
// const a = 40,
//     b = -20,
//     c = 23;
// if (b > a && c < a || b < a && c > a) {
//     console.log(a);
// } else if (a > b && c < b || a < b && c > b) {
//     console.log(b);
// } else {
//     console.log(c);
// }

// If3
// const a = 70,
//     b = 70;
// if (a > b) {
//     console.log(a);
// } else if (b > a) {
//     console.log(b);
// } else {
//     console.log(0);
// }

// If4
// const x = 5,
//     y = -12;
// if (x > 0 && y > 0) {
//     console.log("I - chorak");
// } else if (x < 0 && y > 0) {
//     console.log("II - chorak");
// } else if (x < 0 && y < 0) {
//     console.log("III - chorak");
// } else {
//     console.log("IV - chorak");
// }

// If5
// const x = -5;
// if (x > 0) {
//     console.log(2 * Math.sin(x));
// } else if (x <= 0) {
//     console.log(x - 6);
// }

// If6
// const x = 0;
// if (x < -2 || x > 2) {
//     console.log(2 * x);
// } else {
//     console.log(-3 * x);
// }

// If7
// const x = 1.5;
// if (x <= 0) {
//     console.log(-x);
// } else if (x > 0 && x < 2) {
//     console.log(x ** 2);
// } else if (x >= 2) {
//     console.log(4);
// }

// If8
// const a = 7,
//     b = 4,
//     c = 2;
// if (a + b > c && b + c > a && a + c > b) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// If9
// const Temp = -4;
// if (Temp < 0) {
//     console.log("Freezing");
// } else if (Temp > 1 && Temp < 10) {
//     console.log("​Very Cold");
// } else if (Temp > 11 && Temp < 20) {
//     console.log("​Cold");
// } else if (Temp > 21 && Temp < 30) {
//     console.log("Normal");
// } else if (Temp > 31 && Temp < 40) {
//     console.log("Hot");
// } else if (Temp > 40) {
//     console.log("Very Hot");
// }

// If10
// const a = 0;
// if (a > 0 && a % 2 == 1) {
//     console.log("​musbat toq son");
// } else if (a > 0 && a % 2 == 0) {
//     console.log("musbat juft son​");
// } else if (a < 0 && a % 2 == 1) {
//     console.log("manfiy toq son​");
// } else if (a < 0 && a % 2 == 0) {
//     console.log("manfiy juft son​");
// } else if (a == 0) {
//     console.log("son 0 ga teng​");
// }

// If11
// const a = 101;
// if (a / 10 >= 1 && a / 10 < 10 && a % 2 == 1) {
//     console.log("Ikki xonali toq son");
// } else if (a / 10 >= 1 && a / 10 < 10 && a % 2 == 0) {
//     console.log("Ikki xonali juft son​");
// } else if (a / 100 >= 1 && a % 2 == 1) {
//     console.log("Uch xonali toq son​");
// } else if (a / 100 >= 1 && a % 2 == 0) {
//     console.log("Uch xonali juft son​");
// }

// If12
// const n = 2;
// console.log(n ** 2);

// If13
// const price = 20,
//     onBreak = false;
// if (price >= 20 && onBreak) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// If14
// const n = 99;
// let n1, n2;
// n2 = n % 10;
// n1 = ((n - n2) / 10) % 10;
// if (n2 * 10 + n1 <= n) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// If15
// let n = 8481;
// if (n / 10 >= 1 && n / 10 < 10) {
//     console.log(2);
// } else if (n / 100 >= 1 && n / 100 < 10) {
//     console.log(3);
// } else if (n / 1000 >= 1 && n / 1000 < 10) {
//     console.log(4);
// }

// If16
// const n = 8481;
// let n1, n2, n3, n4;
// n4 = n % 10;
// n3 = ((n - n4) / 10) % 10;
// n2 = ((n - (n3 * 10 + n4)) / 100) % 10;
// n1 = (n - (n2 * 100 + n3 * 10 + n4)) / 1000;
// if (n / 10 >= 1 && n / 10 < 10) {
//     console.log(n3 + n4);
// } else if (n / 100 >= 1 && n / 100 < 10) {
//     console.log(n2 + n3 + n4);
// } else {
//     console.log(n1 + n2 + n3 + n4);
// }

// If17
// const n = 8481;
// let n1, n2, n3, n4;
// n4 = n % 10;
// n3 = ((n - n4) / 10) % 10;
// n2 = ((n - (n3 * 10 + n4)) / 100) % 10;
// n1 = (n - (n2 * 100 + n3 * 10 + n4)) / 1000;
// // 2xonaliklar
// if (n / 10 >= 1 && n / 10 < 10 && n3 % 2 == 1 && n4 % 2 == 1) {
//     console.log(n3 + n4);
// } else if (n / 10 >= 1 && n / 10 < 10 && n3 % 2 == 0 && n4 % 2 == 1) {
//     console.log(n4);
// } else if (n / 10 >= 1 && n / 10 < 10 && n3 % 2 == 1 && n4 % 2 == 0) {
//     console.log(n3);
// } else if (n / 10 >= 1 && n / 10 < 10 && n3 % 2 == 0 && n4 % 2 == 0) {
//     console.log(0);
// }
// // 3xonaliklar
// if (n / 100 >= 1 && n / 100 < 10 && n2 % 2 == 0 && n3 % 2 == 1 && n4 % 2 == 1) {
//     console.log(n3 + n4);
// } else if (
//     n / 100 >= 1 &&
//     n / 100 < 10 &&
//     n2 % 2 == 0 &&
//     n3 % 2 == 0 &&
//     n4 % 2 == 1
// ) {
//     console.log(n4);
// } else if (
//     n / 100 >= 1 &&
//     n / 100 < 10 &&
//     n2 % 2 == 0 &&
//     n3 % 2 == 1 &&
//     n4 % 2 == 0
// ) {
//     console.log(n3);
// } else if (
//     n / 100 >= 1 &&
//     n / 100 < 10 &&
//     n2 % 2 == 0 &&
//     n3 % 2 == 0 &&
//     n4 % 2 == 0
// ) {
//     console.log(0);
// } else if (
//     n / 100 >= 1 &&
//     n / 100 < 10 &&
//     n2 % 2 == 1 &&
//     n3 % 2 == 1 &&
//     n4 % 2 == 1
// ) {
//     console.log(n3 + n4 + n2);
// } else if (
//     n / 100 >= 1 &&
//     n / 100 < 10 &&
//     n2 % 2 == 1 &&
//     n3 % 2 == 0 &&
//     n4 % 2 == 1
// ) {
//     console.log(n4 + n2);
// } else if (
//     n / 100 >= 1 &&
//     n / 100 < 10 &&
//     n2 % 2 == 1 &&
//     n3 % 2 == 1 &&
//     n4 % 2 == 0
// ) {
//     console.log(n3 + n2);
// } else if (
//     n / 100 >= 1 &&
//     n / 100 < 10 &&
//     n2 % 2 == 1 &&
//     n3 % 2 == 0 &&
//     n4 % 2 == 0
// ) {
//     console.log(n2);
// }
// // 4xonaliklar
// if (
//     n / 1000 >= 1 &&
//     n / 1000 < 10 &&
//     n1 % 2 == 0 &&
//     n2 % 2 == 0 &&
//     n3 % 2 == 1 &&
//     n4 % 2 == 1
// ) {
//     console.log(n3 + n4);
// } else if (
//     n / 1000 >= 1 &&
//     n / 1000 < 10 &&
//     n1 % 2 == 0 &&
//     n2 % 2 == 0 &&
//     n3 % 2 == 0 &&
//     n4 % 2 == 1
// ) {
//     console.log(n4);
// } else if (
//     n / 1000 >= 1 &&
//     n / 1000 < 10 &&
//     n1 % 2 == 0 &&
//     n2 % 2 == 0 &&
//     n3 % 2 == 1 &&
//     n4 % 2 == 0
// ) {
//     console.log(n3);
// } else if (
//     n / 1000 >= 1 &&
//     n / 1000 < 10 &&
//     n1 % 2 == 0 &&
//     n2 % 2 == 0 &&
//     n3 % 2 == 0 &&
//     n4 % 2 == 0
// ) {
//     console.log(0);
// } else if (
//     n / 1000 >= 1 &&
//     n / 1000 < 10 &&
//     n1 % 2 == 0 &&
//     n2 % 2 == 1 &&
//     n3 % 2 == 1 &&
//     n4 % 2 == 1
// ) {
//     console.log(n3 + n4);
// } else if (
//     n / 1000 >= 1 &&
//     n / 1000 < 10 &&
//     n1 % 2 == 0 &&
//     n2 % 2 == 1 &&
//     n3 % 2 == 0 &&
//     n4 % 2 == 1
// ) {
//     console.log(n4);
// } else if (
//     n / 1000 >= 1 &&
//     n / 1000 < 10 &&
//     n1 % 2 == 0 &&
//     n2 % 2 == 1 &&
//     n3 % 2 == 1 &&
//     n4 % 2 == 0
// ) {
//     console.log(n3);
// } else if (
//     n / 1000 >= 1 &&
//     n / 1000 < 10 &&
//     n1 % 2 == 0 &&
//     n2 % 2 == 1 &&
//     n3 % 2 == 0 &&
//     n4 % 2 == 0
// ) {
//     console.log(0);
// }
// if (
//     n / 1000 >= 1 &&
//     n / 1000 < 10 &&
//     n1 % 2 == 1 &&
//     n2 % 2 == 0 &&
//     n3 % 2 == 1 &&
//     n4 % 2 == 1
// ) {
//     console.log(n3 + n4 + n1);
// } else if (
//     n / 1000 >= 1 &&
//     n / 1000 < 10 &&
//     n1 % 2 == 1 &&
//     n2 % 2 == 0 &&
//     n3 % 2 == 0 &&
//     n4 % 2 == 1
// ) {
//     console.log(n4 + n1);
// } else if (
//     n / 1000 >= 1 &&
//     n / 1000 < 10 &&
//     n1 % 2 == 1 &&
//     n2 % 2 == 0 &&
//     n3 % 2 == 1 &&
//     n4 % 2 == 0
// ) {
//     console.log(n3 + n1);
// } else if (
//     n / 1000 >= 1 &&
//     n / 1000 < 10 &&
//     n1 % 2 == 1 &&
//     n2 % 2 == 0 &&
//     n3 % 2 == 0 &&
//     n4 % 2 == 0
// ) {
//     console.log(n1);
// } else if (
//     n / 1000 >= 1 &&
//     n / 1000 < 10 &&
//     n1 % 2 == 1 &&
//     n2 % 2 == 1 &&
//     n3 % 2 == 1 &&
//     n4 % 2 == 1
// ) {
//     console.log(n3 + n4 + n1);
// } else if (
//     n / 1000 >= 1 &&
//     n / 1000 < 10 &&
//     n1 % 2 == 1 &&
//     n2 % 2 == 1 &&
//     n3 % 2 == 0 &&
//     n4 % 2 == 1
// ) {
//     console.log(n4 + n1);
// } else if (
//     n / 1000 >= 1 &&
//     n / 1000 < 10 &&
//     n1 % 2 == 1 &&
//     n2 % 2 == 1 &&
//     n3 % 2 == 1 &&
//     n4 % 2 == 0
// ) {
//     console.log(n3 + n1);
// } else if (
//     n / 1000 >= 1 &&
//     n / 1000 < 10 &&
//     n1 % 2 == 1 &&
//     n2 % 2 == 1 &&
//     n3 % 2 == 0 &&
//     n4 % 2 == 0
// ) {
//     console.log(n1);
// }

// If18
// let a = 5, b = 6, c = 9;
// console.log(Math.max(a, b, c));

// If18
// let a = 12,
//     b = 5,
//     c = 7;
// if (a > b && a > c) {
//     console.log(a);
// } else if (b > a && b > c) {
//     console.log(b);
// } else {
//     console.log(c);
// }

// If19
// const n = 36054;
// let n1, n2, n3, n4, n5;
// n5 = n % 10;
// n4 = ((n - n5) / 10) % 10;
// n3 = ((n - (n4 * 10 + n5)) / 100) % 10;
// n2 = ((n - (n3 * 100 + n4 * 10 + n5)) / 1000) % 10;
// n1 = (n - (n2 * 1000 + n3 * 100 + n4 * 10 + n5)) / 10000;
// console.log(Math.max(n1, n2, n3, n4, n5));

// If20
// const n = 36054;
// let n1, n2, n3, n4, n5;
// n5 = n % 10;
// n4 = ((n - n5) / 10) % 10;
// n3 = ((n - (n4 * 10 + n5)) / 100) % 10;
// n2 = ((n - (n3 * 100 + n4 * 10 + n5)) / 1000) % 10;
// n1 = (n - (n2 * 1000 + n3 * 100 + n4 * 10 + n5)) / 10000;
// if (Math.max(n1, n2, n3, n4, n5) == n5) {
//     console.log(Math.max(n1, n2, n3, n4, n5), 1);
// } else if (Math.max(n1, n2, n3, n4, n5) == n4) {
//     console.log(Math.max(n1, n2, n3, n4, n5), 2);
// } else if (Math.max(n1, n2, n3, n4, n5) == n3) {
//     console.log(Math.max(n1, n2, n3, n4, n5), 3);
// } else if (Math.max(n1, n2, n3, n4, n5) == n2) {
//     console.log(Math.max(n1, n2, n3, n4, n5), 4);
// } else if (Math.max(n1, n2, n3, n4, n5) == n1) {
//     console.log(Math.max(n1, n2, n3, n4, n5), 5);
// }