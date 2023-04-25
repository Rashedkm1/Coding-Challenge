//#17: Calculate the sum of digits of a positive integer number
/** 
const sumOfDigits = (num) => {
    let sum = 0;
    while(num > 0){
        let digits = num % 10;
        sum += digits;
        num = Math.floor(num / 10);
    }

    return sum;
}; 
console.log(sumOfDigits(123));
*/

// Another Way with recursion
/** 
const sumOfDigits = (num) => {
    if(num === 0){
        return 0;
    } else {
        let digits = num % 10;
        //First iteration: num = 123,  123 % 10 = 3
        //Second iteration: num =12, 12 % 10 =2
        //Third iteration: num =1, 1 % 10 = 1
        let remainingDigits = Math.floor(num / 10);
        //First iteration: (123 / 10) =12.3,   Math.floor(123 / 10) = 12
        //Second iteration: (12 / 10) =1.2 Math.floor(12 / 10) = 1
        //Third iteration: (1 / 10) =1 Math.floor(1 / 10) = 0
        let sum = digits + sumOfDigits(remainingDigits); 
        //1st ‍sum = 3 + sumOfDigits(12) [The function calls itself ]
        //2nd     = 3 + 2 + sumOfDigits(1) [The function calls itself ]
        //3rd     = 3 + 2 + 1 + sumOfDigits(0) [The function calls itself]
        //        = 3 + 2 + 1 + 0 => 6

        return sum;

    }
};
console.log(sumOfDigits(123));
*/

const sumOfDigits = (num) => {
    let temp = num.toString();
    let sum = 0;
    // for(let char of temp){
    //     let digit = parseInt(char);
    //     sum = sum + digit;
    // }
    // I can Also use the loop below
    for(let i = 0; i < temp.length; i++){
        let digit = parseInt(temp[i]);
        sum += digit;
    }
    return sum;
}; 
console.log(sumOfDigits(123));