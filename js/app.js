


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
  { name: 'light11', price: 12.90, inCart: 0 },
  { name: 'light12', price: 12.90, inCart: 0 },
  { name: 'light13', price: 12.90, inCart: 0 },
  { name: 'light14', price: 12.90, inCart: 0 },
  { name: 'light15', price: 12.90, inCart: 0 },
  
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
  { name: 'candel12', price: 12.90, inCart: 0 },
  { name: 'candel13', price: 12.90, inCart: 0 },
  { name: 'candel14', price: 12.90, inCart: 0 },
  { name: 'candel15', price: 12.90, inCart: 0 },

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
  { name: 'rose14', price: 12.90, inCart: 0 },
  { name: 'rose15', price: 12.90, inCart: 0 },
  
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
function totalCost(product) {
  console.log('price :', product.price);

<<<<<<< HEAD
   let cartCost = localStorage.getItem('totalCost');
=======
  let cartCost = localStorage.getItem('totalCost');
>>>>>>> 9069cef7b8ff70e2ee25f0fa91d2ef045e384a8f

  if (cartCost !== null) {
    cartCost = parseFloat(cartCost);
    localStorage.setItem('totalCost', cartCost + product.price);
    console.log('cart', cartCost);
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
<<<<<<< HEAD
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

      
  
=======
      productContainer.innerHTML += `<div class ="product">
      <img src="./img/lights/${item.name}.jpg" alt="damaged picture from display"></div>
    
      <div class ="price" > <span><i class="price-Cont"></i></span>
      <span class="price11">${item.price}</span></div>

    <div class="quantity2">
    <button class="btn minus-btn disabled" type="button">-</button>
    <input type="text" class="quantityplus" value="${item.inCart}">
    <button class="btn plus-btn " type="button">+</button>
    </div>
>>>>>>> 9069cef7b8ff70e2ee25f0fa91d2ef045e384a8f
    `;
    // <div class="total"><span>JD ${item.inCart * item.price}</span></div>


    });
    productContainer.innerHTML += `<div class="basketTotalContainer">
    <h4 class="basketTotalTitle">Basket Total</h4>
    <h4 class="basketTotal">JD ${cartCost}</h4></div>`;
    
  }
  console.log(cartCost);
}




onLoadCartNumbers();
displayCart();

//  for increament and decreament from the cart page 
{/* <div class ="quantity" >
    <ion-icon  class="decrease" name="caret-back-outline"></ion-icon>
    <span>${item.inCart}</span>
    <ion-icon class="increase" name="caret-forward-outline"></ion-icon>
    </div> */}
  // to calculate the price when increment &decraement from cartpage 







//setting default attribute to disabled of minus btn
document.querySelector(".minus-btn").setAttribute("disables","disables");
//taking value to increament decreament input value 
let valueCount=0;
let val=0;
//taking price value in variable
let price = document.querySelector(".price11").innerText;
// price calculatin function
 function priceTotal(v,index) {
  //  console.log("v",i)
     let total = val * price;
     let prices=document.querySelectorAll(".price11");
     for (let i = 0; i < prices.length; i++) {
      //  const element = array[i];
      prices[index].innerText=total;
       
     }
    //  ).innerText= total
     console.log(prices)
 }
//plus btn 
let plus = document.querySelectorAll(".plus-btn");
let valueCount2=document.querySelectorAll(".quantityplus")
// console.log(valueCount2[i])

for (let i = 0; i < plus.length; i++) {
  
  plus[i].addEventListener('click',function () {
    // getting value of input
     val =valueCount2[i].value;
     console.log(valueCount2[i])
     //input value increament by 1
     val++;
     //setting increament input value
     valueCount2[i].value= val;
     if (valueCount2 >0 ){
       document.querySelector(".minus-btn").removeAttribute("disabled");
       document.querySelector(".minus-btn").classList.remove("disabled");
      }
      //calling price function
      priceTotal(val,i);
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
      priceTotal(val,i);
  })
  }
  

// console.log(valueCount);
//minus btn 
// document.querySelector(".minus-btn").addEventListener('click',function () {
  // getting value of input
  // valueCount=document.getElementById("quantity").value;
  //input value increament by 1
  // valueCount--;
  //setting increament input value
  // document.getElementById("quantity").value = valueCount;
  // if (valueCount == 0 ){
    // document.querySelector(".minus-btn").setAttribute("disabled","disabled");
  // }
// calling price function
  // priceTotal() ;
// })








<<<<<<< HEAD
{/* <img src="./img/balloon/${item.name}.jpg" alt="damaged picture from display">
      <img src="./img/candel/${item.name}.jpg" alt="damaged picture from display"></img> */}
=======

// add checkout button

function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}






>>>>>>> 9069cef7b8ff70e2ee25f0fa91d2ef045e384a8f

