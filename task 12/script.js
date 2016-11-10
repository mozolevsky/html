'use strict'

function extactCurrencyValue(val) {
    return +val.slice(1);
}

extactCurrencyValue('$140');