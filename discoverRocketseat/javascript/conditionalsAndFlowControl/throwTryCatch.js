// throw - disparar, lançar
function sayMyName(name){
    if (name === ''){
        throw new Error("Nome é necessário!")
    }

    console.log("Depois do erro!")
}

//try...catch - try = tenta algo, catch = captura erro

try {
    sayMyName('')
} catch (e) {
    console.log(e)
}
console.log("Após a função de erro!")
