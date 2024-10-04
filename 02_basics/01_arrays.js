// arrays in JS are resizable

const myArr = [0, 1, 2, 3, 4, 5,]
const myHeros = ["Shaktimaan", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()


// console.log(myArr);
// console.log(newArr);

// slice 

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

// splice

const myn2 = myArr.splice(1, 3)
console.log("c", myArr);
console.log(myn2);





