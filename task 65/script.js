'use strict'


function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        // ... проверки пропущены для краткости
        waterAmount = amount;
    };

    this.getWaterAmount = function(amount) {
        return waterAmount;
    };

    var onReady = function() {
        console.log('Кофе готов!');
        coffeeStatus = false;
    };

    this.setOnReady = function (func) {
        onReady = func;
        coffeeStatus = false;
    };

    this.run = function() {
        coffeeStatus = true;
        setTimeout(function () { onReady() }, getTimeToBoil());

    };

    var coffeeStatus = false;
    this.isRunning = function () {
        return coffeeStatus;
    }

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

console.log( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
console.log( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

coffeeMachine.setOnReady(function() {
    console.log( "После: " + coffeeMachine.isRunning() ); // После: false

});







