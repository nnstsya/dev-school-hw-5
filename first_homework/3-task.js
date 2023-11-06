function findNb(m) {
    let result = 0;
    let n = 1;
    while (result <= m) {
        result += n ** 3;
        if (result === m) {
            break;
        } else {
            n++;
        }
    }
    if (result === m) {
        return n;
    } else {
        return -1;
    }
}

console.log(findNb(1071225));
console.log(findNb(91716553919377));