// Coding challenge #27: Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

// Method 1:
// const arr = [1, 2, 3, 4, 3, 2, 1];
// let uniqueArr = [];
// const distinctArr = (ar) => {
//      uniqueArr = [...new Set(ar)];
//     return uniqueArr;
// };
// console.log(distinctArr(arr));

// Method 2:
// const arr = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100];
// let uniqueArr = [];
// const distinctArr = (ar) => {
//     for(let i = 0; i < ar.length; i++){
//         let el = ar[i];
//         if(!uniqueArr.includes(el)){
//             uniqueArr.push(el);
//         }
//     }
//     return uniqueArr;
// };
// console.log(distinctArr(arr));

// Method 3:
const arr = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100];
const distinctArr = (ar) => {
    const newArr = ar.filter((el, index, arr) => {
        return arr.indexOf(el) == index
    });
    return newArr;
};
console.log(distinctArr(arr));
