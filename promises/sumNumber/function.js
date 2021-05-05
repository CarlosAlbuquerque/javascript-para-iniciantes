function sumNumber(){
    let total = 1 + 1

    if ( total == 2) {
        sucessCallback()
    } else {
        failedCallback()
    }
}

function sucessCallback(){
    console.log('Sucess')
}

function failedCallback(){
    console.log('Failed')
}

sumNumber()