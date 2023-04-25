// Coding challenge #35. Create a function to convert a CSV text to a “bi-dimensional” array

let data = "John;Smith;954-000-0000\nMich;Tiger;305-000-0000\nMonique;Vasquez;103-000-0000";

const csvToArr = (text) => {
    text = text.split('\n');
    return text.map(line => line.split(";"));    
};

let ar = csvToArr(data);
console.log(JSON.stringify(ar));
