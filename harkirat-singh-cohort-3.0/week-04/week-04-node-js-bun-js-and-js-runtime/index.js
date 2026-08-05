// const chalk = require('chalk'); // Old Syntex

// function sum(a, b){
//   return a + b;
// };

// console.log(sum(4, 3));


const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'a.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});