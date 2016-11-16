'use strict'

/*
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
Временная зона – местная. Выведите его на экран.
*/

let date = new Date(2012, 1, 20, 2, 12);

var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    };


console.log(date.toLocaleString('ru', options));


