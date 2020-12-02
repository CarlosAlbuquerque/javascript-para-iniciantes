//escopo de função
function mostrarCarro(){
    var carro = 'Ford KA';
    console.log(carro)
}
mostrarCarro()//Vai aparecer Ford KA no console
//console.log(carro) //Vai estourar um erro

//Variavel Global 
function mostrarMoto(){
    moto = 'Kawasaki Ninja 300';
    console.log(moto)
}
mostrarMoto()
console.log(moto) //não vai estourar erro pois moto foi declado como global

//Escopo de função (PAI)
var caminhao = 'Ford cargo 814';
function mostrarCaminhao(){
    var frase = `Meu caminhão é um ${caminhao}!`
    console.log(frase)
}
mostrarCaminhao()
console.log(caminhao) 

//Escopo de bloco
//var vazam do bloco, use let ou const.

if(true){
    var mes = 'Dezembro';
    console.log(mes)
}
console.log(mes)

if(true){
    let ano = 2020;
    console.log(ano)
}
//console.log(ano) //estoura erro ano is not defined

/*for loop, var vaza do escopo
usar let*/
for(var i = 0; i < 10; i++){
    console.log(`Número ${i}`);
}

console.log(`VAR vazou do escopo ${i} =(`)

//CONST

const semana = 'Sexta';
//semana = 'Quinta' 

const data = {
    ano: 2020,
    mes: 'Dezembro'
}
data.ano = 2021;
data.dia = 02;
console.log(data)

//LET

let horas = 10;
horas = 12;
horas++;
console.log(horas)

//let horas = 20; //erro. redeclarou a variavel