'use strict'

var date = new Date(2012, 0, 8);

function getLocalDay(date) {
    let day = date.getDay();

    if (day == 0) {
        day = 7;
    }
    return day;
}

console.log(getLocalDay(date));