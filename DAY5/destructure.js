console.log("=============ARRAY DESTRUCTURE=============");
const [a,b,c] = [10,20,30];
console.log(a);
console.log(b);
console.log(c);

console.log("==============REST PATTERN==============");

const [first,...rest] = [1,2,3,4,5,6,];
console.log(first);
console.log(rest);

console.log("==============OBJECT DESTRUCTURE==========");

const user={ name: "Moulika", age: 19};
const {name, age}=user;
console.log(name);
console.log(age);

console.log("==============FUNCTION DESTRUCTURE==========");

function greet({name, age}) {
    console.log(`Hello ${name}, you are ${age} years old`);
}
greet ({
    name:"Moulika",
    age:19
});

//DOM = document object model 