// // parse it to a number
// function sum(a, b){
//   // return a + b;
//   return parseInt(a) + parseInt(b);
// }
// let ans = sum("30", 20);
// console.log(ans);


// function sum(n){
//   let count = 0;
//   for(let i=1; i<=n; i++){
//     count = count + i;
//   }
//   return count;
// }
// console.log(sum(10));
// console.log(sum(50));
// console.log(sum(100));


// // Synchronous Code:
// function sum(n){
//   let ans = 0;
//   for(let i=1; i<=n; i++){
//     ans = ans+i;
//   }
//   return ans;
// }
// const ans1 = sum(10);
// console.log(ans1);
// const ans2 = sum(100);
// console.log(ans2);
// const ans3 = sum(1000);
// console.log(ans3);

// // fs.readFileSync :
// const fs = require('fs');
// const contents = fs.readFileSync('a.txt', 'utf-8');
// // const contents = fs.readFile('a.txt', 'utf-8');
// console.log(contents);
// const contents2 = fs.readFileSync('b.txt', 'utf-8');
// console.log(contents2);

// fs.readFile :
// const fs = require('fs');
// // 1) :
// fs.readFile('a.txt', 'utf-8', function(err, contents){
//   console.log(contents);
// })
// fs.readFile('b.txt', 'utf-8', function(err, contents){
//   console.log(contents);
// })
// fs.readFile('c.txt', 'utf-8', function(err, contents){
//   console.log(contents);
// })
// // 2) :
// function print(err, data){
//   console.log("The error is: " + err);
//   console.log(data);
// }
// fs.readFile('a.txt', 'utf-8', print)
// fs.readFile('b.txt', 'utf-8', print)
// console.log("Done!");

// function timeout(){
//   console.log("Click the button!");
// }
// console.log("Hi!");
// setTimeout(timeout, 5000);
// console.log("Welcome to the Loupe.");
// let c = 0;
// for(let i=0; i<10000000000; i++){
//   c = c+1;
// }
// console.log("Expensive operation done!");


// setTimeout is now synchronous in this example:
function setTimeoutSync(timeout){
  let startTime = new Date();
  while(1){
    let currentTime = new Date();
    if(currentTime.getTime() - startTime.getTime() > timeout){
      break;
    }
  }
}

setTimeoutSync(1000);
console.log("hi there");