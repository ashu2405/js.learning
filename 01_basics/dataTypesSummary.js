// Primitive Data Types > Call  by value

// 7 Types : String, Number, Boolean, null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = ('123')

console.log(id === anotherId);

// const bigNumber = 345335435346636n


// Non Primitive ( Reference )

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Ashutosh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.4


// ************************************************

// Stack(Primitive), Heap (Non-Primitive)

let myName = "Ashutosh"

let anotherName = myName
anotherName = "ashutoshukla"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "ashutosh74598@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ashutosh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
