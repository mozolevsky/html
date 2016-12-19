'use strict'

function Machine(power) {
    this._enabled = false;
    this._power = power;

    this.enable = function() {
        this._enabled = true;
    };

    this.disable = function() {
        this._enabled = false;
    };
}

function CoffeeMachine(power) {
    Machine.apply(this, arguments); 
    
    var waterAmount = 0;
    
    this.setWaterAmount = function (amount) {
        waterAmount = amount;
    };

    function onReady() {
        console.log( 'Кофе готово!' );
    }

    var timer;

    this.run = function() {
        if (this._enabled == false) {
            throw new Error('Кофеварка выключена!')
        } else {
             timer = setTimeout(onReady, 1000);
        }

    var disableFromParent = this.disable;
        this.disable = function () {
            disableFromParent.call(this);
            clearTimeout(timer);
            console.log('Кофеварка выключена после запуска')
        }
    };
}


var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет




