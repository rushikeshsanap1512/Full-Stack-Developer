let users = [
  { name: "Rushikesh", 
    age: 24, 
    gender: "male" },
  { name: "Harkirat", 
    age: 30, 
    gender: "male" },
  { name: "Aneeta", 
    age: 17, 
    gender: "female" },
  { name: "arya", 
    age: 23, 
    gender: "female" }
];

function ageGenderVerification(users){
  return users.filter((user) => user.age > 18 && user.gender === 'male')
}

console.log(ageGenderVerification(users));
