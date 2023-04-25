// Coding challenge #37. Create a function that will convert a string in an array containing the ASCII codes of each character

const stringToArray = (str) => {
    let charCode = [];
    for(let i = 0; i < str.length; i++){
        let code = str.charCodeAt(i);
        charCode.push(code);
    }
    return charCode
};

const text = "Hello, world!";
const strToArr = stringToArray(text);
console.log(strToArr);
