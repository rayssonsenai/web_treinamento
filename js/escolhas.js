const input = require('readline-sync')

var valor = parseFloat(input.question('Informe um valor em R$: '))

var moeda = input.question('1-Dolar   2-Euro: ')

var resultado 

switch (moeda) {
    case '1':
        resultado = `O valor em Dolar sera $ ${(valor / 5.00).toFixed(2)}`
        break;

    case '2':
        resultado = `O valor em Euro sera € ${(valor / 6.50).toFixed(2)}`
        break;

    default:
        resultado = `Nenhuma opção selecionada para conversão de R$ ${valor.toFixed(2)}`
        break;
}
console.log(resultado)
