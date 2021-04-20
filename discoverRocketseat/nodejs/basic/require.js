// Usamos require para adicionar modulos dentro dos nosso arquivos

// Módulos nativos
const path = require('path')
console.log(path.basename(__filename))

// Meu Módulos 
const myModule = require('./exports')
console.log(myModule)