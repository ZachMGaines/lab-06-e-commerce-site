import { pets } from '../products-data.js';
import { cart } from './cart-data.js';
import { getCart } from '../local-storage-utils.js';
import { createTableRow, createTotalRow, findById } from '../utils.js';

const button = document.getElementById('submit');
const table = document.querySelector('table');
const cart1 = getCart();

for (let cartItem of cart1) {
    const matchingPets = findById(pets, cartItem.id);

    const tr = createTableRow(cartItem, matchingPets);

    table.append(tr);
}

const totalRow = createTotalRow(cart1, pets);

table.append(totalRow);

button.addEventListener('click', () => {
    const cart = getCart();

    alert(JSON.stringify(cart));
    localStorage.clear();
    window.location = '/';
    console.log(cart);
});