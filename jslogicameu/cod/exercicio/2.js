const prompt=require('prompt-sync')()
var idade, anostr,nome,continua,rep 
rep = true
while (rep) {
    
nome = prompt('Qual seu nome: ')
idade = parseInt(prompt('Digite sua idade: '))
anostr = parseInt(prompt('Quantos anos de trabalho? '))
if (idade >= 65) {
    console.log('Sr(a) '+nome+' pode se aposentar.')
}else if (anostr >= 30) {
    console.log('Sr(a) '+nome+' pode se aposentar.')}
else if (anostr >= 25 && idade >= 60 ){ 
    console.log('Sr(a) '+nome+' pode se aposentar.')}
else{
    console.log('Sr(a) '+nome+' você não pode se aposentar.');
}
continua=prompt('Deseja continuar? [S|N]')
if (continua.toUpperCase() === 'N') {
    rep=false
}
}