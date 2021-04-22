// criação de um event
const { EventEmitter } = require('events')
const ev = new EventEmitter()

// ouvindo um event uma unica vez com ONCE
// ONCE EVENT - ouvir uma unica vez
// ON EVENT - ouvir sempre

ev.once('Falando alguma coisa', (messageAuthor) => {
    console.log(`Eu ouvi o ${messageAuthor} falando alguma coisa!`)
})

// emitindo um event
ev.emit('Falando Balela')
ev.emit('Falando alguma coisa', 'Carlos')
ev.emit('Falando alguma coisa', 'Poly')
ev.emit('Falando alguma coisa', 'Katarina')