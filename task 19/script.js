'use strict'

var arr = [5, 4, 3, 8, 0, 9];

function filterRange(arr, from, to) {
    var arrRange = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= from && arr[i] <= to) {
            arrRange.push(arr[i]);
        }
    }
    return console.log(arrRange);
}



var filtered = filterRange(arr, 3, 8);