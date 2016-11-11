'use strict'

var arr = ["test", 2, 1.5, false];

function find(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return console.log(i);
        }
    }

    return console.log(-1);
}

find(arr, 1.5);