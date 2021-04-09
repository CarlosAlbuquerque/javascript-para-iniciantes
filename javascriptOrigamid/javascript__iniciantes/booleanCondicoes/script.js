var possuiGradruacao = true;
var possuiDoutorado = true;


if (possuiDoutorado) {
    console.log('Possui Douturado!')
}else if(possuiGraduacao){
    console.log('Possui Graduação, mas não possui Douturado!')
} else {
    console.log('Não Possui Graduação!')
}

var nome = 'Carlos';

if (nome) {
    console.log(nome)
} else {
    console.log(`Nome não existe!`)
}

//verificar se é falso
if(!possuiGradruacao) {
    console.log(possuiGradruacao);
    console.log('Não possui graduação');
}

//verificar se é true
if(!!possuiGradruacao) {
    console.log(possuiGradruacao);
    console.log('Possui graduação');
}


var x = 'Gatos';
// verficando se ele é diferente 
console.log(x !== 'Gato')



//operadores &&
var condicional = (5-5) && (5 + 5);

if (condicional) {
    console.log('Verdadeiro')
    console.log(condicional)
}else{
    console.log('Falso')
    console.log(condicional)
}
//Saiu falso pq primeiro ele verifica o 5 -5 que dá 0 e 0 é um valor false
//Como ja deu false em uma ele nao avalia mais e ja solta o 'Falso'

var condicional2 = (5 - 5) || (5 + 5) || (10 + 2);
console.log(condicional2)


var corFav = 'Azul';
switch (corFav) {
    case 'Azul':
        console.log('Olhe para o Céu')
    break;
    case 'Verde':
        console.log('Olhe para o Chão')
    break;
    case 'Amarelo':
        console.log('Olhe para o Sol')
    break;
    default:
        console.log('Feche os olhos')
}