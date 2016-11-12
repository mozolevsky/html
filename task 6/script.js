'use strict'

var thumb = document.getElementById('thumbs');

thumb.addEventListener('click', function (event) {
    var target = event.target;
    var href;
    var title;


    while (this != target) {

        if(target.nodeName == 'A') {
            event.preventDefault();
            href = event.target.getAttribute('href');
            title = event.target.getAttribute('title');
            break;
        }

        if(target.nodeName == 'IMG') {
            href = event.target.parentNode.getAttribute('href');
            title = event.target.parentNode.getAttribute('title');
            event.preventDefault();
            break;
        }

        target = target.parentNode;
    }

    var mainImg = document.getElementById('largeImg');
    mainImg.setAttribute('src', href);
    mainImg.setAttribute('alt', title);

});