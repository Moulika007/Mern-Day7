console.log(x)
var x=10;   //hosted 

console.log("--VAR funciton scope--")
function example(){
    if(1){
        var count =10;
    }
    console.log(count);
}
example();


console.log("--LET/CONST block  scope--")
function a(){
    if(1){
        var co =25; 
        console.log(co);         
    }
    
}
a();


