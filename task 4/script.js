'use strict'

var targetArea = document.getElementById('target-area');

targetArea.addEventListener('mouseover', function (event) {
    var target = event.target;


    var targetAttr = target.hasAttributes('data-tooltip');
    if(!targetAttr) return;
        var divTooltip = document.createElement('div');

        divTooltip.classList.add('tip');
        divTooltip.innerHTML = target.getAttribute('data-tooltip');

        var coord = target.getBoundingClientRect();

        document.body.appendChild(divTooltip);
        divTooltip.style.left = coord.left + 'px';

        if (document.body.scrollTop != 0 && (coord.top <= divTooltip.offsetHeight + 10)) {
            divTooltip.style.top = (coord.bottom + 10) + 'px';
        } else {
            divTooltip.style.top = (coord.top  - divTooltip.offsetHeight - 10) + 'px';
        }

});

targetArea.addEventListener('mouseout', function (event) {
    var target = event.target;

    var targetAttr = target.hasAttributes('data-tooltip');
    if(!targetAttr) return;

    var divTooltip = document.querySelector('.tip');
    divTooltip.parentNode.removeChild(divTooltip);

});