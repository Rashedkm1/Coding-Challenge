// Coding challenge #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

var ar1 = [1, 2, 3, 10, 5, 3, 14];
var ar2 = [1, 4, 5, 6, 14];

let newArr = [];
const uniqueArr = (arr1, arr2) => {
    for(let el of arr1){
        if(!arr2.includes(el)){
            newArr.push(el)
        }
    };

    for(let el of arr2){
        if(!arr1.includes(el)){
            newArr.push(el);
        }
    }

    return newArr;
};

console.log(uniqueArr(ar1, ar2));

