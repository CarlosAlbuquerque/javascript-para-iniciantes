


let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


//verificar se o que foi digitado é um numero entre 1 e 100
function isNumero(n){
   if(Number(n) >= 1 && Number(n) <= 100) {
      return true
   } else {
      return false
   }
}

//verificar se o numero esta na lista
function inLista(n, l){
   if(l.indexOf(Number(n)) != -1){  // se na lista.indexof o number de n for diferente de -1 ele nao está na lista, se for -1 ele se encontra na lista, o valor -1 siginifica que o valor nao foi encontrado o number
      return true
   } else {
      return false
   }
}

function adicionar() {
   if(isNumero(num.value) && !inLista(num.value, valores)){
      valores.push(Number(num.value))
      let item = document.createElement('option')
      item.text = `Valor ${num.value} adicionado!`
      lista.appendChild(item)
      res.innerHTML = ''
   }else{
      window.alert(`Valor inválido ou já encontrado na lista!`)
   }
   num.value = ''//para apagar o valor digitado
   num.focus() //para o mouse voltar pra caixa
}


function analisar(){

   if(valores == ''){
      window.alert('Digite um valor antes da análise!')
   }else{
      valores.sort()
      let total = valores.length
      let first = valores[0]
      let last = total - 1
      let soma = 0
      let media = 0

      for(let pos in valores){
         soma += valores[pos]
      }

      media = soma/total

      res.innerHTML = ''
      res.innerHTML += `O total de valores digitados foi: ${total} <br>`
      res.innerHTML += `O primeiro valor em ordem crescente é: ${first} <br>`
      res.innerHTML += `O ultimo valor em ordem crescente é: ${valores[last]}<br>`
      res.innerHTML += `A soma de todos os valores é:${soma} <br>`
      res.innerHTML += `A média dos valores é: ${media}`

   }
}