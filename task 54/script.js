'use strict'

function sumArgs() {

    var reduce = [].reduce;

    var sumArgs = reduce.call(arguments, function(sum, current) {
        return sum + current;
    });

    return sumArgs;

}

console.log( sumArgs(1, 4, 7) ); 