var tb="";
const use =document.getElementById('use');
const comp=document.getElementById('comp');

function calc (value){
  tb=tb+value;
  use.value=tb;
}

function remove(){
    tb=tb.substring(0,tb.length-1);
    use.value=tb;
}


function equal (){

    if( tb.length==0|| tb==" "){
        alert( " Need  a input ")
        return;
    }
  try{
  ans=eval(tb);
  comp.value=ans;
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