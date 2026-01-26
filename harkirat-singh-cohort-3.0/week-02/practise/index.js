// // Synchronous Javascript:
// let output = document.getElementById('demo');
// function test2(){
//   output.innerHTML += '<br>test2 started!';
//   output.innerHTML += '<br>test2 finished!';
// }
// function test1(){
//   output.innerHTML += 'test1 started!';
//   test2();
//   output.innerHTML += '<br>test1 finished!';
// }
// test1();

// Asynchronous Javascript:
// let output = document.getElementById('demo');
// output.innerHTML += "Code execution started. <br>";
// setTimeout(function (){
//   output.innerHTML += "setTimeout called. <br>";
// }, 5000);
// output.innerHTML += "Code execuation finished. <br>";

// // Validate a variable name:
// function validateIdentifier(name, callback){
//   if(!isNaN(name[0])){
//     callback(false, "Indentifier cannot start with a number")
//     return;
//   }

//   if(!/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name)){
//     callback(false, "Identifier contains invalid characters");
//     return;
//   }

//   callback(true, "Valid identifier");
// }

// validateIdentifier("username", function(isValid, message){
//   console.log(message);
// })


// Promises :
// let promise = new Promise(callback);
// let promise = new Promise(function(resolve, reject){
// });
// console.log(promise);

// let num = 73;
// const promise1 = new Promise((resolve, reject) => {
//   if(num == 73){
//     resolve('The value of the number is 73.')
//   }
//   else{
//     reject('The value of the number is not 73.')
//   }
// });
// console.log(promise1);
// console.log("" + promise1);

// .then() - Method
// const num = 10;
// const promise1 = new Promise(function (resolve, reject){
//   if(num ==10){
//     resolve('The value of the number is 10');
//   }
//   else{
//     reject('The valuse of the number is not 10.')
//   }
// });
// promise1.then(successFunc, errorFunc);
// function successFunc(message){
//   document.getElementById('output').innerHTML += message;
// }
// function errorFunc(message){
//   document.getElementById('output').innerHTML += message;
// }

// .catch() - Method
var num = 10;
const promise = new Promise((resolve, reject) => {
   reject("Promise is rejected!");
});
promise
.then((message) => {
   output.innerHTML += message;
})
.catch((message) => {
   document.getElementById('output').innerHTML += "Inside the catch() method.<br>";
   document.getElementById('output').innerHTML += message;
});