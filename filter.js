function tableSearch(){
  let input,filter,table,tr,td,txtvalue;

  input = document.getElementById("myinput");
  filter = input.ariaValueMax.toLocaleUpperCase();
  table = document.querySelector("table");
  tr = table.getElementsByTagName("tr");

 for(let i=0; i< table.rows[0].cells.length;i++){
  th = table.rows[0].cells[i].toUpperCase();
  if(th){
    for(var j = 0; j< th.length; j++){
    txtvalue = th[j].textContent || th[j].innerText; 
    if(txtvalue.trim().toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
      break;
    } 
   else {
      tr[i].style.display = "none";
    }
  }
 }
 }
}

function SelectedTextValue(ele) {
  if (ele.selectedIndex > 0) {
      var selectedText = ele.options[ele.selectedIndex].innerHTML;
      var selectedValue = ele.value;
      document.getElementById("myInput").value = selectedText;
  }
  else {
      document.getElementById("myInput").value = "";
  }
}