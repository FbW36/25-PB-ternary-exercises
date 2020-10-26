// 1. Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

let isDog;
isDog == "false"
  ? console.log("pat, pat")
  : console.log("find me a dog to pat!");

// 2. Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.

let speedLimit = 50;
let speedCheck = 60;

speedCheck >= speedLimit
  ? console.log("you're going too fast!")
  : console.log("You're driving below the speed limit, Oma");
// 3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".

let ageLimit = 16;
let age = 18;
age >= ageLimit ? console.log("serve beer") : console.log("serve butter beer");

// 4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".

let isStudent = "true";
isStudent == "false"
  ? console.log("Ticket costs €5,00")
  : console.log("Ticket costs €12,00");

// 5. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".

let okMarie;
okMarie == "cake"
  ? console.log("Let them eat cake")
  : console.log("Oh, bother");

// 6. Check if the following numbers are even numbers. Use a ternary and if the number is even print `30 is even`, else print that it is odd.
//30, 939, 40.9

let num1 = 30;
let checknum1 = num1 % 2;

checknum1 == 0 ? console.log(num1 + " is even") : console.log(num1 + " is odd");

let num2 = 939;
let checknum2 = num2 % 2;

checknum2 == 0 ? console.log(num2 + " is even") : console.log(num2 + " is odd");
let num3 = 40.9;
let checknum3 = num3 % 2;

checknum3 == 0 ? console.log(num3 + " is even") : console.log(num3 + " is odd");
