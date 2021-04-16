'use strict';

let carts = document.querySelectorAll('.add-cart');
for (let i = 0; i < carts.length; i++) {

  carts[i].addEventListener('click', cartfunction)

}

function cartfunction(event) {
  cartsNum();
}


// creat local storage function
function cartsNum() {
  let product = localStorage.getItem('cartsNum');

  product = parseInt(product);
  localStorage.setItem('cartsNum', 1);
}


let productArr = [];
function Products(name, price) {

  this.name = name,
    this.price = price,
    this.inCart = 0,

    productArr.push(this);
}

