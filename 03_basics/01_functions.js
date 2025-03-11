// function defination, function name and parathesis and {} is syntax of function

function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// this is how to declare function

function addTwoNumbers(number1, number2) {
    //console.log(number1 + number2);
    let result = number1 + number2
    return result
    //return number1 + number2
}   // this is how to declare function

    
    

addTwoNumbers(10, 20)
// addTwoNumbers(30, 40)

const result = addTwoNumbers(10, 20)

//console.log("Result: ", result); // output: undefined

function loginUserMessage(username = sam) {
    if(username === undefined) {
        console.log("Please provide a valid username")
        return
    }
    //console.log(`${username} just
    return `${username} just logged in`
}

//console.log(loginUserMessage("Hitesh")) // output: Hitesh just logged in
console.log(loginUserMessage("Hitesh")) // output: undefined just logged in


