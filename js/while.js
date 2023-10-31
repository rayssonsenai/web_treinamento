const input = require('readline-sync')
var num = parseInt(input.question('Um numero de inicio: '))
while (num <= 1000) {
    if (num < 1000){
        num = num + 1
        console.log(num)
    }
    else{
        num === 1000
        break
    }
}