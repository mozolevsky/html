'use strict'

function Machine(power) {
    this._enabled = false;
    this._power = power;

    this.enable = function() {
        this._enabled = true;
    };

    this.desabled = function() {
        this._enabled = false;
    };
}

function CoffeeMachine(power) {
    Machine.apply(this, arguments); // inheritence
    
    var waterAmount = 0;
    
    this.setWaterAmount = function (amount) {
        waterAmount = amount;
    };

    function onReady() {
        console.log( 'Кофе готово!' );
    }

    this.run = function() {
        if (this._enabled == false) {
            throw new Error('Кофеварка выключена!')
        } else {
            setTimeout(onReady, 1000);
        }


    };
}


var coffeeMachine = new CoffeeMachine(10000);

coffeeMachine.enable();
coffeeMachine.run(); // ошибка, кофеварка выключена!





