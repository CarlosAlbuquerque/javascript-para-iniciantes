// Criar uma função para mostrar os números primos.

function displayPrimeNumbers(limit){
    for(let number = 2; number <= limit; number++){
        if (ItsPrime(number))console.log(number)
    }
}

function ItsPrime(number){
    let prime = true

    for (let div = 2; div < number; div++) {
        if (number % div === 0) {
            return prime = false
        }
    }
    return prime = true
}


displayPrimeNumbers(15)