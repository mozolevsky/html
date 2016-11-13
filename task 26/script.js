'use strict'

var arr = [5, 2, 1, -10, 8];

function comparison(a, b) {
    return (a > b) ? 1 : -1;
}

var sortArr = arr.sort(comparison);
var reverseSortArr = sortArr.reverse();

console.log(reverseSortArr);