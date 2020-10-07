'use strict';

//creating the constructor
function Devices(deviceName , quantity , unitPrice , category){
    this.deviceName = deviceName;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.category = category;
}

//creating the table
//table header 
var tableHeader = ['Device Name', 'Quantity' , 'Unit Price' , 'Category'];

var parentElement = document.getElementById('toPurchaseTable');
var table = document.createElement('table');
parentElement.appendChild(table);

var header = document.createElement('tr');
table.appendChild(header);

for(var i = 0; i < tableHeader.length; i++){
    var cells = document.createElement('th');
    header.appendChild(cells);
    cells.textContent = tableHeader[i];
}
