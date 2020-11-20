

let num = [1, 2, 3]

console.log(`Nosso array é: ${num}`)


//stei aonde quero o novo valor, na coluna 3
num[3] = 9

console.log(`Nosso novo array setando direto na coluna é: ${num}`)

//adicionar o novo valor na ultima clouna, adicionar o push
num.push(7)

console.log(`Nosso novo array com push é: ${num}`)

//tamanho do array
console.log(num.length)

//pegar todos os valores e colocar em ordem crescente
console.log(num.sort())

//mostrar o valor em uma posição escolhida
console.log(`O primeiro valor do nosso array é: ${num[0]}`)

