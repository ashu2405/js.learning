// For interview - JS How code is executed

// when we give code to Js, a Global Execution context is created and then it will be place in this variable.
// All this is executed in thread and Javascript is a single threaded language. Everything here is a process.

// JavaScript Execution Context
// Two phases are :
// 1: Creation Phase or Memory Creation Phase

let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result = addNum(val1, val2)
let result2 = addNum(10, 2)

// Global Execution > this > Memory Phase 
 
// val1 => undefined
// val2 => undefined
// addNum => definition
// result1 => undefined
// result2 => undefined

// 2:Execution Phase
// val1 <= 10
// val2 <= 5
// addNum => will create an execution context and new variable environment + execution thread than

// Memory Phase
// val1 => undefined
// val2 => undefined
// total => undefined

// Execution Context 
// num1 => 10
// num2 => 5
// total => 15 ----------- return to global execution context

// the new global execution context will be deleted after the process execution

// result1 = 15
// result2 = 
// for result 2 the same process will be repeated


// Function Execution Context

// Eval Execution Context is a property of global object


