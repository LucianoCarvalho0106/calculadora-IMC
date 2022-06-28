let calcular = ()=>{
 let nome = document.getElementById("nome").value;
 let altura = document.getElementById("altura").value;
 let peso = document.getElementById("peso").value;
 let campo = document.getElementById("pcampo");

 let imc;
 let text;
 imc = peso / (altura * altura);

 //text = `ola ${nome} seu imc é imc`;
campo.innerHTML = imc.toString;


}



