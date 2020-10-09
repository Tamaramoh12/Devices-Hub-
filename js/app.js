'use strict';

//array to store all objects
var allDevices = [];

if(localStorage.getItem('Devices')){
    var localStorageData = JSON.parse(localStorage.getItem('Devices'));
    for(var j = 0; j < localStorageData.length; j++){
        new Device(localStorageData[j].name , localStorageData[j].category , localStorageData[j].quantity);
        
    }
}

//Constructor
function Device (name , category , quantity){
    this.name = name;
    this.category = category;
    this.quantity = quantity;
    this.price = getRandomIntInclusive(350,750);
    allDevices.push(this);
}

//helper function - calculate unit price
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}

//targeting the table
var parentElement = document.getElementById('tableSection');
var table = document.createElement('table');
parentElement.appendChild(table);

//table  header 
var header = ['Device Name' , 'Quantity' , 'Unit Price' , 'Category'];
function tableHeader(){
    var headerRow = document.createElement('tr');
    table.appendChild(headerRow);

    for(var i = 0; i < header.length; i++){
        var cell = document.createElement('th');
        headerRow.appendChild(cell);
        cell.textContent = header[i];
    }
}
tableHeader();

//table rows
Device.prototype.render = function(){
    var addRow = document.createElement('tr');
    table.appendChild(addRow);

    var cell1 = document.createElement('td');
    addRow.appendChild(cell1);
    cell1.textContent = this.name;

    var cell2 = document.createElement('td');
    addRow.appendChild(cell2);
    cell2.textContent = this.quantity;

    var cell3 = document.createElement('td');
    addRow.appendChild(cell3);
    cell3.textContent = this.price;

    var cell4 = document.createElement('td');
    addRow.appendChild(cell4);
    cell4.textContent = this.category;
}

//form
var form = document.getElementById('purchaseForm');

form.addEventListener('submit' , addDevice);

function addDevice(event){
    event.preventDefault();

    var name =  event.target.deviceName.value;
    var quantity = event.target.quantity.value;
    var category = event.target.category.value;

    var newDevice = new Device(name , quantity , category);
    newDevice.render();
    form.reset();

    localStorage.setItem('Devices' , JSON.stringify(allDevices));
    totalPrices();
}
function totalPrices(){
    var total = 0;
    for(var i=0;i<allDevices.length; i++){
        total += allDevices[i].price;
    }
    var paragraph = document.getElementById('totalPar');
    parentElement.appendChild(paragraph);
    paragraph.textContent = 'Total: ' + total;
}

function renderRow(){
    for(var i= 0; i < allDevices.length; i++){
        allDevices[i].render();
    }
}
renderRow();
totalPrices();