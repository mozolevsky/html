'use strict'

var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printReverseList(obj) {
    var arr = [];


    while (obj.value) {
        arr.push(obj.value);
        obj = obj.next;

        if (obj.next == null) {
            arr.push (obj.value);
            break;
        }
    }

    return console.log(arr.reverse());
}
printReverseList(list);


var arr = [];
function printListRecReverse(obj) { // The function displays elements in reverse order using recursion

    arr.push(obj.value);
    obj = obj.next;

    if (obj.next == null) {
        arr.push(obj.value);
        return   console.log(arr.reverse());
    }

    return printListRecReverse(obj);
}
printListRecReverse(list);


function printListRec(list) { // The function displays elements of the list using recursion

    console.log(list.value);
    list = list.next;
    if (list.next == null) return console.log(list.value);

    return printListRec(list);
}
printListRec(list);


function printList(list) { // The function displays elements of the list, using the cycle;
 var obj = list;

 while (obj.value) {
 console.log(obj.value);

 if (obj.next == null) break;
 obj = obj.next;
 }

}
printList(list);