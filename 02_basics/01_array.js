// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shakitman", "superman", "batman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);


// Array methods

// myArr.push(6) // add element at the end
// myArr.push(7) // add element at the end
// myArr.pop() // remove element from the end


// myArr.unshift(9) // add element at the start
// myArr.shift() // remove element from the start

// console.log(myArr.includes(3)); // true
// console.log(myArr.includes(33)); // false
// console.log(myArr.indexOf(9)); // 3 

// const newArr = myArr.join()

// console.log(newArr); // 0,1,2,3,4,5
// console.log(myArr); // [0, 1, 2, 3, 4, 5


//slice, splice

console.log("A ", myArr); // [0, 1, 2, 3, 4, 5]

const myn1 = myArr.slice(1, 3)

console.log(myn1); // [1, 2]
console.log("B ", myArr); // [0, 1, 2, 3, 4, 5]

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); // [0, 4, 5]
console.log(myn2); // [1, 2, 3]