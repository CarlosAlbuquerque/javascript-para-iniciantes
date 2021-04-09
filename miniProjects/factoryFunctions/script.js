// Crie um celular utilizando uma função que recebe os valores
// camelCase umDoisTresQuatro

function createCell(brand, model, screenSize, batteryCapacity) {
    return{
        brand: brand,
        model: model,
        screenSize: screenSize,
        batteryCapacity: batteryCapacity
    }
}

const cellOne = createCell('Apple', 'Iphone 11', 6.15, '4000mAh')
console.log(cellOne)