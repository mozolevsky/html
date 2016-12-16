'use strict'

function User() {
    var firstName = '';
    var surName = '';

    this.setName = function (name) {
        if(arguments.length > 0 && (typeof name == 'string')) {
            firstName = name;
        }
    };

    this.setSurname = function (surname) {
        if(arguments.length > 0 && (typeof surname == 'string')) {
            surName = surname;
        }
    };

    this.getFullName = function () {
        return firstName + ' ' + surName;
    };
}

var user = new User();

user.setName('Anton');
user.setSurname('Relton');
console.log(user.getFullName());