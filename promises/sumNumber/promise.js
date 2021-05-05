let p = new Promise((resolve, reject) => {

    let total = 1 + 1

    if ( total == 2) {
        resolve('Sucess')
    } else {
        reject('Failed')
    }

})

p.then((message) => {
    console.log('This is in the then' + message)
}).catch((err) => {
    console.log('This is the catch' + err)
})