const input = require('readline-sync')

var nome = input.question('Informe seu primeiro nome? ')
var sobrename = input.question('Informe seu sobrenome? ')

var ano_de_nacimento = input.question('Qual ano você nasçeu? ')
var ano_atual = new Date().getFullYear()

var calcular_idade = ano_atual - ano_de_nacimento

console.log(`Olá, ${nome} ${sobrename} você está em ${ano_atual} e tem ${calcular_idade} anos`)


