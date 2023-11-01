const prompt=require('prompt-sync')()

var salario=parseFloat(prompt('Quanto é seu salario: '))
var anos=parseInt(prompt('Quantos anos de trabalho: '))
if (anos >= 20) {
    bonus = 20
    n1 = salario * (1-bonus / 100)
    n2 = salario - n1
    console.log('Salario R$',salario+n2)

} else {
    bonus = 10
    n1 = salario * (1-bonus / 100)
    n2 = salario - n1
    console.log('Salario de R$', salario+n2)
}

console.log('////////////////////////////////////////////////////////////////////////')

if (anos >= 20) {
    bonus = (salario*0.2)+salario
    console.log(`Salario de R$${bonus}`)
} else {
    bonus =  bonus = (salario*0.1)+salario
    console.log(`Salario de R$${bonus}`)
}