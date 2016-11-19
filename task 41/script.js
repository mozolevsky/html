'use strict'


var today = new Date();

function getSecondTday(date) {
    var seconds = date.getHours()*3600 + date.getMinutes()*60 + date.getSeconds();

    return console.log(seconds);
}


getSecondTday(today);