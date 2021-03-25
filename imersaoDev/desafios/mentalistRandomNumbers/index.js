let numberSecret = getRandomInt(0, 10)
let kick = document.querySelector('input#numberKick')
let res = document.querySelector('.res')

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(numberSecret)

    function numberKick(){
        if (numberSecret === Number(kick.value)) {
            res.style.color = "white";
            res.innerHTML = `<p>Acertou! O número secreto era ${numberSecret}.</p>`
            res.innerHTML += `<p>O jogo será reiniciado!</p>`
            attPage()
            } else if(Number(kick.value) > numberSecret){
            res.style.color = "white";
            res.innerHTML = `<p>Errou! O número secreto era menor =(.</p>`
            res.innerHTML += `<p> O número secreto era ${numberSecret}.</p>`
            res.innerHTML += `<p>O jogo será reiniciado!</p>`
            attPage()
        } else if(Number(kick.value) < numberSecret){
            res.style.color = "white";
            res.innerHTML = `<p>Errou! O número secreto era maior =(.</p>`
            res.innerHTML += `<p> O número secreto era ${numberSecret}.</p>`
            res.innerHTML += `<p>O jogo será reiniciado!</p>`
            attPage()
        }
    }


    function attPage(){
    let meta = document.createElement('meta');
    meta.httpEquiv = "refresh";
    meta.content = "5";
    document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // colocar pro usuario ter 3 tentativas