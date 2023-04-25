//Calculate the sum of numbers in an array of numbers

function sumOfNumbers(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        let element = arr[i];
        sum += element;
    }
    return sum;
}
let numArray = [10, 20, 30, 40];
let result = sumOfNumbers(numArray)
console.log(result);

