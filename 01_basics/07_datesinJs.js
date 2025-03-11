// Dates

let myDate = new Date()
// console.log(myDate); //output: current date and time
// console.log(myDate.toString()); //output: current date
// console.log(myDate.toDateString()); //output: current date
// console.log(myDate.toTimeString()); //output: current time
// console.log(myDate.toLocaleString()); //output: current date and time
// console.log(myDate.toLocaleDateString()); //output: current date
// console.log(myDate.toLocaleTimeString()); //output: current time

// console.log(myDate.toJSON()); //output: 2023-12-25T07:00:00.000Z
// console.log(myDate.toISOString()); //output: 2023-12-25T07:00:00.000Z
// console.log(myDate.toUTCString()); //output: Sun, 25 Dec 2023 07:00:00 GMT

// let myCreatedDate = new Date(2025, 0, 22)
// console.log(myCreatedDate); //output: 2025-01-21T18:30:00.000Z
// console.log(myCreatedDate.toDateString()); //output: Sun Jan 21 2025

// let myCreatedDate = new Date("2025-01-22")
// console.log(myCreatedDate.toDateString()); //output: Sun Jan 21 2025
//let myCreatedDate = new Date(2025, 0, 22, 5, 3)
//console.log(myCreatedDate.toLocaleString()); //output: 1/21/2025, 10:33:00 AM

let myCreatedDate = new Date("01-22-2025") //output: 2025-01-21T18:30:00.000Z
console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp) //output: 1642829400000
// console.log(myCreatedDate.getTime()) //output: 1642829400000  
// console.log(Math.floor(Date.now()/1000)) //output: 1642829400

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// '${newDate.getDay()} and the time '

newDate.toLocaleDateString('default', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
})  //output: Sunday, January 21, 2025
// console.log(newDate.getHours());

