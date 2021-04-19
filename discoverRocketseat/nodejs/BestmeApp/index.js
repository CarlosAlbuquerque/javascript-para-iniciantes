const user = 'Carlos'
const questions = [
    "O que aprendi hoje?",
    "o que me deixou aborrecido? E o que eu poderia fazer para melhoras?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
] 

const ask = ( index = 0 ) => {
        process.stdout.write(questions[index] + " >")
}

ask()

const answers = []

// está ouvindo eventos de entradas de dados, assim que receber algum dado vai rodar a function
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {

        ask(answers.length)

    } else {
        process.exit()
    }
})

process.on('exit',() => {
    console.log(`\n\nBacana ${user}! Aqui está as perguntas e resposta de hoje: \n\n`)
    for (let index = 0; index < answers.length; index++) {
        console.log(`${questions[index]}: ${answers[index]}`)
    }
    console.log(`\n\nVolte amanhã para mais reflexões`)
})