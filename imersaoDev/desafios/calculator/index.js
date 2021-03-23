let firstValue = parseInt(prompt('Digite o primeiro valor: '));
let secondValue = parseInt(prompt('Digite o segundo valor: '));
let signal = parseInt(prompt('Digite 1 para fazer uma soma, 2 para subtração, 3 para multiplicação e 4 para divisão'))
let res;

let resDOM = document.querySelector('.calculator-panel')

if (signal == 1) {
    res = firstValue + secondValue; 
    resDOM.innerHTML = `${firstValue} + ${secondValue} = ${res}`
}else if (signal == 2) {
    res = firstValue - secondValue; 
    resDOM.innerHTML = `${firstValue} - ${secondValue} = ${res}`
}else if (signal == 3) {
    res = firstValue * secondValue; 
    resDOM.innerHTML = `${firstValue} * ${secondValue} = ${res}`
}else if (signal == 4) {
    res = firstValue / secondValue; 
    resDOM.innerHTML = `${firstValue} / ${secondValue} = ${res}`
} else{
     alert('Opção inválida!')
     resDOM.innerHTML = `Opção inválida!`
}

