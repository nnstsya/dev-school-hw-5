function highAndLow(stringOfNumbers) {
    let arrayOfDigits = stringOfNumbers.trim().split(/\s+/);
    function isThereANumberInTheString() {
        let numberOfDigits = 0;
        for (let i = 0; i < arrayOfDigits.length; i++) {
            if (!isNaN(arrayOfDigits[i]) && arrayOfDigits[i]) {
                numberOfDigits++;
            }
        } return numberOfDigits;
    }
    let numberOfDigits = isThereANumberInTheString();
    if (numberOfDigits > 0) {
        for (let i = 0; i < arrayOfDigits.length; i++) {
            for (let j = 0; j < arrayOfDigits.length; j++) {
                if (arrayOfDigits[j] > arrayOfDigits[j + 1]) {
                    let swapNumbers = arrayOfDigits[j];
                    arrayOfDigits[j] = arrayOfDigits[j + 1];
                    arrayOfDigits[j + 1] = swapNumbers;
                }
            }
        } console.log(arrayOfDigits[arrayOfDigits.length - 1] + " " + arrayOfDigits[0])
    } else {
        console.log("Please write at least one number.")
    }
}
highAndLow("        -4536 13           1 54 65 2 1");
