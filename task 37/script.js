'use strict'

var date = new Date(2016, 11, 16);

function getWeekDay(date) {
    var arrDaysNames = ['вс', 'пн', "вт", "ср", "чт", "пт", "сб"];

    return arrDaysNames[date.getDay()];
}

console.log(getWeekDay(date));