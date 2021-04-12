// Js Aula 45 - Obejto Postagem de Blog
// Crie um objeto de postagem de blog que vai conter as seguintes propriedades:

// post
/*
titulo
mensagem
autor
visualizações
comentario {autor, mensagem}
estaAoVivo
*/


// Metodo usando Factory Function

function postBlog(title, message, author, views, authorComment, messageComment, isOnline){
    return{
        title: title,
        message: message,
        author: author,
        views: views,
        comments: {
            authorComment: authorComment,
            messageComment: messageComment
        },
        isOnline: isOnline
    }
}

let post1 = postBlog('Hello World', 'Olá querido mundo!', 'Carlos Albuerque', 100, 'Comentário interno', 'Carlos', true)
console.log(post1)