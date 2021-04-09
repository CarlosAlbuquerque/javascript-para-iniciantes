// Estrutura de repetição
// for 

// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }

for(let i = 10; i >= 0; i--){
    if(i == 7 || i == 5){
        continue;
    } else if(i == 2){
        break;
    }
    console.log(i)
}