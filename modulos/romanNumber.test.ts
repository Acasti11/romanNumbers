import { convertToRomanNumber } from './romanNumers';

describe('function convertToRomanNumber',()=>{
    test('cuando number sea 1 devuelve I',()=>{
        expect(convertToRomanNumber(1)).toBe('I');
    });

    test('cuando number sea 2 devuelve II',()=>{
        expect(convertToRomanNumber(2)).toBe('II');
    });

    test('cuando number sea 3 devuelve III',()=>{
        expect(convertToRomanNumber(3)).toBe('III');
    });
});