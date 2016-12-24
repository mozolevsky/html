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

function Fridge(power) {
    Machine.apply(this, arguments);

    var food = [];
    var capacity = this._power / 100;

    if (!capacity) {
        throw new Error('Мощность не определена');
    }

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

    };

    this.filterFood = function (func) {
        var trueFoodArr = [];
        for (var i = 0; i < food.length; i++) {
            if (func(food[i])) {
                trueFoodArr.push(food[i]);
            }
        }
        return trueFoodArr;
    };

    this.removeFood = function (someFood) {
        var numberOfFood = food.indexOf(someFood);

        if (numberOfFood != -1) {
             food.splice(someFood, 1);
        }

    };

    this.getFood = function() {
        console.log(food);
        return food;
    };

    var parentDisable = this.disable();
    this.disable = function() {
        if (food.length) {
            throw new Error('Нельзя выключать, в холодильнике есть еда');
        } else {
            parentDisable();
        }
    }

}

var fridge = new Fridge(500);

fridge.enable();
fridge.addFood('Новая еда', 'Еда2');
fridge.getFood();
fridge.removeFood('Новая еда');
fridge.disable();
fridge.getFood();





