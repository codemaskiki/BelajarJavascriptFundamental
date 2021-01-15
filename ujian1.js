let matriks =0;
let isiMatriks=[];

function rumusMatriks () {
   var table ='';
    var lstMatriks1 = parseInt(document.getElementById("inputMatriks").value);
    for (var i = 0; i < lstMatriks1; i++){
        table += '<tr>';
        for (var j = 0; j < lstMatriks1; j++){
            table +='<td> <input type="text" name="coba"' + j + '</td>';
        }
        table +='</tr>';
    }
    document.write('<table border=0>' + table + '</table>');

   
}

function rumusMatriks2(){
    var table2 ='';
    var lstMatriks2 = parseInt(document.getElementById("inputMatriks").value);
    for (var k = 0; k < lstMatriks2; k++){
        table2 += '<tr>';
        for (var m = 0; m < lstMatriks2; m++){
            table2 +='<td> <input type="text" name="coba"' + '</td>';
        }
        table2 +='</tr>';
    }
    document.write('<table border=0>' + table2 + '</table>');
    
}