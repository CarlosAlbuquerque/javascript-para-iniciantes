// o que tem dentro de events
const events = require('events')
console.log(events)

// criação de um event
const { EventEmitter } = require('events')
const ev = new EventEmitter()
console.log(ev)

// ouvindo um event e executando uma ação

ev.on('Falando Balela', () => {
    console.log('Eu ouvi alguma balela!')
})

ev.on('Falando alguma coisa', (messageAuthor) => {
    console.log(`Eu ouvi o ${messageAuthor} falando alguma coisa!`)
})

// emitindo um event
ev.emit('Falando Balela')
ev.emit('Falando alguma coisa', 'Carlos')