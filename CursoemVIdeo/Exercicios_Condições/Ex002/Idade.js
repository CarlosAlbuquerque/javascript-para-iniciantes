

function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

            if(fsex[0].checked){
                    gen = 'Homem'
                    if(idade >= 0 && idade <10){
                        //Criança
                        img.setAttribute('src', 'img/bbM.png')
                    }else if(idade < 21){
                        //Jovem
                        
                        img.setAttribute('src', 'img/adolescenteM.png')
                    }else if(idade < 50){
                        //Adulto
                        img.setAttribute('src', 'img/adultoM.png')
                    } else{
                        //Idoso
                        img.setAttribute('src', 'img/idosoM.png')
                    }

                } else if(fsex[1].checked){
                    gen = 'Mulher'
                    if(idade >= 0 && idade <10){
                        //Criança
                        img.setAttribute('src', 'img/bbF.png')
                    }else if(idade < 21){
                        //Jovem
                        img.setAttribute('src', 'img/adolescenteF.png')
                    }else if(idade < 50){
                        //Adulto
                        img.setAttribute('src', 'img/adultoF.png')
                    } else{
                        //Idoso
                        img.setAttribute('src', 'img/idosoF.png')
                    }
                }
                res.innerHTML = `Detectamos ${gen} com ${idade} anos!`
                res.appendChild(img)
            }
}