const prompt=require('prompt-sync')()
 
var numeros = []
var cont = 0
var numero

while (cont < 3){
    numero = parseInt(prompt(`Digite o ${cont + 1}º numero: `))
    numeros[cont] = numero
    cont++ }
numeros.sort()
console.log(numeros);

