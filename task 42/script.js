'use strict'


function getSecondToTomorrow() {
    let today = new Date();
    let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1 );
    let secUntilTomorrow = ((tomorrow - today)/1000).toFixed(0);

    return console.log(secUntilTomorrow);
}

getSecondToTomorrow();