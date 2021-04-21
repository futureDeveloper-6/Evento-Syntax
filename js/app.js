'use strict'


let carts = document.querySelectorAll('.add-cart');
let products = [

  { name: 'light1', price: 15, inCart: 0 },
  { name: 'light2', price: 17, inCart: 0 },
  { name: 'light3', price: 19, inCart: 0 },
  { name: 'light4', price: 21, inCart: 0 },
  { name: 'light5', price: 26, inCart: 0 },
  { name: 'light6', price: 16, inCart: 0 },
  { name: 'light7', price: 17, inCart: 0 },
  { name: 'light8', price: 16, inCart: 0 },
  { name: 'light9', price: 13, inCart: 0 },
  { name: 'light10', price: 12, inCart: 0 },
  { name: 'light11', price: 12, inCart: 0 },
  { name: 'light12', price: 12, inCart: 0 },
  { name: 'light13', price: 12, inCart: 0 },
  { name: 'light14', price: 12, inCart: 0 },
  { name: 'light15', price: 12, inCart: 0 },
  
  // for balloons
  { name: 'balloon1', price: 12, inCart: 0 },
  { name: 'balloon2', price: 12, inCart: 0 },
  { name: 'balloon3', price: 12, inCart: 0 },
  { name: 'balloon4', price: 12, inCart: 0 },
  { name: 'balloon5', price: 12, inCart: 0 },
  { name: 'balloon6', price: 12, inCart: 0 },
  { name: 'balloon7', price: 12, inCart: 0 },
  { name: 'balloon8', price: 12, inCart: 0 },
  { name: 'balloon9', price: 12, inCart: 0 },
  { name: 'balloon10', price: 12, inCart: 0 },
  { name: 'balloon11', price: 12, inCart: 0 },
  { name: 'balloon12', price: 12, inCart: 0 },
  { name: 'balloon13', price: 12, inCart: 0 },
  { name: 'balloon14', price: 12, inCart: 0 },
  { name: 'balloon15', price: 12, inCart: 0 },

  // for candels
  { name: 'candel1', price: 12, inCart: 0 },
  { name: 'candel2', price: 12, inCart: 0 },
  { name: 'candel3', price: 12, inCart: 0 },
  { name: 'candel4', price: 12, inCart: 0 },
  { name: 'candel5', price: 12, inCart: 0 },
  { name: 'candel6', price: 12, inCart: 0 },
  { name: 'candel7', price: 12, inCart: 0 },
  { name: 'candel8', price: 12, inCart: 0 },
  { name: 'candel9', price: 12, inCart: 0 },
  { name: 'candel10', price: 12, inCart: 0 },
  { name: 'candel11', price: 12, inCart: 0 },
  { name: 'candel12', price: 12, inCart: 0 },
  { name: 'candel13', price: 12, inCart: 0 },
  { name: 'candel14', price: 12, inCart: 0 },
  { name: 'candel15', price: 12, inCart: 0 },

  // for roses
  { name: 'rose1', price: 12, inCart: 0 },
  { name: 'rose2', price: 12, inCart: 0 },
  { name: 'rose3', price: 12, inCart: 0 },
  { name: 'rose4', price: 12, inCart: 0 },
  { name: 'rose5', price: 12, inCart: 0 },
  { name: 'rose6', price: 12, inCart: 0 },
  { name: 'rose7', price: 12, inCart: 0 },
  { name: 'rose8', price: 12, inCart: 0 },
  { name: 'rose9', price: 12, inCart: 0 },
  { name: 'rose10', price: 12, inCart: 0 },
  { name: 'rose11', price: 12, inCart: 0 }, 
  { name: 'rose12', price: 12, inCart: 0 }, 
  { name: 'rose13', price: 12, inCart: 0 },
  { name: 'rose14', price: 12, inCart: 0 },
  { name: 'rose15', price: 12, inCart: 0 },
  
  // for tables
  { name: 'table1', price: 12, inCart: 0 },
  { name: 'table2', price: 12, inCart: 0 },
  { name: 'table3', price: 12, inCart: 0 },
  { name: 'table4', price: 12, inCart: 0 },
  { name: 'table5', price: 12, inCart: 0 },
  { name: 'table6', price: 12, inCart: 0 },

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
  if (cartItems !== null) {
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
let cartCost = localStorage.getItem('totalCost');
function totalCost(product) {
  console.log('price :', product.price);

  let cartCost = localStorage.getItem('totalCost');

  if (cartCost !== null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem('totalCost', cartCost + product.price);
    console.log('cart', cartCost);
  }
  else {
    localStorage.setItem('totalCost', product.price);
  }

}

// creat display function for cart page:
let valueCount=0;
valueCount=parseInt(valueCount);
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");

  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector('.products');
  
  // console.log(cartItems);


  
  if (cartItems && productContainer) {

    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `<div class ="box box4">
      <img src="./img/${item.name}.jpg" alt="damaged picture from display">
      </div>
    
      <div class ="box box5" > <span><i class="price-Cont"></i></span>
      <span class="price11">${item.price}</span></div>

    <div class="box box6">
    <button class="btn minus-btn disabled" type="button">-</button>
    <input type="text"  class="quantityplus" value="${item.inCart}">
    <button class="btn plus-btn " type="button">+</button>
    </div>
    
    `;


    
    //  productContainer.innerHTML += `<div class="basketTotalContainer">
    //  <h4 class="basketTotalTitle">Basket Total</h4>
    // <h4 class="basketTotal">JD ${cartCost}</h4></div>`;
    
  
  console.log(cartCost);
 
});
}
} 

