'use strict'

var salaries = {
    "Вася": 800,
    "Петя": 300,
    "Даша": 350
};


function getMaxSalary(obj) {
    var salary = 0;
    var name;

    for (var key in obj) {
        if (obj[key] > salary) {
            salary = obj[key];
            name = key;
        }
    }
    return console.log(name);
}

getMaxSalary(salaries);