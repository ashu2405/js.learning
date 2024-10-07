
function sayMyName(){
    console.log("A");
    console.log("s");
    console.log("h");
    console.log("u");
    console.log("t");
    console.log("o");
    console.log("s");
    console.log("h");

}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){

    let result = number1 + number2
    // console.log("Ashutosh");
    // return result
    return number1 + number2
        
}

const result = addTwoNumbers(3, 5)

// console.log("Result:", result);

function loginUserMessage(username){
    if(username === undefined){
        // if(!username)
            // console.log("please enter a username");
            return
            
    }
    return`${username} just logged in`
}

// console.log(loginUserMessage("Ashutosh"))
// console.log(loginUserMessage("Ashutosh"))

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Ashutosh",
    price: 199

}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 200
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500]));

