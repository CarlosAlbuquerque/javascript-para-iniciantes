//FOR
for (let numero = 0; numero <= 10; numero++){
    console.log(numero)
}

//WHILE
let i = 100;
while (i <= 110){
    console.log(i)
    i = i + 2
}

var consoles = ['PS4', 'XBOX ONE', 'Switch', 'XBOX SERIES X'];

for(let item = 0; item < consoles.length; item++){
    console.log(consoles[item])
    if(consoles[item] === 'XBOX ONE'){
        break;
    }
}

var frutas = ['Banana', 'Manga', 'Morango', 'Laranja'];
frutas.forEach((fruta, index, array) => {
    console.log(fruta, index, array)
})