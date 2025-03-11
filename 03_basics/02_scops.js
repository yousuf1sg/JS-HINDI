// there are 3 types of objects in javascript




//var c = 30
// console.log(a, b, c)

let a = 300
if(true){
    let a = 10
    const b = 20
   //console.log("INNER: ", a)
} // curly bracke is called scope


// for(let i = 0; i < array.length; i++){
//     const element = array[1]
// }

//console.log(a)
//console.log(b)
// console.log(c)

function one(){
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    //two()
}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//+++++++++++  interesting +++++++++++

function addone(num) {
    return num + 1
}

console.log(addone(5))


const addTwo = function(num) {
    return num + 2
}

addTwo(5)
