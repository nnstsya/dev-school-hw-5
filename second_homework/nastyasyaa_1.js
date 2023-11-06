function largestSumHonor(arr, d) {

    let sum1 = 0;
    let sum = 0;
    let n = arr.length;

    if ( n % d === 0 && 1 <= d <= 31 && n > 0) {
        for (let i = 0; i < (n/d); i++) {
            for (let j = i; j < n; j++) {
                sum1 += arr[j];
                j += ((n - d)/(d))
            }
            if (sum1 > sum || (i === 0 && sum === 0)) {
                sum = sum1;
            }
            sum1 = 0;
        }
        return sum;
    }

}
console.log(largestSumHonor( [1, 5, 6, 3, 4, 2], 3));

