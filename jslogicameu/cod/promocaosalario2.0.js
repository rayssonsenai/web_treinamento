const prompt=require('prompt-sync')()
var bonus,salario,anos
var continuar = true
while (continuar) {
    var salario=parseFloat(prompt('Quanto é seu salario: '))
    var anos=parseInt(prompt('Quantos anos de trabalho: '))
    if (anos >= 20) {
        bonus = (salario*0.2)+salario
        console.log(`Salario de R$${bonus}`)
    } else {
        bonus =  bonus = (salario*0.1)+salario
        console.log(`Salario de R$${bonus}`)
    }
    continuar = prompt('S para continuar | N para encerrar.')
    if (continuar.toUpperCase()=== 'N'){
     continuar=false
        
    }
}