// Faixa de preço
// Crie um array de objetos de faixa de preço para que ela possar ser
// usado em um site igual o mercado livre 
// faixas, tooltip, min, max

// Resolvendo utilizando "Factoroy Functions"
function generatorPrinceRangeFactory(tooltip, min, max) {
    return {
        tooltip: tooltip,
        min: min,
        max: max
    }
}

let princeRangeOne = [
    generatorPrinceRangeFactory('Até R$700,00', 0, 700),
    generatorPrinceRangeFactory('De R$700,00 a R$1000,00', 700, 1000),
    generatorPrinceRangeFactory('Até R$1000,00 ou mais', 1000, 9999999)
]

// Resolvendo utilizando "Constructor Functions"
function generatorPrinceRangeConstructor(tooltip, min, max) {
    this.tooltip = tooltip,
    this.min = min,
    this.max = max
}

let princeRangeTwo = [
    new generatorPrinceRangeConstructor('Até R$700,00', 0, 700),
    new generatorPrinceRangeConstructor('De R$700,00 a R$1000,00', 700, 1000),
    new generatorPrinceRangeConstructor('Até R$1000,00 ou mais', 1000, 9999999)
]

console.log('Faixa de preço criada utilizando "Factory Functions".')
console.log(princeRangeOne)
console.log('Faixa de preço criada utilizando "Constructor Functions".')
console.log(princeRangeTwo)