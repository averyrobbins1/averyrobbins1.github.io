// I referenced this blog for help making the tables with javascript
// https://www.valentinog.com/blog/html-table/

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }

function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }

fetch('../data/rentals.json')
    .then((response) => response.json())
    .then((json) => {

        let table = document.querySelector("#datatable");
        let data = Object.keys(json[0])
        generateTableHead(table, data)
        generateTable(table, json)

    })