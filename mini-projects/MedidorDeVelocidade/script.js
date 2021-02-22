// velocidade máxima = 70 --> ok;
// a cada 5km acima do limite voce ganha 1 ponto;
// math.Floor
// caso pontos maior que 12 -> "Carteira Suspendida"

function checkSpeed(speed){
    const maxSpeed = 70;
    const kmByPoint = 5;
    const maxPoints = 12;
    if (speed <= maxSpeed) {
        return 'OK!'
    }
    else {
       const points =  Math.floor(((speed - maxSpeed) / kmByPoint))
       if (points >= maxPoints){
        return `Pontos: ${points}, Carteira Suspendida.`;
       } else {
        return `Pontos: ${points}`;
       }
    }
}

console.log(checkSpeed(130))