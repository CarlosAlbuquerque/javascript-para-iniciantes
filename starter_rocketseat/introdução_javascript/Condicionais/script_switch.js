


function retornaSexo(sexo) {
    // M, F
    // Masculino, Femino

    switch(sexo){
        case 'M':
            return 'Masculino'
        break
        case 'F':
            return 'Feminino'
        break
        default:
            return 'Outro'
    }

}

var res = retornaSexo('M')
console.log(res)

var res = retornaSexo('F')
console.log(res)

var res = retornaSexo('hahaha')
console.log(res)