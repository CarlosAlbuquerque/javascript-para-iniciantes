// Parametros(parameters)
const sum = (n1, n2) => {
    let total = n1 + n2
    return total
}

let n1 = 27
let n2 = 19
console.log(`O primeiro número é ${n1} e o segundo é ${n2} e seu total é ${sum(n1, n2)}!`)


// callback function 
// callback - chamar de voltar
// quer dizer que vou chamar uma função que vai chamar outra de volta

const sayMyName = (name) => {
    console.log('Antes de executar a callback')

    name()

    console.log('Depois de executar a callback')
}

sayMyName(
    function name(){
        console.log('Estou em uma callback')
    }
)