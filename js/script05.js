const salario = parseFloat(prompt("Digite seu salário: "));

const reajuste = salario + (salario * 0.30);

if(salario < 500.0){
    document.getElementById('info').innerHTML = `Sinto muito, você não terá um aumento`;
}
else{
    document.getElementById('info').innerHTML = `Seu salário será de: R$ ${reajuste}`;
}