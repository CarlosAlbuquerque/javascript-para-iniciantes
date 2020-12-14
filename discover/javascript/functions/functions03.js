/*
Function constructor
    * expressão new
    * criar novo objeto
    * this keyword
*/

function Person(name, age){
    this.name = name,
    this.age = age,
    this.walk = () => {
        return this.name + " está andando."
    }
}

const Carlos = new Person("Carlos", 19)

console.log(Carlos)
console.log(Carlos.walk())

let date = new Date("2020-12-14")
console.log(date)