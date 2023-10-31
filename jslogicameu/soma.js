const prompt=require('prompt-sync')()

var num1 = parseInt(prompt('Digite um numero: '))
var num2 = parseInt(prompt('Digite mais um numero: '))
var soma = num1 + num2

console.log(`A soma de ${num1} e ${num2} é igual á ${soma}.`)