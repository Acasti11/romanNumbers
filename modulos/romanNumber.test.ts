import { convertToRomanNumber } from './romanNumers';

describe('function convertToRomanNumber',()=>{
    test('cuando number sea 1 devuelve I',()=>{
        expect(convertToRomanNumber(1)).toBe('I');
    });
});