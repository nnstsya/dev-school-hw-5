function findTheHighestPossibleNumber(number) {
    if (number >= 0) {
        let arrayOfIntegers = Array.from(String(number), Number);
        for (let i = 0; i <= arrayOfIntegers.length; i++) {
            for (let j = 0; j <= arrayOfIntegers.length; j++) {
                if (arrayOfIntegers[j] < arrayOfIntegers[j + 1]) {
                    let swapNumbers = arrayOfIntegers[j];
                    arrayOfIntegers[j] = arrayOfIntegers[j + 1];
                    arrayOfIntegers[j + 1] = swapNumbers;
                }
            }
        }
        number = Number(arrayOfIntegers.join(''));
        return number;
    } else {
        return "This function that can take only non-negative integers";
    }
}

console.log(findTheHighestPossibleNumber(527002315));
console.log(findTheHighestPossibleNumber(-467272315));