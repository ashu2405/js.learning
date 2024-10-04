// Date

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2024, 0, 23)
// let myCreatedDate = new Date("2024-10-04")
let myCreatedDate = new Date("10-04-2024")
// 

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());

// `${newDate.getDay()} and time `

newDate.toLocaleString('default', {
    weekday: "long"
})





