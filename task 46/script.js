'use strict'

function makeBuffer() {
    var buff = '';

    return function (str) {
        if (arguments.length == 0) return buff;
        buff += str;
    }
}

var buffer = makeBuffer();

buffer(6);
buffer(7);
buffer(8);

console.log( buffer() ); // '010'