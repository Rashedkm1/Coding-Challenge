//#22: Reverse an array
// let fruits = ["Banana", "Orange", "Apple", "Mango"];

const reverseArr = (arr) => {
    let newArr = [];
    for(let item of fruits){
        newArr.unshift(item);
    }
    return newArr;
};
console.log(reverseArr(fruits));


/** 
const reverseArr = (arr) => {
    let newArr = [];
    for(let i = arr.length - 1; 0 <= i; i--){
        newArr.push(arr[i]);
    }
    return newArr;
};

console.log(reverseArr(fruits));
*/

/** 
const reverseArr = (arr) => {
    arr.reverse();
    return arr
};
console.log(reverseArr(fruits));
*/

/** 
let fruits = ["Banana", "Orange", "Apple", "Mango"];
const reverseArr = (arr) => {
    return fruits.reduce((accu, curr) => {
        return [curr, ...accu ]
    }, []);
};
console.log(reverseArr(fruits));
    
*/