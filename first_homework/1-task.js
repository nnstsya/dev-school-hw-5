function findTheSumOfMultiplies(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i < 0) {
            return 0;
        }
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }   return sum;
}

let sum = findTheSumOfMultiplies(10);
console.log(sum);