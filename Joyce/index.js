// 1.
let isDog = true;
console.log(isDog === true ? "pat, pat" : "find me a dog to pat!");

// 2.
let speedCheck = 60;
let speedLimit = 50;
console.log(
  speedCheck > speedLimit
    ? "you're going too fast!"
    : "You're driving below the speed limit, Oma"
);

// 3.
let age = 19;
console.log(age < 16 ? "serve butter beer" : "serve beer");

// 4.
let isStudent = true;
console.log(isStudent === true ? "Ticket costs €5,00" : "Ticket costs €12,00");

// 5.
let okMarie = "Cheesecake";
console.log(okMarie.includes("cake") ? "Let them eat cake" : "Oh, bother");

// 6.
let num1 = 30;
let num2 = 939;
let num3 = 40.9;

console.log(num1, num1 % 2 === 0 ? "is even" : "is odd");

console.log(num2, num2 % 2 === 0 ? "is even" : "is odd");

console.log(num3, num3 % 2 === 0 ? "is even" : "is odd");
