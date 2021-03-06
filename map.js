
function map(arr, func) {
    const newArray = new Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = func(arr[i])
    }
    return newArray
}

// Test 1
console.log('\nTEST 1')
const numberArray = [10, 50, 100]
const newNumberArray = map(numberArray, x => x + 5)
console.log(newNumberArray) // [15, 55, 105]
console.log(numberArray)    // [10, 50, 100] 

// Test 2
console.log('\nTEST 2')
const stringArray = ['boll', 'häst', 'flygplan']
const newStringArray = map(stringArray, str => str.toUpperCase())
console.log(newStringArray) // ['BOLL', 'HÄST', 'FLYGPLAN']
console.log(stringArray)    // ['boll', 'häst', 'flygplan']

// Test 3 - GÖR ETT EGET TEST HÄR
console.log('\nTEST 3')
const nameArray = ['kAlle', 'NiSSe', 'BerT']
const newNameArray = map(nameArray, str => (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()))
console.log(nameArray)
console.log(newNameArray)  