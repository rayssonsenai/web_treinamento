const input = require('readline-sync')


var temperatura = parseFloat(input.question('Digite um valor de uma temperatura: '))
var escolha = input.question('Digite 1 para Celcius, ou 2 para Fahrenheit: ') 

switch (escolha) {
    case '1':
        convertido =`A temperatura em Celcius é ${((temperatura-32)*5/9).toFixed(2)}`
        break;

    case '2':
        convertido =`A temperatura em Fahrenheit é ${((temperatura*1.8)+32).toFixed(2)}`
        break;

    default:
        resultado = "Nenhuma temperatura foi escolhida"
        break;
}
console.log(convertido)

