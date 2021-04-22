// clearInterval vai cancelar um setInterval registrado

const timeOut = 1000
const checking = () => console.log("Checando!")

let interval = setInterval(checking, timeOut)

setTimeout( () => clearInterval(interval), 5000)