onLoadCartNumbers();
displayCart();





//  for increament and decreament from the cart page 


//setting default attribute to disabled of minus btn
document.querySelector(".minus-btn").setAttribute("disables","disables");
//taking value to increament decreament input value 

let val=0;
//taking price value in variable
let price = document.querySelector(".price11").innerText;
// price calculatin function
let totalOfTotal=0;
let container=document.getElementsByClassName('products')[0];
let totalElement=document.createElement('div')
totalElement.id="cash";
container.appendChild(totalElement);
let cashText=document.createElement('p');
cashText.id="bas"
container.appendChild(cashText);
cashText.textContent="Total cost in JD"

totalElement.textContent=cartCost;
function priceTotal(v,index) {
  //  console.log("v",i)
     let total = val * price;
     console.log('inside the pricetotal',total);

    //  totalOfTotal+=val * price;;
    //  console.log('ttttoooot', totalOfTotal);
    


     let prices=document.querySelectorAll(".price11");
     for (let i = 0; i < prices.length; i++) {
      //  const element = array[i];
      prices[index].innerText=total;
      console.log('inside for',prices[index].innerText);
      let number=parseInt(prices[i].innerText) 
      
      
    }
    console.log(prices)
    let totalTest=0
     let numbers=0

     for (let i = 0; i < prices.length; i++) {
       console.log(prices[i].textContent);
       numbers=parseInt(prices[i].textContent);
       totalTest+=numbers
       

      
       
     }
     console.log('TOTAL AFTER',totalTest);
     totalElement.innerText=totalTest
 }
//plus btn 
let plus = document.querySelectorAll(".plus-btn");
let valueCount2=document.querySelectorAll(".quantityplus")
// console.log(valueCount2[i])

for (let i = 0; i < plus.length; i++) {
  
  plus[i].addEventListener('click',function () {
    // getting value of input
     val =valueCount2[i].value;
     console.log('value',valueCount2[i].value)
     //input value increament by 1
     val++;


     cartCost+=cartCost;
     console.log('checking cart cost',cartCost);

     //setting increament input value
     valueCount2[i].value= val;
     if (valueCount2 >0 ){
       document.querySelector(".minus-btn").removeAttribute("disabled");
       document.querySelector(".minus-btn").classList.remove("disabled");
      }
      //calling price function
       priceTotal(val,i);
       console.log('price total', priceTotal(val,i));
       
      // valueCount+=valueCount;
      console.log('plus',valueCount);
    })
  }


  let minus = document.querySelectorAll(".minus-btn");
  console.log(minus)
  for (let i = 0; i < minus.length; i++) {

  
    minus[i].addEventListener('click',function () {
      // getting value of input
      console.log(event)
       val =valueCount2[i].value;
       console.log(valueCount2[i])
    //input value increament by 1
    val--;
    //setting increament input value
    valueCount2[i].value= val;
    if (valueCount == 0 ){
      // document.querySelector(".minus-btn").setAttribute("disabled","disabled");
      document.querySelector(".minus-btn").classList.remove("disabled");

    }
      //calling price function
      valueCount= priceTotal(val,i);
      valueCount-=valueCount;
      console.log('minuse',valueCount);
  })
  }
  
// add checkout button to reset cart page

function togglePopup() {
  
  if(document.getElementById("popup-1").classList.toggle("active")){
   localStorage.setItem("cartNumbers",0)
   localStorage.setItem("productsInCart",0)
   document.querySelector('.cart span').textContent = 0;
   document.querySelector('.products').textContent='';
   
   cartCost=0;
   

   

   localStorage.setItem("totalCost",0)

   
   window.reload();
  }
}


// refreshing page //
// function refreshPage(){
//   document.querySelector('.cart span').textContent = "";
// }
// refreshPage();

//fun to display popup message after user select the product
function togglePopup2(){
  document.getElementById("popup-1").classList.toggle("active")
  
}



 
// checkOut();

