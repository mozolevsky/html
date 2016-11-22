'use strict'

function makeBuffer() {
    var buff = '';

     function getBuffer (str) {
        if (arguments.length == 0) return buff;
        buff += str;
    }

    getBuffer.clear = function () {
        buff = '';
    };

    return getBuffer;
}

var buffer = makeBuffer();

buffer(6);
buffer(7);
buffer(8);

console.log( buffer() ); // '010'
buffer.clear();
buffer(8);
console.log(buffer());