const fs = require("fs");

// console.log("Hi There! Start");
// const contents = fs.readFileSync("examplee.txt", "utf-8");
// console.log(contents);
// console.log("Hi there! Finish");

// console.log("Hi There! Start");
// const contents2 = fs.readFile("examplee.txt", "utf-8", print)
// function print(err, data){
//   if(err){
//     console.log("There is something error.");
//   }
//   else{
//     console.log(data);
//   }
// }
// console.log("Hi there! Finish");


fs.readFile('example.txt', 'utf-8', (err, data) => {
  if(err){
    if(err.code === "ENOENT"){
      console.log("Error: File not found!!");
    }
    else{
      console.log("Error reading file:", err);
    }
    return;
  }
  else{
    console.log("File Contents: ", data);
  }
})

// Expensive Operation: A simple, large computational task
// 1e8 ===> 10^8 ===> 100000000
const expensiveOperation = () => {
  let sum = 0;
  for(let i=0; i < 1e8; i++){
    sum += i;
  }
  console.log("Expensive operation done");
};

expensiveOperation();