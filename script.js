// CRUD - Create, Read, Update, Delete
//Global variables
var row = null;

function Submit(){
  var dataEntered = retrieveData();
  var readData = readingDataFromLocalStorage(dataEntered);
  if (dataEntered == false){
    msg.innerHTML =`<h3 style = "color: red"> Please Enter Data!!<?h3>`;
    
  }else{
    if (row === null) {
      insert(readData);
      msg.innerHTML = `<h3 style = "color: green">Data inserted<?h3>`;
    }else{
      update();
      msg.innerHTML = `<h3 style = "color: green">Data Updated<?h3>`;
    }
  }
  document.getElementById("form").reset();    
}
//CREATE
//retrieving data from form
function retrieveData(){
  var name1 = document.getElementById("name").value;
  var job = document.getElementById("job").value;
  var exp = document.getElementById("exp").value;

  var arr =[name1, job, exp];
  if (arr.includes("")){
    return false;
  }else{
    return arr;}
}
//READ
//Data in localStorage
function readingDataFromLocalStorage (dataEntered) {
//Storing data from local storage
var n = localStorage.setItem("Name",dataEntered[0]);
var j = localStorage.setItem("Job",dataEntered[1]);
var e = localStorage.setItem("Experience",dataEntered[2]);

//getting values from the local storage to the table
var n1 = localStorage.getItem("Name",n);
var j1 = localStorage.getItem("Job",j);
var e1 = localStorage.getItem("Experience",e);

var arr = [n1, j1, e1];
return arr;
}

//INSERT
function insert(readData){
  var row = table.insertRow(); 
  row.insertCell(0).innerHTML = readData[0];
  row.insertCell(1).innerHTML = readData[1];
  row.insertCell(2).innerHTML = readData[2];
  row.insertCell(3).innerHTML = `<button onclick = "edit(this)" class="edt">Edit</button>
   <button onclick = "remove(this)" class ="del">Delete</button>`;
  
}

//EDIT
function edit(td){
  row = td.parentElement.parentElement;
  document.getElementById("name").value = row.cells[0].innerHTML;
  document.getElementById("job").value = row.cells[1].innerHTML;
  document.getElementById("exp").value = row.cells[2].innerHTML;
}

//UPDATE
function update(){
  row.cells[0].innerHTML = document.getElementById("name").value;
  row.cells[1].innerHTML = document.getElementById("job").value;
  row.cells[2].innerHTML = document.getElementById("exp").value;
  row = null;
}

//DELETE
function remove (td){
   var ans = confirm("Are you sure you want to delete this row?");
   if(ans == true){
  row = td.parentElement.parentElement;
  document.getElementById("table").deleteRow(row.rowIndex);
   }
}