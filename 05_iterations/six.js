//for each loop contineu

//const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) =>{
//    // console.log(item);
//     return values
    
// })
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7,8, 9, 10]

//const newNums = myNums.filter((num) => num > 4)

// const newNums = myNums.filter((num) => {
//     return num > 4   // make sure to write return to return scope
// })

// const newNums = []

//  myNums.forEach((num) => {
//     if (num > 4) {
//             newNums.push(num)
//     }
//  })

//console.log(newNums);

const books = [
    {title: 'Book One', genre: "Science", publish: 1981, edition: 2004},
    {title: 'Book Two', genre: "Fiction", publish: 1992, edition: 2008},
    {title: 'Book Three', genre: "History", publish: 1995, edition: 2007},
    {title: 'Book Four', genre: "History", publish: 1980, edition: 2004},
    {title: 'Book Five', genre: "History", publish: 1981, edition: 2002}
    
    ]
    
    let userBooks = books.filter((bk) => bk.genre === 'History')

    userBooks = books.filter((bk) => { return bk.publish <=1992 && bk.genre === 'History'})

    console.log(userBooks);
    
    

