// O TRIANGULO
//
// É EQUILATERO - OS 2 LADOS SÃO IGUAIS
// É OSÓSCEÇES - OS 3 LADOS SÃO IGUAIS 
// È ESCALENO = OS 3 LADOS SÃO DIFERENTES

var a, b, c 

a = 5
b = 5
c = 5

if(a === b && a === c && b === c){
    console.log('Este triagulo é equilatero')   
}

else if(a === b && b !== c){
    console.log('Este triandulo é isoceles - E1')

}
else if(a === c && b !== c){
    console.log('Este triangulo é isoceles - E2')
}

else if(c === b && a !== c){
    console.log('Este triangulo é isoceles - E3')
}

else{
    console.log('Este triagulo é escaleno')
}



