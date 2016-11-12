'use strict'

var arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b ) {
            arr.splice(i--, 1);
        }
    }

}


filterRangeInPlace(arr, 3, 5); 
console.log(arr);