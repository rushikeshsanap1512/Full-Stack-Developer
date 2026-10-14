// interface Address {
//   city: string;
//   country: string;
//   pincode: number;
//   houseNumber?: number
// }

// interface User {
//     name: string,
//     age: number,
//     address?: Address
// }

// interface Office {
//     address: Address
// }

// let user2: User = {
//     name: 'rahul',
//     age: 42
// }

// let user: User = {
//     name: 'rushikesh',
//     age: 25,
//     address: {
//         city: 'pune',
//         country:'india',
//         pincode: 411048
//     }
// }

// function isLegal(user: User): boolean {
//     if(user.age >= 18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const ans = isLegal(user);

// if(ans){
//     console.log("It's legal");
// }
// else{
//     console.log("It's illegal");
// }

// interface People {
//     name: string,
//     age: number,
//     greet: (gender: string) => string
// }

// let person: People = {
//     name: 'rushikesh',
//     age: 25,
//     greet: (gender) => {
//         return 'Hi ' + gender;
//     }
// }

// let greetings = person.greet('male');
// console.log(greetings);

// interface User {
//     name: string,
//     age: number,
//     isLegal(): boolean
// }

// class Manager implements User {
//     name: string;
//     age: number;
//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     };
//     isLegal(){
//         return this.age > 18
//     }
// }

// class God extends Manager {
//     constructor(name: string, age: number){
//         super(name, age);
//     }
// }

// let m = new Manager('rushikesh', 25);
// console.log(`m.name: ${m.name} , m.age: ${m.age}, m.isLegal ${m.isLegal()}`);

// // Abstract Class:
// abstract class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }

//   abstract greet(): string;
//   hello() {
//     console.log("hello there");
//   }
// }

// class Employee extends User {
//   // name: string;
//   // constructor(name: string){
//   //     super(name)
//   //     this.name = name;
//   // }
//   greet(): string {
//     return "hi " + this.name;
//   }
// }

// const employee = new Employee("rushikesh");
// console.log(employee.greet());
// employee.hello();


// Types:
// interface User2 {
//     name: string
// }

// type User = {
//     name: string,
//     age: number
// }

// Intersection:
// type Employee = {
//     name: string;
//     startDate: string;
// }

// type Manager = {
//     name: string,
//     department: string
// }

// type TeamLead = Employee & Manager;

// let e: Employee = {
//     name: 'harkirat',
//     startDate: '01-02-2004'
// } 

// let m: Manager = {
//     name: 'rushikesh',
//     department: 'softwere'
// }

// let t: TeamLead = {
//     name: 'rushi',
//     startDate: '01-03-2000',
//     department: 'management'
// }

// Union:
// type GoodUser = {
//     name: string,
//     gift: string
// }

// type BasUser = {
//     name: string,
//     ip: string
// }

// type User = GoodUser | BasUser;

// const user: User = {
//     name: 'rushikesh',
//     gift: 'laptop',
//     ip: '127.0.0.1'
// }


// interface Admin {
//     name: string,
//     permission: string
// }

// interface User {
//     name: string,
//     age: number
// }

// type UserOrAdmin = User | Admin;

// function greet(user: UserOrAdmin) {

// }

// Arrays in Typescript:
// interface User {
//     firstName: string,
//     lastName: string,
//     age: number
// }

// function filterUsers(users: User[]){
//     let ans = [];
//     for(let i=0; i<users.length; i++){
//         if(users[i].age > 18){
//             ans.push(users[i])
//         }
//     }
//     return ans;
// }

// const filteredUsers = filterUsers([
//     {
//     firstName: 'rushikesh',
//     lastName: 'sanap',
//     age: 25
//     }
// ]);