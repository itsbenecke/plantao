// O  ano da primeira copa foi 1930
// O ano da proxima copa será 2026

let anoCopa = 1930;
//Esta variável inicializa com o número 1930, e toda vez que laço de repetição rodar, ela recebe um novo valor.
let ultimaCopa = 2026;
//Esta váriavel é o limite que defini para  o programa rodar.

while (anoCopa <= ultimaCopa) {
    console.log(`Teve copa em: ${anoCopa}`)
    anoCopa = anoCopa + 4
}

//A rimeira vez que o programa rodar, minha variável anoCopa será 1930.
//A segunda vez que o programa rodar, minha váriavel será 1930 + 4 = 1934
//O programa se retirá até chegar em 2026.