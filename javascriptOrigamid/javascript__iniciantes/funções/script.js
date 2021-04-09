
function areaQuadrada(lado){
    return lado * lado;
}

console.log(areaQuadrada(2));

/////

function pi(){
    return 3.14;
}

var total = 5 * pi(); //15.7
console.log(total)
console.log(pi)
console.log(pi()) //executando uma function

////

function imc(peso, altura){
    const imc = peso / (altura ** 2); //** é expoente altura ao quadrado não vezes 2
    return imc;
}
console.log(imc(80, 1.8)) // 80 e 1.80 são os argumentos

////

function corFavorita(cor){
    if (cor === 'azul') {
        return 'Eu gosto do céu'
    }else if (cor === 'vermelho') {
        return 'Eu gosto do inferno'
    }else{
        return 'Eu não tenho cor favorita'
    }
}
console.log(corFavorita())
console.log(corFavorita('azul'))
console.log(corFavorita('vermelho'))

////

addEventListener('click', () => {
    console.log('Você clicou!')
});

////

function imc2(peso, altura){
    const imc2 = peso / (altura ** 2); //** é expoente altura ao quadrado não vezes 2
    console.log(imc2);
}
imc2(40, 1.2); //undefined
console.log(imc2(80, 1.8)); // retorna o imc  e undefined

////

function terceiraIdade(idade){
    if (typeof idade !== 'number'){
        return 'Por favor digite um número'
    }else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}
console.log(terceiraIdade('oi'))
console.log(terceiraIdade(60))


////Escopo

function faltaVisitar(paisesVisitados){
    var totalPaises = 193;
    return `Falta visitar ${totalPaises - paisesVisitados} países!`;
}
console.log(faltaVisitar(20))

// console.log(totalPaises) ao descomentar vai estourar um erro pois vamos consultar um dado fora do escopo dele

/////
var profissao = 'Progamador';

function dados() {
    var nome = 'Carlos';
    var idade = 18; 
        function outrosDados() {
        var endereco = 'São Paulo';
        var idade = 19;
            return `${nome}, ${idade}, ${endereco}, ${profissao}`;
            }
    return outrosDados(); 
}
    console.log(dados()); // Retorna 'Carlos, 19, São Paulo, Progamador' 
//outrosDados(); // retorna um erro