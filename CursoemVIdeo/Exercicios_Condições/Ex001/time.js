


function timeloading() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var time = data.getHours()

    msg.innerHTML = `<p>Agora são ${time} horas!</p>`

    if (time >= 0 && time < 12) {
        // morning.png
        img.src = 'img/morning.png'
        img.alt = "morning"
        document.body.style.background = '#1f1f1f'
    } else if (time >= 12 && time <= 18) {
        // afternoon.png
        img.src = 'img/afternoon.png'
        img.alt = "afternoon"
        document.body.style.background = '#db7632'
    } else {
        // nigth.png
        img.src = 'img/nigth.png'
        img.alt = "nigth"
    }

}