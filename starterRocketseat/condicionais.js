


function retornaSexo(sexo) {
    // M, F
    // Masculino, Femino

    if(sexo == 'M'){
        return 'Masculino'
    }else if(sexo == 'F'){
        return 'Masculino'
    }else{
        return 'Outro'
    }
}

var res = retornaSexo('M')
console.log(res)

var res = retornaSexo('F')
console.log(res)

var res = retornaSexo('hahaha')
console.log(res)