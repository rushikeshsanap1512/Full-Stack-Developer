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