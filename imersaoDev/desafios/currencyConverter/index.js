let valueReal = document.querySelector('input#valueReal');
let res = document.querySelector('div#response');
let dolar = 5.55;
let valueDolar;

function convert(){
    valueDolar = valueReal.value * dolar;
    res.style.color = "white";
    res.innerHTML = ``
    res.innerHTML += `<stylesheet>Você possui ${valueReal.value} reais, convertendo isso para dólar.......  <br> Você possui aproximadamente ${Math.round(valueDolar)} dólares.</p>`
}