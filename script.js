var selectedRow = null;

function onFromSubmit(e) {
    event.preventDefault();
    var FormData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(FormData);
    } else {
        updataRecord(FormData)
    }
    resetForm();

}
// retrive data
function readFormData() {
    FormData["Name"] = document.getElementById("Name").value;
    FormData["empcode"] = document.getElementById("empcode").value;
    FormData["Salary"] = document.getElementById("Salary").value;
    FormData["city"] = document.getElementById("city").value;
    return FormData;
}
// insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Name;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empcode;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Salary;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = '<button onclick="onEdit(this)">Edit</button> <button  onclick="onDelete(this)">Delete</button>'
}

// edit data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('Name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('empcode').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Salary').value = selectedRow.cells[2].innerHTML;
    document.getElementById('city').value = selectedRow.cells[3].innerHTML;

}

function updataRecord(FormData) {
    selectedRow.cells[0].innerHTML = FormData.Name;
    selectedRow.cells[1].innerHTML = FormData.empcode;
    selectedRow.cells[2].innerHTML = FormData.Salary;
    selectedRow.cells[3].innerHTML = FormData.city;
}
// delete data
function onDelete(td) {
    if (confirm('do you want to delete record')) {
        row = td.parentElement.parentElement;
        document.getElementById('storelist').deleteRow(row.rowIndex);
    }
    resetForm();
}
// reset the data
function resetForm() {
    document.getElementById('Name').value = '';
    document.getElementById('empcode').value = '';
    document.getElementById('Salary').value = '';
    document.getElementById('city').value = '';

}