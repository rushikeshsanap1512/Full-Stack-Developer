let users = [
  {
    name: "rushikesh",
    age: 24
  },
  {
    name: "harkirat",
    age: 30
  },
  {
    name: "rahul",
    age: 15
  }
]

function ageVerification(users){
  return users.filter((user) => user.age > 18);
}

console.log(ageVerification(users));