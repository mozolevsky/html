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

    this.filterFood = function (func) {
        var trueFoodArr = [];
        for (var i = 0; i < food.length; i++) {
            if (func(food[i])) {
                trueFoodArr.push(food[i]);
            }
        }
        return trueFoodArr;
    };

    this.removeFood = function (objectFood) {
        var numberOfFood = food.indexOf(objectFood);

        if (~~numberOfFood) {
             food.splice(numberOfFood, 1);
        }

    };

    this.getFood = function() {
        return food;
    }

}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
    title: "котлета",
    calories: 100
});
fridge.addFood({
    title: "сок",
    calories: 30
});
fridge.addFood({
    title: "зелень",
    calories: 10
});
fridge.addFood({
    title: "варенье",
    calories: 150
});


var dietItems = fridge.filterFood(function(item) {
    return item.calories < 50;
});

dietItems.forEach(function(item) {
    console.log( item.title ); // сок, зелень
    fridge.removeFood(item);
});


console.log( fridge.getFood()); // 2






