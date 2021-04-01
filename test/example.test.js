// IMPORT MODULES under test here:
// import { example } from '../example.js';
//import { } from '';
import { calcItemTotal } from '../utils.js';

const test = QUnit.test;

test('calculate item subtotal', (expect) => {

    const expected = 50;
    const actual = calcItemTotal(5, 10);
    expect.equal(actual, expected);
});

test('calculate items in cart full total', (expect) => {

    const expected = 50;
    const actual = calcItemTotal(5, 10);
    expect.equal(actual, expected);
});
