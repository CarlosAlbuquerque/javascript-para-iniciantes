

function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){// contador começar em N, enquanto ele for maior que 1 vai tirando 1
        fat = fat * c
        console.log(fat)

    } 
    return fat
}
console.log(fatorial(5))


//Fatorial é isso ---> 5! = 5 x 4 x 3 x2 x 1 = 120