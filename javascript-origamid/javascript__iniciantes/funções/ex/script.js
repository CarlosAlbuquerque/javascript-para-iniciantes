// Crie uma função para verificar se um valor é Truthy
function isTrue(valor){
    if(!!valor === true){
        console.log('TRUE')
    }else{
        console.log('FALSE')
    }
}
isTrue(0);
isTrue(3);

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado){
    return lado * 4;
}
console.log(perimetroQuadrado(4))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function exibirNome(nome, sobrenome){
    return nome + sobrenome;
}
console.log(exibirNome('Carlos', ' Albuquerque'))

// Crie uma função que verifica se um número é par
function éPar(num){
    if(num % 2 === 0 ){
        console.log('É par!')
    }else{
        console.log('É impar!')
    }
}
éPar(4);
// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function typeData(data){
    console.log(typeof data)
}
typeData(false)

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('click', () => {
    console.log('Carlos Albuquerque')
});




// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
        return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar!`
    }
    function jaVisitei(paisesVisitados) {
        return `Já visitei ${paisesVisitados} do total de ${totalPaises}!`
    }
    console.log(precisoVisitar(20));
    console.log(jaVisitei(20));