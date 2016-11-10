'use strict'

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};


function getSalariesSum(obj) {
    var sum = 0;

    for (var key in obj) {
        sum = sum + obj[key];
    }

    return sum;
}

console.log(getSalariesSum(salaries));