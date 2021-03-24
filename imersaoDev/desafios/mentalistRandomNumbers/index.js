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
        } else if(Number(kick.value) > numberSecret){
            res.style.color = "white";
            res.innerHTML = `<p>Número secreto é menor que o valor digitado.</p>`
        } else if(Number(kick.value) < numberSecret){
            res.style.color = "white";
            res.innerHTML = `<p>Número secreto é maior que o valor digitado.</p>`
        }
    }


// colocar pro usuario ter 3 tentativas