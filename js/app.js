'use strict';

//array to store all objects
var allDevicesArray = [];

//targeting the table
var parentElement = document.getElementById('toPurchaseTable');
var table = document.createElement('table');
parentElement.appendChild(table);

//creating the constructor
function Device(deviceName , quantity , unitPrice){
    this.deviceName = deviceName;
    this.quantity = quantity;
    this.unitPrice = this.calculateUnitPrice(750,350);
    this.category = [ 'Mobile' , 'Laptop' ,'Tablet'];
    
    allDevicesArray.push(this);
}

//method to generate random number for the unit price
Device.prototype.calculateUnitPrice = function(max,min){
    var random = Math.random();
    random = (random * (max - min + 1) + min);
    Math.floor;
    return random;
}
console.log(Device.unitPrice);
//targeting the form
var form = document.getElementById('deviceForm');
form.addEventListener('submit' , addDevice);
//fill the category list
// var menu = document.getElementById('category');
// for(var i = 0; i < this.category.length; i++){  
//     var option = document.createElement('option');
//     menu.appendChild(option);
//     option.textContent = 'test';
    
// }
//function that call whenever we click on submit button
function addDevice(event){
    event.preventDefault(); //to stop the page from refreshing
    
    var DeviceName = event.target.itemName.value;
    // var deviceCategory = event.target.category.selected;
    var deviceCategory = 'tset';
    var quantity = event.target.quantity.value;

    var Deviceobj = new Device(DeviceName , quantity , 55);
 

    //create table rows
    var row = document.createElement('tr');
    table.appendChild(row);
    
    var cell1 = document.createElement('td');
    row.appendChild(cell1);
    cell1.textContent = DeviceName;

    var cell2 = document.createElement('td');
    row.appendChild(cell2);
    cell2.textContent = quantity;

    var cell3 = document.createElement('td');
    row.appendChild(cell3);
    cell3.textContent = deviceCategory;

    var cell4 = document.createElement('td');
    row.appendChild(cell4);
    cell4.textContent = deviceCategory;


    localStorage.setItem('All Devices' , JSON.stringify(Deviceobj));

    //calculate the price of all devices
    for(var i = 0; i < allDevicesArray.length; i++){
        var totalOfDevices = 0;
        totalOfDevices += allDevicesArray.unitPrice[i];
    }
    document.getElementById('totalArea').textContent = totalOfDevices;
}

//creating the first row in the table
function tableFirstRow(){
    //table header 
    var tableHeader = ['Device Name', 'Quantity' , 'Unit Price' , 'Category'];

    var header = document.createElement('tr');
    table.appendChild(header);

    for(var i = 0; i < tableHeader.length; i++){
        var cells = document.createElement('th');
        header.appendChild(cells);
        cells.textContent = tableHeader[i];
    }
}
tableFirstRow();