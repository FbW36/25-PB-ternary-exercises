//Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'
let isDog = true;
console.log(isDog ? "pat,pat" : "find me a dog to pat");

// Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.
let speedLimit = 50;
let ownSpeed = 33;
let speedCheck =
  ownSpeed > speedLimit
    ? "you're going too fast!"
    : "You are driving below the speed limit, Oma";
console.log(speedCheck);
// Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".
let age = 100;
console.log(age < 16 ? "serve butter beer" : "serve beer");
// Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".
let isStudent = true;
console.log(isStudent ? "Ticket costs €5,00" : "Ticket costs €12,00");
// Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".
let haveCake = true;
let okMarie = haveCake ? "Let them eat cake" : "Oh, bother";
console.log(okMarie);
// Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
function checkEven(number) {
  number % 2 === 0
    ? console.log(`${number} is even `)
    : console.log(`${number} is odd `);
}
checkEven(30);
checkEven(939);
checkEven(40.9);
