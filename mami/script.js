// 1. Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

 let isDog = true;
 console.log(true? 'pat, pat': 'find me a dog to pat!')


// 2. Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.


let speedCheck = 80
console.log(speedCheck>50?"you're going too fast!":"You're driving below the speed limit, Oma" )
// 3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".
let age = 50
console.log(age<16? "serve butter beer":"serve beer")
// 4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".
let isStudent = true;
console.log(true? "Ticket costs €5,00":"Ticket costs €12,00")

// 5. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".
let okMarie = ['banana', 'apple', 'lemon']
console.log(okMarie.includes('cake')? "Let them eat cake":"Oh, bother")
// 6. Check if the following numbers are even numbers. Use a ternary and if the number is even print `30 is even`, else print that it is odd.

// - 30
// - 939
// - 40.9
let evenNum = 30
console.log(evenNum%2 === 0? `${evenNum} is even`: `${evenNum} is odd`)

let evenNum2 = 939
console.log(evenNum2%2 === 0? `${evenNum2} is even`: `${evenNum2} is odd`)

let evenNum3 = 40.9
console.log(evenNum3%2 === 0? `${evenNum3} is even`: `${evenNum3} is odd`)