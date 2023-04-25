// Coding challenge #26: Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

var ar1 = [1, 2, 3, 10, 5, 3, 14];//1 2 3 10 3 
var ar2 = [-1, 4, 5, 6, 14];
let newArr = [];

const uniqueArr = (arr1, arr2) => {
    for(let el of arr1){
        if(!arr2.includes(el)){
            newArr.push(el);
        }
    }
    return newArr;
};
console.log(uniqueArr(ar1, ar2));
