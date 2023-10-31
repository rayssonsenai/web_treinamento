const input = require('readline-sync')
var viajem, velocidade, ms, distancia
distancia = 435
velocidade = parseFloat(input.question('Informe sua velocidade '))/3.6
viajem = distancia*velocidade

console.log( viajem/3600)