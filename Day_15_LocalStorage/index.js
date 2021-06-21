
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const text = this.querySelector('input[name="item"]').value;
    const item = {
        text,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    saveItemsToLocal();
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item-${i}" ${plate.done ? 'checked' : ''} />
                <label for="item-${i}">${plate.text}</label>
            </li>
        `
    }).join('');
}

function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const item = e.target;
    const index = item.dataset.index;
    items[index].done = !items[index].done;
    saveItemsToLocal();
}

function saveItemsToLocal() {
    localStorage.setItem('items', JSON.stringify(items));
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList);
