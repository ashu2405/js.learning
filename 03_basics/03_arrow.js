const user = {
    username: "ashutosh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
    
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// this refers to current context

// console.log(this);

// function chai(){
//     let username = "Ashutosh"
//     console.log(this);
    
// }

// chai()

const chai = () => {
    let usename = "Ashutosh"
    console.log(this.username);
    
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2

// }

// if curly braces => return : () no need to write return

// implicit return

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2)

const addTwo = (num1, num2) => ({username: "Ashutosh"})



console.log(addTwo(3, 4))


// const myArray = [2, 5, 6, 7, 8]

// myArray.forEach()

