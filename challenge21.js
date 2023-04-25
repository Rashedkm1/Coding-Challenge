// Rotate an array to the right 1 position
let fruits = ["Banana", "Orange", "Apple", "Mango"];
const rotateArray = (arr) => {
    let item = arr.pop();
    arr.unshift(item);
    return arr;
};
console.log(rotateArray(fruits));