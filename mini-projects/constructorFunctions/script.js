// Pascal Case - UmDoisTresQuatro
// this serve para referenciar o objeto que estamos manipulando
function Cell(brand, model, screenSize, batteryCapacity){
    this.brand = brand,
    this.model = model,
    this.screenSize = screenSize,
    this.batteryCapacity = batteryCapacity,
    this.callingCell = function() {
        console.log('Ligando ......');
    }
}

const cell = new Cell('Apple', 'Iphone 11', 6.15, '4000mAh')
console.log(cell)


// A diferença entre as factory functions e as contructor functions

// factory criamos dentro da function
// contructor criamos através da palavra chave "new"