// Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'
isDog = "dog";
if (isDog === "dog") {
    console.log("pat, pat");
} else {
    console.log("find me a dog")
}

// Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.
let speedCheck = 51;
if (speedCheck >= 50) {
    console.log('You are driving below the speed limit, Oma');
} else {
    console.log("you're going too fast!");
}

// Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".
let age = 19;
if (age < 16) {
    console.log("serve butter beer");
} else {
    console.log("serve beer");
}
// Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".
let isStudent = false;
if (isStudent === true) {
    console.log("ticket costs €5,00");
} else {
    console.log("ticket costs €12");
}

// Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".
let okMarie = false;
if (okMarie === true) {
    console.log("Let them eat cake");
} else {
    console.log("Oh, brother");
}

// Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.

let a = 30;
let b = 939;
let c = 40.9;
if (a % 2 === 0) {
    console.log(`${a} is even`);
} else {
    console.log(`${a} is odd`);
}

if (b % 2 === 0) {
    console.log(`${b} is even`);
} else {
    console.log(`${b} is odd`);
}

if (c % 2 === 0) {
    console.log(`${c} is even`);
} else {
    console.log(`${c} is odd`);
}