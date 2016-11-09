'use strict'

var ball = document.getElementById('ball');
var field = document.getElementById('field');

field.addEventListener('click', function (event) {

    var coordsBall = ball.getBoundingClientRect();
    var coordsField = field.getBoundingClientRect();

    var halfBall = coordsBall.width / 2;
    var borderWidth = 10;

    ball.style.cssText = 'transition: 1s; position: fixed;';

    if ((event.clientX - halfBall) < coordsField.left) {
        ball.style.left = coordsField.left + halfBall + borderWidth + 'px';

    } else if ((event.clientX + halfBall) > coordsField.right) {
        ball.style.left = coordsField.right - halfBall - borderWidth + 'px';
    } else {
        ball.style.left = event.clientX + 'px';
    }

    if ((event.clientY - halfBall) < coordsField.top) {
        ball.style.top = coordsField.top + halfBall + borderWidth +  'px';
    } else if ((event.clientY + halfBall) > coordsField.bottom) {
        ball.style.top = coordsField.bottom - halfBall - borderWidth + 'px';
    } else {
        ball.style.top = event.clientY + 'px';
    }

});

