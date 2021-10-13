var rs;
var chmy;
var chli;
var hhl;
var bom;
var mdc;
var ling;
ling="eng"; 
var mdl=false;
mdc=false;
rs=" \\_(0_0)_/";
chli=document.getElementById("chli").value;
function env(){
  resp();
}
function resp(){  
chmy=document.getElementById("chmy").value;
  
if (mdc==true){ document.body.style.backgroundColor = chmy;
mdc=false;
    } else if (chmy=="hello"||chmy=="hl"||chmy=="hello oliver"||chmy=="hey"||chmy=="hey oliver"||chmy=="hi"||chmy=="hi oliver"){
    rs="Hello edumast";
  }else if(chmy=="bom dia"||chmy=="good day"){
  if (ling=="eng"){
    rs="good day!";
  }
  else if
    (ling=="br"){
  rs="bom dia!";
      
  }  

  }else if(chmy=="mudar cor"){
mdc=true;  
}else if (mdl==true){
    ling=chmy;
  }else if(chmy=="mudar lingua"){
  mdl=true;
  }
   document.getElementById("chli").innerHTML=(rs);
}
