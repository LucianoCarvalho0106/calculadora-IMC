function calcular(){

 let altura = document.getElementById("altura").value;
 let peso = document.getElementById("peso").value;
 let nome = document.getElementById("nome").value;
 let imc = peso / (altura * altura);


 sessionStorage.setItem("nome",nome)
 sessionStorage.setItem("imc",imc)
 


}





