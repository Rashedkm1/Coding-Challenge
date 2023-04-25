// Calculate the sum of odd numbers greater than 10 and less than 30

function somOfOddNumbers(start, end){
    let sum = 0;
    for(let i = start; i <= end; i++){
        if(i % 2 !== 0){
            sum += i;
        }
    }
    return sum;
}

let result = somOfOddNumbers(10, 30);
console.log(result);