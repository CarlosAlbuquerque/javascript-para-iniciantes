var x = 10;
var y = 5;

x += y; // x = x + y
console.log(x)

//operador ternario

var idade = 19;
var naoPossuiDiabetes = true;
var podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode Beber!' : 'Não Pode Beber!'
console.log(podeBeber)

//if abreviado

var possuiFaculdade = true;

if(possuiFaculdade)
    console.log('Possui Faculdade');
else
    console.log('Não Possui Faculdade');

