// Criar função somar que retorna a
// soma de todos os múltiplos de 3 e 5

let firstMultiple = 3;
let secondMultiple = 5;

function addUp(limit){
    let resultFirstMultiple = 0;
    let resultSecondMultiple = 0;

    for (i = 1; i <= limit; i++) {
        if(i % firstMultiple === 0)
            resultFirstMultiple += i;
        if (i % secondMultiple === 0)
            resultSecondMultiple += i;
    }
    return resultFirstMultiple + resultSecondMultiple
}

console.log(addUp(10))