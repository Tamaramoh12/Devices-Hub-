'use strict';

//array to store all objects
var allDevices = [];

//get the data from local storage and make objects from it
if(localStorage.getItem('All Devices')){
    var localStorageData = JSON.parse(localStorage.getItem('All Devices'));
    console.log('here: ' , localStorageData);
    for(var r = 0; r < localStorageData.length; r++){
        new Device(localStorageData[r].name , localStorageData[r].quantity , localStorageData[r].category);
    }
}


//creating the constructor
function Device(name , quantity , category){
    this.name = name;
    this.quantity = quantity;
    this.price = getRandomNumber(350 , 750);
    this.category = category;
    allDevices.push(this);
}

//function to check the unit price for each device
function getRandomNumber(max , min) {
    var random = Math.random();
    random = (random * (max - min + 1) + min);
    random = Math.floor(random); 
    return random;
}

//creating the table
var parentElement = document.getElementById('tableSection');
var table =  document.getElementById('addToPurchase');
parentElement.appendChild(table);
//table header 
var header = ['Device Name' , 'Quantity' , 'Unit Price' , 'Category'];
function tableHeader(){
    var headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    for(var i = 0; i < header.length; i++){
        var headerData = document.createElement('th');
        headerRow.appendChild(headerData);
        headerData.textContent = header[i];
    }
}
tableHeader();

//table content
Device.prototype.render = function(){
    var row = document.createElement('tr');
    table.appendChild(row);

    var cell1 = document.createElement('td');
    cell1.textContent = this.name;
    row.appendChild(cell1);

    var cell2 = document.createElement('td');
    cell2.textContent = this.quantity;
    row.appendChild(cell2);

    var cell3 = document.createElement('td');
    cell3.textContent = this.price;
    row.appendChild(cell3);

    var cell4 = document.createElement('td');
    cell4.textContent = this.category;
    row.appendChild(cell4); 
}

//targeting the form 
var form = document.getElementById('addDeviceForm');
form.addEventListener('submit' , addDevice);

function addDevice(event){
    event.preventDefault();

    var deviceName = event.target.name.value;

    var deviceCategory = event.target.category.value;
     // var categoryList = document.getElementById('categoryList');
    // var deviceCategory = categoryList.options[categoryList.selectedIndex].value; // to get the option 

    var deviceQuantity = event.target.quantity.value;

    //to clear the fields after we click submit
    // form.reset();

    var deviceObject = new Device(deviceName , deviceQuantity , deviceCategory );
    deviceObject.render();

    allPrices();

    localStorage.setItem('All Devices' , JSON.stringify(allDevices));
}

//function to calcualate all prices
function allPrices(){
    var total = 0;
    for(var i = 0; i < allDevices.length; i++){
        total += allDevices[i].price;
    }
    var totalResult = document.getElementById('totals');
    parentElement.appendChild(totalResult);
    totalResult.textContent = 'Total: ' + total;

}
allPrices();

//function to display every object (global function/ will run when we get the data from local storage)
function displayObjects(){
    for(var j = 0; j < allDevices.length; j++){
        allDevices[j].render();
    }
}    
displayObjects();
