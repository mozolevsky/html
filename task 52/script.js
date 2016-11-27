'use strict'

function Calculator() {
    var a;
    var b;

    this.read = () => {
        a = +prompt('Введите первое число', '');
        b = +prompt('Введите второе число', '');
    };

    this.sum = () => a + b;
    this.mul = () => a * b;
}

var calculator = new Calculator();

calculator.read();
console.log( "Сумма = " + calculator.sum() );
console.log( "Произведение = " + calculator.mul() );


