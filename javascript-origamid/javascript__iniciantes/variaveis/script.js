console.log('Hello World');

var nome = 'Carlos';
var idade = 19;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalCompado = 5;
var totalPreco = preco * totalCompado;

console.log(totalPreco);

var sobrenome = 'Albuquerque', 
    cidade = 'Ribeirão Pires';

console.log(sobrenome, cidade);

//Hoisting
console.log(comida);
var comida = 'pizza';
console.log(comida);

/* É possível mudar os valores atribuídos a variáveis declaradas com var e let. 
Porém não é possível modificar valores de variáveis declaradas com const. */

var curso = 'origami';
var curso = 'bootcamp';

console.log(curso);

let cumprimento = 'oi';
    cumprimento = 'hello';

console.log(cumprimento);

const cursoCaro = true;
    //cursoCaro = false;

    console.log(cursoCaro);
    //vai estourar um erro se redefinir