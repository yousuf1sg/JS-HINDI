const score = 400
// console.log(score);

// const balance = new Number(1000)
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); //output: 123.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //output: 1,000,000 
// console.log(hundreds.toLocaleString('en-IN')); //output: 10,00,000

// +++++++++++++++ Maths +++++++++++++++

// console.log(Math)   
// console.log(Math.abs(-4)) //output: 4
// console.log(Math.ceil(4.1)) //output: 5
// console.log(Math.floor(4.9)) //output: 4
// console.log(Math.round(4.5)) //output: 5
// console.log(Math.round(4.4)) //output: 4
// console.log(Math.trunc(4.9)) //output: 4
// console.log(Math.trunc(4.1)) //output: 4
// console.log(Math.min(1, 2, 3, 4)) //output: 1
// console.log(Math.max(1, 2, 3, 4)) //output: 4
console.log(Math.random()) //output: random number between 0 and 1
console.log(Math.floor(Math.random() * 10 + 1))   //output: random number between 0 and 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)) //output: random number between 10 and 20