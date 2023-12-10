import '@testing-library/jest-dom';
import { capitalize, formatLocation } from '@/app/lib/utils';

describe('captilize', () => {
    it('capitalizes first letter', () => {
        const result = capitalize('abcdef');
        expect(result.charAt(0)).toBe('A');
    });
    it('captilizes first letter of multiple words', () => {
        const result = capitalize('abcd efgh');
        expect(result.charAt(0)).toBe('A');
        expect(result.charAt(5)).toBe('E');
    });
    it('it lowers case for rest of word', () => {
        const result = capitalize('ABCDEF');
        expect(result.charAt(1)).toBe('b');
    })
    it('it lowers case for rest of multiple words', () => {
        const result = capitalize('ABCD EFGH');
        expect(result.charAt(3)).toBe('d');
        expect(result.charAt(6)).toBe('f');
    });
});

describe('formatLocation', () => {
    it('replaces space with dash', () => {
        const result = formatLocation('abc def');
        expect(result.charAt(3)).toBe('-');
    });
});