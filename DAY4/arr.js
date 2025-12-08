console.log("--add at the end of an array--");

const fruits=['apple','banana'];
const newlength=fruits.push('orange'); //add at end of the element 
console.log(fruits);
console.log(newlength); 

console.log("--add at the Beginning of an array--");

const things=['toy','bus'];
const beglength=things.unshift('table'); //add at end of the element 
console.log(things);
console.log(beglength);


console.log("--remove at the end of an array--");

const things1=['toy','bus','table'];
const beglength1=things1.pop(); //remove  at end of the element 
console.log(things1);
console.log(beglength1);

console.log("--remove at the Beginning of an array--");

const things2=['toy','bus','table'];
const beglength2=things2.shift(); //remove  at beginning of the element 
console.log(things2);
console.log(beglength2);


console.log("--Slicing--");

let names=['mouli','alice','bob','reena','jack','rose'];
let slice=names.slice(1,3);
console.log(slice);

console.log(names);

let lastTwo=names.slice(-2);
console.log(lastTwo);

console.log("--find--")

let n=[3,5,7,8,10];

let even=n.find(nums=>nums%2===0);
console.log(even);

let nam=['raj','abi','mahesh','kumar'];
let result=nam.find(word=>word.length>4);
console.log(result);

console.log("--MAP--");

let num1=[1,2,3,5];
let double=num1.map(n=>n*2);

console.log(num1);
console.log(double);


let prices=[200,350,250,500,560,740];
let updated=prices.map(n=>n+100);
console.log(prices);
console.log(updated);


let persons=['kumar','roshan','jawa','harish','mithun'];
let think=persons.map(p=>"Mr."+p);
console.log(think);


console.log("--Filter--");

let n2=[1,4,5,6,7,12,15,19];
let found=n2.filter(n=>n>10);
console.log(found);

let mark=[30,60,70,80,90,95];
let found2=mark.filter(m=>m>80);
console.log(found2);
