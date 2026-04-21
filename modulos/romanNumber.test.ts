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

    test('cuando number sea 4 devuelve IV',()=>{
        expect(convertToRomanNumber(4)).toBe('IV');
    });

    test('cuando number sea 5 devuelve V',()=>{
        expect(convertToRomanNumber(5)).toBe('V');
    });

    test('cuando number sea 6 devuelve VI',()=>{
        expect(convertToRomanNumber(6)).toBe('VI');
    });

    test('cuando number sea 9 devuelve IX',()=>{
        expect(convertToRomanNumber(9)).toBe('IX');
    });

    test('cuando number sea 10 devuelve X',()=>{
        expect(convertToRomanNumber(10)).toBe('X');
    });

    test('cuando number sea 11 devuelve XI',()=>{
        expect(convertToRomanNumber(11)).toBe('XI');
    });
});