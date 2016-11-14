'use strict'

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор", "бол", "лоб"];

function aclean(arr) {
    var arr2 = [];

    for (var i = 0; i < arr.length; i++) {
        var str =  getSortStr(arr[i]);
       arr2.push(str);
    }

    for (var g = 0; g < arr2.length; g++) {
        var currElem = arr2[g];

        for (var h = g + 1; h < arr2.length; h++) {
            if (currElem == arr2[h]) {
                delete arr[h];
            }
        }
    }

    console.log(arr);

}

function getSortStr(str) {
    str = str.split('').sort().join('').toLowerCase();

    return str;
}

aclean(arr);

