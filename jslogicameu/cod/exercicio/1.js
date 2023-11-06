const prompt = require('prompt-sync')()
var n1, n2, n3, media, mediaexer, resultado
n1 = parseFloat(prompt('Primeira nota: '))
n2 = parseFloat(prompt('Segunda nota: '))
n3 = parseFloat(prompt('Terceira nota: '))
mediaexer=parseFloat(prompt('Sua media de exercicio: '))
media = (n1 + n2 * 2 + n3 * 3 + mediaexer)/7
console.log(media.toFixed(2))
if (media >= 9.0){
    console.log('A')
}
else if (media >= 7.5 && media < 9){
    console.log('B')
}
else if (media >= 6 && media < 7.5 ){
    console.log('C')
}
else if (media < 6){
    console.log('D')
}
