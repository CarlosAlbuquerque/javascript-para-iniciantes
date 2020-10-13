// RECURSIVIDADE


function fatorial(n){

    if(n == 1){
        return 1
    } else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))





/*
O fatorial de 5 é: 

5! = 5 x 4 x 3x 2 x 1
que pode ser traduzido para
5! = 5 x 4!

Logo 
n! = n x (n -1)!

menos o fatorial de 1 que é 
1! = 1

*/