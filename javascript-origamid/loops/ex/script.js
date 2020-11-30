// Crie uma array com os anos que o Brasil ganhou a copa
// 1958, 1962, 1970, 1994, 2002

let copasBrasil = [1958, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
copasBrasil.forEach((ano) => {
    console.log(`O Brasil ganhou a copa de ${ano}!`)
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (let item = 0; item < frutas.length; item++) {
   console.log(frutas[item]);
   if(frutas[item] === 'Pera')
   break
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let tamanhoFrutas = frutas.length
let ultimaFruta = frutas[tamanhoFrutas - 1]
console.log(ultimaFruta)