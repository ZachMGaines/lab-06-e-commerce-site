export function findById(someArray, someId) {
    for (let item of someArray) {
        if (item.id === someId) {
            return item;
        }
    }
}

export function calcItemTotal(price, quantity) {
    return price * quantity;
}




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

export function createTotalRow(cartArray, petsArray) {
    let sum = 0;

    for (let cartItem of cartArray) {
        const matchingPets = findById(petsArray, cartItem.id);

        const lineItem = matchingPets.price * cartItem.quantity;
        sum = sum + lineItem;
    }
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td3.textContent = `$${sum}.00`;

    tr.append(td1, td2, td3);

    return tr;
}