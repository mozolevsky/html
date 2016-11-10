'use strict'

function checkSpam(str) {

    str = str.toLowerCase();

    if (~str.indexOf('viagra', 0) || ~str.indexOf('xxx', 0)) {
        return console.log(true);
    }


}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");