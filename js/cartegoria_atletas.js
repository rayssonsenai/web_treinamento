const input = require('readline-sync')

var nome = input.question('Digite seu nome: ')
var idade = parseInt(input.question('Digite sua idade: '))
var resultado


switch (idade) {
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:    
    resultado = `${nome} sua cartegoria é Infantil`
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    resultado = `${nome} sua cartegoria é Juvenil`

        break;
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    resultado = `${nome} sua cartegoria é Junior`
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    resultado = `${nome} sua cartegoria é Profissional`
    
        break;   
    default:
        resultado = "NENHUMA CARTEGORIA"
        break;
}
console.log(resultado)