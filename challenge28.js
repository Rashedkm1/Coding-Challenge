// Coding challenge #28: Calculate the sum of first 100 prime numbers

const sumOfPrimes = (nPrime) => {
    let n = 0;
    let nums = [];    
    for(let i = 2; n < nPrime; i++){
        if(isPrime(i)){
            nums.push(i);
            n++;
        }
    }
    const sum = nums.reduce((accu, curr) => {
        return accu + curr
    }, 0);
    return sum;
}

const isPrime = (num) => {
    if(num < 2) {
        return false;
    } else if(num == 2 || num ===3) {
        return true;
    }else {
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0){
                return false;
            }
        }
    }
    return true;
}

console.log(sumOfPrimes(5));
