'use strict'

var slider = document.getElementById('slider');
var cursor = document.querySelector('.thumb');

slider.onmousedown = function (event) {
    //console.log(event);

    var target = event.target;

    //добавляет координаты ползунку
    function moveAt (event) {
        cursor.style.left = event.clientX - cursor.offsetWidth / 2 + 'px';

        var topCoord = slider.getBoundingClientRect().top;
        cursor.style.top = topCoord - cursor.offsetHeight / 2 + slider.offsetHeight / 2 + 'px';
    }

    //перемещает ползунок
    if (target.className == 'thumb') {

        target.style.position = 'absolute';
        moveAt(event);

        slider.onmousemove = (event)=> {
            moveAt(event);
        };

        target.onmouseup = ()=>{
            slider.onmousemove = null;
            target.onmouseup = null;
        };

        target.ondragstart = () => {
            return false;
        };
    } else {
        cursor.style.position = 'absolute';
        moveAt(event);
    }

};