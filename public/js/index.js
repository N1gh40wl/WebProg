document.getElementById('info').hidden = true;
document.getElementById('JsTask').hidden = true;

var i =0;
var j =0;
function Info()
{

if (i==0){
 document.getElementById('info').hidden = false;
 i=1;

}
else{
   document.getElementById('info').hidden = true;
   i=0;
}
}

function TaskVis()
{

if (j==0){
 document.getElementById('JsTask').hidden = false;
j=1;

}
else{
   document.getElementById('JsTask').hidden = true;
   j=0;
}
}


task122.onclick = function() {
    var num1 = document.getElementById('num1').value;
    var num2= document.getElementById('num2').value;
    var result = Number(num1)+Number(num2);
    document.getElementById('res').innerHTML=result;
};

butt.onclick = function() {
    var val = document.getElementById('elem1').value;
    document.getElementById('str').innerHTML="Вы ввели: "+val;
};
var table = "";
task3.onclick = function() {
  var n = document.getElementById('kol').value;
  console.log(n);
  n= Number(n)+1;
  for(let i = 1; i < n; i++) {
  table += "<tr>";
  table += "<td>" + i + "</td>";
  table += "<td>" + "<input id='td"+i+"' type='text' name='quantity' placeholder='элемент'>"+ "</td>";
    table += "<td id= 'tdres"+i+"'>" +" "+ "</td>";
  table += "</tr>";
}

      document.getElementById("arrtable").innerHTML = table;
};

task3res.onclick = function() {
  var n = document.getElementById('kol').value;
  n= Number(n)+1;
  let arr = new Array();
  for(let i = 1; i < n; i++) {
    if (isNaN(document.getElementById('td'+i).value)==true){
      arr[i]=0;
    }else
    arr[i]=document.getElementById('td'+i).value;
    console.log(arr[i]);
  }
  for(let i = 1; i < n; i++) {
    arr[i]=Number(arr[i])*Number(arr[i]);
      console.log(arr[i]);
      document.getElementById('tdres'+i).innerHTML="="+arr[i];
  }


};
