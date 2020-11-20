
let valores = [8, 9, 0, 4, 2]

//mostrar os indices com for - percuso menos simples


// for (let pos = 0; pos < valores.length; pos++) {
    // console.log(`A posição ${pos} tem o valor ${valores[pos]}`)    
// }



//mostrar os indices com for - percuso mais simples


for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)    
}