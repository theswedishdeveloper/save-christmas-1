
function filter(arr, func) {
    const newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            newArray.push(arr[i])
        }
    }
    return newArray
}

// TEST 1
const numbers = [4, 10, 3, 12, 5, 16, 8, 13, 2, 9, 1, 11, 2]
const filteredNumbers = filter(numbers, x => x < 10)
console.log(filteredNumbers)

// TEST 2 - skriv själv
const numbers2 = [5, 1, 2, 100, 25, 24, 4, 1, 0, -1, 5, 50]
const filteredNumbers2 = filter(numbers2, x => x < 10)
console.log(filteredNumbers2)


// TEST 3 - skriv själv
const numbers3 = [55, 2, 3, 4, 5]
const filteredNumbers3 = filter(numbers3, x => x < 10)
console.log(filteredNumbers3)
