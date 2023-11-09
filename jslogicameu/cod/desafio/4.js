const prompt=require('prompt-sync')()
 
var salario, pa,nsalario

salario = parseFloat(prompt("Digite o salario atual: "))
pa =  parseFloat(prompt("Porcetual de ajuste: "))
nsalario = salario+(salario*(pa/100))
console.log(`Seu salario de R$${salario.toFixed(2)} com ajuste de ${pa}% será de R$${nsalario.toFixed(2)}`);
