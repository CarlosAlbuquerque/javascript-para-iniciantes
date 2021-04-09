// 1. For 
for(i = 0; i <= 5; i++){
    if (i % 2 !== 0) {
        console.log(`For ${i} Impar`)
    }
}
// 2. While
let index = 5;
while (index >= 1) {
    if (index % 2 !== 0) {
        console.log(`While ${index} Impar`)
    }
    index--;
}
// 3. Do .. while
i = 0;
do {
    console.log(`Digitando!s ${i}`)
    i++
} while (i < 10);


// 4. For .. In
// Object
const people = {
    name: 'John',
    age: 30
}

for(let key in people){
    console.log(`Key.${key} = ${people[key]}`)
}

//Arrays recemondavel usar For...of em vez de For...In para Array
const colors = ['Red', 'Blue', 'Green']
for (let index in colors){
    console.log(index, colors[index])
}
// 5. For .. of

for(let color of colors){
    console.log(color);
}