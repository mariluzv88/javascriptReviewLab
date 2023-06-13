//A: Q + A
// 1.How do we assign a value to a variable?
//  By declaring a variable using the = operator

// 2.How do we change the value of a variable?
// by using = to assign the variable within a function

// 3.How do we assign an existing variable to a new variable?
// by declaring the variable and assgining it to a new variable
// 4.Remind me, what are declare, assign, and define?
// declare is calling,assign is give value to something, and define is to layout a set of instructions.

// 5.What is pseudocoding and why should you do it?
// Pseudocoding is writing out a blueprint for what code needs to be made to create the program.wire framing

//6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// 10 percent of time to think about abouts but the faster you get to trying things out the better,theresalways plenty of ways to code something.


// B:
// 1:Create a variable called firstVariable
// let firstVariable;
// 2:Assign it the value of the string "Hello World"
// let firstVariable = "Hello World";
// 3:Change the value of this variable to some number
// let firstVariable = 6
// 4:Store the value of firstVariable in a new variable called secondVariable
// let secondVariable = firstVariable
// 5:Change the value of secondVariable to any string.
// let secondVariable = "";
// 6:What is the value of firstVariable?
// 6
// 7:Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
// let yourName = "Mariluz"
// console.log(`Hello,my name is ${yourName}`)


// C:Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name'==='Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false &&false && false && false && false ||true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// D:Declare a variable animal. Set it to be either "cow" or something else
let animal = "pig"
// Write code that will print out "mooooo" if the it is equal to cow
if(animal === "pig"){
    console.log("oink oink")
}else{
    console.log("Hey! You're not a pig.")
}
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit
