const input = require('readline-sync')
var nota1, nota2, nota3, media
const p2=2, p3=3, p5=5
nota1 = parseFloat(input.question('Nota I '))
nota2 = parseFloat(input.question('Nota II '))
nota3 = parseFloat(input.question('Nota III '))
 
media = (nota1 * p2 + nota2 * p3 + nota3* p5)/(p2+p3+p5)

console.log('O valor da media é '+media)
