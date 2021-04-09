// cloning objects

const Cell = {
    brand: 'Apple',
    model: 'Iphone 11',
    screenSize: {
        width: 155,
        height: 75
    },
    callingCell: function (){
        console.log('Ligando ....')
    }
}


const assignCell = Object.assign({}, Cell)
console.log(assignCell)

const assignCell1 = Object.assign({
    batteryCapacity: '4000mAh'
}, Cell)
console.log(assignCell1)

const newCell = {...Cell};
console.log(newCell)