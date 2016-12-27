'use strict'


function sum(a, b) {
    console.log(a + b);
}

Function.prototype.defer = function (ms) {
    var func = this;

    return function() {
        var arg = arguments;
        var self = this;

        setTimeout(function(){
            func.apply(self, arg);
        }, ms);
    }

};

sum.defer(4000)(2, 3);


