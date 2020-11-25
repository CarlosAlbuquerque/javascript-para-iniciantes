

// AND


var sexo = 'M', idade = 23;
if (sexo == 'M' && idade >= 18){
    console.log('AND')
} 

// NOT
var sexo1 = 'F', idade = 18;
if (sexo1 != 'M'){
    console.log('NOT')
}

/// OR
var sexo1 = 'F', idade = 16;
if(sexo == 'M' || idade >=18){
    console.log('OR')
}


// Armazenar valor das condicoes em variaveis

var sexo = 'F'

var masculino = sexo === 'M'
console.log(masculino)
