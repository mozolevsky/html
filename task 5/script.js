'use strict'

var area = document.getElementById('contents');

area.addEventListener('click', function (event) {
     if(event.target.nodeName == 'A' || event.target.parentNode.nodeName == 'A') {

         var message = confirm('Do you want to go to another site?');

         if (message == false) event.preventDefault();

     }
});