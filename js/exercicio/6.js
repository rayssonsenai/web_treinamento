const input = require('readline-sync')
var base, altura, area

base = input.question.apply('Base ')
altura = input.question('Altura ')

area = (base * altura) /2

console.log('A area do triângulo é '+area)