// Find the maximum number in an array of numbers

/** 
function findMaxNumber(arr){
    let maxNum = 0;
    for(let i = 0; i < arr.length; i++){
        element = arr[i];
        if(element > maxNum){
            maxNum = element;
        }
    }
    return maxNum;
}
let arr = [2, -4, 7, -2, 8, 9, -1];
let result = findMaxNumber(arr);
console.log(result);
*/



// Find the maximum number in an array of numbers (Another Way)
/** 
function findMaxNumber(arr){
    let maxNum = 0;
    arr.filter((item) => {
        if(item > maxNum){
            maxNum = item;
        }
    });
    return maxNum
}
let arr = [2, -4, 7, -2, 8, 9, -1];
let result = findMaxNumber(arr);
console.log(result);
*/


// Find the maximum number in an array of numbers (Another Way)
function findMaxNumber(arr){

    const filterNums = arr.filter((item) => {
        return typeof item == 'number';
    });

    const maxNums = filterNums.sort((a, b) => {
        return b - a;
    });
    const maxNum = maxNums[0];
    return maxNum;
}

let arr = [5, 10, 'hello', 3, null, 8, 1, undefined, 6];
let result = findMaxNumber(arr);
console.log(result);