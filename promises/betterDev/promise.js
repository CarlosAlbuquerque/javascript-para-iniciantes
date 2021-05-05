const betterDevelopment = 'Juninho'

function whoIsBetterDevelopment(callback, errorCallback) {

    return new Promise((resolve, reject) => {

        if (betterDevelopment != 'Juninho') {
            reject({
                name: 'This is wrong!', 
                message: betterDevelopment +' Really?'
            })
        } else {
            resolve({
                name: betterDevelopment, 
                message: ' Her the best!'
            })
        }
        
    })


}

whoIsBetterDevelopment()
    .then((result) => {
        console.log(`${result.name}? Yeah! ${result.message}`)
    }).catch((error) => {
        console.log(`${error.name} ${error.message}`)
    })