const prompt=require('prompt-sync')()
opçao = parseInt(prompt('Escolha 1, 2 ou 3: '))
switch (opçao) {
    case 1:
        item = 'Caderno.'
        break;
    case 2:
        item = 'Lapiz'
        break;
    case 3:
        item = 'Borracha.'
        break;


    default:
        item = 'Opção invalida.'
        break;
}
console.log(item)