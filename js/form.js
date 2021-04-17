'use strict';

// <<< create form object >>>

function Service(companyName, serviceName, price) {
    this.companyName = companyName;
    this.serviceName = serviceName;
    this.price = price;
    Service.allService.push(this);
    updateStorage();
}
Service.allService = [];
console.log(Service.allService);


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

// <<<< Render >>>>

// create list
let theResults = document.getElementById('theResults');
let theFormList = document.createElement('ul');
theResults.appendChild(theFormList);

//the render function
function renderService() {
    theFormList.textContent = '';
    for (let i = 0; i < Service.allService.length; i++) {
        let list = document.createElement('li');
        list.textContent = `The company name: ${Service.allService[i].companyName}  The service: ${Service.allService[i].serviceName}    The price: ${Service.allService[i].price} JD`;
        theFormList.appendChild(list);
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
}
getServicesdata();