// Primitive Data Types

// 7 types " String, Number, Boolean, Undefined, Null, Symbol, BigInt

const score = 33
const scoreValue = 100.3
const isLoggedIn = true
const isLoggedOut = false   
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = BigInt(1234567890123456789012345678901234567890n)
console.log(bigNumber);


// Reference  (Non primitive) Data Types  Object, Array, Function 

const heros = ["shaktiman", "superman", "batman"] // Array
const hero = {
    name: "shaktiman",
    power: "fly"
} // Object

const myFunction = function() {
    console.log("Hello World");
} // Function's are first class citizens in JS

console.log(typeof score);

// https://262.ecma-international.org/5.1/#sec-11.4.3