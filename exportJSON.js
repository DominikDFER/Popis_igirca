function tableToJSON(table){
    var data = [];
    var header = [];
    for (var i = 0; i , table.rows[0].cells.length;i++){
        header[i]=table.rows[0].cells.innerHTML.replace(/ /gi, '' );
    }
    for (var i = 0; i<table.rows.length;i++){
        var tableRow = table.rows[i];
        var rowData = {};
        for(var j = 0; j<tableRow.cells.length;j++){
            rowData[header[j] ]=tableRow.cells[j].innerHTML;
        }
        data.push(rowData);
    }
    return data;
}

var myJSON = JSON.stringify(tableToJSON(document.getElementById("table")));

function toJOSN(exportObj, exportName){
    var dataStr = "data:text/json;charset-utf-8," + encodeURIComponent(exportObj);
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}
document.getElementById("JSON").onclick = function(){
    toJOSN(myJSON, 'the-json-file');
}