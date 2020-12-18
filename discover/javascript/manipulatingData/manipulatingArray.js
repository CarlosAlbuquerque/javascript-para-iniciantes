//Manipulando Array

let techs = ['JS', 'Vue', 'CSS', 'HTML']

// adicionar um item no fim
techs.push('React')
console.log(techs)
// adicionar um item no começo
techs.unshift('Angular')
console.log(techs)
// remover do fim
techs.pop()
console.log(techs)
// remover do começo
techs.shift()
console.log(techs)
// pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
// remover 1 ou mais items de em qualquer posição do array
techs.splice(2, 1) //passa o index do array e quantos elementos queremos remover
console.log(techs)
// encontrar a posição de um elemento no array
let index = techs.indexOf('HTML')
console.log(index)