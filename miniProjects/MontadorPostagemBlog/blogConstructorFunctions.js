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

// Metódo usando constructor Functions

function postBlog(title, message, author, visualization){
    this.title = title;
    this.message = message;
    this.author = author;
    this.visualization = visualization;
    this.comments = [];
    this.isOnline = true;
}

let post1 = new postBlog('Hello World', 'Olá querido mundo!', 'Carlos Albuerque', 100, 'Comentario 01', 'Carlos',true)

console.log(post1)