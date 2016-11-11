'use strict'

var menu = {
    width: 200,
    height: 300,
    title: "My menu",
    border: '2px'
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}


function multiplayNumericMenu(obj) {

    for (var key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] = obj[key] * 2;
        }
    }
    return obj;
}

console.log(multiplayNumericMenu(menu));
