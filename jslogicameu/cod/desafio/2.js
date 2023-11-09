const prompt=require('prompt-sync')()

var anos, mesestotais, diatotal,

anos = parseInt(prompt('Quantos anos voçê tem? '))
diatotal = 365*anos
mesestotais = diatotal/30

console.log(`Voçê tem ${anos} anos, ${diatotal} dias de vida e ${mesestotais.toFixed()} meses vividos.`);