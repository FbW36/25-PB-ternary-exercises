//? 1.Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

let isDog = false;

if (isDog === true) {
  console.log("dog positive:", "pat pat");
} else {
  console.log("dog negative:", "find me a dog to pat!");
}

//? 2.Declare a variable named speedCheck.If speedlimit is 50km / h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.

let speedCheck = 90;
let speedLimit = 50;

if (speedCheck > speedLimit) {
  console.log("you're going too fast!");
} else {
  console.log("You're driving below the speed limit, Oma");
}

//? 3. Declare a variable named age.If age is below 16, print "serve butter beer".Otherwise print "serve beer".

let age = 45;
let ageLimit = 16;

if (age < ageLimit) {
  console.log("serve butter beer");
} else {
  console.log("serve beer");
}

//? 4.Declare a variable named isStudent.If true, print "Ticket costs €5,00".If false, print "Ticket costs €12,00".

let ifStudent = true;

if (ifStudent === true) {
  console.log("Ticket costs €5,00");
} else {
  console.log("Ticket costs €12,00");
}

//? 5. Declare a variable named okMarie.Check if there is 'cake' - if so, print "Let them eat cake".If not, print "Oh, bother".

let okMarie = "ButterCake";
//let cake = "true"

if (okMarie.includes("Cake")) {
  console.log("Let them eat Cake");
} else {
  ("Oh, bother");
}

//? 6. Check if the following numbers are even numbers.Use a ternary and if the number is even print 30 is even, else print that it is odd.

// 30, 939, 40.9

let numbers = [30, 939, 40.9];

if (numbers[0] % 2 === 0) {
  console.log(`${numbers[0]} is even.`);
} else {
  console.log(`${numbers[0]} is odd.`);
}

if (numbers[1] % 2 === 0) {
  console.log(`${numbers[1]} is even.`);
} else {
  console.log(`${numbers[1]} is odd.`);
}

if (numbers[2] % 2 === 0) {
  console.log(`${numbers[2]} is even.`);
} else {
  console.log(`${numbers[2]} is odd.`);
}
