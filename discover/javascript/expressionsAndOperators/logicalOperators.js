// Logical Operator

// 2 valores do tipo Boolen que quando verificado
// retornara um verdadeiro ou Falso

let pao = false
let queijo = true

// AND &&
if (pao && queijo) {
    console.log('Meu café tem pão e queijo!')
}else{
    console.log('Meu café está incompleto!')
}

// OR ||

if (pao || queijo) {
    console.log('Meu café está otimo')
} else {
    console.log('Não tenho café!')
}

// NOT !

console.log(`Meu café hoje é: ${!pao} ${!queijo}`)