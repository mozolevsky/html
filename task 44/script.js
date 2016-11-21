'use strict'

var from = new Date(2016, 10, 16, 21, 33);


function formatDate(from) {
    var to = new Date;
    var differenceSec = ((to - from) / 1000).toFixed(0);
    var differenceMin = ((to - from) / 60000).toFixed(0);
    var message = '';

    if (differenceSec < 1) {
      message =  console.log('только что');
    } else if ( differenceSec < 60 ) {
      message =  console.log(`${differenceSec} сек. назад`);
    } else if (differenceSec < 3600) {
      message = console.log(`${differenceMin} мин. назад`);
    } else {
      message = console.log(from.toLocaleString('ru'));
    }
    return message;
}

formatDate(from);