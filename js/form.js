  
'use strict';

// <<< create form object >>>

let formArray = [];
console.log(formArray);
let dataArr = [];

function Service(companyName, serviceName, price, contact, urlFiled, description) {

    this.companyName = companyName;
    this.serviceName = serviceName;
    this.price = price;
    this.contact = contact;
    this.urlFiled = urlFiled;
    this.description = description;


    formArray.push(this);
    Service.allService.push(this);
}
Service.allService = [];
console.log(Service.allService);



let theResults = document.getElementById('theResults');

function renderService() {
    theResults.textContent = "";
    for (let i = 0; i < Service.allService.length; i++) {
        let divBox = document.createElement('div');
        theResults.appendChild(divBox);
        divBox.id ="divBox";
        divBox.textContent = `The company name  : ${Service.allService[i].companyName}\n  the service :  ${Service.allService[i].serviceName} the price ( ${Service.allService[i].price} JD \r the phone contact: ${Service.allService[i].contact}  \r the url for service : ${Service.allService[i].urlFiled}   brife description for service : ${Service.allService[i].description} )`;
    }
   
}

renderService();




    






// <<<< add service >>>

// get element by id for the form
let serviceForm = document.getElementById('serviceForm');

serviceForm.addEventListener('submit', newService);

//create new service
function newService(event) {
    event.preventDefault();
    let companyName = event.target.companyField.value;
    let serviceName = event.target.serviceField.value;
    let price = event.target.priceField.value;
    let phone = event.target.contact.value;
    let link = event.target.urlField.value;
    let description = event.target.serviceDescribtion.value;


    new Service(companyName, serviceName, price, phone, link, description);
   
    renderService();

    updateStorage();
}



// serviceForm.addEventListener('load', function () {

//     document.querySelector('input[type="file"]').addEventListener('change', function () {
//         //check the user load img
//         if (this.files && this.files[0]) {

//             var img = document.querySelector('img');
//             img.src = URL.createObjectURL(this.files[0]);

//             img.onload = imgLoded;

//         }
//     });

// });

// function imgLoded(event) {
//     alert(event);
// }



// function for update data
function updateStorage() {
    let arrayString = JSON.stringify(Service.allService);
    localStorage.setItem('Service', arrayString);
}

function getServicesdata() {
    let data = localStorage.getItem('Service');
    let servicetData = JSON.parse(data);
    if (servicetData !== null) {
        Service.allService = servicetData;
    }
    renderService();
}
getServicesdata();
