console.log("--mplicit Conversion--");
console.log("1"+3);
console.log("10"-2);
console.log("2"*2);
console.log("15"/3);
console.log("true"-1);
console.log("--Explicit Conversion--");
console.log(Number("1402"));
console.log(Number("abc"));
console.log(String(123));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("hi"));
console.log("--Boolean Conversion--");
if(0){
    console.log("False");
}
else {
    console.log("True");

}
if("hello"){
    console.log("True")
}
else {
    console.log("False");
}
console.log("--Keywords--");

let age=25; 
age=35; //allowed (reassign) , not allowed redeclare 
console.log(age);

var age1=25;
var age1=24;  // allowed redeclare 
age1=26;//allowed (reassign) 
console.log(age1);

const a=10;
console.log(a);

