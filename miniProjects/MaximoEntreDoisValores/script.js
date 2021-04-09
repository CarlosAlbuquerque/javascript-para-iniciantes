// Escreva uma função  que usa 2 números e retorna o maior deles

function MaxValue(n1, n2) {
    let maxValue;
    if(n1 > n2){
        MaxValue = n1;
    } else { 
        MaxValue = n2;
    }
    return MaxValue;
}

console.log(MaxValue(30, 20))


// Modo alternativo - Operador ternário
// return n1 > n2 ? n1: n2;