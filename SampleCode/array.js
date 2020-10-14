const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));

const people = [
    { name:'Ray', age:40 },
    { name:'Bill', age:55 }
    ];

people.forEach(person => console.log(person.name + " " + person.age));

people.forEach(queryUser);

function queryUser(p, index, array){
    console.log('name=' + p.name) ;
    console.log('age=' + p.age) ;
}
