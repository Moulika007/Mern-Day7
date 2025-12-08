/*
console.log("start");   //stores in the call stage which executes in a given time 
setTimeout(()=> {
    console.log("This runs after a second "); // it takes time so stored in the web API's
},2000)
console.log("end"); // this runs   once the web API finished it goes to the call back queue 

console.log("----------------Another example---------------")

setTimeout(()=> {
    console.log("MAde tea");

    setTimeout(()=> {
        console.log("Toasted bread");

        setTimeout(()=> {
            console.log("Fried egg");
        },5000);
    },5000);
},5000);
*/

console.log("------------------promise chains---------------------");

let iceCreamPromise = new Promise((resolve, reject)=> {
    let icecreamReady=false;
    if(icecreamReady){
        resolve("😍 Ice cream is ready!");
    }
    else {
        reject("😢 No ice cream today");
    }
});
iceCreamPromise
    .then((message)=> {
        console.log("Yay! "+message);
    })
    .catch((error) => {      //problem hell => promise => asyn/await 

        console.log("Oops! "+error);
    });








