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

function reset(){
use.value="";
comp.value=" ";
tb="";
}