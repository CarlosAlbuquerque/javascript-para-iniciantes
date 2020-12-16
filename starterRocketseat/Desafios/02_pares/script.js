const pares = (x, y) => {
    for (i = x; i <= y; i++) { 
    // laço de repetição, o i recebe o x, enquanto o i for menor ou igual que o y vai se somar mais uma
      if (i % 2 === 0) {
    // condição, se o resto de i dividido por 2 for 0 mostrar esse i no console.log
        console.log(i);
      }
    }
  };
  pares(1, 30);