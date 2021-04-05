// process é um objeto que falando sobre o processo que está rolando no node
// Trazendo uma lista de argumentos 

console.log(process.argv)

const firstName = process.argv[2]
const lastName = process.argv[3]
console.log(`Seu nome é ${firstName} ${lastName}`)
// rodar node process Carlos Albuquerque

// Podemos passar com flags também
