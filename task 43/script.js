'use strict'

var date = new Date(2016, 1, 1);


function formatDate(date) {
    var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
        };

    return console.log(date.toLocaleString('ru', options));
}

formatDate(date);