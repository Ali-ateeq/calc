var tb="";
const use =document.getElementById('use');
const comp=document.getElementById('comp');
function remove(){
    tb=tb.substring(0,tb.length-1);
    use.value=tb;
}
function calc (){
    tb+=value;
    use.value=tbcal;
}

function equal (){

    if( tb.length==0|| tb==" "){
        alert( " Need  a input ")
        return;
    }
  try{

  }
  catch(error){
    alert("invalid input ");

  }
}
function reset(){
use.value="";
comp.value=" ";
tb="";
}