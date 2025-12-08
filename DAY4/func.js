function greet(){
    console.log("Hello, this is a function declaration");
}
greet();  //Output: Hellow,this is a function declaration 


//can be called before declaration due to hoisting 
sayHello(); //Works!
function sayHello(){
    console.log("Hello, from Hosted funcation!");
}

//function expression a function is assigned to an variable is called the function variable 
const greetExpr=function() {
    console.log("Hello, this is a function expression");
};
greetExpr(); //call after declaration 

console.log("--name function--");

const greet1=function greetings() {
    console.log("Hello");
};
greet1();


console.log("--callback function--");

function process(callback){
    console.log("Processing...");
    callback();//calling the callback 
}
function done() {
    console.log("Task Completed");
}
process(done); //Passing function as argument

console.log("--HigherOrder Function--");

function HigherOrder(func){
    console.log("Processing...");
    func();//calling the callback 
}
function sayHi() {
    console.log("Task Completed");
}
HigherOrder(sayHi)


console.log("--ArrowFunction--");

//Normal function expression
const greet2=function(name) {
    return "Hello "+name;
};

//Arrow Function 
const greetArrow=(name) => {
    return "Hello "+name;
};
console.log(greet2("Moulika"));
console.log(greetArrow("Moulika"));


const add=(a,b) => a+b;
console.log(add(5,3));

const square=x => x*x;
console.log(square(4));
