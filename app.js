

//A: Q + A
// 1.How do we assign a value to a variable?
 "By declaring a variable using the = operator"

// 2.How do we change the value of a variable?
"by using = to assign the variable within a function"

// 3.How do we assign an existing variable to a new variable?
'by declaring the variable and assgining it to a new variable'
// 4.Remind me, what are declare, assign, and define?
'declare is calling,assign is give value to something, and define is to layout a set of instructions.'

// 5.What is pseudocoding and why should you do it?
'Pseudocoding is writing out a blueprint for what code needs to be made to create the program.wire framing'

//6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
'10 percent of time to think about abouts but the faster you get to trying things out the better,theres always plenty of ways to code something.'


// B: Strings
// 1:Create a variable called firstVariable
let firstVariable;
// 2:Assign it the value of the string "Hello World"
 firstVariable = "Hello World";
// 3:Change the value of this variable to some number
 firstVariable = 6
// 4:Store the value of firstVariable in a new variable called secondVariable
let  secondVariable = firstVariable
// 5:Change the value of secondVariable to any string.
 secondVariable = "";
// 6:What is the value of firstVariable?
'6'
// 7:Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
let yourName = "Mariluz"
console.log(`Hello,my name is ${yourName}`)


// C: Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
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

// D:The farm
// Declare a variable animal. Set it to be either "cow" or something else
let animal = "pig"
// Write code that will print out "mooooo" if the it is equal to cow
if(animal === "pig"){
    console.log("oink oink")
}else{
    console.log("Hey! You're not a pig.")
}
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
// Commit



// E: Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."


let age = 12

if(age >= 16){
    console.log("Here are the keys")
}else{
    console.log("Sorry, you're too young")
}


// II. Loops
// Remember: USE letwhen you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)

// This is NO GOOD: for(i = 0; i < 100; i++)

// A. The basics
// 1: Write a loop that will print out all the numbers from 0 to 10, inclusive
for(let i =0;i<=10;i++){
    console.log(i)
}
// 2: Write a loop that will print out all the numbers from 10 up to and including 400
for(let i =10;i<=400;i++){
    console.log(i)
}
// // 3: Write a loop that will print out every third number starting with 12 and going no higher than 4000
for(let i = 12;i <= 4000;i+=3){
    console.log(i)
}

// B. Get even
// 1: Print out the numbers that are within the range of 1 - 100
for(let i =1;i<=100;i++){
    console.log(i)
}
// 2: Adjust your code to add a message next to even numbers only that says:  is an even number
for(let i =1;i<=100;i++){
    if(i % 2 == 0){
      console.log(`${i}is an even number`)  
    }   
  console.log(i)
}


// C. Give me Five
// 1: For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
for(i=0;i<=100;i++){
  if(i % 5 ==0){
    console.log(`I found a ${i} . High five!`)
  }
  console.log(i)
}
// 1: Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
for(i=0;i<=100;i++){
    if(i % 5 ==0){
      console.log(`I found a ${i} . High five!`)
    }else if(i % 3 ==0){
      console.log(`I found a ${i} . Three is a crowd`)
    }
    console.log(i)
  }


// D. Savings account
// 1: Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.


let money = 0
for(let i = 0; i<= 10; i++){
   money += i
   console.log(money)
}



// 2: You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

 money = 0
for(let i = 0; i<= 100; i++){
   money += i*2
   console.log(money)
}

// III. Arrays & Control flow

// A. Talk about it:
// 1: What are the things in an array called?
'Elements'
// 2:Do Arrays guarantee those things will be in order?
'yes. Arrays are indexed'
// 3:What real-life thing could you model with an array?
'a pizza box , the slices would be arrays'

// B. Easy Does It
// 1: Create an array that contains three quotes and store it in a variable called quotes
let quotes =["It is what it is","No regerts","Work Work Work Work Work Work"]

// C. Accessing elements
// Given the following array 
const randomThings = [1, 10, "Hello", true]

// 1: How do you access the 1st element in the array?
console.log(randomThings[0])
// 2: Change the value of "Hello"to "World"
randomThings[2]= "World"

// 3: Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)

// D. Change values
// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// 1: What would you write to access the 3rd element of the array?
console.log(ourClass[2])
// 2: Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat"
// 3: Add a new element, "Cloud City" to the array
ourClass.push("Cloud City")
console.log(ourClass)

// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: 
const myArray = [5, 10, 500, 20]

// 1: Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon","Faegon")
myArray.push("Faegon")
//2:  Remove the 5from the beginning of the array.
myArray.shift(5)
//3:  Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley")
//4:  Remove the string of your choice from the end of the array.
myArray.pop()
//5:  Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
myArray.reverse()
console.log(myArray)

// F. Biggie Smalls
// Create a variable that contains an integer.
let num = 104
// Write an if ... elsestatement that:
// 1: console.log()s "little number" if the number is entered is less than 100
// 2: console.log()s big numberif the number is greater than or equal to 100.
     if(num < 100){ 
  console.log(`${num} "little number"`)
}else if(num > 100){
  console.log(`${num} "big number"`)
}

// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:

//1:  console.log()little numberif the number entered is less than 5.
//2: If the number entered is more than 10, log big number.
//3: Otherwise, log "monkey".
let x = 6
  if(x < 5){
    console.log(`Little  ${x}`)
  }else if(x > 10){
    console.log(`Bigger ${x}`)
  }else{
    console.log("Monkey")
  }

// H. What's in Your Closet?
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// // Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// 1: What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)
//2:  Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice  (6,0,"raybans")
console.log(kristynsCloset)
//3:  Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset.splice (5,1,'stained knit hat')
console.log(kristynsCloset)
//4:  Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
console.log(thomsCloset[0][0])
// 5: In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][1])
//6:  Access one item from Thom's accessories array.
console.log(thomsCloset[2][1])
//7:  Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking great in a ${thomsCloset[0][0]},${thomsCloset[1][1]},${thomsCloset[2][1]}`)
// 8: Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1].splice(2,1,"Footie Pajamas")
console.log(thomsCloset)


// IV. Functions
// A. printGreeting

const printGreeting =(name)=>{
 console.log(`Hello ! ${name}`)
}
printGreeting("Slimer")
// B. printCool

const printCool =(name)=>{
  console.log(`${name} is super cool`)
}
printCool('Captain Reynolds')
// C. calculateCube
// console.log(calculateCube(5));
const calculateCube = (num)=>{
  console.log(num*num*num)
}
calculateCube(5)
// D. isVowel
// console.log(isVowel("a"));
const isVowel = (string)=>{
  if(string == "a"|| "e"||"i"||"o"||"u"){
    console.log("is a Vowel")
  }
}
isVowel("a")
// E. getTwoLengths
// console.log(getTwoLengths("Hank", "Hippopopalous"));
const getTwoLengths = (str1,str2)=>{
    console.log(str1.length,str2.length)
}
getTwoLengths("Hank", "Hippopopalous")
// F. getMultipleLengths
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
const getMultipleLengths = ([arr1,arr2,arr3,arr4])=>{
  console.log(arr1.length,arr2.length,arr3.length,arr4.length)
}
getMultipleLengths(["hello", "what", "is", "up", "dude"])
// G. maxOfThree
// console.log(maxOfThree(6, 9, 1));
const maxOfThreeNums = (a,b,c)=>{
  let max;
  if(a>b && a>c){
      max =a
  }else if(b>a && b>c){
      max =b
  }else{
      max =c
  }
  console.log(`${max} is greatest`)
}
maxOfThreeNums(6,9,1)
// H. printLongestWord
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

const printLongestWord = ([a,b,c]) =>{
  
  if(a.length > b.length && c.length){
      console.log(`${a.length},${a} `);
  }else if(c.length > a.length && b.length){
    console.log(`${c.length},${c} `);
  }else{
    console.log(`${b.length},${b} `);
  }
} 

printLongestWord(["BoJack", "Princess", "Diane"]);


// Objects
// // Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.

// A. Make a user object
// 1: Create an object called user.
// 2: Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
let user = {
  name:"Bob",
  email:"blahblahblah@gmail.com",
  age:18,
  purchased:[],
}
console.log(user)

// B. Update the user
// 1: Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
 user.email = "newEmail@gmail.com"
 console.log(user)
// 2: Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
user.age++
console.log(user)

// C. Adding keys and values
//1:  You have decided to add your user's location to the data that you want to collect.
user.location = "New York"
console.log(user)

//2:  Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
user.location = "Chicago"
console.log(user)

// D. Shopaholic!
// 1: Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
user.purchased.push("carbs")
console.log(user)
// 2: Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
user.purchased.push("peace of mind")
console.log(user)
// 3: Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// 4: Console.log just the "Merino jodhpurs" from the purchasedarray.
user.purchased.push("Merino jodhpurs")
console.log(user)
// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friendwith a nameand age, we could write:
// user.friend = {
//   name: "Grace Hopper",
//   age: 85
// }
// When we console.log user, we would see the friendobject added to our user object.

//1:  Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
  name:"Grace Hopper",
  age: 21,
  location:"Canada",
  purchased:[]

}
console.log(user.friend)
//2:  Console.log just the friend's name
console.log(user.friend.name)
//3:  Console.log just the friend's location
console.log(user.friend.location)
//4:  CHANGE the friend's age to 55
user.friend.age = 55
console.log(user.friend)
//5:  The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
user.friend.purchased.push("The One Ring")
// 6: The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push("A latte")
console.log(user.friend)
// 7: Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend.purchased[1])
// F. Loops
// 1: Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
for(let i=0;i< user.purchased.length;i++){
  console.log(user.purchased[i])
}
//2:  Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
for(let i=0;i< user.friend.purchased.length;i++){
  console.log(user.friend.purchased[i])
}

// G. Functions can operate on objects
// 1: Write a single function updateUserthat takes no parameters. When the function is run, it should:
//2:  it should increment the user's age by 1
//3:  make the user's name uppercase


user.age++
user.name ="Bob".toUpperCase()

console.log(user)














