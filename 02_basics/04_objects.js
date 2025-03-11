// There are two type of objects 
// 1- object constructor with singleton 

// 2- object literals,  with literal the singleton is not there, we can create multiple objects with the same properties and methods

// singleton
//Object.create

//+++++++++++ singleton ++++++++++++++

//const tinderUser = new Object();
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Hitesh"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "Choudhary"

        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}   
const obj4 = {5: "a", 6: "b"}   

// const obj3 = {obj1, obj2}
// console.log(obj3) // output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj3 = Object.assign(obj1, obj2, obj4) // output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign({}, obj1, obj2) // output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2, ...obj4} // output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' } 99% used this method
//console.log(obj3)

const users = [
    {
    id: 1,
    email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // false

