var nome = 'Carlos';
var nomeMinusculo = nome.toLowerCase();
var nomeMaiusculo = nome.toUpperCase();

console.log(nome.length)
console.log(nomeMinusculo)
console.log(nomeMaiusculo)


var num1 = 1.8;
var num2 = 1.4;

console.log(num1.toFixed())
console.log(num2.toFixed())


var btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    console.log('Clicou')
})
