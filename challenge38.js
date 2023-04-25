// Coding challenge #38. Create a function that will convert an array containing ASCII codes in a string

let codes = [73, 32, 108, 105, 107, 101, 32, 74, 97, 118, 97, 83, 99, 114, 105, 112, 116]
const fromCharCode = (data) => {
    return String.fromCharCode(...codes);
};
const result = fromCharCode(codes);
console.log(result);