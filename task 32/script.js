'use strict'

var arr = ["Есть", "жизнь", "на", "Марсе"];
var arrLength = arr.map(getLength);

function getLength(str) {
    return str.length;
}

console.log(arrLength ); // 4,5,2,5