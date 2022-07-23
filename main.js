const items = document.querySelector('.items');
const addBtn = document.querySelector('.footer__button');
const input = document.querySelector('.footer__input');

function onAdd() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({block: 'center'});
  input.value='';
  input.focus();
}

let id = 0; // UUID
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `        
        <div class="item">
          <span class="item__name">${text}</span>
          <button class="item__delete">
            <i class="fa-solid fa-trash-can" data-id=${id}></i>
          </button>
        </div>
        <div class="item__divider"></div>`;
  id++;
  return itemRow;
}

addBtn.addEventListener('click', ()=> {
  onAdd();
})

input.addEventListener('keypress', (event)=>{
  if(event.key === 'Enter') {
    onAdd();
  }
})

items.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if(id&&event.target.tagName === 'I') {
  const tobeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
  tobeDeleted.remove();
  }
})