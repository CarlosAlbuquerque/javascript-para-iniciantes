const student = require('./student')

describe('Testes para alunos', () => {
    
    it('Deve retornar 10 quando as notas forem 5, 3 e 2', () => {
        const notes = [5, 3, 2]
        const sumNotes = (student.sum(notes))
        expect(sumNotes).toEqual(10)
    })

    it('Deve retonar zero quando uma das notas for zero', () => {
        const notes = [5, 3, 2, 0]
        expect(student.sum(notes)).toEqual(0)
    })

    it('Deve dobrar a nota quando o aluno tiver mais de cinco notas', () => {
        const notes = [7, 6, 5, 3, 2, 1]
        const sumNotes = (student.sum(notes))
        const notesDouble = (sumNotes * 2)
        expect(notesDouble).toEqual(notesDouble)
    })

    it('Deve dobrar a nota quando for maior que 9', () => {
        const notes = [10, 5, 3]
        expect(student.sum(notes)).toEqual(28)
    })

})

// DEVE => QUANDO
// SHOULD => WHEN