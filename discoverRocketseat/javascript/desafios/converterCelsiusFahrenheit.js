/* 

    Celsius para Fahrenheit

    Crie uma função que receba uma string em celsius ou Fahrenheit
    e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/

function transformDegree(degree){

    const fahrenheitExists = degree.toUpperCase().includes('F') // vai retorna ou true ou false
    const celsiustExists = degree.toUpperCase().includes('C') // vai retorna ou true ou false

    //fluxo de error
    if (!fahrenheitExists && !celsiustExists) {
        throw new Error('Grau não identificado!')
    }

    //fluxo ideal F -> C, quando fahrenheitExists true
    let newDegree = Number(degree.toUpperCase().replace("F", " "))
    let formula = fahrenheit => ( fahrenheit - 32) * 5/9
    let degreeSign = "C"

    //fluxo alternativo C -> F, quando celsiustExists true

    if (celsiustExists) {
        newDegree = Number(degree.toUpperCase().replace("C", " "))
        formula = celsius => celsius * 9/5 + 32
        degreeSign = "F"
    }
        
    return formula(newDegree) + degreeSign
}

try {
    console.log(transformDegree('50F'))
    console.log(transformDegree('10C'))
    transformDegree('50G')
} catch (error) {
    console.log(error.message)
}