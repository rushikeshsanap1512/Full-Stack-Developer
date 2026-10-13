// number type
// let x: number = 1;
// console.log(x);

// string type
// let y: string = "Hello World";
// console.log(y);

// any type
// let x: any = 1;
// x = true;
// x = "rushikesh";
// x = "random";

// function greet(age: string | number){
//    console.log({age})
// }

// greet(5)

// // function sum(a: number, b: number): number{
//     return a + b;
// }

// let ans = sum(1, 2);

// console.log(ans);


// function delayedCall(fn: () => number): number{
//     setTimeout(fn, 1000);
//     return 1;
// }

// function log(){
//     console.log("Hi there");
//     return 1;
// }

// console.log(delayedCall(log));


// // noImplicitAny
// let greet = (name) => {
//     console.log('Hi there' + name)
// }

// How to define an a object
// function greet(user: {
//     name: string,
//     age: number
// }){
//     console.log('Hello ' + user.name);
// }

// let user = {
//     name: "rushikesh",
//     age: 25
// }

// greet(user);


// Interface
// interface UserType {
//     firstName: string,
//     lastName: string,
//     age: number
// }

// function greet(user: UserType){

// }

// let user = {
//     firstName: 'rushikesh',
//     lastName: 'sanap',
//     age: 25
// }


// Type
type Employee = {
    name: string,
    startDate: Date
}

type Manager = {
    name: string,
    department: string
}

type TeamLead = Employee & Manager

const teamLead: TeamLead = {
    name: 'rushikesh',
    startDate: new Date(),
    department: 'Softwere Developer'
}