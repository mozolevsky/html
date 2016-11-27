'use strict'

function Accumulator(startValue) {
    this.value = startValue;

    this.read = () => {
        this.value += +prompt('Введите число', '');
    }
}

var accumulator = new Accumulator(5);
accumulator.read();
accumulator.read();
accumulator.read();
console.log(accumulator.value);


