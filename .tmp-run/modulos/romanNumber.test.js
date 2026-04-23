"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const romanNumers_1 = require("./romanNumers");
describe('function convertToRomanNumber', () => {
    test('cuando number sea entre 1 y 3', () => {
        expect((0, romanNumers_1.convertToRomanNumber)(1)).toBe('I');
        expect((0, romanNumers_1.convertToRomanNumber)(2)).toBe('II');
        expect((0, romanNumers_1.convertToRomanNumber)(3)).toBe('III');
    });
    test('debe funcionar corectamente con excepciones', () => {
        expect((0, romanNumers_1.convertToRomanNumber)(4)).toBe('IV');
        expect((0, romanNumers_1.convertToRomanNumber)(9)).toBe('IX');
        expect((0, romanNumers_1.convertToRomanNumber)(49)).toBe('IL');
    });
    test('debe funcionar corectamente entre 5 y 9', () => {
        expect((0, romanNumers_1.convertToRomanNumber)(5)).toBe('V');
        expect((0, romanNumers_1.convertToRomanNumber)(6)).toBe('VI');
        expect((0, romanNumers_1.convertToRomanNumber)(8)).toBe('VIII');
    });
    test('debe funcionar corectamente entre 10 y 49', () => {
        expect((0, romanNumers_1.convertToRomanNumber)(10)).toBe('X');
        expect((0, romanNumers_1.convertToRomanNumber)(15)).toBe('XV');
        expect((0, romanNumers_1.convertToRomanNumber)(20)).toBe('XX');
        expect((0, romanNumers_1.convertToRomanNumber)(47)).toBe('XLVII');
    });
    test('debe funcionar corectamente entre 50 y 99', () => {
        expect((0, romanNumers_1.convertToRomanNumber)(50)).toBe('L');
        expect((0, romanNumers_1.convertToRomanNumber)(55)).toBe('LV');
        expect((0, romanNumers_1.convertToRomanNumber)(70)).toBe('LXX');
        expect((0, romanNumers_1.convertToRomanNumber)(87)).toBe('LXXXVII');
    });
});
//# sourceMappingURL=romanNumber.test.js.map