const isPrimeFunc = (num) => {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false
    return num > 1
}

function findPrimes(n) {
    const array = [];
    for (let i = 0; i < n; i++) {
        //console.log("[INFO] Analyzing Number: " + i)
        if (isPrimeFunc(i)) {
            array.push(i)
        }
    }
    return array
}

console.log(findPrimes(100000))