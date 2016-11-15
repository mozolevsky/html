'use strict'

function sum() {
    var summ = 0;
    for (var i = 0; i < arguments.length; i++) {
        summ += arguments[i];
    }

    return summ;
}

console.log(sum(1, 2, 3, 10));

