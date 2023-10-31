const input = require('readline-sync')
// a = 2.90 g = 3.30
var combustivel = parseInt(input.question('1 para Álcool ou 2 para Gasolina: '))
var litros = parseFloat(input.question('Quantos litros: '))
var valor
switch (combustivel) {
    case 1:
        var desconto
        if (litros==20) {
            desconto=3
            valor=`3% de desconto, total a pagar R$${(2.90 * litros)* (1-desconto / 100).toFixed(2)}`
            
        } else if (litros>=21){
            desconto=5
            valor=`5% de desconto, total a pagar R$${(2.90 * litros)* (1-desconto / 100).toFixed(2)}`
               
        } else {
            valor=`Total a pagar R$${2.90*litros.toFixed(2)}`
        
        }
            
        break;
    case 2:
        var desconto
        if (litros==20) {
            desconto=4
            valor=`4% de desconto, total a pagar R$${(3.30 * litros)*(1-desconto / 100).toFixed(2)}`
            
        } else if (litros>=21){
            desconto=6
            valor=`6% de desconto, total a pagar R$${(3.30 * litros)*(1-desconto / 100).toFixed(2)}`
               
        } else {
            valor=`Total a pagar R$${3.30 * litros.toFixed(2)}`
        
        }
        break;

    default:
        valor=`Opção invalida`
        break;
}
console.log(valor)
