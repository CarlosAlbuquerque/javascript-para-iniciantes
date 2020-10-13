

function somar(){
    var txtn1 = document.getElementById('txtn1')
    var txtn2 = document.querySelector('input#txtn2')
    var res = document.getElementById('res_soma')

    // pega o texto da caixa, temos que converter para number agora e depois fazer a soma
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    
    var soma = (n1 + n2)

    res.innerHTML = `<h2>A soma entre ${n1}  e ${n2}  é igual: ${soma}</h2>`
}

function subtrair(){
    var txtn1 = document.getElementById('txtn3')
    var txtn2 = document.querySelector('input#txtn4')
    var res = document.getElementById('res_sub')

    // pega o texto da caixa, temos que converter para number agora e depois fazer a soma
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    
    var soma = (n1 - n2)

    res.innerHTML = `<h2>A subtração entre ${n1}  e ${n2}  é igual: ${soma}</h2>`
}

function div(){
    var txtn1 = document.getElementById('txtn5')
    var txtn2 = document.querySelector('input#txtn6')
    var res = document.getElementById('res_div')

    // pega o texto da caixa, temos que converter para number agora e depois fazer a soma
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    
    var div = (n1/n2)

    res.innerHTML = `<h2>A divisão entre ${n1}  e ${n2}  é igual: ${div}</h2>`
}

function mult(){
    var txtn1 = document.getElementById('txtn7')
    var txtn2 = document.querySelector('input#txtn8')
    var res = document.getElementById('res_mult')

    // pega o texto da caixa, temos que converter para number agora e depois fazer a soma
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    
    var mult = (n1*n2)

    res.innerHTML = `<h2>A multiplicação entre ${n1}  e ${n2}  é igual: ${mult}</h2>`
}