const name = prompt("Digite seu nome: ");
const gender = prompt("Digite F para feminino e M para masculino: ");
const age = parseInt(prompt("Digite sua idade: "));
const contribution = parseInt(prompt("Digite seu tempo de contribuição: "));

const calculoAposentadoria = age + contribuition;

const homemPodeAposentar = gender == "M" && contribuition >= 35 && calculoAposentadoria >= 95; // Operador lógico && retornar verdadeiro 
const mulherPodeAposentar = gender == "F" && contribuition >= 30 && calculoAposentadoria >= 85;

if(homemPodeAposentar || mulherPodeAposentar) {
    document.getElementById('info').innerHTML = `${name}, você pode se aposentar`;
} else{
    document.getElementById('info').innerHTML = `${name}, você não pode se aposentar`;
}

// const -> O valor dela não pode ser alterado.
// let -> O valor atribuido a ela pode ser alterado. Valor variar escopo local
// var -> O valor atribuido a ela pode ser alterado. Valor variar escopo global

// prompt = caixa onde algum texto; - String é um tipo dado no JavaScript

// "20" - String 
// "40" - String

// "2040" 

// parseInt - 