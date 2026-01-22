function greet(user2){
  if((user2.gender) == ("male" || "Male" || "MALE")){
    console.log(`Hi Mr. ${user2.name} and Your age is ${user2.age}`);
  }
  else if((user2.gender) == ("female" || "Female" || "FEMALE")){
    console.log(`Hi Mrs. ${user2.name} and Your age is ${user2.age}`);
  }
  else{
    console.log(`Hi ${user2.name} and Your age is ${user2.age}`);
  }
}

let user2 = {
  name: 'rushikesh',
  gender: 'male',
  age: 24 
}

greet(user2);