const peso = parseFloat(prompt("Digite seu peso: "));
const altura = parseFloat(prompt("Digite sua altura: "));

const imc = peso / (altura * altura);

if(imc <= 18.5){
    document.getElementById('info').innerHTML = `Você está baixo do peso`;
}
if(imc >=18.6 && imc <= 24.9){
    document.getElementById('info').innerHTML = `Seu peso está ideal`;
}
if(imc >=25 && imc <= 29.9){
    document.getElementById('info').innerHTML = `Você está sobrepeso`;
}
if (imc >=30 && imc <= 34.9){
    document.getElementById('info').innerHTML = `Você está com obesidade grau I `;
}
if(imc >=35 && imc <=39.9){
    document.getElementById('info').innerHTML = `Você está com obesidade grau II`;
}
if(imc >40){
    document.getElementById('info').innerHTML = `Você está com obesidade grau III`;
}
