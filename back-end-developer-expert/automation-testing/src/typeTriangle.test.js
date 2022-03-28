// const assert = require('assert');
// const { it, expect } = require('@jest/globals');
// const { describe } = require('yargs');
// const { test } = require('@jest/globals');
const typeTriangel = require('./typeTriangle');

// menggunakan assert
// try {
//     assert.strictEqual(typeTriangel(4, 4, 4), 'Segitiga sama sisi');
//     assert.strictEqual(typeTriangel(4, 6, 4), 'Segitiga sama kaki');
//     assert.strictEqual(typeTriangel(4, 6, 5), 'Segitiga sembarang');
//     console.log('Seluruh pengujian berhasil');
// } catch (error) {
//     console.log(error);
// }

// menggunakan jest
describe('Sebuah fungsi typeTriangle', () => {
    test('harus mengembalikan segitiga sama sisi ketika semua nilao sisi sama', () => {
        expect(typeTriangel(4, 4, 4)).toBe('Segitiga sama sisi');
        expect(typeTriangel(1, 1, 1)).toBe('Segitiga sama sisi');
        expect(typeTriangel(8, 8, 8)).toBe('Segitiga sama sisi');
    });

    test('harus mengembalikan segitika sama kaki ketika ada dua nilai sisi yang sama', () => {
        expect(typeTriangel(4, 6, 4)).toBe('Segitiga sama kaki');
        expect(typeTriangel(4, 2, 4)).toBe('Segitiga sama kaki');
        expect(typeTriangel(1, 3, 3)).toBe('Segitiga sama kaki');
    });

    test('harus mengembalikan segitika sembarang ketika tidak ada nilai yang sama', () => {
        expect(typeTriangel(4, 2, 1)).toBe('Segitiga sembarang');
        expect(typeTriangel(4, 3, 5)).toBe('Segitiga sembarang');
        expect(typeTriangel(8, 2, 1)).toBe('Segitiga sembarang');
    });
})