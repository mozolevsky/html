'use strict'

! function () {
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function getNumber() {
        var a = +prompt('Введите число?', '');
        if (isNumeric(a)) return a;
    }

    var calculator = {

        num1: 0,
        num2: 0,

        read: function () {
            this.num1 = getNumber();
            this.num2 = getNumber();
        },

        sum: function () {
            return (this.num1 + this.num2);
        },

        mul: function () {
            return (this.num1 * this.num2);
        }

    };

    window.calculator = calculator;
}();


calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );


