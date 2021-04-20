  
'use strict';

// <<< create form object >>>



function Service(companyName, serviceName, price, contact, urlFiled, description) {

    this.companyName = companyName;
    this.serviceName = serviceName;
    this.price = price;
    this.contact = contact;
    this.urlFiled = urlFiled;
    this.description = description;

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
        divBox.innerHTML = `We are <p style="color:#c241bb ; font-weight:bolder;">${Service.allService[i].companyName}</p> we will be glad if you share  ${Service.allService[i].serviceName} service to your great website, our service costs around ${Service.allService[i].price} JD.<br> kindly contact us through : ${Service.allService[i].contact}<br> you can check our services through this link : ${Service.allService[i].urlFiled}<br> and this is a brife description of our services : ${Service.allService[i].description} `;
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


function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
  }
``