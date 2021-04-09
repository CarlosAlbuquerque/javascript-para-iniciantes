/* Separe um texto que contém espaços em um novo array, 
em um novo array onde cada texto é uma posição do array. 
Depois disso, transforme o array em texto e onde era espaço coloque */

let phrase = "Eu quero festas"
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
//join vai juntar o nosso array e dentro dele podemos passar qual será o separador
console.log(phraseWithUnderscore.toUpperCase())