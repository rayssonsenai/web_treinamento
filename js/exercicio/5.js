const input = require('readline-sync')
var altura, largura, profundidade, volume

altura =  input.question('Altura ')
largura = input.question('Largura ')
profundidade = input.question('Pronfundidade ')

volume = altura * largura * profundidade

console.log('O volume é '+volume)