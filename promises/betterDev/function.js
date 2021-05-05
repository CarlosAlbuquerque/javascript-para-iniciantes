const betterDevelopment = 'Juninho'

function whoIsBetterDevelopment(callback, errorCallback) {

    if (betterDevelopment != 'Juninho') {
        errorCallback({
            name: 'This is wrong!', 
            message: betterDevelopment +' Really?'
        })
    } else {
        callback({
            name: betterDevelopment, 
            message: ' Her the best!'
        })
    }
}

whoIsBetterDevelopment((result) => {
    console.log(`${result.name}? Yeah! ${result.message}`)
}, (error) => {
    console.log(`${error.name} ${error.message}`)

})