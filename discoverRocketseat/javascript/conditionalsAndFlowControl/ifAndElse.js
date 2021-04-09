// if ... else 

let temperature = 37.3
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature >= 37 && temperature < 37.5

if (highTemperature) {
    console.log(`Sua temperatura atual é : ${temperature}. Está com febre alta!`)
} else if (mediumTemperature){
    console.log(`Sua temperatura atual é : ${temperature}. Está com febre moderada!`)
}else {
    console.log(`Sua temperatura atual é : ${temperature}. Não está com febre!`)
}