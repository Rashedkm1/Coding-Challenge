// Coding challenge 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number



const extractColumn = (arr, colNo) => {
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(ar[i][colNo]);        
    }
    return newArr
};

const ar =[["John", 120],["Jane", 115],["Thomas", 123],["Mel", 112],["Charley", 22]];

const result = extractColumn(ar, 1);
console.log(result);