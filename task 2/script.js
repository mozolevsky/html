'use strict'

var container = document.querySelector('div');

container.addEventListener('click', function (event) {
    var target  = event.target;
     console.log(target.tagName);

    if (target.tagName != 'BUTTON') return;

    target.parentElement.classList.add('none');

});
