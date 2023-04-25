// Coding challenge #20: Rotate an array to the left 1 position
let fruits = ["Banana", "Orange", "Apple", "Mango"];

const rotateArr = (arr) => {
    let item = arr.shift();
    arr.push(item)
    return arr; 
};
console.log(rotateArr(fruits));