const input = require('readline-sync')
numero = parseInt(input.question("Digite um numero: "))
var resultado
switch (numero) {
    case 0:
    case 1:
    case 2:
    case 3:   
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    resultado = 'É menor que 10.'
        break;
    case 10:
        resultado = 'È 10.'
        break;
    default:
        resultado = 'E maior que 10.'
        break;
}
console.log(resultado)