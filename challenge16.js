//Create a function that will return a Boolean specifying if a number is prime
// মৌলিক সংখ্যা বের করার অনেক নিয়ম রয়েছে তবে সবচেয়ে সহজ পদ্ধতি হচ্ছে পরীক্ষামূলক ভাগ। এখানে সংখ্যাকে n ধরা হয় এবং ২ থেকে শুরু করে n এর বর্গমূল পর্যন্ত কোনো দুইটি সংখ্যার গুনফল কিনা তা দেখতে হয়।

function isPrime(num) {
    if(num <= 1){
        return "is not prime number";
    }
    if(num <= 3){
        return "is prime number";
    }

    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return "is not prime number";
        };
        
    }
    return "is prime number";
}

console.log(isPrime(7));

/** 
//Another Way
function isPrime(n) {
    if (n < 2)
        return false;

    if (n == 2)
        return true;

    var maxDiv = Math.sqrt(n);

    for (var i = 2; i <= maxDiv; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}

console.log(2, " is prime? ", isPrime(2));

*/