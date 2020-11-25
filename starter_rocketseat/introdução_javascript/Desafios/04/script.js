function experiencia(anos) {
    switch (true) {
        case anos = 0:
            console.log(`Iniciante`)
        break;
        case anos >= 0 && anos <= 1:
            console.log(`Iniciante`)
        break;
        case anos >= 1 && anos <= 3:
            console.log(`Intermediário`)
        break;
        case anos >= 3 && anos <= 6:
            console.log(`Avançado`)
        break;
        default:
            console.log('Jedi Master')
        break;
    }
}
   var anosEstudo = 3;
   experiencia(anosEstudo);
   // De 0-1 ano: Iniciante
   // De 1-3 anos: Intermediário
   // De 3-6 anos: Avançado
   // De 7 acima: Jedi Master