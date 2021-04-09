// Switch

let expression = 'A'

switch (expression) {
    case 'A':
        console.log(`Primeira opção: letra ${expression}.`)
        break;
    case 'B':
        console.log(`Segunda opção: letra ${expression}.`)
        break;
    case 'C':
        console.log(`Terceira opção: letra ${expression}.`)
        break;
    case 'D':
        console.log(`Quarta opção: letra ${expression}.`)
        break;

    default:
        console.log('Opção inexistente ou inválida!')
        break;
}

/// Calculator

function calculator(value1, operator, value2){
    let result = 0;

    switch (operator) {
        case '+':
            result = value1 + value2
            break;
        case '-':
            result = value1 - value2
            break;
        case '*':
            result = value1 * value2
            break;
        case '/':
            result = value1 / value2
            break;
    
        default:
            console.log('Opção inexistente ou inválida')
            break;
    }

    return result
}

console.log(calculator(2, '', 10))