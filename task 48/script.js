'use strict'

var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];


function byField(option) {
    return function(a, b) {
        return a[option]> b[option] ? 1 : -1;
    }
}


users.sort(byField('name'));
users.forEach(function(user) {
    console.log( user.name );
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function(user) {
    console.log( user.name );
}); // Маша, Вася, Петя


