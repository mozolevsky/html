'use strict'

var obj = {
    className: 'open menu'
};

function addClass(obj, str) {
    if (obj.className == undefined) return console.log('property className isn\'n defined');

    if (obj.className.indexOf(str) == -1) {
        obj.className += ' ' + str;
    }

    return console.log(obj);
}



addClass(obj, 'famile');
addClass(obj, 'famile');
addClass(obj, 'my');