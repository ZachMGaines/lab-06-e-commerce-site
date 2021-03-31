import { pets } from '../products-data.js';
import { createPets } from '../utils.js';

const ul = document.querySelector('#product-list');

for (let pet of pets) {
    const li = createPets(pet);
    ul.append(li);
}
