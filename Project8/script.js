let selectedRow = null;

function onFormSubmit() {
  let contactList = readContactList();
  if (selectedRow == null) {
    insertContact(contactList);
  } else {
    updateContact(contactList);
  }
  resetContactList();
}

function readContactList() {
  let contactList = {};
  contactList["nume"] = document.getElementById("userInput").value;
  contactList["numar"] = document.getElementById("userPhone").value;
  return contactList;
}
function insertContact(index) {
  let table = document.getElementById("tBody");
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = `<img class="icon" src="https://img.icons8.com/fluency-systems-regular/48/000000/user.png"/>`;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = index.nume;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = index.numar;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = `<button onClick="editRow(this)" class="edit"><img class="icon edit" src="icons8-edit-16.png"/></button>
                     <button onClick="delRow(this)" class="del"><img class="icon del" src="icons8-delete-16.png"></button>`;
}

function resetContactList() {
  document.getElementById("userInput").value = " ";
  document.getElementById("userPhone").value = " ";
  selectedRow = null;
}

function editRow(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("userInput").value = selectedRow.cells[1].innerHTML;
  document.getElementById("userPhone").value = selectedRow.cells[2].innerHTML;
}

function updateContact(index) {
  selectedRow.cells[1].innerHTML = index.nume;
  selectedRow.cells[2].innerHTML = index.numar;
}
function delRow(td) {
  row = td.parentElement.parentElement;
  document.getElementById("tabelList").deleteRow(row.rowIndex);
  resetContactList();
}

function toSubmit(event) {
  if (event.key === "Enter") {
    onFormSubmit();
  }
}
