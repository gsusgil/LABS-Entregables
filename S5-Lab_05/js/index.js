// console.log("hola mundo");

// ITERATION 1

const updateSubtotal = (product) => {
  // console.log('updateSubtotal, yey!');
  
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

// crea las variables utilizando query selector para apuntar a la clase donbde se encuentran los items

  let priceItem = parseFloat(price.innerText);
  let quantityItem = parseFloat(quantity.value);

  // se usa el metodo de parseFloat para convertir a numero ambos elementos

  let subtotal = priceItem * quantityItem;
  product.querySelector('.subtotal').innerText = subtotal.toFixed(2);
  console.log(subtotal);
}
const product = document.querySelector('.product');
updateSubtotal(product)

// function calculateAll() {
//   //-------------
//   // code in the following two lines is added just for testing purposes.
//   // it runs when only iteration 1 is completed. at later point, it can be removed.
//   //----------------------
//   const singleProduct = document.querySelector('.product');
//   updateSubtotal(singleProduct); }

  //---------------------
  // end of test

  // ITERATION 2

// para agregar el subtotal a un producto nuevo, se apunta al producto en html con la clase.

const calculateAll = () => {
  let addProduct = document.getElementsByClassName('product');
  let total = 0;

// Ahora con un bucle for para iterar dentro de la tr, se apunta a subtotal para colocar la precio usando bucle FOR

  for (let i = 0; i < addProduct.length; i++) {
    updateSubtotal(addProduct[i]);

    const subtotal = parseFloat(addProduct[i].querySelector('.subtotal').innerText);
    total += subtotal;
    
    }

  // ITERATION 3

  const totalProduct = document.querySelector(`#total-value span`);
  totalProduct.innerText = total.toFixed(2);

  console.log(`el total de la suma es $ ${total}`);
  };

  
calculateAll();


// // ITERATION 4

const removeProduct = (event) => {
  // console.log('prueba');
  const target = event.currentTarget.parentElement.parentElement;
  target.remove();
  calculateAll();
};


// // ITERATION 5

const createProduct = () => {

  // Parte 1 - Segmentacion de data proporcionada por el usario
  let elementRow = document.querySelector('.create-product');
  let newProdNameInput = elementRow.querySelector('input');
  let newProdNameValue = newProdNameInput.value;
  console.log(newProdNameValue);
  let newProdPriceInput = elementRow.querySelector('#number');
  let newProdPriceValue = Number(newProdPriceInput.value);
  console.log(newProdPriceValue);

    // P{arte 2 - Creacion del elemento como tal}
    let newTableRow = document.createElement('tr');
    newTableRow.className = 'product';
    newTableRow.innerHTML = `
    <td class="name">
              <span>${newProdNameValue}</span>
            </td>
            <td class="price">
              $
              <span>${newProdPriceValue}</span>
            </td>
            <td class="quantity">
              <input type="number" value="0" min="0" placeholder="Quantity" />
            </td>
            <td class="subtotal">$<span>0</span></td>
            <td class="action">
              <button class="btn btn-remove">Remove</button>
            </td>
    `;
  
    // Parte 3
    let parentCont = document.querySelector('#cart tbody');
    parentCont.appendChild(newTableRow);
  
    // Part 4
    let removeBtn = newTableRow.querySelector('.btn-remove');
    removeBtn.addEventListener('click', removeProduct);
  
    // Part 5 - Limpiar de nuevo los inputs
    newProdNameInput.value = '';
    newProdPriceInput.value = 0;
  calculateAll();
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');

  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeButton = document.querySelectorAll('.btn-remove');
  for (let removeButtons of removeButton ){
    removeButtons.addEventListener('click', removeProduct);
  }
  //... your code goes here

  const createButton = document.querySelector('#create')
  createButton.addEventListener('click', createProduct)
});
