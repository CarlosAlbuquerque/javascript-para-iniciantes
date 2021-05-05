const ul = document.getElementById('users')
const url = ('https://jsonplaceholder.typicode.com/users/')

fetch(url)
    // then para buscar o json
    .then((response) => response.json())
    // so vai entrar nesse then quando o de cima for feito 
    .then(function (data){
        console.log(data)
        
        // estamos varrendo todos os dados atraves do .map e passamos o user
        // que é um dos itens desse array

        return data.map(function (user) {
            let li = document.createElement('li');
            li.innerHTML = `${user.name} (${user.username})`
            ul.appendChild(li)
        })
    })
    .catch((error) => {
        console.log('Ops!' + error)
    })