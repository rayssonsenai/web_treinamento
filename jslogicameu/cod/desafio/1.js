const prompt=require('prompt-sync')()

var area, altura, base
base=parseFloat(prompt('Base: '))
altura=parseFloat(prompt('Altura: '))

area = base*altura
console.log('A area do retangulo é '+area);
