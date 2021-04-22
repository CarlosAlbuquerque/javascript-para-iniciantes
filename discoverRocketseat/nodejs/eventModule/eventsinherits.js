// Herdando

const { inherits } = require('util')
const { EventEmitter } = require('events')

// inherits vai herdar as funcionalidade do EventEmitter para a functions Character

function Character(name){
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin')
chapolin.on('help', () => console.log(`Eu o ${chapolin.name} colorado!`))

console.log('Oh! E agora quem poderá me defender?')
chapolin.emit('help')

//chapolin herdou todas a funcionalidades do event emitter \o/