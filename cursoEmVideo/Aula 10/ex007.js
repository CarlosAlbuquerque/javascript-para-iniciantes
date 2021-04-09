

function somar(){
    var txtn1 = document.getElementById('txtn1')
    var txtn2 = document.querySelector('input#txtn2')
    
    // pega o texto da caixa, temos que converter para number agora e depois fazer a soma
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    
    var soma = (n1 + n2)
    var res = document.getElementById('res')

    res.innerHTML = `A soma entre ${n1}  e ${n2}  é igual: ${soma}`
}