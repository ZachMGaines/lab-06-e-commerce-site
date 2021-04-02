// IMPORT MODULES under test here:
// import { example } from '../example.js';
//import { } from '';
import { calcItemTotal, calcOrderTotal, findById } from '../utils.js';
import { pets } from '../products-data.js';
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


test('function should find id and display', (expect) => {
    const expected = {
        id: 2,
        name: 'cat',
        type: 'Persian',
        color: 'white',
        size: 3,
        hasFur: true,
        image: '../assets/img/cat.jpg',
        price: 400
    };
    const actual = findById(pets, 2);

    expect.deepEqual(actual, expected);
});