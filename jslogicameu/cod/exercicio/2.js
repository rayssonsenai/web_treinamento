const prompt=require('prompt-sync')()
var idade, anostr,resultado
idade = parseInt(prompt('Digite sua idade: '))
anostr = parseInt(prompt('Quantos anos de trabalho? '))
if (idade >= 65) {
    console.log('Pode se aposentar.')
}else if (anostr >= 30) {
    console.log('Pode se aposentar.')}
else if (anostr >= 30 && idade >= 60 ){ 
    console.log('Pode se aposentar.')}
else{
    console.log('Você não pode se aposentar.');
}
