// Criar um objeto endereço que contém
// Rua 
// Bairro
// Número
// Cidade
// Estado
// CEP
// exibirEndereco(endereco)


let address = {
        street: 'Rua dos Coqueiros',
        district: 'Planalto Bela Vista',
        number: 15,
        city: 'Ribeirão Pires',
        state: 'São Paulo',
        zipCode: 09402580
};

function displayAddress(Address){
    for (let key in address) {
        console.log(`${key}: ${address[key]}`)
    }
}

displayAddress(address)