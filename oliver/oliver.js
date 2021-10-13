var rs;
var chmy;
var chli;
var hhl;
var bom;
var mdc;
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
  rs="bom dia!";
  bom=true;
  }else if(chmy=="mudar cor"){
mdc=true;  
  }
   document.getElementById("chli").innerHTML=(rs);
 console.log(rs)
}
