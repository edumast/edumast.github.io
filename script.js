
let variavel;
variavel=1;
var nome;
var senh;
var data;
var nome;
var texto;
function ms(){
nome = document.getElementById("nome").value;
data=document.getElementById("data").value;
senh=document.getElementById("senh").value;
 
texto ="seu nome é:"+ nome +" e sua senha é:"+ senh; 
document.getElementById("est").innerHTML=(texto);

 return true;
}
function stl(){
				document.getElementById("hh").innerHTML=(texto);
				return true;
}
pcteste();
function pcteste(){
pc=true;
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) { 
				pc=false;							
				}
				if (pc==true){
								alert("atenção este site não foi projetado para pc! as proporções de tela poderam estar erradas!")
				}
}
