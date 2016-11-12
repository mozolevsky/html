'use strict'

var obj = {
    className: 'my menu menu menu'
};

function removeClass(obj, cls) {
    if (obj.className === undefined ) return;

    var arr = obj.className.split(' ');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            arr[i] = '';
        }
    }
    obj.className = arr.join(' ');

    return console.log(obj.className);
}



removeClass(obj, 'menu');

