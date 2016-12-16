'use strict'

function printNumberInterval() {
    var i = 1;

    var timerId = setInterval(function () {
        console.log(i);
        i++;
    }, 100);

    setTimeout(function () {
        clearInterval(timerId);
        console.log("Выключили таймер");
    }, 2000);

}

printNumberInterval();

