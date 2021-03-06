// Criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do type string que estão nesse objeto

const movie = {
    title: 'AVENGERS: ENDGAME',
    year: 2019, 
    direct: 'Anthony Russo, Joe Russo',
    character: 'Spider Man',
    rottenTomatoes: 94
}

function displayString(){
    for(let prop in movie){
        if (typeof movie[prop] === 'string') {
            console.log(`${prop} = ${movie[prop]}`)
        }
    }
}
displayString(movie)