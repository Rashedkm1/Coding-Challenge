//Calculate 10!
// 10! = 10 * 9 * 8 * 7 * 6 * 5 ...

function calculationFactorial(num){
    let fac = 1;
    for(let i = num; i >= 1; i--){
        fac *= i;
    }
    return fac;
}
console.log(calculationFactorial(10));