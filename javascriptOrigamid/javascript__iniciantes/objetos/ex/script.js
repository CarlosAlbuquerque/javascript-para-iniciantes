// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
    nome: "Carlos",
    sobrenome: "Albuquerque",
    idade: 19,
    cidade: "Ribeirão Pires",
}
// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`
}
console.log(dadosPessoais.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  
carro.preco = 3000;
console.log(carro)
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem

var cachorro = {
    raça: "Labrador",
    cor: "Preto",
    idade: 10,
    latir(pessoa){
        if(pessoa == 'Homem'){
            return 'AU AU AU!'
        }else{
            return 'Não latiu!'
        }
    } 
}
console.log(cachorro.latir('Homem'))
console.log(cachorro.latir('Mulher'))