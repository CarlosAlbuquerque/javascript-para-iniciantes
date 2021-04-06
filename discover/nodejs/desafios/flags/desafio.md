## Crie 2 arquivos JS

    O primeiro, irá exportar uma funcção chamada getFlasg()
que receberá um argumento do tipo String.
    Essa função deverá buscar dentro do array "process.argv" a flag desejada, que é
a String e retornar o valor da flags.

O segundo irá importar a função e passar a flag desejada.

Iremos rodar no terminal o segundo arquivos passando as flags --name e --greeting
para que seja impresso no terminal a saudaçãp e nome da pessoa.

Para rodar --> node impGetFlag --name "Carlos Albuquerque" --greeting "Olá, tudo bem?"