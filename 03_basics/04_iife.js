// Immediately Invoked Function Expression

// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai() {
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`FB CONNECTED TWO ${name}`);
})('hitesh')
