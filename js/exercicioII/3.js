const input = require('readline-sync')
var maças=1.30 
var maçaspro=1.0

var resultado, valor
var quantidade=parseInt(input.question('Quantas maçãs? '))

switch (quantidade) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        valor=maças*quantidade
        resultado=`Total a pagar R$${valor.toFixed(2)}`
        break;

    default:
        valor=maçaspro*quantidade
        resultado=`Total a pagar R$${valor.toFixed(2)}`
        break;
}
console.log(resultado)