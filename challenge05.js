//Calculate the sum of numbers from 1 to 10

function sumOfNumbers(start, end){
    let sum = 0;
    for(let i = start; i <= end; i++){
        sum += i;
    }
    return sum;
};
let result = sumOfNumbers(1, 10);
console.log(result);