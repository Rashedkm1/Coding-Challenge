// #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"
const getPrimes = (nPrimes, startAt) => {
    let primes = [];
    let count = 0;

    for(let i = 2; startAt < nPrimes; i++){
        if(isPrime(i)){
            primes.push(i);
            startAt++;
            count++;
        }
    }
    return [primes, count]
}
const isPrime = (num) =>{
    if(num <= 1){
        return false;
    }else if(num == 2 || num == 3){
        return true;
    } else{
        for(let i = 2; i < Math.sqrt(num); i++){
            if(num % i == 0){
                return false;
            }
        }
    }
    return true;
};
console.log(getPrimes(100, 10));