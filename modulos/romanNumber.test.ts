import { convertToRomanNumber } from './romanNumers';

describe('function convertToRomanNumber',()=>{
    test('cuando number sea entre 1 y 3',()=>{
        expect(convertToRomanNumber(1)).toBe('I');
        expect(convertToRomanNumber(2)).toBe('II');
        expect(convertToRomanNumber(3)).toBe('III');
    });

    test('debe funcionar corectamente con excepciones',()=>{
        expect(convertToRomanNumber(4)).toBe('IV');
        expect(convertToRomanNumber(9)).toBe('IX');
        expect(convertToRomanNumber(49)).toBe('IL');
    });

    test('debe funcionar corectamente entre 5 y 9',()=>{ // debe devolver de el cociente de 5 en Vs
        expect(convertToRomanNumber(5)).toBe('V');
        expect(convertToRomanNumber(6)).toBe('VI');
        expect(convertToRomanNumber(8)).toBe('VIII');
    });

        test('debe funcionar corectamente entre 10 y 49',()=>{ // debe devolver de el cociente de 5 en Vs
        expect(convertToRomanNumber(10)).toBe('X');
        expect(convertToRomanNumber(15)).toBe('XV');
        expect(convertToRomanNumber(20)).toBe('XX');
        expect(convertToRomanNumber(47)).toBe('XLVII');
    });

        test('debe funcionar corectamente entre 50 y 99',()=>{ // debe devolver de el cociente de 5 en Vs
        expect(convertToRomanNumber(50)).toBe('L');
        expect(convertToRomanNumber(55)).toBe('LV');
        expect(convertToRomanNumber(70)).toBe('LXX');
        expect(convertToRomanNumber(87)).toBe('LXXXVII');
    });

});