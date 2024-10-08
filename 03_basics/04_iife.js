// Immediately Invoked Function Expression (IIFE)
// IIFE is degined as a function which executed immediately. 
// Global scope k pollution se problem hoti h kaafi baar to declared variable ya jo bhi h uske pollution ko htane k liye use krte h

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
}) ();

// simple IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) (`Ashutosh`) 

