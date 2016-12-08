'use strict'


function formatDate(date) {

    var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC',
    };

    if (date.getFullYear) {
        return date.toLocaleString("ru", options);
    }

    if (typeof date == 'string') {
       var dateArr = date.split('-');
       var dateFromString = new Date(dateArr[0], dateArr[2], dateArr[1]);

       return dateFromString.toLocaleString("ru", options);
    }

    if (typeof date == 'number') {
        var dateFromNumber = new Date(date * 1000);

        return dateFromNumber.toLocaleString("ru", options);
    }

    if (Array.isArray(date)) {
        var dateFromArr = new Date(date[0], date[2], date[1]);

        return dateFromArr.toLocaleString("ru", options);
    }
}

console.log(formatDate(new Date(2014, 0, 1)));
console.log(formatDate('2011-10-12'));
console.log(formatDate(1234567890) );
console.log(formatDate([2014, 0, 1]));