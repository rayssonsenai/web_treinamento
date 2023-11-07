const prompt=require('prompt-sync')()

var nomealun , cont 
var continua=true
var alunos=[]

while (continua) {
    nomealun=prompt('Informe o nome do aluno: ')
    alunos.push(nomealun)
    continua=prompt('Deseja continuar? [S/N]')
        if (continua.toUpperCase() === 'N') {
            continua=false}
}
for (let cont = 0;  cont < alunos.length; cont++) {
    console.log(`${cont+1} -> ${alunos[cont]}`)
}