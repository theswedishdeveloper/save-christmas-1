
function max(arr) {
    let maxValue = 0
    //använde en forEach loop här ist för en for loop.
    arr.forEach((item) => { if (item > maxValue) maxValue = item })
    return maxValue
}

function min(arr) {
    let minValue = max(arr)
    //använde en forEach loop här ist för en for loop.
    arr.forEach((item) => { if (item < minValue) minValue = item })
    return minValue
}

function mean(arr) {
    // Ledtråd: Börja med att räkna ut summan av alla element
    let meanResult = 0
    for (let i = 0; i < arr.length; i++) {
        meanResult += arr[i]
    }
    meanResult = meanResult / arr.length
    return meanResult
}