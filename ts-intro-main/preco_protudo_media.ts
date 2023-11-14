import prompt from 'prompt-sync';const input = prompt()

let codpro: number[] = []
let codpreco: number [] = []
let maiorpreco: number = 0
let mediapreco: number = 0

let cont: number = 0
while (cont <= 4){
    codpro[cont] = parseInt(input('codigo do protudo: '))
    codpreco[cont] = parseFloat(input('valor do protudo: '))
    cont++
}
for (let index = 0; index < codpreco.length; index++) {
  if (codpreco[index]>maiorpreco) {maiorpreco=codpreco[index]} mediapreco=(mediapreco+codpreco[0])/codpro.length}
console.log(`maior preço ${maiorpreco.toFixed(2)}`);console.log(`media preço ${mediapreco}`)







