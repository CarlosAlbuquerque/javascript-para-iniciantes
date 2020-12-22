// for...in
let person = {
    name: 'Carlos',
    age: 19,
    weight: 88
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}