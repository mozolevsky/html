'use strict'

function getLastDayOfMonth(year, month) {
    var date = new Date(year, month);
    var counter = 0;

    while (date.getMonth() == month) {
        date.setDate(date.getDate() + 1);
        ++counter;
    }

    return console.log(counter);
}

getLastDayOfMonth(2012, 1);
