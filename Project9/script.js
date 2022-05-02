let selectedRow = null;

function onFormSubmit() {
  let shoppingList = readShoppingList();
  if (selectedRow == null) {
    insertContact(shoppingList);
  }
  resetShoppingList();
}
function readShoppingList() {
  let shoppingList = {};
  shoppingList["item"] = document.getElementById("userInput").value;
  return shoppingList;
}
function insertContact(index) {
  let table = document.querySelector("tbody");
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = index.item;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = `<button class="strike">Mark as buyed</button>`;
}

function resetShoppingList() {
  document.getElementById("userInput").value = " ";
  selectedRow = null;
}

let table = document.getElementById("allItems");
table.addEventListener("click", strikeItem);

function strikeItem(e) {
  let item = e.target;
  if (item.classList.contains("strike")) {
    let x = item.closest("tr");
    x.style.textDecoration = "line-through";
  }
}

function sortTableAsc() {
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("allItems");
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i + 1].getElementsByTagName("td")[0];

      if (x.innerHTML.trim().toLowerCase() > y.innerHTML.trim().toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function sortTableDesc() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("allItems");
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i + 1].getElementsByTagName("td")[0];

      if (x.innerHTML.trim().toLowerCase() < y.innerHTML.trim().toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
