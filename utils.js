export function createPets(pets) {
    const li = document.createElement('li');

    li.classList.add('pets');
    li.style.background = pets.color;

    const pName = document.createElement('p');

    pName.classList.add('name');
    pName.textContent = pets.name;

    const pType = document.createElement('p');

    pType.classList.add('type');
    pType.textContent = pets.type;

    const pSize = document.createElement('p');

    pSize.textContent = pets.size;

    const image = document.createElement('img');
    image.classList.add('image');
    image.src = pets.image;

    const hasFur = document.createElement('p');
    hasFur.textContent = pets.hasFur ? 'Furry!' : 'No fur.';

    const pPrice = document.createElement('p');
    pPrice.textContent = pets.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const button = document.createElement('button');

    button.textContent = 'Add to PetCart';

    li.append(pName, pType, pSize, image, hasFur, pPrice, button);

    return li;
}


export function createTableRow(someCartItem, somePets) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdPrice = document.createElement('td');

    tdName.textContent = somePets.name;
    tdQuantity.textContent = someCartItem.quantity;
    const total = somePets.price * someCartItem.quantity;

    const config = {
        currency: 'USD',
        style: 'currency'
    };

    const totalAsUSD = total.toLocaleString('en-US', config);

    tdPrice.textContent = totalAsUSD;

    tr.append(tdName, tdQuantity, tdPrice);

    return tr;
}

export function