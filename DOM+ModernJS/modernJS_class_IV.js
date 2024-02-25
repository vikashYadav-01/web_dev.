// synchronous -> code will line by line exicution

function sync() {
  console.log("first");
}

// sync()

// console.log('second')

// asynchronous -> it exicute when call stack will be empty.
// use to handle concrancy in js bcoze JS is single threaded language.
// it exicute even loop

// setTimeout(function(){
//      console.log('first')
// }, 3000)

// function async(){
//      console.log('second')

// }

// async()
// console.log('third')

// -----------------Features of async code-----------------------
// --> clean and concise code
// --> better error handling
// --> essier to debuging
// --> etc.

//----------------------Promise----------------------------
// It is use to exicute parallally in background. and it is async code.

// let meraPromise1 = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             console.log('I am insde Promise1');
//         }, 5000);
//         //resolve(1234567890);
//         reject(new Error('Bhaisahab Error aaaye hai'))
// });

// meraPromise1.then((value) => {
//   console.log(value);
// });
// meraPromise1.catch((error) => {
//   console.log(error);
// });

//  we can write both then and catch by then methde like this (given below)

// meraPromise1.then((value) => { console.log(value)}, (error) => { console.log("Recieved an Error")});

// let meraPromise2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('I am insde Promise2');
//     }, 3000);
//     //resolve(2233);
//     //reject(new Error('Bhaisahab Error aaaye hai'))
// });

// console.log('Pehla');




// -----------------Then and catch in promises------------------------



// let waadaa1 = new Promise(function(resolve, reject) {
//     setTimeout(()=> {
//         console.log('setimeout1 started');
//     },2000);
//     resolve(true);
// })

// let output = waadaa1.then(() => {
//     let waadaa2 = new Promise(function(resolve, reject) {
//         setTimeout(()=> {
//             console.log('setimeout2 started');
//         },3000);
//         resolve("waada 2 resolved");
//     })
//     return waadaa2;
// })
// output.then((value) => console.log(value));





// ---------------------async-------------------------------
// it always return a promise

// async function abcd() {
//     return "kya hua tera";
// }


// console.log(abcd())




// async function utility() {


//     let delhiMausam = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Delhi me bhot garmi hai");
//         },1000);
//     });

//     let hydMausam = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Hyderabad is Cool");
//         },2000);
//     });

//     let dM = await delhiMausam;
//     let hM = await hydMausam;

//     return [dM, hM];
// }

// console.log(utility())

// ------------------------------API-----------------------------

// API  -->  it Application Programming Interface.
