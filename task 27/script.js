'use strict'

var arr = ["HTML", "JavaScript", "CSS"];

function getSortedArr(arr) {
    var arr2 = [];

    for (var i = 0; i < arr.length; i++) {
        arr2[i] = arr[i];
    }

    return arr2.sort();
}

console.log(getSortedArr(arr));