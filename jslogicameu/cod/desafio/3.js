const prompt=require('prompt-sync')()

var contv,contb,contn,total,      eleitor,again,continua

contv=0,contb=0,contn=0
again=true
while (again) {
    eleitor = prompt('Qual é seu voto: |Valido (1) | Branco (2) | Nulo (3)| ')
    if (eleitor === '1') {
        contv++}
    else if (eleitor === '2') {
        contb++}
    else if (eleitor === '3') {
        contn++}
    else{console.log('Voto invalido (╯°□°）╯︵ ┻━┻')}
    
    continua = prompt('Deseja encerrar a votação? (S|N) ')
    if (continua.toUpperCase()==='S') {
        again = false}
}
total= contb+contn+contv
console.log('Total de votos ',total);
console.log(`Resultado ->  Validos ${contv} | Brancos ${contv} | Nulos ${contn}.`);
