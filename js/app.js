


let carts = document.querySelectorAll('.add-cart');

let products = [

  { name: 'light1', price: 15.25, inCart: 0 },
  { name: 'light2', price: 17.55, inCart: 0 },
  { name: 'light3', price: 19.90, inCart: 0 },
  { name: 'light4', price: 21.90, inCart: 0 },
  { name: 'light5', price: 26.25, inCart: 0 },
  { name: 'light6', price: 16.70, inCart: 0 },
  { name: 'light7', price: 17.25, inCart: 0 },
  { name: 'light8', price: 16.80, inCart: 0 },
  { name: 'light9', price: 13.75, inCart: 0 },
  { name: 'light10', price: 12.90, inCart: 0 },
  
  // for balloons
  { name: 'balloon1', price: 12.90, inCart: 0 },
  { name: 'balloon2', price: 12.90, inCart: 0 },
  { name: 'balloon3', price: 12.90, inCart: 0 },
  { name: 'balloon4', price: 12.90, inCart: 0 },
  { name: 'balloon5', price: 12.90, inCart: 0 },
  { name: 'balloon6', price: 12.90, inCart: 0 },
  { name: 'balloon7', price: 12.90, inCart: 0 },
  { name: 'balloon8', price: 12.90, inCart: 0 },
  { name: 'balloon9', price: 12.90, inCart: 0 },
  { name: 'balloon10', price: 12.90, inCart: 0 },
  { name: 'balloon11', price: 12.90, inCart: 0 },
  { name: 'balloon12', price: 12.90, inCart: 0 },
  { name: 'balloon13', price: 12.90, inCart: 0 },
  { name: 'balloon14', price: 12.90, inCart: 0 },
  { name: 'balloon15', price: 12.90, inCart: 0 },
  { name: 'balloon16', price: 12.90, inCart: 0 },

  // for candels
  { name: 'candel1', price: 12.90, inCart: 0 },
  { name: 'candel2', price: 12.90, inCart: 0 },
  { name: 'candel3', price: 12.90, inCart: 0 },
  { name: 'candel4', price: 12.90, inCart: 0 },
  { name: 'candel5', price: 12.90, inCart: 0 },
  { name: 'candel6', price: 12.90, inCart: 0 },
  { name: 'candel7', price: 12.90, inCart: 0 },
  { name: 'candel8', price: 12.90, inCart: 0 },
  { name: 'candel9', price: 12.90, inCart: 0 },
  { name: 'candel10', price: 12.90, inCart: 0 },
  { name: 'candel11', price: 12.90, inCart: 0 },

  // for roses
  { name: 'rose1', price: 12.90, inCart: 0 },
  { name: 'rose2', price: 12.90, inCart: 0 },
  { name: 'rose3', price: 12.90, inCart: 0 },
  { name: 'rose4', price: 12.90, inCart: 0 },
  { name: 'rose5', price: 12.90, inCart: 0 },
  { name: 'rose6', price: 12.90, inCart: 0 },
  { name: 'rose7', price: 12.90, inCart: 0 },
  { name: 'rose8', price: 12.90, inCart: 0 },
  { name: 'rose9', price: 12.90, inCart: 0 },
  { name: 'rose10', price: 12.90, inCart: 0 },
  { name: 'rose11', price: 12.90, inCart: 0 }, 
  { name: 'rose12', price: 12.90, inCart: 0 }, 
  { name: 'rose13', price: 12.90, inCart: 0 },
  
  // for tables
  { name: 'table1', price: 12.90, inCart: 0 },
  { name: 'table2', price: 12.90, inCart: 0 },
  { name: 'table3', price: 12.90, inCart: 0 },
  { name: 'table4', price: 12.90, inCart: 0 },
  { name: 'table5', price: 12.90, inCart: 0 },
  { name: 'table6', price: 12.90, inCart: 0 },

];



for (let i = 0; i < carts.length; i++) {

  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i]);

  });

}


// creat function to storage products number inside the cart:
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if (productNumbers) {

    document.querySelector('.cart span').textContent = productNumbers;

  }
}


// creat local storage function
function cartNumbers(product) {

  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;

  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
  }

  setItems(product);
}




function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  // console.log(cartItems);
  if (cartItems != null) {
    if (cartItems[product.name] == undefined) {
      cartItems = {
        ...cartItems,
        [product.name]: product

      }
    }
    cartItems[product.name].inCart += 1;
  }
  else {

    product.inCart = 1;
    cartItems = { [product.name]: product };
  }
  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}


//create fun to  sum total price 
function totalCost(product) {
  console.log('price :', product.price);

   let cartCost = localStorage.getItem('totalCost');

  if (cartCost != null) {
    cartCost = parseFloat(cartCost);
    localStorage.setItem('totalCost', cartCost + product.price);

  }
  else {
    localStorage.setItem('totalCost', product.price);
  }

}

// creat display function for cart page:

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");

  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector('.products');
  let cartCost = localStorage.getItem('totalCost');
  // console.log(cartItems);

  if (cartItems && productContainer) {

    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += ` 
      <div class ="product">
      <ion-icon name="close-outline"></ion-icon>
      <img src="./img/${item.name}.jpg" alt="damaged picture from display">
      <span>${item.name}</span>
      </div>

      <div class ="price" >JD${item.price}</div>

      <div class ="quantity" >
      <ion-icon  class="decrease" name="caret-back-outline"></ion-icon>
      <span>${item.inCart}</span>
      <ion-icon name="caret-forward-outline"></ion-icon>
      </div>
      <div class="total">
         JD ${item.inCart * item.price}
      <div>

      
  
    `;


    });
        productContainer.innerHTML += `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
        Basket Total
        </h4>
        <h4 class="basketTotal">
        JD ${cartCost}
        </h4>


        `;

  }
}

onLoadCartNumbers();
displayCart();









{/* <img src="./img/balloon/${item.name}.jpg" alt="damaged picture from display">
      <img src="./img/candel/${item.name}.jpg" alt="damaged picture from display"></img> */}

