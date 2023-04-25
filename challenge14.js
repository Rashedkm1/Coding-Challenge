
/**
 
// Print the first 10 Fibonacci numbers without recursion
const fibonacciSeries = (n) => {
    let n1 = 0;
    let n2 = 1;
    let series = [n1, n2];
    let fibo;
    for (let i = 2; i < n; i++) {        
        fibo = n1 + n2;
        series.push(fibo);
        n1 = n2;
        n2 = fibo;
    }

    return series;
}
let result = fibonacciSeries(10);
console.log(result);
*/


// Print the first 10 Fibonacci numbers without recursion (anothery Way)
/**
 const fibonacciSeries = (n) => {
    for(let i = 0; i < 10; i++){
        if(n <= 1){
            return n;
        }
        return fibonacciSeries(n-1) + fibonacciSeries(n-2);
    }
}
console.log(fibonacciSeries(10));

*/


// Print the first 10 Fibonacci numbers without recursion (anothery Way)
/**
const fibo = (n) => {
    let fibo = [0, 1];
    for (let i = 2; i < n; i++) {
        fibo.push(fibo[i - 2] + fibo[i - 1]);        
    }
    return fibo;
}

console.log(fibo(10));

 */


// Print the first 10 Fibonacci numbers with recursion 
const fibonacciSeries = (n) => {
    if(n <= 1){
        return n;
    }else {
        return fibonacciSeries(n - 1) + fibonacciSeries(n - 2);;
    }
}

const fiboArray = [];

for(let i = 0; i < 10; i++){
    fiboArray.push(fibonacciSeries(i))
}


console.log(fiboArray);


