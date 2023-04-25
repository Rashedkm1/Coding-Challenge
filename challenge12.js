// Create a function that receives an array of numbers and returns an array containing only the positive numbers;
/**
function findPositiveNumbers(array){
    let positiveNums = [];
    for(let i = 0; i < array.length; i++){
        let element = array[i];
        if(element > 0){
            positiveNums.push(element);
        }
    }
    return positiveNums;
};

let array = [2, -4, 7, -2, 8, 9, -1];
let result = findPositiveNumbers(array);
console.log(result); 
*/



// Another Way Using For..Of..Loop
/**
function findPositiveNumbers(arr){
    psgNums = [];
    for(element of arr){
        if(element > 0){
            psgNums.push(element);
        }
    }
    return psgNums;
}
let arr = [2, -4, 7, -2, 8, 9, -1];
let result = findPositiveNumbers(arr);
console.log(result)
*/


// Another Way Using Filter
function findPositiveNumbers(arr){
    return arr.filter(function(item){
        return item > 0;
    })
    
}

let arr = [2, -4, 7, -2, 8, 9, -1];
let result = findPositiveNumbers(arr);
console.log(result)