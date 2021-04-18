'use strict';

// <<< create form object >>>

let formArray = [];
console.log(formArray);
let dataArr = [];

function Service(companyName, serviceName, price) {

    this.companyName = companyName;
    this.serviceName = serviceName;
    this.price = price;
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
        row.textContent = `The company name is : ${Service.allService[i].companyName} and the service : is ${Service.allService[i].serviceName} and the price ( ${Service.allService[i].price} JD)`;
        //Service.allService=[];    
    }


}





// <<<< add service >>>

// get element by id for the form
let serviceForm = document.getElementById('serviceForm');

serviceForm.addEventListener('submit', newService);

//create new service
function newService(event) {
    event.preventDefault();
    let companyName = event.target.companyField.value;
    let seerviceName = event.target.serviceField.value;
    let price = event.target.priceField.value;
    new Service(companyName, seerviceName, price);
    renderService();
    updateStorage();
}
renderService();

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