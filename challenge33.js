//Coding challenge #33. Calculate the sum of numbers received in a comma delimited string

const sum = (arr) => {
    let nums = arr.split(",");
    let sum = 0; 

    for(let i = 0; i < nums.length; i++){
        sum += Number(nums[i]);
    }
    return sum;
}

const numbers = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";
const sumOfNumbers = sum(numbers);
console.log(sumOfNumbers);