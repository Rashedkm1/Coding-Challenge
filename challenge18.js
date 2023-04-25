// #18: Print the first 100 prime numbers

function getPrimes(nPrimes) {
    let n = 0;
    let count = 0;
    let primes = [];
    for (let i = 2; n < nPrimes; i++) {
        if (isPrime(i)) {            
            primes.push(i);
            count++;
            n++;
        }
    }
    return [primes, count];
}

const isPrime = (num) => {
    if(num <= 1){
        return false;
    }else if(num == 2 || num == 3) {
        return true;
    }else {
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i == 0){
                return false
            }
        }
    }
    return true;
};


console.log(getPrimes(100));





// Print how many prime numbers there are from 1 to 100
/** 
const getPrimes = (start, end) => {
    let primes = [];
    let count = 0;
    for(let i = start; i <= end; i++){
        if(isPrime(i)){
            primes.push(i);
            count++
        }
    }
    return [primes, count];
}

const isPrime = (num) => {
    if(num <= 1){
        return false;
    } else if(num == 2 || num == 3){
        return true;
    } else {
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i == 0){
                return false
            }
        }
    }
    return true;
};

console.log(getPrimes(19, 53));
*/



