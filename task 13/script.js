'use strict'

function isEmpty(obj) {
    var counOfProperties = 0;

    for (var key in obj) {
        counOfProperties++;
    }
    return (counOfProperties > 0) ? false : true;
}

var mark = {};
mark.howAreYou = 'I\'m a man ';

console.log(isEmpty(mark));