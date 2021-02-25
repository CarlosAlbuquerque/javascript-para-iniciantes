// Obter a média a partir de um array 

// 0 - 59 = F
// 60 - 69 = D
// 70 - 79 = C
// 80 - 89 = B
// 90 - 100 = A

const array = [70, 90, 80, 80]

// function genérica para calcular media dentro de um array
function calculateAverage(array){  
    let sum = 0;
    for (const value of array) {
        sum += value
    }
    return sum/(array.length);
}

// function para retornar a Media escolar de acordo com o valor retornado na funcion genérica
function studentAverage(grades){ 
    const studentAverage = calculateAverage(grades);
    
    if (studentAverage < 59) return 'F';
    if (studentAverage < 69) return 'D';
    if (studentAverage < 79) return 'C';
    if (studentAverage < 89) return 'B';
    return 'A';
}

console.log(studentAverage(array))
