'use strict'

var arr = [1,2,3,4,5, 6, 7];
var arr2 = [];

function getSum(prevValue, currValue, index, arr) {

    var number = prevValue + currValue;
    arr2.push(number);

    if (arr2.length == arr.length) return arr2;
    return number;
}

console.log(arr.reduce(getSum, 0));