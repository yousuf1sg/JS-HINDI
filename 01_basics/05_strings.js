const name = "hitesh"
const repoCount = 100

// console.log(name + repoCount + " Value");

// Use always this style

// console.log(`${name} has ${repoCount} repositories`);

const gameName = new String("hitesh-hc-com")

// console.log(gameName[0]);

// console.log(gameName.charAt(2));
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh     "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimLeft());
console.log(newStringOne.trimRight());

const url = "https://www.hiteshchoudhary.com/hitesh%20choudharay"

console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));

