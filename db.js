const{Client} = require('pg');
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "bazepodataka",
    database: "Igrice"
});

client.connect();

client.query(`SELECT * from popis_igrica`,(err,res) =>{
    if(!err){
        let tablica = res.rows;
    }
    else{
        console.log(err.message);
    }
    client.end;
}
)

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
  
  generateTable(document.querySelector("table"), tablica);
  generateTableHead(document.querySelector("table"), Object.keys(tablica[0])); 