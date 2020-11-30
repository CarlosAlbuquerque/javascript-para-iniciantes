var pessoa = {
    nome: "Carlos",
    idade: 19,
    profissao: "DEV",
    possuiFaculdade: false
}

console.log(pessoa)


var quadrado ={
    lados: 4,
    area: (lado) =>{
        return lado * lado;
    },
    perimetro(lado){
        return lado * 4; 
        //return this.lados * lado; 
        //this faz referencia ao objeto inteiro, 
        //e estamos pegando agora só a var lados
    }
}

console.log(quadrado.area(3))
console.log(quadrado.perimetro(4))
console.table(quadrado)

console.log(Math.random());

var pi = Math.PI;
console.log(pi)

var width = 800; //objetos tem acesso as var que foram criadas fora dele
var menu ={
    height: 50,
    backgroundColor: '#84E',
    metadeHeight(){
        return this.height / 2;
    },
}

console.log(menu)
menu.color = 'blue'
console.log(menu)
console.log(menu.metadeHeight())

