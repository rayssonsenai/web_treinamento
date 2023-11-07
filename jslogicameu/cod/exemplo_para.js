// for (let count = 0; count < 11 ; count++) {
//    console.log(count);
    
// }

// for (let count = 10; count > 0; count--) {
//     console.log(count);
     
//  }
const prompt=require('prompt-sync')()

var n=parseInt(prompt('Digite um numero de inicio: '))
var f=parseInt(prompt('Digite um numero de termino: '))
while (f === 0 ){
    console.log('O termino deve ser maior quê 0.');
    var f=parseInt(prompt('Digite um numero de termino: '))
}
for (let count; n<f; n++){
    console.log(n);
}