// // Classes:
// class Rectangle {
//   constructor(height, width, color){
//     this.width = width;
//     this.height = height;
//     this.color = color;
//   }

//   area(){
//     const area = this.width * this.height;
//     return area;
//   }

//   paint(){
//     console.log(`Painting with color ${this.color}`);
//   }
// }

// const rect = new Rectangle(2, 4, "green");
// const area = rect.area();
// console.log(area);
// // const paint = rect.paint();
// // console.log(paint);
// rect.paint();
// console.log(Rectangle);
// console.log(rect);


// // Date:
// const date = new Date();
// console.log(date);
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getFullYear());


// // Map:
// const map = new Map();
// map.set('name', 'Rushikesh');
// map.set('age', 24);
// console.log(map.get("name"));

// const user = new Map();
// user.set('surname', 'sanap');
// console.log(user.get('surname'));


// // Promises:
// function setTimeoutPromisified(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
// function callback() {
// 	console.log("3 seconds have passed");
// }
// setTimeoutPromisified(3000).then(callback)

// Asynchrounous Js:

// // Async await syntex:
// function setTimeoutPromisified(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function solve() {
// 	await setTimeoutPromisified(1000);
// 	console.log("hi");
// 	await setTimeoutPromisified(3000);
// 	console.log("hello");
// 	await setTimeoutPromisified(5000);
// 	console.log("hi there");
// }
// solve();


// Callbacks:
// const fs = require("fs")
// function afterDone(err, data) {
//   if (err) {
//     console.log("Error while reading file");
//   } else {
//     console.log(data)
//   }
// }
// fs.readFile("a.txt", "utf-8", afterDone);


// // Promises:
// const fs = require("fs");
// function readFilePromisified(filePath) {
//   return new Promise(function (resolve, reject) {
//     fs.readFile(filePath, "utf-8", function (err, data) {
//       if (err) {
//         reject("Error while reading file");
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }
// function onDone(data) {
//   console.log(data);
// }
// function onError(err) {
//   console.log("Error: " + err);
// }
// readFilePromisified("a.txt").then(onDone).catch(onError);