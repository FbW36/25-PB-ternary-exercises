//1.
let isDog = "Rottweiler"

 isDog = " " ? "pat pat" : "find me a dog to pet";
console.log(isDog);

//2. 
let speedCheck = 49;
let speedTest = speedCheck > 50 ? "you're going too fast!" : "You're driving below the speed limit, Oma";
console.log(speedTest);


//3.
let age = 17
let testAge = age >=16 ? "serve beer" : "serve butter beer"
console.log(testAge);


//4. 
let isStudent = true;
let checkStudent = isStudent === true ? "Ticket costs €5,00" : "Ticket costs €12,00";
console.log(checkStudent);

//5.
let okMarie = "cake"
let checkCake = okMarie.includes("cake") ? "let them eat cake" : "oh bother"
console.log(checkCake)

//6.

let num1 = 30;
let num2 = 939;
let num3 = 40.9;

let checkEven1 = num1%2 ? "30 is even" : "is odd";
let checkEven2 = num2%2 ? "939 is even" : "is odd";
let checkEven3 = num3%2 ? "40.9 is even" : "is odd";
console.log(checkEven1);
console.log(checkEven2);
console.log(checkEven3);

// i dont understand why it is working now the other way around. 30 is even :/ and the others are odd