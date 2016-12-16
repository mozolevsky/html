'use strict'

function printNumberInterval() {
    var i = 1;

    var timerId = setTimeout(function showNumber() {
        console.log(i);
        i++;

        timerId = setTimeout(showNumber, 100);

    }, 100);

    setTimeout(function () {
        clearTimeout(timerId);
        console.log("Выключили таймер");
    }, 2000);

}

printNumberInterval();

