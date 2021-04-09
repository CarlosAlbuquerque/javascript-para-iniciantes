// Criar uma função que exibe a quantidade de *
// que aquela linha possui

displayAsterisks(10)

function displayAsterisks(lines){
    let asterisks = '';
    for(line = 1; line <= lines; line++){
        asterisks += '*'
        console.log(`Temos ${line} ${asterisks}`)
    }
}