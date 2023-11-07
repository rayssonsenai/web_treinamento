var lista = ['Pera','Uva','Jaca','Mamão','Melancia']
var index, cont = 0
while (cont < lista.length) {
    console.log(lista[cont]);
    cont++
}




console.log(lista.length);
console.log(lista[3]);
console.log(lista)
for (let index = 0; index < lista.length; index++){
    console.log(`${index+1} -> ${lista[index]}`);
}

// ALTERNATIVO

// for (let cont = 0; cont < lista.length; cont++){
//     console.log(`${cont+1} -> ${lista[cont]}`);
// }
