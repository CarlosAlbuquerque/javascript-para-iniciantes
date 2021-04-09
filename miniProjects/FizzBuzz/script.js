// FizzBuzz é um algoritmo que vai comparar alguns valores
// e ter um tipo de retorno baseado no tipo de entrada

//Divisivel por 3 => Fizz
//Divisivel por 5 => Buzz
//Divisivel por 3 e 5 => FizzBuzz
//Não divisivel por 3 e 5 => entrada
//Não é um número = 'Não é um número'

function FizzBuzz(entrada){
    if (typeof entrada !== 'number') {
        return 'Não é um número!'
    } else if (entrada % 3 == 0 && entrada % 5 == 0) {
        return 'FizzBuzz'
    } else if (entrada % 3 == 0){
        return 'Fizz'
    } else if ( entrada % 5 == 0){
        return 'Buzz'
    } else if (entrada % 3 !== 0 && entrada % 5 !== 0){
        return entrada
    }
} 

console.log(FizzBuzz())