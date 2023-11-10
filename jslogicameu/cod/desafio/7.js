const prompt=require('prompt-sync')()

var n1, n2, med

n1=parseFloat(prompt('Primeira nota: '))

n2=parseFloat(prompt('Segunda nota: '))

med=(n1+n2)/2

if (med >= 7) {
    console.log('Voçê está aprovado ヾ(￣▽￣)');
} else {
    console.log('REPROVADO!!   ┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻');
}