function printDistances(n) {
    let result = [];
    let lastPrime = 2;
    let primeNum = 1
    
    for(let i = lastPrime + 1; primeNum < n; i++){
        if(isPrime(i)){
            let distance = i - lastPrime;
            result.push(distance);
            primeNum++;
            lastPrime = i;
        }
    }
    return result;
}

// Returns true if number n is prime
function isPrime(n) {
    if (n < 2)
        return false;

    if (n == 2)
        return true;

    var maxDiv = Math.sqrt(n);

    for (var i = 2; i <= maxDiv; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}
console.log(printDistances(50));;