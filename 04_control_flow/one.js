// if

const isUserLoggedIn = true
const temperature = 41

// if (temperature < 50 ){
//         console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50")
// }
// console.log("Executed")
// // if (temperature < 50 ){
//     console.log("executed");
// }


//3 != 2
// <, >, <=, ==, === data type

// if (2 == "2"){
//     console.log("executed");
// }

//+++++  scope related example +++++++++

//const score = 200

// if (score > 100) {
//         let power = "fly"
//         console.log(`Ueser Power: ${power}`)
        
// }
// console.log(`Ueser Power: ${power}`)

//const balance = 1000

//if (balance > 500 ) console.log("test"), console.log("test2")

// if (balance < 500 ) {
//         console.log("less than 500")
// } else if (balance < 750 ) {
//     console.log("less than 750")
// } else if (balance < 900 ) {
//     console.log("less than 900")
// } else {
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = false
const loggedInGoogle = true

if (userLoggedIn && debitCard && 2==3) {
        console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInGoogle) {
        console.log("User logged In")
}