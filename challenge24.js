// Coding challenge #24: Create a function that will merge two arrays and return the result as a new array
// Method 1
// const numArr1 = [1, 2, 3, 5];
// const numArr2 = [6, 4, 7]
// let newArr = [];
// const mergeArrs = (arr1, arr2) => {
//     newArr = [...numArr1, ...numArr2];
//     return newArr;
// };

// console.log(mergeArrs(numArr1, numArr2));

// Method 2

const numArr1 = [1, 2, 3, 5];
const numArr2 = [6, 4, 7]
let newArr = [];
const mergeArrs = (arr1, arr2) => {
    for(let i = 0; i < arr1.length; i++){
        let el = arr1[i];
        if(!arr2.includes(el)){
            newArr.push(el)
        }; 
    };

    numArr2.forEach((el) => {
        if(!arr1.includes(el)){
            newArr.push(el)
        }
    });

    return newArr.sort((a, b) => a - b);

};

console.log(mergeArrs(numArr1, numArr2));