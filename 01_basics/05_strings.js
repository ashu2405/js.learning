const name = "Ashutosh"
const repocount = 50

// console.log(name + repocount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);


const gameName = new String('ashu-tosh-shukla')

// to access key value pairs

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);


// neagative values can be given in slice
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  Ashutosh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ashutosh.com/ashutosh%20shukla"

console.log(url.replace('%20', '-'))

console.log(url.includes('ashutosh'))
console.log(url.includes('jethalal'))

console.log(gameName.split('-'));


