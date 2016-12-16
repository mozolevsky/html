'use strict'

function message() {
    console.log('Текст сообщения');
}

function delay(func, ms) {
    return setTimeout(func, ms);
}

var longMessage = delay;

longMessage(message, 2000);