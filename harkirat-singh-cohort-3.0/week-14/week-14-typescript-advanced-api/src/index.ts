// interface User {
//     name: string,
//     age: number
// }

// function sumOfAge(user1: User, user2: User){
//     return user1.age + user2.age;
// }

// const age = sumOfAge({name: 'Taro', age: 20}, {name: 'Jiro', age: 30});
// console.log(age);

// // Pick - API :
// // Partial - API :
// interface User {
//     id: string
//     name: string,
//     age: number,
//     email: string,
//     password: string
// }

// type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

// type UpdatePropsOptional = Partial<UpdateProps>

// function updateUser(updatedProps: UpdatePropsOptional){

// }

// updateUser({
//     name: 'rushikesh'
// });

// // ReadOnly - API :
// type User = {
//     // readonly name: string,
//     name: string,
//     age: number
// }

// const user: Readonly<User> = {
//     name: 'john',
//     age: 20
// }

// // user.age = 52

// Records and Maps - API :
// Record - API :
// // type Users = Record<string, number>
// type Users = Record<string, {age: number, name: string}>;

// const users: Users = {
//     "example": {age: 24, name: 'rushikesh'},
//     "examples": {age: 25, name: 'rushi'}
// }

// Map - API :
// type User = {
//     name: string,
//     age: number,
//     email: string
// }

// const users = new Map<string, User>();
// // const users = new Map();

// users.set("ras@lask", {name: 'Ras', age: 25, email:"ras@lask"});
// users.set("sarah@qd1", {name: 'sarah',age: 25, email:"sarah@1d1"});

// const user = users.get("ras@lask");
// console.log(users);
// users.delete("ras@lask");
// console.log(users);

// Exclude - API :
// type EventType = 'click' | 'scroll' | 'mousemove';
// type ExcludeEvent = Exclude<EventType, 'scroll'>;

// const handleEvent = (event: ExcludeEvent) => {
//     console.log(`Handling event: ${event}`);
// };

// handleEvent('click');


// Zod Interface :
// import { z } from "zod";
// import express from "express";

// const app = express();

// // Define the schema for profile update
// const userProfileSchema = z.object({
//   name: z.string().min(1, { message: "Name cannot be empty" }),
//   email: z.string().email({ message: "Invalid email format" }),
//   age: z
//     .number()
//     .min(18, { message: "You must be at least 18 years old" })
//     .optional(),
// });

// app.put("/user", (req, res) => {
//   const { success } = userProfileSchema.safeParse(req.body);
//   const updateBody = req.body; // how to assign a type to updateBody?

//   if (!success) {
//     res.status(411).json({});
//     return;
//   }
//   // update database here
//   res.json({
//     message: "User updated",
//   });
// });

// app.listen(3000);