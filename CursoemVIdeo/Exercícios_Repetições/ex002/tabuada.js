function gerar() {
    

let n1txt = document.getElementById('txtvalor')
let tab = document.getElementById('seltab')
let txtmult = document.getElementById('txtmult')


if (n1txt.value.length == 0 | txtmult.value.length == 0) {
    alert(`Impossível gerar tabuada, digite os valores!`)
} else {

    let n1 = Number(n1txt.value)
    let mult = Number(txtmult.value)
    let c = 1
    tab.innerHTML = ''
    tab.size = `${mult}`
    while (c <= mult) {
        
        let item = document.createElement('option')
        total = n1 * c 
        item.text = `${n1} x ${c} = ${total}`
        item.value  = `tab${c}`
        tab.appendChild(item)
        c++
    } 

}

}