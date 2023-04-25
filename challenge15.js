//#15: Create a function that will find the nth Fibonacci number using recursion
//0 1 1 2 3 5 8 13 21 34... 
//জাভাস্ক্রিপ্টে রিকারসন হল একটি প্রোগ্রামিং কৌশল যেখানে একটি নির্দিষ্ট শর্ত পূরণ না হওয়া পর্যন্ত একটি ফাংশন বারবার কল করে। এটি জটিল সমস্যা সমাধানের জন্য একটি শক্তিশালী টুল যা বারবার গণনা জড়িত।
function nthFibonacciNumber(num) {
  if(num < 2){
    return num;
  } else {
    return nthFibonacciNumber(num - 2) + nthFibonacciNumber(num - 1);
  }
};
console.log(nthFibonacciNumber(7));




/** 
//#15: Create a function that will find the nth Fibonacci number without recursion

  function nthFibonacciNumber(num) {
    let n1 = 0;
    let n2 = 1;
    let fibonacciSeries = [n1, n2];
    let nthFibonacci = 0;

    for(let i = 2; i <= num; i++){
      nthFibonacci = n1 + n2;
      fibonacciSeries.push(nthFibonacci);
      n1 = n2;
      n2 = nthFibonacci;
    }
    return nthFibonacci;
  };
  console.log(nthFibonacciNumber(7));
*/