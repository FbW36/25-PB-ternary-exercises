
// 1-
let isDog = true;
let outputMessage = isDog ? `'pat, pat'` : `'find me a dog to pat!'`;
console.log(outputMessage);

// 2-
let mySpeed = 70;
let speedLimit = 50;
let speedCheck;

speedCheck = ((speedLimit === 50) && (mySpeed > speedLimit)) ? `you are going too fast` : `You are driving below the speed limit, `;

console.log(speedCheck);

// 3- 
let age = 15;
let ageChecker = age < 16 ? 'serve butter juice' : 'serve juice';

console.log(ageChecker);

// 4-
let isStudent =  true;
let ticketCost = isStudent ? 'Ticket costs 5,00 Euro' : 'Ticket costs 12,00 Euro';

console.log(ticketCost);

// 5- 
let okMarie = "shoko";
let checkCake = okMarie === 'cake' ? 'Let them eat cake' : 'Oh, bother';

console.log(checkCake);

// 6-
// a.
let number = 30;

let checkNumber = number % 2 === 0 ? `${number} is even` : `${number} is odd`;

console.log(checkNumber);

// b.
number = 939;

checkNumber = number % 2 === 0 ? `${number} is even` : `${number} is odd`;

console.log(checkNumber);

// c.
number = 40.9;

checkNumber = number % 2 === 0 ? `${number} is even` : `${number} is odd`;

console.log(checkNumber);