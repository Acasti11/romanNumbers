"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.añadirCaracter = añadirCaracter;
exports.devuelveDosOCinco = devuelveDosOCinco;
exports.parseToRoman = parseToRoman;
exports.convertToRomanNumber = convertToRomanNumber;
function añadirCaracter(carac, numb) {
    let b = "";
    for (let x = 1; x <= numb; x++) {
        b = b.concat(carac);
    }
    console.log(b);
    return b;
}
function devuelveDosOCinco(toggle) {
    if (toggle) {
        return 2;
    }
    return 5;
}
function parseToRoman(numb) {
    let result = "";
    switch (numb) {
        case 5:
            result = 'V';
            break;
        case 10:
            result = 'X';
            break;
        case 50:
            result = 'L';
            break;
    }
    return result;
}
function convertToRomanNumber(number) {
    let divisor = 50;
    let toggle = false;
    let resto = number;
    let cociente = (number / divisor);
    console.log(cociente);
    let roman = "";
    while (resto != 0) {
        resto = resto % divisor;
        if (resto == divisor - 1) {
            roman = roman.concat(añadirCaracter('I', 1));
            roman = roman.concat(añadirCaracter(parseToRoman(divisor), 1));
            return roman;
        }
        console.log(resto);
        if (resto / 10 == (divisor / 10) - 1 && resto != 0) {
            roman = roman.concat(añadirCaracter('X', 1));
            console.log(resto);
            roman = roman.concat(añadirCaracter(parseToRoman(divisor), 1));
        }
        else {
            roman = roman.concat(añadirCaracter(parseToRoman(divisor), cociente));
        }
        if (resto <= 3) {
            roman = roman.concat(añadirCaracter('I', resto));
            resto = 0;
        }
        divisor = divisor / devuelveDosOCinco(toggle);
        cociente = (resto / divisor);
        if (toggle) {
            toggle = false;
        }
        else {
            toggle = true;
        }
    }
    return roman;
}
convertToRomanNumber(47);
//# sourceMappingURL=romanNumers.js.map