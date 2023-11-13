import prompt from 'prompt-sync';import { encode } from 'punycode';
const input = prompt()

let usuario: number=1234
let senha: number=9999
let continua: true
let quest: number=parseInt(input('👩|👨 Qual seu numero de usuario? '))
if (quest !== 1234) {console.log('Numero invalido, Acesso Blockedo ❌.')}
if (quest===1234) {
    console.log('CORRETO!');
    let quest2: number=parseInt(input('🔑 Qual a sua senha? '))
    if (quest2===9999) {console.log('Acesso Liberado ✨');
    }else{console.log('SENHA ERRADA, ACESSO BLOCKEDO 🚫');
    }}       

    
