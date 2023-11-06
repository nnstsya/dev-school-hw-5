function isPrime(number){
    if (number > 0) {
        let sumOfDivisors = 0;
        for (let i = 0; i <= number; i++) {
            if (number % i === 0) {
                sumOfDivisors += 1;
            }
        }
        if (sumOfDivisors === 2) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(-1));
