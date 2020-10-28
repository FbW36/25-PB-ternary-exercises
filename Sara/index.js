//1. Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'
let isDog = true  ? 'pat, pat' : 'find me a dog to pat' ;
console.log('Did we find a dog?! ==>', isDog) ; // pat, pat 

// 2. Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.
let speedCheck = 70 > 50 ? 'you are going to fast!!!' : 'you are driving below the speed limit, OMA!' ; 
console.log('speedCheck ==>', speedCheck) ; // you are going to fast!!!

//3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".
let age = 21 < 16 ? 'serve butter beer' : 'serve beer';
console.log('Beer? ==>', age) ; // serve beer

// 4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".
let isStudent = true ? 'Ticket costs €5' : 'Ticket costs €12' ; 
console.log('Ticket price ==>', isStudent) ; // Ticket costs €5

// 5. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".
let okMarie = false ? 'Let them eat cake' : 'Oh, bother' ;
console.log('is there cake?==>', okMarie) ; //Oh, bother

//6. Check if the following numbers are even numbers. Use a ternary and if the number is even print `30 is even`, else print that it is odd.

// 30
let num = 30 ;
let evenOdd = num % 2 === 0 ? 'is even' : 'is odd' ; 
console.log('30 ==>', evenOdd) ; // is even 

// 939
let num1 = 939 ;
let evenOdd2 = num1 % 2 === 0 ? 'is even' : 'is odd' ; 
console.log('939 ==>', evenOdd2) ; // is odd

// 40.9
let num3 = 40.9 ;
let evenOdd3 = num3 % 2 === 0 ? 'is even' : 'is odd' ; 
console.log('40.9 ==>', evenOdd2) ; // is odd
