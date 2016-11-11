'use strict'

var total = [];

function getNumbers (arr) {
    var element = prompt('Введите значение', '');

    if (element == undefined  ||  isNaN(+element)) {
        return console.log(getSum(arr));
    }

    arr.push(+element);
    getNumbers(arr);
}

function getSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

getNumbers(total);