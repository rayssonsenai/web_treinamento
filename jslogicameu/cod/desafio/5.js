const prompt=require('prompt-sync')()

var vcarro, vfcarro, vffcarro, ml

vcarro = parseFloat(prompt('Digite o valor do carro: '))
ml = vcarro+(vcarro*(20/100))
vfcarro = vcarro+(vcarro*(28/100))
vffcarro = vfcarro+(vfcarro*(45/100))

console.log(`Valor final do veiculo R$${vffcarro.toFixed(2)}`);