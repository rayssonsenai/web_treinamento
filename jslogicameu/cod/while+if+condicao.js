// const prompt = require('prompt-sync')()
// var n1, n2, valor, continua
// continua = true
// while (continua) {
//     n1 = parseFloat(prompt('Primeiro numero: '))
//     n2 = parseFloat(prompt('Segundo numero: '))
//     if (n2===0) {
//         console.log('VALOR INVALIDO !!!!!!!!');
//         n2 = parseFloat(prompt('Segundo numero: '))
//     }
//     valor = n1/n2
//     console.log('O resultado é', valor)}
//     continua = prompt('Deseja continua com isso? [S/N] :') 
//     if(continua.toUpperCase()=== 'N'){
//         continua=false
//}
// 

const prompt = require('prompt-sync')()
var n1, n2, valor, continua, opcao
continua = true
while (continua) {
    n1 = parseFloat(prompt('Primeiro numero: '))
    n2 = parseFloat(prompt('Segundo numero: '))
    if (n2===0) {
        console.log('VALOR INVALIDO !!!!!!!!');
        n2 = parseFloat(prompt('Segundo numero: '))
    }
    valor = n1/n2
    console.log('O resultado é', valor)
    opcao = prompt('Deseja continua com isso? [S/N] :') 
    if(opcao.toUpperCase()==='N'){
        continua=false
    }
}
