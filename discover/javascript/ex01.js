//1. eclare uma variavel de nome weigth
let weigth;

//2. que tipo de variavel é a variavel acima?
console.log(typeof weigth)

/*3. Crie uma variavel e atribua valores para 
cada um dos dados:
    * name: string
    * age: number(integer)
    * star: number(float)
    * isSubcribed: boolean
*/

const name = "Carlos Albuquerque"
const age = 19
const star = 4.5
const isSubscribed = true

/* 4 A variavel student é de que tipo de dado?
R: Object

4.1 Atribua a ela as mesmas propriedades do ex3

4.2 Mostre no console a seguinte mensagem 
<name> possui <age> anos e pesa <weigth> kg! 
*/

let student = {
    name: "Carlos Albuquerque",
    age: 19,
    weigth: 79,
    star: 4.5,
    isSubscribed: true
}

console.log(`${student.name} possui ${student.age} anos e pesa ${student.weigth}kg!`)

/* 
5. Crie uma variavel do tipo array com nome students e não atribua valor ela. Crie um array vazio. C
*/

let students = []

//6. Retribua o valor da var students para receber o object da questao 4

students = [
    student
]

//7. coloque no console o valor da possicao zero do array acima
console.log(students[0])

/* 
8. Crie um novo student e add ele na posicao 1 do array
*/

const Juninho = {
    name: "Juninho",
    age: 26,
    weigth: 79,
    star: 5.0,
    isSubscribed: false
}
students.push(Juninho)
console.log(students[1])

/*
9.Sem rodar o codigo abaixo qual a resposta que o codigo ia retornar e pq?

console.log(a)
var a = 3

R: undefined, pois o hoisting vai declarar todas as variaveis no topo do codigo abaixo
e quando o console.log rodar a var a ainda não recebeu o valor.
*/