//  objects can be declared in two ways literal and constructor
// singleton => constructor
// Object.create

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name:"Ashutosh",
    "full name": "Ashutosh Shukla",
    [mySym]: "myKey1",
    age: 21,
    email: "ashutosh@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "Ashutosh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Ashutosh74598@gmail.com"
// console.log(JsUser);

JsUser.greeting =  function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo =  function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




