'use strict'

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];


function compare(a, b) {
    return (a.age > b.age) ? 1 : -1;
}

people.sort(compare);

for (var i = 0; i < people.length; i++) {
    console.log(`${people[i].name} -  ${people[i].age}`);
}