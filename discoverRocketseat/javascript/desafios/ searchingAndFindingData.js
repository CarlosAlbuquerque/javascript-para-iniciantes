/*

    Bsucando e contando dados em Arrays

        - Contar o número de categorias e o número de livros em cada categoria
        - Contar o número de autores
        - Mostar os livros do autor Augusto Cury
        - Transformar a função acima em uma que ia receber o nome do autor 
        e retornar os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária", 
                author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da Babilônia", 
                author: "George S. Clason"
            },
            {
                title: "Pai rico, pai pobre", 
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            }
        ]
    },
    {
        category: "Inteligência Emocional", 
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século", 
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes", 
                author: "Stephen R. Covey"
            }
        ]
    }
]

// Contar o número de categorias 
const totalCategories = booksByCategory.length
console.log(totalCategories)

// Contar o número de livros em cada categoria
for(let category of booksByCategory){
    console.log(`O total de livro da categoria ${category.category} é ${category.books.length}.`)
}

// Contar o número de autores
function countAuthors(){
    let authors = [];

    for(let category of booksByCategory){
        for(let books of category.books){
            if (authors.indexOf(books.author) == -1){
                authors.push(books.author) 
            }
        }
    }
    console.log(`O total de autores é: ${authors.length}`)
}
countAuthors();

// Mostrar os livros do autor Augusto Cury
function booksForAugusto(){
    let booksAugusto = [];

    for(let category of booksByCategory){
        for(let books of category.books){
            if (books.author === 'Augusto Cury') {
                booksAugusto.push(books.title);
            }
        }
    }
    console.log(`Os livros do Augusto Cury são: ${booksAugusto.join(", ")}.`)
}
booksForAugusto()

//Transformar a função acima em uma que ia receber o nome do autor 
// e retornar os livros desse autor.
function booksForOutherAuthor(author){
    let book = [];

    for(let category of booksByCategory){
        for(let books of category.books){
            if (books.author === author) {
                book.push(books.title);
            }
        }
    }
    console.log(`Os livros de ${author} são: ${book.join(", ")}.`)
}
booksForOutherAuthor("Stephen R. Covey")