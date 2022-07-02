let campo = document.getElementById("pcampo");
let text = document.getElementById("texto");

let nomesession = sessionStorage.getItem("nome");
let imcsession = parseFloat (sessionStorage.getItem("imc")).toFixed(2);

if(imcsession < 18.5 ){
    campo.innerHTML = ` Olá ${nomesession} Seu IMC é ${parseFloat(imcsession)}`;
    text.innerHTML = "Você está Magro(a)"
} else if(imcsession < 24.9){
    campo.innerHTML = ` Olá ${nomesession} Seu IMC é ${parseFloat(imcsession)}`;
    text.innerHTML = "Você está Normal"
}else if (imcsession < 29.9){
    campo.innerHTML = ` Olá ${nomesession} Seu IMC é ${parseFloat(imcsession)}`;
    text.innerHTML = "Você está com sobrepeso"
}else if(imcsession < 39.9){
    campo.innerHTML = ` Olá ${nomesession} Seu IMC é ${parseFloat(imcsession)}`;
    text.innerHTML = "Você está com obesidade"
}else if (imcsession > 39.9){
    campo.innerHTML = ` Olá ${nomesession} Seu IMC é ${parseFloat(imcsession)}`;
    text.innerHTML = "Você está com obesidade mórbida"
}

function reset(){

    sessionStorage.clear();
}



