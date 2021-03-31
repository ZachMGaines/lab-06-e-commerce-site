import { pets } from '../products-data.js';
import { cart } from './cart-data.js';
import { createTableRow, createTotalRow, findById } from '../utils.js';

const table = document.querySelector('table');

for (let cartItem of cart) {
    const matchingPets = findById(pets, cartItem.id);

    const tr = createTableRow(cartItem, matchingPets);

    table.append(tr);
}

const totalRow = createTotalRow(cart, pets);

table.append(totalRow);
