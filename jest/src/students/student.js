module.exports = {
    sum: notes => {
        // se o Math.min(... notes) retornar 0 vai cair como false logo n entra no if e return 0
        if (Math.min(... notes)){
            const result = notes.reduce((acc, note) => {
                acc += note > 9 ? note * 2 : note
                return acc
        }, 0)
        return notes.length > 5 ? result * 2 : result
        }
        return 0
    }
}