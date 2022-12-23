// let arr = [3, -2, -21, 27, 5, 7]; let a = 9; let b = -11;

function selectFromInterval(arr, a, b) {
    let result = [];
    let min = 0;
    let max = 0;

    if (arr.every(function(item) {return typeof item === 'number'}) &&
        typeof a === 'number' && typeof b === 'number') {

        if (a > b) {max = a; min = b} else {max = b; min = a}

        arr.forEach(function(item) {
        if (min<=item && item<=max)
        result.push(item);
        })
        return result;
    } else {throw new Error('Ошибка!')}
}

console.log(selectFromInterval(arr, a, b));