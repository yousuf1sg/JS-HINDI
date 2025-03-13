const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval" ${currval}`);
    
//     return acc + currval
// }, 3)


const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: " js course",
        price: 2999
    },
    {
        itemName: "pythonourse",
        price: 1999
    },
    {
        itemName: " mobile dev course",
        price: 5999
    },
    {
        itemName: " Data Science course",
        price: 12999
    },
    {
        itemName: "  c++ course",
        price: 3999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc+ item.price, 0)

console.log(priceToPay);
