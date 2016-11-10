'use strict'

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        str = str.slice(0, maxlength - 3);
        str = str + '...';
    }

    return console.log(str);

}

truncate('Hello holy Billy, how are you?', 15);