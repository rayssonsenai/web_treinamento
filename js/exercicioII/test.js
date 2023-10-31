const input = require("readline-sync")

quantidade=input.question()
desconto =3
preço = 2.90*quantidade



console.log(preço)


console.log(preço * (1-desconto / 100))