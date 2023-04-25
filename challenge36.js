// Coding challenge #36. Create a function that converts a string to an array of characters
let data = "rashed khan menon"
const StringToArray = (text) => {
    return Array.from(text) // Array.from()- অ্যারে হও 'string" থেকে
};

let convertArr = StringToArray(data);
console.log(convertArr);