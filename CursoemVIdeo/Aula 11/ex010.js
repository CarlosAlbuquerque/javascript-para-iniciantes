function calcular(){
    var txtvel = document.getElementById('txtvel')
    var res = document.querySelector('div#res')
    var vel = Number(txtvel.value)

    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} Km/h.</strong> </p>`

    if(vel > 60) {
        res.innerHTML += `<p>Você está acima da velocidade permitida.<strong> Multado!</strong> </p>`
    }

    res.innerHTML += `<p>Dirija <strong>SEMPRE</strong> com cinto de segurança! </p>`

}