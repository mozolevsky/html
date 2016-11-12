'use strict'

function camelize(str) {
    var arr = str.split('');

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == '-'){
            arr[i]  = '';
            arr[i+1] = arr[i+1].toUpperCase();
        }
    }
    str = arr.join('');
    return console.log(str);

}

camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");


