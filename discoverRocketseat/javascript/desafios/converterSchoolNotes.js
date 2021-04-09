/*
    Converter School Notes

    Crie um algoritmo que transforme as notas do sistema númerico
    para sistema de notas em caracteres: A, B, C, D, F

    * A - de 90 para cima
    * B - entre 80 e 89
    * C - entre 70 e 79
    * D - entre 60 e 69
    * F - menor que 60
*/

function converterSchoolNotes(note){
    let noteA = note >= 90 && note <= 100
    let noteB = note >= 80 && note <= 89
    let noteC = note >= 70 && note <= 79
    let noteD = note >= 60 && note <= 69
    let noteF = note < 60 && note >= 0

    let noteFinal;

        if (noteA) {
            noteFinal = "A"
        } else if (noteB){
            noteFinal = "B"
        } else if (noteC){
            noteFinal = "C"
        } else if (noteD){
            noteFinal = "D"
        } else if(noteF){
            noteFinal = "F"
        } else {
            noteFinal = "Nota inválida!"
        }

    return noteFinal
}

console.log(converterSchoolNotes(-1))
console.log(converterSchoolNotes(101))
console.log(converterSchoolNotes(100))
console.log(converterSchoolNotes(85))
console.log(converterSchoolNotes(74))
console.log(converterSchoolNotes(63))
console.log(converterSchoolNotes(50))