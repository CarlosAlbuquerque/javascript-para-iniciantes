/*
    Sistema de gastos familiar

    Crie um objeto que possuirá duas propriedades, ambas do tipo
    array:
    * receitas[]
    * despesas[]
    
    Agora crie uma função que irá calcular o total de receitas e 
    despesas e irá mostrar uma mensagem se a família está com o 
    saldo positivo ou negativo, seguido do valor do saldo
*/

let family = {
    incomes: [2000.70, 1500.23, 200.83, 100.80],
    expenses: [145.80, 500.00, 57.83, 231.53, 732.34, 1100.00, 600.00]
}

function sum(array){
    let total = 0

    for(let value of array){
        total += value
    }

    return total
}

function calculeBalance(){
    const balanceIncomes = sum(family.incomes)
    const balanceExpanses = sum(family.expenses)
    const totalBalance = (balanceIncomes - balanceExpanses)

    if (totalBalance < 0 ) {
        console.log(`O seu saldo está negativo, o valor total de dívidas é: ${totalBalance.toFixed(2)}`)
    } else if(totalBalance >= 1 && totalBalance < 500){
        console.log(`O seu saldo está positivo. SALDO: ${totalBalance.toFixed(2)}, porém pode economizar mais!!`)
    } else{
        console.log(`O seu saldo está positivo. SALDO: ${totalBalance.toFixed(2)}!`)
    }
}

calculeBalance();