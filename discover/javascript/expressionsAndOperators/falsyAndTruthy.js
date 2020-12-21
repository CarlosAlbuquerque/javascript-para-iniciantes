/*
    FALSY
    Quando um valor é considerado false em contextos onde
    um booleno é obrigatorio (condicionais e loops)

    * false 
    * 0
    * -0
    * ""
    * null
    * undefined
    * NaN
*/
let conditionFalse = undefined;
console.log(conditionFalse ? 'Verdadeiro' : 'Falso')



/*
    TRUTHY
    Quando um valor é considerado true em contextos onde
    um booleno é obrigatorio (condicionais e loops)

    * true
    * {}
    * []
    * 1
    * 1.23
    * "0"
    * "false"
    * -1 
    * Infinity
    * -Infinity
*/
let conditionTrue = Infinity
console.log(conditionTrue ? 'Verdadeiro' : 'Falso')