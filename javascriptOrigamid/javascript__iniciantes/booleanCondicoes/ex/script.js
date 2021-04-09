
// Verifique a sua idade é maior que de algum parente
// Dependendo do valor coloque no cole 'É maior', 'É igual'
var myAge = 19; 
var parentAge = 40;

if (myAge < parentAge) {
    console.log('Sua idade é menor que do seu parente!')
}else if(myAge > parentAge){
    console.log('Sua idade é maior que do seu parente!')
}else{
    console.log('Sua idade é igual ao do seu parente!')
}

//Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - '') && (5 - 2);
//3 --> quando tem && sempre vai rertornar o ultimo valor verdadeiro que achar ou falso logo vai retornar o 3 true
console.log(expressao)

//Verifique se as seguintes variáveis sao Truthy ou Falsy
var nome = 'Carlos';
var idade = 19;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china){
    console.log('Brasil tem mais habitantes que a China!')
} else if(china > brasil){
    console.log('China tem mais habitanete que o Brasil!')
}else{
    console.log('China e Brasil tem a mesma quantidade de habitantes!')
}


// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) { console.log('Verdadeiro');
} else { console.log('Falso');
}
//Falso, pq gato não é igual a Gato e o && se tem uma false ja retorna false

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) { console.log('Gato' && 'Cão');
} else { console.log('Falso');
}
// Cão pq é o ultimo valor true e || sempre retorna o ultimo valor true