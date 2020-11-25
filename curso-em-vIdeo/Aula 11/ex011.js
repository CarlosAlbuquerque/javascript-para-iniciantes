function check(){
    var country = document.getElementById('country')
    var res = document.querySelector('div#res')
console.log(country)
    res.innerHTML = `<p>Seu país de nascimento é <strong>${country}.</strong> </p>`

    if(country != 'Brasil') {
        res.innerHTML += `<p>Você é <strong>estrangeiro!</strong> </p>`
    } else { 
        res.innerHTML += `<p>Você é <strong>Brasileiro!</strong></p>`
           }
} 