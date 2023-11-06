function findIndexN(arr) {

    if (0 < arr.length < 1000) {

        let sumOfIntegersBeforeI = 0;
        let sumOfIntegersBAfterI = 0;
        let indexN = -1;

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < i; j++) {
                sumOfIntegersBeforeI += arr[j];
            }
            for (let k = i + 1; k < arr.length; k++) {
                sumOfIntegersBAfterI += arr[k];
            }
            if (sumOfIntegersBeforeI === sumOfIntegersBAfterI) {
                indexN = i;
                break;
            }
            sumOfIntegersBeforeI = 0;
            sumOfIntegersBAfterI = 0;
        }
        return indexN;
    }
    else {
        console.log("Length of array should be in range 0 < arr.length < 1000")
    }

}

let indexN = findIndexN([1, 2, 3, 4, 3, 2, 1])
console.log(indexN);