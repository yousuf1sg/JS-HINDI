// There are two type of objects 
// 1- object constructor with singleton 

// 2- object literals,  with literal the singleton is not there, we can create multiple objects with the same properties and methods

// singleton
//Object.create


// object literals

const mySym = Symbol("key1");
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
} // this is object literal, how to declare object value

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com";
//Object.freeze(JsUser);
JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello World");
}   // this is how to add method to object

JsUser.greetingTwo = function() {
    console.log(`Hello World1 ${this.name}`);

} 

// console.log(JsUser.greeting); // function (anonymous)
console.log(JsUser.greeting()); // Hello World
console.log(JsUser.greetingTwo()); // Hello World1 Hitesh


