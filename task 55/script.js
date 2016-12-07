'use strict'

function sum(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}


function decorator(func) {
   return function() {
       var results = func.apply(this, arguments);

       return results + 3;
   }
}

sum = decorator(sum);
console.log(sum(2, 3));

minus = decorator(minus);
console.log(minus(3, 2));