const prompt= require('prompt-sync')()

var a = (prompt('1: '))
var b = (prompt('2: '))
var c = (prompt('3: '))

if (a!==0 && b!==0 && c!==0){
    if (a!==b&&c!==b&&b!==c){
    console.log('O trangulo é isoceles')}
    else if (a===b&&c!==b&&b!==a){
        console.log('O trangulo é isoceles')}
    else if (a!==b&&c===b&&b!==a){
        console.log('O trangulo é isoceles')}
    else if (a===c&&a!==b&&b!==c){
        console.log('O trangulo é isoceles')} 
        
   else {
    console.log('O triangulo e equilatero')
}
}else{
    console.log('Valor invalido.')}

    // tem um erro quê eu não achei.