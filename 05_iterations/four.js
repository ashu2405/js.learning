// for in loop is used for objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    Swift: "Swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject[key]}`);
    
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
        console.log(programming[key]);
        
}