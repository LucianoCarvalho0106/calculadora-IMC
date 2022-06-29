let calcular = ()=>{
 let nome = document.getElementById("nome").value;
 let altura = document.getElementById("altura").value;
 let peso = document.getElementById("peso").value;
 let campo = document.getElementById("pcampo").value;

 let imc;
 let text;
 let contentCampo;
 imc = peso / (altura * altura);

 sessionStorage.setItem("valorIMC",imc);
 contentCampo = JSON.parse(sessionStorage.getItem("valorIMC"));

 if(contentCampo < 18.5){

    campo.innerHTML = contentCampo;
    text = "Você está magro";

}else if (contentCampo < 24.9){

    text = "Você está normal";

} else if(contentCampo < 29.9){
   
    text = "Você está com sobrepeso";

}else if (contentCampo < 39.9){

    text = "Você está com obesidade";

}else if(contentCampo > 39.9){
    
    text = "Você está com obesidade mórbida";
}

}



