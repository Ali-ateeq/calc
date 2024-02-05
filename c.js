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
var icon =document.getElementById("icon");
icon.innerHTML= `<i class="fa-sharp fa-solid fa-xmark"></i>`







function abso(number) {
  Math.abs()
 return Math.abs(number);
 
 
}

function logs(number) {
Math.log10();
return Math.log10(number) ;
}

function fact (num){
 let res=1;
 if (num<0){
   return undefined;
 }
 else if (num==0){
   return 1;
 }
 else {
   for(let i=num;i>1;i--){
     res*=i;
   }
   return res;
 }
}