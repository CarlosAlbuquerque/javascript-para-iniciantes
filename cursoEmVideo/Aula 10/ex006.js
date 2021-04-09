
var div = document.getElementById('area')

//addEventListener vai ouvir se vai ocorrer algum evento, caso ocorra vai rodar a funcao escolhida
div.addEventListener('click', clicar)
div.addEventListener('mouseenter', entrar)
div.addEventListener('mouseout', sair)

function clicar(){
    div.innerText = "DALE!"
    div.style.background = 'red'
}

function entrar(){
    div.innerText = "SOGRADESCE!"
    div.style.background = 'green'
}

function sair(){
    div.innerText = "FON!"
    div.style.background = 'black'
}