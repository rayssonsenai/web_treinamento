const input = require('readline-sync')

var nome, sobrenome

// nome = ('Fulano')
// sobrenome = ('de tau')

// console.log('Seu nome é '+nome+' '+sobrenome)

nome = input.question('Seu nome ')
sobrenome = input.question('Seu sobrenome ')

console.log(`${nome} ${sobrenome}`)