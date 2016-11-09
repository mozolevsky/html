'use strict'

/*
 var container = document.querySelector('div');

 container.addEventListener('click', function (event) {
 var target = event.target;
 console.log(target.tagName);

 if(target.children.length == 0) return;


 target.children[0].classList.toggle('none');

 });*/


var treeUl = document.getElementsByTagName('ul')[0];

var treeLi = treeUl.getElementsByTagName('li');

for (var i = 0; i < treeLi.length; i++) {
    var li = treeLi[i];

    var span = document.createElement('span');
    li.insertBefore(span, li.firstChild);
    span.appendChild(span.nextSibling);
}

treeUl.addEventListener('click', function (event) {
    var target = event.target;

    if (target.tagName != 'SPAN') return;
    var li = target.parentNode;

    var containerLi = li.getElementsByTagName('ul')[0];

    if (!containerLi) return;

    containerLi.classList.toggle('none');
});