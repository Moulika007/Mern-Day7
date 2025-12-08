console.log("--------Dot notation access in object---------");

let person = {
    name: "mouli",
    age: 25,
}

console.log(person.name);


console.log("-------Extract properties from objects---------");

let students = [
    { name: "Mouli", age: 20, grade: "A" },
    { name: "Selva", age: 21, grade: "B" },
    { name: "Asha", age: 19, grade: "A+" },
    { name: "Ravi", age: 22, grade: "C" },
    { name: "Meena", age: 20, grade: "B+" }
];

let name=students.map(n=>n.name);
console.log(name);



console.log("---------filter+map---------");

let student = [
    { name: "Mouli", age: 20, grade: 58 },
    { name: "Selva", age: 21, grade: 85 },
    { name: "Asha", age: 19, grade:90 },
    { name: "Ravi", age: 22, grade: 85 },
    { name: "Meena", age: 20, grade: 80}
];

let update=student.filter(n=>n.grade>80).map(n=>n.name);
console.log(update);



console.log("----------for....in---------");

const person1={
    name:"mouli",
    age: 25,
    city:"kovai"
};
for(let key in person1){
    console.log(key,person1[key]);
}


console.log("--------------for......of-----------");
let fruits=['apple','banana','orange','grape'];
for(let f of fruits){
    console.log(f);
}

console.log("---------------foreach--------------");

let names=['mouli','niranjana','sri'];
names.forEach(n=> {
    console.log("Hello "+n);
});


const arr1=[1,2,3];
const arr2=[4,5,6];
const arr3=[4,5,6];
const combined=[...arr1,...arr2,...arr3];

console.log(combined);

