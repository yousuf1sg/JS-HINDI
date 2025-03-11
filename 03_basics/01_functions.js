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
//console.log(loginUserMessage("Hitesh")) // output: undefined just logged in

function calculateCartPrice(...num1) {
    return num1 

}

//console.log(calculateCartPrice(200, 400, 500, 2000)) // output: 2  

const user = {
    username: "Hitesh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 299  
}) 

const myNewArray = [200, 400, 600 ]
    
function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray)) // output: 400   ;

console.log(returnSecondValue([100, 200, 300])) // output: 200   ;  // this is how to call function
