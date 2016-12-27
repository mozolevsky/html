'use strict'


function hello() {
    console.log("Привет!");
}

Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
};

hello.defer(1000);
hello.defer(4000);

