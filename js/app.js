


let carts = document.querySelectorAll('.add-cart');

let productsArr = [

  { name: 'light1', price: 15.25 , inCart: 0 },
  { name: 'light2', price: 17.55 , inCart: 0 },
  { name: 'light3', price: 19.90 , inCart: 0 },
  { name: 'light4', price: 21.90 , inCart: 0 },
  { name: 'light5', price: 26.25 , inCart: 0 },
  { name: 'light6', price: 16.70 , inCart: 0 },
  { name: 'light7', price: 17.25 , inCart: 0 },
  { name: 'light8', price: 16.80 , inCart: 0 },
  { name: 'light9', price: 13.75 , inCart: 0 },
  { name: 'light10', price: 12.90 , inCart: 0 }

];



for (let i = 0; i < carts.length; i++) {

  carts[i].addEventListener('click', () => {
    cartsNum(productsArr[i]);
    total(productsArr[i]);

  });

}


// creat function to storage products number inside the cart:
function productsInsideCart() {
  let productsInsideCartNum = localStorage.getItem('cartsNum');

  if (productsInsideCartNum) {

    document.querySelector('.cart span').textContent = productsInsideCartNum;

  }
}


// creat local storage function
function cartsNum(product) {

  let productData = localStorage.getItem('cartsNum');
  productData = parseInt(productData);

  if (productData) {
    localStorage.setItem('cartsNum', productData + 1);
    document.querySelector('.cart span').textContent = productData + 1;

  } else {
    localStorage.setItem('cartsNum', 1);
    document.querySelector('.cart span').textContent = 1;
  }

  setItems(product);
}

function setItems(product) {

  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  console.log(cartItems);

  if (cartItems != null) {
    if (cartItems[product.name] == undefined){
      cartItems={
        ...cartItems,
        [product.name]:product

  }
}
    cartItems[product.name].inCart += 1;

}
  else {

    product.inCart = 1;
    cartItems ={[product.name]: product};
  }


  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}


//create fun to  sum total price 
function total(product){
  console.log('price :', product.price);
 
  let cartCost=localStorage.getItem('totalCost');
  if(cartCost!=null){
    cartCost=parseFloat(cartCost);
    localStorage.setItem('totalCost',cartCost + product.price);

  }
  else{
    localStorage.setItem('totalCost',product.price);
  }
  
}










productsInsideCart();