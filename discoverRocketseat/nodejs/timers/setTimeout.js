// setTimeout rodar uma função depois de x milissegundos

const timeOut = 3000

const finished = () => console.log("Done!")

setTimeout(finished, timeOut)
console.log("Assincronismo JS, não vai bloquear a aplicação.")