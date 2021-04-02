// IMPORT MODULES under test here:
// import { example } from '../example.js';
//import { } from '';
import { calcItemTotal, calcOrderTotal } from '../utils.js';

const test = QUnit.test;

test('calculate item subtotal', (expect) => {

    const expected = 50;
    const actual = calcItemTotal(5, 10);
    expect.equal(actual, expected);
});

test('calculate items in cart full total', (expect) => {
    const testCartItems = [
        {
            id: 1,
            quantity: 2
        },
        {
            id: 2,
            quantity: 2
        }
    ];
    const expected = 2800;
    const actual = calcOrderTotal(testCartItems);

    expect.equal(actual, expected);
});

