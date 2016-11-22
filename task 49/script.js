'use strict'

var arr = [1, 2, 3, 4, 5, 6, 7];

function filter() {
    var arr2 = [];

    return function(arr, func) {
        for (var i = 0; i < arr.length; i++) {
            if (func(arr[i])) {
                arr2.push(arr[i]);
            }
        }
        return arr2;
    }
}

function reminder(num) {
    return num % 2 == 0;
}

function inBetween(a, b) {
    return function(num) {
        if (num > a && num < b) return true;
    }
}

function inArray(arr) {
    return function(num) {
        for (var i = 0; i < arr.length; i++) {
         if (arr[i] == num) {
         return true;
            }
         }

    }
}

var filter = filter();

//console.log(filter(arr, reminder));
//console.log( filter(arr, inBetween(2, 6)) );
console.log(filter(arr, inArray([1, 2, 7, 10])));


