// singleton => constructor

// singleton Object
const tinderUser = new Object()

// non singleton Object
const tinderuser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.IsLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Ashutosh",
            lastname: "Shukla"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

// const Obj3 = { obj1, obj2 } 
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "ashutosh@google.com"
    },
    {
        id: 1,
        email: "ashutosh@google.com"
    },
    {
        id: 1,
        email: "ashutosh@google.com"
    }
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('IsLoggedIn'));


