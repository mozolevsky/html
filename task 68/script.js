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

function Fridge(power) {
    Machine.apply(this, arguments);

    var food = [];
    var capacity = this._power / 100;

    this.addFood = function () {
        if (!this._enabled) {
            throw new Error('Добавить еду нельзя, т.к. холодильник выключен');
        }

        for (var i = 0; i < arguments.length; i++) {
            if (food.length < capacity) {
                food.push(arguments[i]);
            }

            if (food.length == capacity) {
                throw new Error('Больше еды добавить нельзя, холодильник полностью заполнен');
            }
        }

        this.getFood = function () {
            return food.slice();
        };

    }

}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
console.log( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

console.log( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье






