// Igualdade de Objetos 

function Address(street, city, state, zip){
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
}
const address1 = new Address('Rua dos Coqueiros', 'Ribeirão Pires', 'SP', '09402-580')
const address2 = new Address('Rua dos Coqueiros', 'Ribeirão Pires', 'SP', '09402-580')
const address3 = new Address('Rua dos Autonomistas', 'Ribeirão Pires', 'SP', '94025-520')
const address4 = address1



function areEqual(addressOne, addressTwo){
    // comparar se as propriedades são iguais

    return  addressOne.street === addressTwo.street && 
            addressOne.city === addressTwo.city && 
            addressOne.state === addressTwo.state && 
            addressOne.zip === addressTwo.zip

}

function hasEqualMemoryAddress(addressOne, addressTwo){

    return addressOne === addressTwo

}

// 1 - areEqual()
// Caso true 
console.log(areEqual(address1, address2))
// Caso false 
console.log(areEqual(address1, address3))


// 2 - hasEqualMemoryAddress()
// Caso false pois não estão no mesmo lugar da memória
console.log(hasEqualMemoryAddress(address1, address2))

// Caso true pois estão no mesmo lugar da memória
console.log(hasEqualMemoryAddress(address1, address4))