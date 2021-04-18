  
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


// <<<< Render >>>>


// add test
// create table
let theResults = document.getElementById('theResults');
let theFormTable = document.createElement('table');
theResults.appendChild(theFormTable);

//the render function
// create header array
let headerArray = ['Company']

function header() {
    let headingRow = document.createElement('tr');
    theFormTable.appendChild(headingRow);
    let thElement = document.createElement('th');
    headingRow.appendChild(thElement);
    thElement.textContent = "Company Name";
    for (let i = 0; i < 7; i++) {
        let hElement = document.createElement('th');
        headingRow.appendChild(hElement);
        hElement.textContent = hoursOpen[i];
    }
    let dailyTotalElement = document.createElement('th');
    headingRow.appendChild(dailyTotalElement);
    dailyTotalElement.textContent = "Daily Location Total";
};

function renderService() {

    theFormTable.textContent = "";
    for (let i = 0; i < Service.allService.length; i++) {
        let row = document.createElement('tr');
        theFormTable.appendChild(row);
        row.textContent = `The company name  : ${Service.allService[i].companyName}\n  the service :  ${Service.allService[i].serviceName} the price ( ${Service.allService[i].price} JD \r the phone contact: ${Service.allService[i].contact}  \r the url for service : ${Service.allService[i].urlFiled}   brife description for service : ${Service.allService[i].description} )`;
        //Service.allService=[];    
    }
}

// create list


let theResults = document.getElementById('theResults');
// let theFormList = document.createElement('ul');
// theResults.appendChild(theFormList);


// for (let i = 0; i < formArray.length ; i++) {
//     theFormList = "";
//     renderService();
//     //the render function
// }

// function renderService() {
//     theResults.textContent = "";
//     for (let i = 0; i < Service.allService.length; i++) {
//         var divigin = document.createElement('div');
//         theResults.appendChild(divigin);
//         divigin.textContent = `The company name  : ${Service.allService[i].companyName}\n  the service :  ${Service.allService[i].serviceName} the price ( ${Service.allService[i].price} JD \r the phone contact: ${Service.allService[i].contact}  \r the url for service : ${Service.allService[i].urlFiled}   brife description for service : ${Service.allService[i].description} )`;
//         //Service.allService=[];    
//     }

// divigin.id ="divBox";
// document.getElementById('divBox').style.border = "5px" ;
    
//     //\n
// }






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
