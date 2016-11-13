'use strict'

var arr = [1, 2, 3, 4, 5];

function randomSort(a, b) {
    var rand = Math.random()*10;
    rand =  rand.toFixed(0);

    return (rand > 5) ? 1 : -1;
}


 console.log(arr.sort(randomSort));

