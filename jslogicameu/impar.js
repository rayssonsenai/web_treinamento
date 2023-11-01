const prompt= require('prompt-sync')()

var numero = parseInt(prompt('Digite um numero: '))

if (numero % 2 ===1){
    console.log(`O numero ${numero} é impar.`)

}else{
    console.log(`O numero ${numero} par.`)        
}
console.log(numero % 2 ===1)
