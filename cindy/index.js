//25-PB-ternary-exercises
//Programming Basics: Ternary

//These exercises are designed to make you more comfortable with the ternary operator.

//1. Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'
let isDog = true ? console.log('Exercise 1 => pat, pat') : console.log('Exercise 1 => find me a dog to pat!');


//2. Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.
let speedCheck = 50
let yourSpeed = 49
let checking = yourSpeed > speedCheck ? console.log("Exercise 2 => you're going too fast!") : console.log("Exercise 2 => you're driving below the speed limit, Oma")


//3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".
let age = 34
let beerOrNot = age > 16 ? console.log("Exercise 3 => serve beer") : 
console.log("Exercise 3 => serve butter beer")


//4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".
let job = 'worker'
let ticketStudent = 5
let ticketNoStudent = 12
let isStudent = (job === 'student') ? console.log(`Exercise 4 => Ticket costs ${ticketStudent} euros`) : console.log(`Exercise 4 => Ticket costs ${ticketNoStudent} euros`)


//5. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".
let cakeOrNot = 'is '
let okMarie = (cakeOrNot.includes("cake")) ? console.log("Let them eat cake") : console.log("Oh, bother");


//6. Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
//30, 939, 40.9
let number = 40.9
let checkNumber = Number.isInteger(number) ? number % 2 === 0 ? console.log(`${number} is even`) : console.log(`${number} is odd`) : console.log(`${number} is decimal Or characters`)

