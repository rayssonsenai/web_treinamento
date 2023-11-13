import prompt from 'prompt-sync';const input = prompt()
let valor = 0
let quest: number=parseInt(input('Morango 🍓|1|  /  Maçã 🍎|2| 🤠👉: '))
let kg: number=parseFloat(input('Quantos Kg? '))

switch (quest) {
    case 1: if (kg >= 5) {valor=2.20*kg; console.log(`O valor total sera de R$${valor.toFixed(2)}.`)}
            else {{valor=2.50*kg}; console.log(`O valor total sera de R$${valor.toFixed(2)}.`)}
            break;
    case 2: if (kg >= 5) {valor=2.20*kg; console.log(`O valor total sera de R$${valor.toFixed(2)}.`)}
            else {{valor=2.50*kg}; console.log(`O valor total sera de R$${valor.toFixed(2)}.`)}
    default:
        (console.log('OPÇÃO INVALIDA! (╯°□°）╯💥︵ ┻━┻')        )
        break;
}
