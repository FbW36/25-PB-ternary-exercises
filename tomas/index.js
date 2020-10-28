let log = console.log;

// Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'
let isDog;
isDog = true ? log('pat, pat') : log('find me a dog to pat!');

// Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'
let speedCheck = 20;
speedCheck > 50 ? log("you're going too fast!") : log("you're driving bellow the speed limit, Oma!");

// Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer"
let age = 17;
age < 16 ? log('serve butter beer') : log('serve beer!');

// Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00"
let isStudent;
isStudent = true ? log('Ticket costs 5,00 EUR') : log('Ticket costs 12.00 EUR');

// Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother"
let okMarie = 'Has a cake';
okMarie.includes('cake') ? log("Let them eat cake") : log('Oh, bother');

// Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd
let num;
num % 2 === 0 ? log('30 is even') : log("hm, that's odd");
log(isFinite(num))